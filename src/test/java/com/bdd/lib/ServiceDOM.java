package com.bdd.lib;

import com.bdd.builder.ApiConfig;
import com.bdd.builder.ApiConfigBuilder;
import com.bdd.generic.ServiceDomImpl;
import com.bdd.util.UtilApi;
import cucumber.api.DataTable;
import io.restassured.http.Header;
import io.restassured.http.Headers;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import net.serenitybdd.core.environment.EnvironmentSpecificConfiguration;
import net.serenitybdd.rest.SerenityRest;
import net.thucydides.core.steps.ScenarioSteps;
import net.thucydides.core.util.EnvironmentVariables;
import org.apache.commons.io.FileUtils;
import org.json.JSONObject;

import java.io.File;
import java.io.IOException;
import java.util.*;

public class ServiceDOM extends ScenarioSteps implements ServiceDomImpl {

    private transient EnvironmentVariables environmentVariables;
    private transient RequestSpecification reqConfig = null;

    public Headers configurerHeaders(DataTable dataTable) {
        List<Header> headerList = new LinkedList();
        List<Map<String, String>> listCabecera = dataTable.asMaps(String.class, String.class);

        Iterator var4 = listCabecera.iterator();

        while (var4.hasNext()) {
            Map<String, String> stringStringMap = (Map)var4.next();
            Header header = new Header((String)stringStringMap.get("headers") , (String)stringStringMap.get("valor"));
            headerList.add(header);
        }

        Headers headers = new Headers(headerList);
        /*En lugar de mandar system out, crear LOGGERS */
        System.out.println(headers);

        return headers;
    }

    public String configurerBodyRequest(String pathServiceRequest, DataTable dataTableRequestValues) {
        File file = new File(pathServiceRequest);
        String bodyRequest = "";

        try {
            String content = FileUtils.readFileToString(file,"utf-8");
            JSONObject jsonObject = new JSONObject(content);
            bodyRequest = jsonObject.toString();

            List<Map<String, String>> listBodyRequest = dataTableRequestValues.asMaps(String.class, String.class);
            String newJson;

            for (Iterator var9 = listBodyRequest.iterator(); var9.hasNext(); bodyRequest = newJson) {
                Map<String, String> stringStringMap = (Map)var9.next();
                newJson = UtilApi.updateValueOfNodeInJson(bodyRequest, (String)stringStringMap.get("key"), ((String)stringStringMap.get("valor")).replace("%WHITE%", " ").replace("%BAR%", "|"));
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("bodyRequest Value: " + bodyRequest);
        return bodyRequest;
    }


    public Response ejecutarApiBuilder(ApiConfig apiConfig) {
        SerenityRest.useRelaxedHTTPSValidation();
        Response response = null;
        Map<String, Object> pathParams = Collections.emptyMap();
        Map<String, Object> queryParams = Collections.emptyMap();
        Map<String, Object> formUrlEncoded = Collections.emptyMap();
        String body = "";
        String tipoMetodo = apiConfig.getMethod().toUpperCase();
        String tipoApi = apiConfig.getApiType();
        String apiURL = apiConfig.getApiURL();
        Headers headears = apiConfig.getHeaders();

        if (!tipoApi.equals("junit")) {
            apiURL = EnvironmentSpecificConfiguration.from(this.environmentVariables).getProperty("url.base.api." + tipoApi) + apiURL;
        }

        if (apiConfig.getPathVariables() != null) {
            pathParams = apiConfig.getPathVariables();
        }

        if (apiConfig.getParams() != null) {
            queryParams = apiConfig.getParams();
        }

        if (apiConfig.getFormUrlEncoded() != null) {
            formUrlEncoded = apiConfig.getFormUrlEncoded();
        }
        if (apiConfig.getBody() != null) {
            body = apiConfig.getBody();
        }

        try {
            String var11 = tipoMetodo.toUpperCase(Locale.getDefault());
            byte var12 = -1;

            switch (var11.hashCode()) {
                case 70454:
                    if (var11.equals("GET")) {
                        var12= 0;
                    }
                case 2461856:
                    if (var11.equals("POST")) {
                        System.out.println("ingresé a post");
                        var12 = 1;
                    }
            }

            switch (var12) {
                case 0:
                    this.reqConfig = SerenityRest.given().headers(headears).pathParams(pathParams).queryParams(queryParams);
                    response = (Response) ((RequestSpecification) this.reqConfig.when().log().all()).get(apiURL, new Object[0]);
                    break;
                case 1:
                    //setear los headers en nuestra configuración de requisito llamada reqconfig
                    this.reqConfig = SerenityRest.given().headers(headears).pathParams(pathParams).queryParams(queryParams);

                    if (!formUrlEncoded.isEmpty()) {
                        this.reqConfig.formParams(formUrlEncoded);
                    } else  {
                        /* Si está vacío se mandará pero sin este formUrlEncoded */
                        this.reqConfig.body(body);
                    }

                    this.reqConfig.pathParams(pathParams);
                    this.reqConfig.queryParams(queryParams);
                    response = (Response) ((RequestSpecification) this.reqConfig.when().log().all()).post(apiURL, new Object[0]);
                    break;
                default:
                    System.out.println("ESTE MÉTODO NO ES SOPORTADO.");
            }
        } catch (Exception e) {
            System.out.println("NO SE ENCONTRÓ");
        }

        // assertion que sirve para poder validar si realmente estamos o no obteniendo alguna respuesta.
        assert response !=null;
        response.prettyPeek();
        return response;
    }


    protected ApiConfigBuilder apiBuilder() {
        return new ApiConfigBuilder();
    }
}

package com.bdd.api.step;

import cucumber.api.DataTable;
import com.bdd.lib.ServiceDOM;
import com.bdd.util.UtilApi;
import io.restassured.http.Headers;
import io.restassured.response.Response;

import javax.xml.crypto.Data;

import static com.bdd.Constants.DIR_REQUEST_JSON;

public class APIStep extends ServiceDOM {

    private Headers header;
    private String bodyRequest;
    private Response response;

    public void configurarHeaders(DataTable dataTable) {
        header = configurerHeaders(dataTable);
    }

    public void configuroElBodyDelServicio(String servicio, DataTable dataTable) {
        String pathService = DIR_REQUEST_JSON + servicio + ".json";
        bodyRequest = configurerBodyRequest(pathService, dataTable);
    }

    public void ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable dataTable) {
        String url = UtilApi.getValueFromDataTable(dataTable, "url");
        String path = UtilApi.getValueFromDataTable(dataTable, "path");
        String method = UtilApi.getValueFromDataTable(dataTable, "method");

        if (header == null ){
            header=new Headers();
        }else{
            if(bodyRequest==null){
                bodyRequest="{}";
            }
        }
        response = ejecutarApiBuilder(apiBuilder()
                .withApiType(url)
                .withApiURL(path)
                .withMethod(method)
                .withHeaders(header)
                .withBody(bodyRequest)
                .build()
        );
    }


    public boolean validarCodigoDeRespuesta(int codigo) {
        System.out.println("Booleano : " + response.getStatusCode());
        return response.getStatusCode() == codigo;
    }


}

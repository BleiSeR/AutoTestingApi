package com.bdd.generic;

import com.bdd.builder.ApiConfig;
import cucumber.api.DataTable;
import io.restassured.http.Headers;
import io.restassured.response.Response;

public interface ServiceDomImpl {
    Headers configurerHeaders(DataTable var1);
    String configurerBodyRequest(String var1, DataTable var2);
    Response ejecutarApiBuilder(ApiConfig var1);
}

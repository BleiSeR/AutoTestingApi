package com.bdd.util;

import com.jayway.jsonpath.Configuration;
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.Predicate;
import com.jayway.jsonpath.spi.json.JsonOrgJsonProvider;
import com.jayway.jsonpath.spi.mapper.JsonOrgMappingProvider;
import cucumber.api.DataTable;

import java.util.List;
import java.util.Map;

public class UtilApi {

    public static String updateValueOfNodeInJson(String jsonString, String keyPath, String values) {
        Configuration configuration = Configuration.builder().jsonProvider(new JsonOrgJsonProvider()).mappingProvider(new JsonOrgMappingProvider()).build();
        return JsonPath.using(configuration).parse(jsonString).set("$." + keyPath, values, new Predicate[0]).jsonString();
    }

    public static String getValueFromDataTable(DataTable dataTable, String title) {
        List<Map<String, String>> list = dataTable.asMaps(String.class, String.class);
        return (String)((Map) list.get(0)).get(title);
    }
}

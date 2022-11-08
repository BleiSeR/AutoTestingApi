package com.bdd.api.stepdefinition;

import com.bdd.api.step.APIStep;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;

import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;
import cucumber.api.java.es.Y;

import net.thucydides.core.annotations.Steps;

import org.junit.Assert;

public class APIStepDefinition {

    private Scenario scenario;

    @Before
    public void before(Scenario scenario){
        this.scenario=scenario;
    }

    @Steps
    private APIStep apiStep;

    @Dado("^que configuro los headers$")
    public void configurarHeaders(DataTable dataTable){
        apiStep.configurarHeaders(dataTable);
    }


    @Y("^configuro el body del servicio: \"([^\"]*)\"$")
    public void configuroElBodyDelServicio(String servicio, DataTable dataTable) throws Throwable {
        apiStep.configuroElBodyDelServicio(servicio, dataTable);
    }

    @Cuando("^ejecuto servicio con la confiuracion del body y headers$")
    public void ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable dataTable) {
        apiStep.ejecutoServicioConLaConfiuracionDelBodyYHeaders(dataTable);
    }


    @Entonces("^valido que el codigo de respuesta sea: \"([^\"]*)\"$")
    public void validoQueElCodigoDeRespuestaSea(int codigo) throws Throwable {
        Assert.assertTrue("El codigo de respuesta no es el esperado",
                apiStep.validarCodigoDeRespuesta(codigo));
    }

    @Dado("^que ejecuto el servicio con o sin header y body$")
    public void queEjecutoElServicioSinHeaderNiBody(DataTable dataTable) {
        apiStep.ejecutoServicioConLaConfiuracionDelBodyYHeaders(dataTable);
    }


}

#language: es
@EjemploDeAutomatizacionAPI
Característica: Automatizacion de API
  Como un alumno de la escuela NTT Data de Testing
  Quiero redactar y automatizar APIs
  Para obtener valores y respuestas de la solicitudes enviadas

  ### --- 1 Crear Token --- ###
  @CrearToken
  Escenario: Generar un Token dinámico correctamente
    Dado que configuro los headers
      | headers      | valor            |
      | Content-Type | application/json |
    Y configuro el body del servicio: "crearToken"
      | key      | valor       |
      | username | admin       |
      | password | password123 |
    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path  | method |
      | ux  | /auth | post   |
    Entonces valido que el codigo de respuesta sea: "200"

  @CrearToken_CasoNegativo_1
  Escenario: Generar un Token dinámico incorrectamente 404
    Dado que configuro los headers
      | headers      | valor            |
      | Content-Type | application/json |
    Y configuro el body del servicio: "crearToken"
      | key      | valor       |
      | username | admin       |
      | password | password123 |
    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path  | method |
      | ux  | /none | post   |
    Entonces valido que el codigo de respuesta sea: "404"

  @CrearToken_CasoNegativo_2
  Escenario: Generar un Token dinámico incorrectamente 400
    Dado que configuro los headers
      | headers      | valor           |
      | Content-Type | application/xml |
    Y configuro el body del servicio: "crearToken"
      | key      | valor       |
      | username | admin       |
      | password | password123 |
    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path  | method |
      | ux  | /auth | post   |
    Entonces valido que el codigo de respuesta sea: "400"

  @CrearToken_CasoNegativo_3
  Escenario: Generar un Token dinámico incorrectamente - Bad credentials
    Dado que configuro los headers
      | headers      | valor            |
      | Content-Type | application/json |
    Y configuro el body del servicio: "crearToken"
      | key      | valor   |
      | username | usuario |
      | password | 123456  |
    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path  | method |
      | ux  | /auth | post   |
    Entonces valido que el codigo de respuesta sea: "200"

  ### --- 2 Obtener ID libro --- ###
  @ObtenerIdLibrosPositivo
  Escenario: Obtener Id de libros Correctamente
    Dado que ejecuto el servicio con o sin header y body
      | url | path     | method |
      | ux  | /booking | get    |
    Entonces valido que el codigo de respuesta sea: "200"

  @ObtenerIDLibros_CasoNegativo
  Escenario: Obtener ID's de Libros incorrectamente
    Dado que ejecuto el servicio con o sin header y body
      | url | path | method |
      | ux  | /none | get |
    Entonces valido que el codigo de respuesta sea: "404"

  ### --- 3 Obtener un libro por ID --- ###



  @ObtenerLibroPorId_CasoPositivo
  Esquema del escenario: Obtener un libro por un Id en especifico (Caso positivo) para el: <id>
    Dado que ejecuto el servicio con o sin header y body
      | url | path          | method |
      | ux  | /booking/<id> | get    |
    Entonces valido que el codigo de respuesta sea: "200"
    Ejemplos:
      | id |
      | 7  |
      | 4  |
      | 8  |

  @ObtenerLibroPorId_CasoNegativo
  Esquema del escenario: Obtener un libro por un Id en especifico (Caso negativo) para el: <id>
    Dado que ejecuto el servicio con o sin header y body
      | url | path          | method |
      | ux  | /booking/<id> | get    |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | id   | codigo |
      | 1998 | 404    |
      | 1999 | 404    |
      | 2000 | 404    |

    ### --- 4 Crear un libro por Id --- ###

  @CrearLibro_CasoPositivo
  Esquema del escenario: Crear Libro mediante api "<firstname>"
    Dado que configuro los headers
      | headers      | valor            |
      | Content-Type | application/json |
      | Accept       | application/json |
    Y configuro el body del servicio: "crearLibro"
      | key                  | valor                   |
      | firstname            | <firstname>             |
      | lastname             | <lastname>              |
      | totalprice           | <totalprice>            |
      | depositpaid          | <depositpaid>           |
      | bookingdates.checkin | <bookingdates.checkin>  |
      | bookingdates.checkin | <bookingdates.checkout> |
      | additionalneeds      | <additionalneeds>       |
    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path     | method |
      | ux  | /booking | post   |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | firstname | lastname   | totalprice | depositpaid | bookingdates.checkin | bookingdates.checkout | additionalneeds | codigo |
      | EJEMPLO01 | ABACCHIO   | 200        | true        | 2021-01-02           | 2022-01-02            | desayuno        | 200    |
      | EJEMPLO02 | BUCCIARATI | 200        | false       | 2022-02-02           | 2023-01-02            | almuerzo        | 200    |

  @CrearLibro_CasoNegativo
  Esquema del escenario: Fallar en crear Libro mediante api <firstname>
    Dado que configuro los headers
      | headers | valor |
      | Content-Type | application/json |
      | Accept       | application/json |
    Y configuro el body del servicio: "crearLibroFail"
      | key | valor |
      | firstname             | <firstname>             |

      | totalprice            | <totalprice>            |
      | depositpaid           | <depositpaid>           |
      | bookingdates.checkin  | <bookingdates.checkin>  |
      | bookingdates.checkout | <bookingdates.checkout> |
      | additionalneeds       | <additionalneeds>       |
    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path  | method |
      | ux  | /booking  | post  |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | firstname | totalprice | depositpaid | bookingdates.checkin | bookingdates.checkout | additionalneeds | codigo |
      | EJEMPLO1  | 200        | true        | 2020-01-01           | 2021-11-14            | Desayuno        | 500    |
      | EJEMPLO2  | 200        | true        | 2020-01-01           | 2021-11-14            | Almuerzo        | 500    |















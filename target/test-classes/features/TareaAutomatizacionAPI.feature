#language: es
@TareaDeAutomatizacionAPI
Característica: Automatizacion de API TAREA
  Como un alumno de la escuela NTT Data de Testing
  Quiero redactar y automatizar APIs
  Para obtener valores y respuestas de la solicitudes enviadas
  Esto me ayudará a tener posibilidades de ser parte de NTT Data

  ### --- GET DELAYED RESPONSE - POSITIVO --- ###
  @RetrasarRespuesta_Positivo
  Esquema del escenario: Retrasar respuesta del sistema en <id> segundos
    Dado que ejecuto el servicio con o sin header y body
      | url | path                  | method |
      | nux | /api/users?delay=<id> | get    |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | id | codigo |
      | 5  | 200    |
      | 10 | 200    |
      | 15 | 200    |
      | 20 | 200    |

  ### --- GET DELAYED RESPONSE - NEGATIVO --- ### - El sistema no hace ningun retraso en la respuesta del sistema - 200
  @RetrasarRespuesta_Negativo
  Esquema del escenario: Retrasar        respuesta del sistema en <id> segundos - No hace retraso 200
    Dado que ejecuto el servicio con o sin header y body
      | url | path                  | method |
      | nux | /api/users?delay=<id> | get    |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | id  | codigo |
      | *   | 200    |
      | -1  | 200    |
      | asd | 200    |
      | @   | 200    |

  ### --- GET SINGLE USER - POSITIVO --- ###
  @UsuarioUnico_Positivo
  Esquema del escenario: Obtener usuario único por un id en específico con: <id>
    Dado que ejecuto el servicio con o sin header y body
      | url | path            | method |
      | nux | /api/users/<id> | get    |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | id | codigo |
      | 1  | 200    |
      | 2  | 200    |
      | 3  | 200    |
      | 4  | 200    |

  ### --- GET SINGLE USER - NEGATIVO --- ### - Respuesta de ERROR 404
  @UsuarioUnico_Negativo
  Esquema del escenario: Obtener usuario único por un id en específico con: <id> - ERROR 404
    Dado que ejecuto el servicio con o sin header y body
      | url | path            | method |
      | nux | /api/users/<id> | get    |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | id | codigo |
      | 20 | 404    |
      | -1 | 404    |
      | 22 | 404    |
      | a  | 404    |

  ### --- GET SINGLE <RESOURCE> - POSITIVO --- ###
  @UnicoRecurso_Positivo
  Esquema del escenario: Obtener recurso único por un id para el <id>
    Dado que ejecuto el servicio con o sin header y body
      | url | path              | method |
      | nux | /api/unknown/<id> | get    |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | id | codigo |
      | 5  | 200    |
      | 6  | 200    |
      | 7  | 200    |
      | 8  | 200    |

  ### --- GET SINGLE <RESOURCE> - NEGATIVO --- ### - Respuesta de ERROR 404
  @UnicoRecurso_Negativo
  Esquema del escenario: Obtener recurso único por un id para el <id> - ERROR 404
    Dado que ejecuto el servicio con o sin header y body
      | url | path              | method |
      | nux | /api/unknown/<id> | get    |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | id  | codigo |
      | 21* | 404    |
      | -2  | 404    |
      | 40  | 404    |
      | a*  | 404    |

  ### --- POST CREATE - POSITIVO --- ###

  @CrearElemento_Positivo
  Esquema del escenario: Crear Elemento mediante api
    Dado que configuro los headers
      | headers      | valor            |
      | Content-Type | application/json |
      | Accept       | */*              |
    Y configuro el body del servicio: "crearElemento"
      | key  | valor  |
      | name | <name> |
      | job  | <job>  |
    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path       | method |
      | nux | /api/users | post   |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | name   | job    | codigo |
      | Paolo  | Tester | 201    |
      | Mauro  | Leader | 201    |
      | Bruno  | Capo   | 201    |
      | Giorno | Star   | 201    |

    ### --- POST CREATE - NEGATIVO --- ### - Crea el elemento pero con una falla en el reporte - 201
  @CrearElemento_Negativo
  Esquema del escenario: Crear Elemento mediante api - Key "<name>" sin contenido en el resultado 201
    Dado que configuro los headers
      | headers      | valor            |
      | Content-Type | application/json |
      | Accept       | */*              |
    Y configuro el body del servicio: "crearElementoFail"
      | key | valor |

      | job | <job> |
    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path       | method |
      | nux | /api/users | post   |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | job    | codigo |
      | Tester | 201    |
      | Leader | 201    |
      | Capo   | 201    |
      | Star   | 201    |

  #tanto register como login, utilizan el mismo .json
  ### --- POST REGISTER - POSITIVO --- ###
  @CrearRegistro_Positivo
  Esquema del escenario: Crear registro mediante api
    Dado que configuro los headers
      | headers      | valor            |
      | Content-Type | application/json |
      | Accept       | */*              |
    Y configuro el body del servicio: "registerAndLogin"
      | key      | valor      |
      | email    | <email>    |
      | password | <password> |
    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path          | method |
      | nux | /api/register | post   |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | email                  | password | codigo |
      | eve.holt@reqres.in     | 123456   | 200    |
      | george.bluth@reqres.in | 654321   | 200    |
      | janet.weaver@reqres.in | 987654   | 200    |
      | emma.wong@reqres.in    | 456789   | 200    |

  ### --- POST REGISTER - NEGATIVO --- ### -- Respuesta de ERROR 400
  @CrearRegistro_Negativo
  Esquema del escenario: Crear registro mediante api - Password no encontrado 400
    Dado que configuro los headers
      | headers      | valor            |
      | Content-Type | application/json |
      | Accept       | */*              |
    Y configuro el body del servicio: "registerAndLoginFail"
      | key   | valor   |
      | email | <email> |

    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path          | method |
      | nux | /api/register | post   |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | email                  | codigo |
      | eve.holt@reqres.in     | 400    |
      | george.bluth@reqres.in | 400    |
      | janet.weaver@reqres.in | 400    |
      | emma.wong@reqres.in    | 400    |

  ### --- POST LOGIN - POSITIVO --- ###
  @CrearLogin_Positivo
  Esquema del escenario: Crear login mediante api
    Dado que configuro los headers
      | headers      | valor            |
      | Content-Type | application/json |
      | Accept       | */*              |
    Y configuro el body del servicio: "registerAndLogin"
      | key      | valor      |
      | email    | <email>    |
      | password | <password> |
    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path       | method |
      | nux | /api/login | post   |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | email                  | password | codigo |
      | eve.holt@reqres.in     | 123456   | 200    |
      | george.bluth@reqres.in | 654321   | 200    |
      | janet.weaver@reqres.in | 987654   | 200    |
      | emma.wong@reqres.in    | 456789   | 200    |

  ### --- POST LOGIN - NEGATIVO --- ### - Respuesta de ERROR 400
  @CrearLogin_Negativo
  Esquema del escenario: Crear login mediante api - Password no encontrado 400
    Dado que configuro los headers
      | headers      | valor            |
      | Content-Type | application/json |
      | Accept       | */*              |
    Y configuro el body del servicio: "registerAndLoginFail"
      | key   | valor   |
      | email | <email> |

    Cuando ejecuto servicio con la confiuracion del body y headers
      | url | path       | method |
      | nux | /api/login | post   |
    Entonces valido que el codigo de respuesta sea: "<codigo>"
    Ejemplos:
      | email                  | codigo |
      | eve.holt@reqres.in     | 400    |
      | george.bluth@reqres.in | 400    |
      | janet.weaver@reqres.in | 400    |
      | emma.wong@reqres.in    | 400    |


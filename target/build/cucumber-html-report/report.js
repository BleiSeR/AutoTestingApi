$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TareaAutomatizacionAPI.feature");
formatter.feature({
  "name": "Automatizacion de API TAREA",
  "description": "  Como un alumno de la escuela NTT Data de Testing\n  Quiero redactar y automatizar APIs\n  Para obtener valores y respuestas de la solicitudes enviadas\n  Esto me ayudará a tener posibilidades de ser parte de NTT Data",
  "keyword": "Característica",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Retrasar respuesta del sistema en \u003cid\u003e segundos",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@RetrasarRespuesta_Positivo"
    }
  ]
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users?delay\u003d\u003cid\u003e",
        "get"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "id",
        "codigo"
      ]
    },
    {
      "cells": [
        "5",
        "200"
      ]
    },
    {
      "cells": [
        "10",
        "200"
      ]
    },
    {
      "cells": [
        "15",
        "200"
      ]
    },
    {
      "cells": [
        "20",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Retrasar respuesta del sistema en 5 segundos",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@RetrasarRespuesta_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users?delay\u003d5",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrasar respuesta del sistema en 10 segundos",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@RetrasarRespuesta_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users?delay\u003d10",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrasar respuesta del sistema en 15 segundos",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@RetrasarRespuesta_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users?delay\u003d15",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrasar respuesta del sistema en 20 segundos",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@RetrasarRespuesta_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users?delay\u003d20",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Retrasar        respuesta del sistema en \u003cid\u003e segundos - No hace retraso 200",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@RetrasarRespuesta_Negativo"
    }
  ]
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users?delay\u003d\u003cid\u003e",
        "get"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "id",
        "codigo"
      ]
    },
    {
      "cells": [
        "*",
        "200"
      ]
    },
    {
      "cells": [
        "-1",
        "200"
      ]
    },
    {
      "cells": [
        "asd",
        "200"
      ]
    },
    {
      "cells": [
        "@",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Retrasar        respuesta del sistema en * segundos - No hace retraso 200",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@RetrasarRespuesta_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users?delay\u003d*",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrasar        respuesta del sistema en -1 segundos - No hace retraso 200",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@RetrasarRespuesta_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users?delay\u003d-1",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrasar        respuesta del sistema en asd segundos - No hace retraso 200",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@RetrasarRespuesta_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users?delay\u003dasd",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrasar        respuesta del sistema en @ segundos - No hace retraso 200",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@RetrasarRespuesta_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users?delay\u003d@",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Obtener usuario único por un id en específico con: \u003cid\u003e",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@UsuarioUnico_Positivo"
    }
  ]
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users/\u003cid\u003e",
        "get"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "id",
        "codigo"
      ]
    },
    {
      "cells": [
        "1",
        "200"
      ]
    },
    {
      "cells": [
        "2",
        "200"
      ]
    },
    {
      "cells": [
        "3",
        "200"
      ]
    },
    {
      "cells": [
        "4",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Obtener usuario único por un id en específico con: 1",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UsuarioUnico_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users/1",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener usuario único por un id en específico con: 2",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UsuarioUnico_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users/2",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener usuario único por un id en específico con: 3",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UsuarioUnico_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users/3",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener usuario único por un id en específico con: 4",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UsuarioUnico_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users/4",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Obtener usuario único por un id en específico con: \u003cid\u003e - ERROR 404",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@UsuarioUnico_Negativo"
    }
  ]
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users/\u003cid\u003e",
        "get"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "id",
        "codigo"
      ]
    },
    {
      "cells": [
        "20",
        "404"
      ]
    },
    {
      "cells": [
        "-1",
        "404"
      ]
    },
    {
      "cells": [
        "22",
        "404"
      ]
    },
    {
      "cells": [
        "a",
        "404"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Obtener usuario único por un id en específico con: 20 - ERROR 404",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UsuarioUnico_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users/20",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener usuario único por un id en específico con: -1 - ERROR 404",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UsuarioUnico_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users/-1",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener usuario único por un id en específico con: 22 - ERROR 404",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UsuarioUnico_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users/22",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener usuario único por un id en específico con: a - ERROR 404",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UsuarioUnico_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users/a",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Obtener recurso único por un id para el \u003cid\u003e",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@UnicoRecurso_Positivo"
    }
  ]
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/unknown/\u003cid\u003e",
        "get"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "id",
        "codigo"
      ]
    },
    {
      "cells": [
        "5",
        "200"
      ]
    },
    {
      "cells": [
        "6",
        "200"
      ]
    },
    {
      "cells": [
        "7",
        "200"
      ]
    },
    {
      "cells": [
        "8",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Obtener recurso único por un id para el 5",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UnicoRecurso_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/unknown/5",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener recurso único por un id para el 6",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UnicoRecurso_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/unknown/6",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener recurso único por un id para el 7",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UnicoRecurso_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/unknown/7",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener recurso único por un id para el 8",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UnicoRecurso_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/unknown/8",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Obtener recurso único por un id para el \u003cid\u003e - ERROR 404",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@UnicoRecurso_Negativo"
    }
  ]
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/unknown/\u003cid\u003e",
        "get"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "id",
        "codigo"
      ]
    },
    {
      "cells": [
        "21*",
        "404"
      ]
    },
    {
      "cells": [
        "-2",
        "404"
      ]
    },
    {
      "cells": [
        "40",
        "404"
      ]
    },
    {
      "cells": [
        "a*",
        "404"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Obtener recurso único por un id para el 21* - ERROR 404",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UnicoRecurso_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/unknown/21*",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener recurso único por un id para el -2 - ERROR 404",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UnicoRecurso_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/unknown/-2",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener recurso único por un id para el 40 - ERROR 404",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UnicoRecurso_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/unknown/40",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener recurso único por un id para el a* - ERROR 404",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@UnicoRecurso_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que ejecuto el servicio con o sin header y body",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/unknown/a*",
        "get"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.queEjecutoElServicioSinHeaderNiBody(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Crear Elemento mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@CrearElemento_Positivo"
    }
  ]
});
formatter.step({
  "name": "que configuro los headers",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ]
});
formatter.step({
  "name": "configuro el body del servicio: \"crearElemento\"",
  "keyword": "Y ",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "name",
        "\u003cname\u003e"
      ]
    },
    {
      "cells": [
        "job",
        "\u003cjob\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "keyword": "Cuando ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users",
        "post"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "codigo"
      ]
    },
    {
      "cells": [
        "Paolo",
        "Tester",
        "201"
      ]
    },
    {
      "cells": [
        "Mauro",
        "Leader",
        "201"
      ]
    },
    {
      "cells": [
        "Bruno",
        "Capo",
        "201"
      ]
    },
    {
      "cells": [
        "Giorno",
        "Star",
        "201"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Crear Elemento mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearElemento_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearElemento\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "name",
        "Paolo"
      ]
    },
    {
      "cells": [
        "job",
        "Tester"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"201\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear Elemento mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearElemento_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearElemento\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "name",
        "Mauro"
      ]
    },
    {
      "cells": [
        "job",
        "Leader"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"201\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear Elemento mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearElemento_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearElemento\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "name",
        "Bruno"
      ]
    },
    {
      "cells": [
        "job",
        "Capo"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"201\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear Elemento mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearElemento_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearElemento\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "name",
        "Giorno"
      ]
    },
    {
      "cells": [
        "job",
        "Star"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"201\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Crear Elemento mediante api - Key \"\u003cname\u003e\" sin contenido en el resultado 201",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@CrearElemento_Negativo"
    }
  ]
});
formatter.step({
  "name": "que configuro los headers",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ]
});
formatter.step({
  "name": "configuro el body del servicio: \"crearElementoFail\"",
  "keyword": "Y ",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "job",
        "\u003cjob\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "keyword": "Cuando ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users",
        "post"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "job",
        "codigo"
      ]
    },
    {
      "cells": [
        "Tester",
        "201"
      ]
    },
    {
      "cells": [
        "Leader",
        "201"
      ]
    },
    {
      "cells": [
        "Capo",
        "201"
      ]
    },
    {
      "cells": [
        "Star",
        "201"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Crear Elemento mediante api - Key \"\u003cname\u003e\" sin contenido en el resultado 201",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearElemento_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearElementoFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "job",
        "Tester"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"201\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear Elemento mediante api - Key \"\u003cname\u003e\" sin contenido en el resultado 201",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearElemento_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearElementoFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "job",
        "Leader"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"201\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear Elemento mediante api - Key \"\u003cname\u003e\" sin contenido en el resultado 201",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearElemento_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearElementoFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "job",
        "Capo"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"201\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear Elemento mediante api - Key \"\u003cname\u003e\" sin contenido en el resultado 201",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearElemento_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"crearElementoFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "job",
        "Star"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/users",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"201\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Crear registro mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@CrearRegistro_Positivo"
    }
  ]
});
formatter.step({
  "name": "que configuro los headers",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ]
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLogin\"",
  "keyword": "Y ",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ]
    },
    {
      "cells": [
        "password",
        "\u003cpassword\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "keyword": "Cuando ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/register",
        "post"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "codigo"
      ]
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "123456",
        "200"
      ]
    },
    {
      "cells": [
        "george.bluth@reqres.in",
        "654321",
        "200"
      ]
    },
    {
      "cells": [
        "janet.weaver@reqres.in",
        "987654",
        "200"
      ]
    },
    {
      "cells": [
        "emma.wong@reqres.in",
        "456789",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Crear registro mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearRegistro_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLogin\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "eve.holt@reqres.in"
      ]
    },
    {
      "cells": [
        "password",
        "123456"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/register",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear registro mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearRegistro_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLogin\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "george.bluth@reqres.in"
      ]
    },
    {
      "cells": [
        "password",
        "654321"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/register",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear registro mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearRegistro_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLogin\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "janet.weaver@reqres.in"
      ]
    },
    {
      "cells": [
        "password",
        "987654"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/register",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear registro mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearRegistro_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLogin\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "emma.wong@reqres.in"
      ]
    },
    {
      "cells": [
        "password",
        "456789"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/register",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Crear registro mediante api - Password no encontrado 400",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@CrearRegistro_Negativo"
    }
  ]
});
formatter.step({
  "name": "que configuro los headers",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ]
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLoginFail\"",
  "keyword": "Y ",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "keyword": "Cuando ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/register",
        "post"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "email",
        "codigo"
      ]
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "400"
      ]
    },
    {
      "cells": [
        "george.bluth@reqres.in",
        "400"
      ]
    },
    {
      "cells": [
        "janet.weaver@reqres.in",
        "400"
      ]
    },
    {
      "cells": [
        "emma.wong@reqres.in",
        "400"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Crear registro mediante api - Password no encontrado 400",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearRegistro_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLoginFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "eve.holt@reqres.in"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/register",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"400\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear registro mediante api - Password no encontrado 400",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearRegistro_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLoginFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "george.bluth@reqres.in"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/register",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"400\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear registro mediante api - Password no encontrado 400",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearRegistro_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLoginFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "janet.weaver@reqres.in"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/register",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"400\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear registro mediante api - Password no encontrado 400",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearRegistro_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLoginFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "emma.wong@reqres.in"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/register",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"400\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Crear login mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@CrearLogin_Positivo"
    }
  ]
});
formatter.step({
  "name": "que configuro los headers",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ]
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLogin\"",
  "keyword": "Y ",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ]
    },
    {
      "cells": [
        "password",
        "\u003cpassword\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "keyword": "Cuando ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/login",
        "post"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "codigo"
      ]
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "123456",
        "200"
      ]
    },
    {
      "cells": [
        "george.bluth@reqres.in",
        "654321",
        "200"
      ]
    },
    {
      "cells": [
        "janet.weaver@reqres.in",
        "987654",
        "200"
      ]
    },
    {
      "cells": [
        "emma.wong@reqres.in",
        "456789",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Crear login mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearLogin_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLogin\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "eve.holt@reqres.in"
      ]
    },
    {
      "cells": [
        "password",
        "123456"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/login",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear login mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearLogin_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLogin\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "george.bluth@reqres.in"
      ]
    },
    {
      "cells": [
        "password",
        "654321"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/login",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear login mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearLogin_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLogin\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "janet.weaver@reqres.in"
      ]
    },
    {
      "cells": [
        "password",
        "987654"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/login",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear login mediante api",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearLogin_Positivo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLogin\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "emma.wong@reqres.in"
      ]
    },
    {
      "cells": [
        "password",
        "456789"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/login",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Crear login mediante api - Password no encontrado 400",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@CrearLogin_Negativo"
    }
  ]
});
formatter.step({
  "name": "que configuro los headers",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ]
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLoginFail\"",
  "keyword": "Y ",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "keyword": "Cuando ",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/login",
        "post"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"\u003ccodigo\u003e\"",
  "keyword": "Entonces "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "email",
        "codigo"
      ]
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "400"
      ]
    },
    {
      "cells": [
        "george.bluth@reqres.in",
        "400"
      ]
    },
    {
      "cells": [
        "janet.weaver@reqres.in",
        "400"
      ]
    },
    {
      "cells": [
        "emma.wong@reqres.in",
        "400"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Crear login mediante api - Password no encontrado 400",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearLogin_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLoginFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "eve.holt@reqres.in"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/login",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"400\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear login mediante api - Password no encontrado 400",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearLogin_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLoginFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "george.bluth@reqres.in"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/login",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"400\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear login mediante api - Password no encontrado 400",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearLogin_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLoginFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "janet.weaver@reqres.in"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/login",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"400\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear login mediante api - Password no encontrado 400",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@TareaDeAutomatizacionAPI"
    },
    {
      "name": "@CrearLogin_Negativo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro los headers",
  "rows": [
    {
      "cells": [
        "headers",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Accept",
        "*/*"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configurarHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro el body del servicio: \"registerAndLoginFail\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "email",
        "emma.wong@reqres.in"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto servicio con la confiuracion del body y headers",
  "rows": [
    {
      "cells": [
        "url",
        "path",
        "method"
      ]
    },
    {
      "cells": [
        "nux",
        "/api/login",
        "post"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoServicioConLaConfiuracionDelBodyYHeaders(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea: \"400\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
});
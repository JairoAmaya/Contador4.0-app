// src/promptsData.js
// âœ… VERSIÃ“N COMPLETA ANIDADA (7 CATEGORÃAS) CON TEMPLATE LITERALS (BACKTICKS)
const promptsData = [
  // 1ï¸âƒ£ ANÃLISIS FINANCIERO ESTRATÃ‰GICO
  {
    title: "ðŸ“Š AnÃ¡lisis Financiero EstratÃ©gico",
    icon: "ðŸ“ˆ",
    subcategories: [
      {
        title: "EvaluaciÃ³n Financiera",
        prompts: [
          {
            title: "AnÃ¡lisis Integral de Estados Financieros",
            prompt: `ActÃºa como un analista financiero senior. Analiza los estados financieros adjuntos (balance general, estado de resultados y estado de cambios en el patrimonio) de los Ãºltimos 3 aÃ±os. Identifica las 5 tendencias mÃ¡s significativas, evalÃºa la salud financiera general de la empresa, y proporciona 3 recomendaciones estratÃ©gicas basadas en tu anÃ¡lisis. Incluye comparaciones aÃ±o a aÃ±o y explica el impacto de cada hallazgo en la posiciÃ³n competitiva de la empresa.`
          },
          {
            title: "AnÃ¡lisis Comparativo",
            prompt: `Compara los estados financieros de esta empresa con los de sus 3 principales competidores en el sector. Identifica fortalezas y debilidades relativas en tÃ©rminos de estructura de capital, eficiencia operativa y posiciÃ³n de liquidez. Proporciona un ranking de desempeÃ±o financiero y explica quÃ© mÃ©tricas clave determinan la posiciÃ³n de cada empresa en el mercado.`
          },
          {
            title: "DetecciÃ³n de AnomalÃ­as",
            prompt: `Examina estos estados financieros buscando inconsistencias, irregularidades o seÃ±ales de alerta. Analiza la coherencia entre las diferentes partidas, identifica variaciones inusuales period-over-period, y evalÃºa la calidad de los earnings. Proporciona un informe de due diligence destacando cualquier Ã¡rea que requiera investigaciÃ³n adicional o aclaraciÃ³n por parte de la gerencia.`
          }
        ]
      },
      {
        title: "AnÃ¡lisis de Flujo de Efectivo",
        prompts: [
          {
            title: "AnÃ¡lisis de Sostenibilidad",
            prompt: `Analiza el estado de flujo de efectivo de los Ãºltimos 5 aÃ±os, enfocÃ¡ndote en la sostenibilidad de la generaciÃ³n de efectivo. EvalÃºa la calidad del flujo operativo, identifica patrones estacionales, y determina si la empresa puede mantener sus operaciones, inversiones y pagos de dividendos sin financiamiento externo. Incluye proyecciones de flujo libre de efectivo para los prÃ³ximos 2 aÃ±os.`
          },
          {
            title: "OptimizaciÃ³n de Capital de Trabajo",
            prompt: `Examina los componentes del flujo de efectivo operativo, particularmente los cambios en capital de trabajo. Identifica oportunidades de optimizaciÃ³n en cuentas por cobrar, inventarios y cuentas por pagar. Calcula el ciclo de conversiÃ³n de efectivo y proporciona 5 estrategias especÃ­ficas para mejorar la generaciÃ³n de efectivo operativo sin comprometer las operaciones.`
          },
          {
            title: "EvaluaciÃ³n de Capacidad de InversiÃ³n",
            prompt: `Analiza la capacidad de la empresa para financiar proyectos de crecimiento basÃ¡ndote en su flujo de efectivo histÃ³rico y proyectado. EvalÃºa el equilibrio entre flujo operativo, necesidades de capex, servicio de deuda y distribuciones a accionistas. Determina el monto Ã³ptimo disponible para nuevas inversiones y recomienda una estructura de financiamiento para proyectos estratÃ©gicos.`
          }
        ]
      },
      {
        title: "Rentabilidad por LÃ­nea de Negocio",
        prompts: [
          {
            title: "AnÃ¡lisis de ContribuciÃ³n Marginal",
            prompt: `Analiza la rentabilidad de cada lÃ­nea de negocio calculando mÃ¡rgenes brutos, contribuciÃ³n marginal y EBITDA por segmento. Identifica quÃ© lÃ­neas estÃ¡n subsidiando a otras, evalÃºa la asignaciÃ³n de costos fijos, y determina el punto de equilibrio para cada unidad de negocio. Proporciona recomendaciones sobre quÃ© lÃ­neas expandir, mantener o descontinuar.`
          },
          {
            title: "AnÃ¡lisis de Valor EconÃ³mico Agregado (EVA)",
            prompt: `Calcula el EVA para cada lÃ­nea de negocio, considerando el costo de capital especÃ­fico y los activos empleados. Identifica quÃ© segmentos estÃ¡n creando o destruyendo valor, analiza los drivers de rentabilidad Ãºnicos de cada lÃ­nea, y propone estrategias para maximizar el valor econÃ³mico total de la empresa.`
          },
          {
            title: "OptimizaciÃ³n de Portfolio de Negocios",
            prompt: `Usando la matriz BCG y anÃ¡lisis de rentabilidad, evalÃºa el portfolio de lÃ­neas de negocio. Clasifica cada segmento segÃºn su posiciÃ³n competitiva y atractivo del mercado, analiza la sinergia entre lÃ­neas, y desarrolla una estrategia de asignaciÃ³n de recursos que maximice el retorno sobre el capital invertido a nivel corporativo.`
          }
        ]
      },
      {
        title: "Ratios y MÃ©tricas Financieras",
        prompts: [
          {
            title: "Dashboard de Ratios Clave",
            prompt: `Crea un dashboard ejecutivo con los 15 ratios financieros mÃ¡s crÃ­ticos organizados en 5 categorÃ­as: liquidez, eficiencia, apalancamiento, rentabilidad y mercado. Para cada ratio, proporciona el valor actual, tendencia de 3 aÃ±os, benchmark del sector, y semÃ¡foro de alerta (verde/amarillo/rojo). Incluye interpretaciÃ³n ejecutiva y acciones recomendadas para ratios en zona de riesgo.`
          },
          {
            title: "AnÃ¡lisis Predictivo con Ratios",
            prompt: `Utiliza los ratios financieros histÃ³ricos para desarrollar un modelo predictivo de la salud financiera futura. Identifica los ratios mÃ¡s correlacionados con el desempeÃ±o operativo, calcula z-scores de Altman y Piotroski F-Score, y proporciona una probabilidad de stress financiero en los prÃ³ximos 12-24 meses. Incluye escenarios de sensibilidad.`
          },
          {
            title: "Benchmarking Sectorial de Ratios",
            prompt: `Compara los ratios financieros de la empresa contra el percentil 25, mediana y percentil 75 de su sector industrial. Identifica en quÃ© mÃ©tricas la empresa sobresale o queda rezagada, analiza las causas estructurales de las diferencias, y establece targets realistas de mejora para alcanzar el cuartil superior en 3 aÃ±os.`
          }
        ]
      },
      {
        title: "GestiÃ³n de Riesgos Financieros",
        prompts: [
          {
            title: "Mapa de Riesgos Integral",
            prompt: `Desarrolla un mapa comprensivo de riesgos financieros evaluando: riesgo de liquidez, riesgo crediticio, riesgo de mercado, riesgo operacional y riesgo de concentraciÃ³n. Para cada categorÃ­a, identifica los 3 riesgos principales, evalÃºa probabilidad e impacto, y propone controles preventivos y planes de contingencia. Incluye mÃ©tricas de early warning para cada tipo de riesgo.`
          },
          {
            title: "Stress Testing Financiero",
            prompt: `DiseÃ±a y ejecuta stress tests bajo 3 escenarios: recesiÃ³n moderada, crisis sectorial y shock de tasas de interÃ©s. EvalÃºa el impacto en liquidez, solvencia y rentabilidad, identifica puntos de quiebre crÃ­ticos, y determina las acciones de contingencia necesarias. Calcula el capital de reserva requerido para mantener operaciones bajo cada escenario adverso.`
          },
          {
            title: "Sistema de Alertas Tempranas",
            prompt: `Establece un sistema de alertas tempranas basado en indicadores financieros y operativos. Define umbrales crÃ­ticos para ratios clave, identifica combinaciones de mÃ©tricas que histÃ³ricamente preceden problemas financieros, y crea un scoring de riesgo automatizado. Proporciona un protocolo de escalamiento y acciones correctivas para cada nivel de alerta del sistema.`
          }
        ]
      }
    ]
  },

  // 2ï¸âƒ£ COMUNICACIÃ“N EMPRESARIAL DE ALTO IMPACTO
  {
    title: "ðŸ’¼ ComunicaciÃ³n Empresarial de Alto Impacto",
    icon: "âœ‰ï¸",
    subcategories: [
      {
        title: "Comunicaciones a Clientes",
        prompts: [
          {
            title: "ComunicaciÃ³n de Cambios o Ajustes",
            prompt: `Redacta una carta profesional dirigida a nuestros clientes corporativos explicando [cambio especÃ­fico: aumento de tarifas/modificaciÃ³n de servicios/nueva polÃ­tica]. La carta debe: mantener un tono empÃ¡tico y transparente, explicar las razones comerciales detrÃ¡s de la decisiÃ³n, destacar el valor agregado que continuamos proporcionando, incluir una lÃ­nea de tiempo clara de implementaciÃ³n, y ofrecer un canal directo para consultas. AsegÃºrate de que el mensaje refuerce la relaciÃ³n a largo plazo y mitigue cualquier preocupaciÃ³n potencial.`
          },
          {
            title: "ExplicaciÃ³n de Resultados o Performance",
            prompt: `Elabora una comunicaciÃ³n personalizada para explicar a nuestro cliente [nombre] los resultados del proyecto/servicio realizado en el Ãºltimo perÃ­odo. La carta debe incluir: un resumen ejecutivo de los logros clave, mÃ©tricas de desempeÃ±o comparadas con objetivos iniciales, explicaciÃ³n de cualquier desviaciÃ³n o reto enfrentado, impacto tangible en su negocio, prÃ³ximos pasos recomendados, y una invitaciÃ³n para una reuniÃ³n de seguimiento. El tono debe ser profesional pero cercano, demostrando nuestro compromiso con su Ã©xito.`
          },
          {
            title: "ComunicaciÃ³n de Crisis o Incidentes",
            prompt: `Desarrolla una carta de comunicaciÃ³n de crisis para informar a los clientes afectados sobre [incidente especÃ­fico]. La comunicaciÃ³n debe seguir el protocolo: reconocimiento inmediato del problema, explicaciÃ³n clara de quÃ© ocurriÃ³ y por quÃ©, detalle de las acciones correctivas ya implementadas, medidas preventivas para evitar recurrencia, compensaciÃ³n o remediaciÃ³n ofrecida, y cronograma de seguimiento. El mensaje debe transmitir responsabilidad, transparencia y confianza en nuestra capacidad de resoluciÃ³n.`
          }
        ]
      },
      {
        title: "Reportes Ejecutivos",
        prompts: [
          {
            title: "Dashboard Ejecutivo Mensual",
            prompt: `Crea un reporte ejecutivo mensual personalizado para [nombre del ejecutivo/Ã¡rea] que incluya: resumen de 3 puntos clave del mes, dashboard visual con 5 KPIs crÃ­ticos para su rol, anÃ¡lisis de tendencias vs. perÃ­odo anterior, identificaciÃ³n de 2-3 oportunidades inmediatas, alertas sobre riesgos emergentes, y recomendaciones accionables para los prÃ³ximos 30 dÃ­as. El formato debe ser conciso (mÃ¡ximo 2 pÃ¡ginas), visualmente atractivo, y enfocado en decisiones estratÃ©gicas que el ejecutivo debe tomar.`
          },
          {
            title: "Reporte de Performance por Ãrea",
            prompt: `DiseÃ±a un reporte ejecutivo trimestral personalizado para el Director de [Ã¡rea especÃ­fica] que analice: performance vs. objetivos establecidos, comparaciÃ³n con benchmarks del sector, anÃ¡lisis de causas raÃ­z de desviaciones, impacto en otros departamentos y la organizaciÃ³n general, iniciativas en curso y su progreso, recomendaciones estratÃ©gicas para el siguiente trimestre. Incluye grÃ¡ficos de tendencias, semÃ¡foros de alerta, y un plan de acciÃ³n priorizado.`
          },
          {
            title: "Reporte EstratÃ©gico de Junta Directiva",
            prompt: `Elabora un reporte ejecutivo para la Junta Directiva que cubra: estado general del negocio con mÃ©tricas financieras clave, avance en objetivos estratÃ©gicos anuales, anÃ¡lisis de mercado y posiciÃ³n competitiva, principales riesgos y oportunidades identificados, decisiones crÃ­ticas que requieren aprobaciÃ³n de la junta, y outlook para los prÃ³ximos 6 meses. El documento debe ser de nivel estratÃ©gico, incluir resumen ejecutivo de una pÃ¡gina, y estar preparado para generar discusiÃ³n y toma de decisiones en el board.`
          }
        ]
      },
      {
        title: "Presentaciones de Resultados",
        prompts: [
          {
            title: "PresentaciÃ³n de Resultados Financieros",
            prompt: `Desarrolla una presentaciÃ³n de resultados financieros trimestrales con la siguiente estructura: slide de apertura con highlights principales, anÃ¡lisis de P&L con comparativos vs. presupuesto y aÃ±o anterior, evoluciÃ³n del balance y flujo de caja, anÃ¡lisis por lÃ­nea de negocio o regiÃ³n, factores que impactaron la performance, outlook y guidance para prÃ³ximos perÃ­odos, Q&A anticipado con posibles preguntas. La presentaciÃ³n debe tener un storytelling claro, visualizaciones impactantes, y mensajes clave que refuercen la narrativa estratÃ©gica.`
          },
          {
            title: "PresentaciÃ³n de Resultados de Proyecto",
            prompt: `Crea una presentaciÃ³n ejecutiva para comunicar los resultados del proyecto [nombre] incluyendo: contexto y objetivos originales del proyecto, metodologÃ­a utilizada y timeline ejecutado, resultados cuantitativos y cualitativos obtenidos, comparaciÃ³n con metas establecidas, lecciones aprendidas y mejores prÃ¡cticas identificadas, impacto en la organizaciÃ³n y prÃ³ximos pasos, recomendaciones para proyectos futuros. El formato debe ser dinÃ¡mico, con casos de Ã©xito destacados y mÃ©tricas visuales convincentes.`
          },
          {
            title: "PresentaciÃ³n de Resultados de InvestigaciÃ³n de Mercado",
            prompt: `DiseÃ±a una presentaciÃ³n de resultados de investigaciÃ³n de mercado que incluya: resumen ejecutivo con insights clave, metodologÃ­a y muestra del estudio, hallazgos principales organizados por temas relevantes, anÃ¡lisis de implicaciones para la estrategia de negocio, recomendaciones accionables priorizadas por impacto, anÃ¡lisis competitivo y posicionamiento, plan de implementaciÃ³n sugerido. La presentaciÃ³n debe transformar datos en insights estratÃ©gicos y conclusiones que guÃ­en decisiones de negocio.`
          }
        ]
      },
      {
        title: "Reportes de AuditorÃ­a",
        prompts: [
          {
            title: "Informe Ejecutivo de AuditorÃ­a Interna",
            prompt: `Redacta un informe ejecutivo de auditorÃ­a interna dirigido al ComitÃ© de AuditorÃ­a que incluya: resumen de alcance y objetivos de la auditorÃ­a realizada, clasificaciÃ³n de hallazgos por nivel de riesgo (crÃ­tico/alto/medio/bajo), descripciÃ³n detallada de cada observaciÃ³n con evidencia de respaldo, impacto potencial en controles internos y operaciones, recomendaciones especÃ­ficas con responsables y fechas de implementaciÃ³n, respuesta de la gerencia a cada hallazgo, y plan de seguimiento. El tono debe ser objetivo, constructivo y enfocado en agregar valor a la organizaciÃ³n.`
          },
          {
            title: "ComunicaciÃ³n de Hallazgos CrÃ­ticos",
            prompt: `Desarrolla una comunicaciÃ³n urgente para el CEO y CFO sobre hallazgos crÃ­ticos de auditorÃ­a que incluya: identificaciÃ³n clara del riesgo o problema detectado, evidencia concreta y cuantificaciÃ³n del impacto potencial, anÃ¡lisis de causas raÃ­z y controles que fallaron, acciones correctivas inmediatas requeridas, plan de remediaciÃ³n a corto y mediano plazo, recursos necesarios para implementar soluciones, y cronograma de seguimiento. El mensaje debe ser directo, crear sentido de urgencia apropiado, y facilitar la toma de decisiones ejecutiva inmediata.`
          },
          {
            title: "Reporte de AuditorÃ­a para Reguladores",
            prompt: `Elabora un reporte de auditorÃ­a formal para presentar a organismos reguladores que cumpla con [normativa especÃ­fica] que incluya: carta de representaciÃ³n de la gerencia, descripciÃ³n del marco de control interno evaluado, detalle de procedimientos de auditorÃ­a ejecutados, hallazgos organizados por Ã¡rea de control, evaluaciÃ³n de la efectividad de controles existentes, deficiencias materiales identificadas y su impacto, plan de acciÃ³n correctiva con fechas compromiso, y certificaciÃ³n de independencia del equipo auditor. El documento debe cumplir estÃ¡ndares profesionales y regulatorios aplicables.`
          }
        ]
      },
      {
        title: "Comunicaciones Fiscales",
        prompts: [
          {
            title: "ComunicaciÃ³n de Cambios en LegislaciÃ³n Fiscal",
            prompt: `Redacta un memorando ejecutivo explicando el impacto de [nueva legislaciÃ³n/reforma fiscal] en nuestra organizaciÃ³n, dirigido al equipo directivo. Incluye: resumen de los cambios normativos mÃ¡s relevantes, anÃ¡lisis cuantitativo del impacto en nuestra carga fiscal anual, identificaciÃ³n de oportunidades de planificaciÃ³n fiscal emergentes, riesgos de cumplimiento y nuevas obligaciones, acciones requeridas con fechas lÃ­mite, recomendaciones estratÃ©gicas para optimizar la posiciÃ³n fiscal, y cronograma de implementaciÃ³n. El mensaje debe traducir complejidad legal en implicaciones comerciales claras.`
          },
          {
            title: "ExplicaciÃ³n de Estrategia de OptimizaciÃ³n Fiscal",
            prompt: `Desarrolla una presentaciÃ³n para el ComitÃ© de Finanzas explicando nuestra estrategia de optimizaciÃ³n fiscal que incluya: anÃ¡lisis de la carga fiscal actual por jurisdicciÃ³n y tipo de impuesto, identificaciÃ³n de oportunidades de eficiencia fiscal legal, evaluaciÃ³n de riesgo-beneficio de cada estrategia propuesta, impacto financiero proyectado de las iniciativas, requerimientos de implementaciÃ³n y recursos necesarios, consideraciones de riesgo reputacional y cumplimiento, y plan de monitoreo continuo. La presentaciÃ³n debe equilibrar oportunidades de ahorro con gestiÃ³n prudente de riesgos.`
          },
          {
            title: "ComunicaciÃ³n de Contingencias Fiscales",
            prompt: `Elabora una comunicaciÃ³n al CFO y equipo legal sobre contingencias fiscales identificadas que incluya: descripciÃ³n detallada de cada contingencia y su origen, evaluaciÃ³n de probabilidad de materializaciÃ³n y exposiciÃ³n financiera, anÃ¡lisis de precedentes legales y posiciones de autoridades fiscales, estrategias de defensa disponibles y recomendaciones del asesor externo, provisiones contables sugeridas segÃºn normativa aplicable, cronograma de procesos administrativos o judiciales, y plan de comunicaciÃ³n con auditores externos y stakeholders. El reporte debe facilitar la toma de decisiones informada sobre gestiÃ³n de riesgo fiscal.`
          }
        ]
      }
    ]
  },

  // 3ï¸âƒ£ PROPUESTAS Y COTIZACIONES QUE CIERRAN NEGOCIOS
  {
    title: "ðŸ“‹ Propuestas y Cotizaciones que Cierran Negocios",
    icon: "ðŸ’°",
    subcategories: [
      {
        title: "Propuestas de Servicios",
        prompts: [
          {
            title: "Propuesta Integral de Servicios Contables",
            prompt: `Desarrolla una propuesta comercial completa para ofrecer servicios contables integrales a [tipo de empresa/sector]. La propuesta debe incluir: anÃ¡lisis de las necesidades contables especÃ­ficas del cliente, descripciÃ³n detallada de servicios (contabilidad general, nÃ³mina, impuestos, reportes financieros), metodologÃ­a de trabajo y cronograma de entregas, equipo asignado con perfiles profesionales, diferenciadores competitivos y valor agregado Ãºnico, estructura de costos transparente con opciones de pago, garantÃ­as de calidad y SLAs, casos de Ã©xito similares, y prÃ³ximos pasos del proceso. El tono debe ser profesional, consultivo y enfocado en generar confianza.`
          },
          {
            title: "Propuesta de MigraciÃ³n y ModernizaciÃ³n Contable",
            prompt: `Elabora una propuesta especializada para la modernizaciÃ³n del sistema contable de un cliente que actualmente maneja procesos manuales o sistemas obsoletos. Incluye: diagnÃ³stico del estado actual y gaps identificados, propuesta de implementaciÃ³n de software contable moderno, plan de migraciÃ³n de datos histÃ³ricos, capacitaciÃ³n del equipo interno del cliente, procesos optimizados y controles internos mejorados, cronograma de implementaciÃ³n por fases, anÃ¡lisis costo-beneficio de la modernizaciÃ³n, soporte post-implementaciÃ³n, y mÃ©tricas de Ã©xito esperadas. EnfÃ³cate en el ROI y la eficiencia operativa.`
          },
          {
            title: "Propuesta de Outsourcing Contable Completo",
            prompt: `DiseÃ±a una propuesta de outsourcing contable total para una empresa que busca externalizar completamente su funciÃ³n contable. La propuesta debe cubrir: anÃ¡lisis de la situaciÃ³n actual y costos internos, propuesta de servicios externalizados (desde transaccional hasta estratÃ©gico), modelo de transiciÃ³n suave desde equipo interno, estructura de governance y comunicaciÃ³n, tecnologÃ­a y herramientas que utilizaremos, equipo dedicado y estructura de respaldo, comparativo de costos internos vs. outsourcing, beneficios de escalabilidad y expertise especializado, y plan de implementaciÃ³n gradual. Destaca la liberaciÃ³n de recursos para actividades core del negocio.`
          }
        ]
      },
      {
        title: "Cotizaciones y Precios",
        prompts: [
          {
            title: "CotizaciÃ³n de Paquetes Diferenciados",
            prompt: `Crea una cotizaciÃ³n estructurada en 3 paquetes de servicios (BÃ¡sico, Profesional, Premium) para servicios contables, dirigida a [tipo de cliente]. Cada paquete debe incluir: descripciÃ³n clara de servicios incluidos, frecuencia de entregas y reportes, nivel de soporte y atenciÃ³n, herramientas y tecnologÃ­a incluida, precio mensual/anual con descuentos por anualidad, tabla comparativa visual de caracterÃ­sticas, opciones de add-ons disponibles, tÃ©rminos de contrato y condiciones de pago. Incluye recomendaciÃ³n del paquete mÃ¡s adecuado segÃºn el perfil del cliente y justificaciÃ³n del valor de cada tier.`
          },
          {
            title: "CotizaciÃ³n Modular por Servicios",
            prompt: `Desarrolla una cotizaciÃ³n modular que permita al cliente seleccionar servicios especÃ­ficos segÃºn sus necesidades. Incluye mÃ³dulos como: contabilidad bÃ¡sica, nÃ³mina, impuestos, auditorÃ­a, consultorÃ­a fiscal, reportes ejecutivos, anÃ¡lisis financiero, cada uno con descripciÃ³n detallada, precio unitario, prerequisitos o dependencias entre mÃ³dulos, descuentos por combinaciÃ³n de servicios, opciones de escalabilidad segÃºn crecimiento del cliente, comparativo de costos vs. contratar servicios por separado, y configurador de propuesta personalizada. Facilita que el cliente pueda armar su paquete ideal.`
          },
          {
            title: "CotizaciÃ³n por Industria EspecÃ­fica",
            prompt: `Elabora cotizaciones especializadas para [industria especÃ­fica: retail, manufactura, servicios, etc.] que incluyan: servicios estÃ¡ndar adaptados a regulaciones del sector, servicios especializados Ãºnicos de la industria, compliance con normativas especÃ­ficas, reportes regulatorios requeridos, anÃ¡lisis de KPIs sectoriales, benchmarking contra empresas similares, paquetes de diferentes tamaÃ±os de empresa (startup, mediana, grande), estructura de precios competitiva para el sector, casos de Ã©xito en empresas similares, y propuesta de valor especÃ­fica para los retos de esa industria.`
          }
        ]
      },
      {
        title: "Servicios de Valor Agregado",
        prompts: [
          {
            title: "PresentaciÃ³n de Servicios EstratÃ©gicos",
            prompt: `Desarrolla una presentaciÃ³n de servicios de valor agregado que vaya mÃ¡s allÃ¡ de la contabilidad tradicional, incluyendo: consultorÃ­a en planeaciÃ³n fiscal estratÃ©gica, anÃ¡lisis predictivo y business intelligence, automatizaciÃ³n de procesos contables, consultorÃ­a en estructura corporativa, due diligence para adquisiciones, modelado financiero para proyectos, implementaciÃ³n de controles internos, capacitaciÃ³n ejecutiva en finanzas. Para cada servicio incluye: beneficios tangibles, casos de uso tÃ­picos, metodologÃ­a diferenciada, ROI esperado para el cliente, y ejemplos de resultados obtenidos. Posiciona estos servicios como catalizadores de crecimiento empresarial.`
          },
          {
            title: "PresentaciÃ³n de Servicios de TransformaciÃ³n Digital",
            prompt: `Crea una presentaciÃ³n enfocada en servicios de transformaciÃ³n digital contable que incluya: diagnÃ³stico de madurez digital actual, implementaciÃ³n de ERP y software especializado, automatizaciÃ³n de procesos repetitivos (AP, AR, conciliaciones), dashboards en tiempo real y business intelligence, integraciÃ³n con sistemas existentes, capacitaciÃ³n en herramientas digitales, soporte en change management, mediciÃ³n de ROI de la transformaciÃ³n. Destaca cÃ³mo estos servicios posicionan al cliente como lÃ­der digital en su industria y mejoran la toma de decisiones.`
          },
          {
            title: "PresentaciÃ³n de Servicios de Risk Management",
            prompt: `Elabora una presentaciÃ³n de servicios especializados en gestiÃ³n de riesgos financieros que cubra: evaluaciÃ³n integral de riesgos corporativos, diseÃ±o de marcos de control interno, implementaciÃ³n de sistemas de alertas tempranas, stress testing y anÃ¡lisis de escenarios, compliance con regulaciones cambiantes, auditorÃ­a interna y externa especializada, planes de contingencia financiera, capacitaciÃ³n en gestiÃ³n de riesgos. Cada servicio debe mostrar cÃ³mo protege y crea valor para la organizaciÃ³n, con mÃ©tricas especÃ­ficas de reducciÃ³n de riesgo y casos donde hayamos evitado pÃ©rdidas significativas para clientes.`
          }
        ]
      },
      {
        title: "JustificaciÃ³n de Honorarios",
        prompts: [
          {
            title: "JustificaciÃ³n Basada en Valor Entregado",
            prompt: `Desarrolla una justificaciÃ³n detallada de honorarios basada en el valor que entregamos al cliente, incluyendo: anÃ¡lisis cuantitativo del ROI generado por nuestros servicios, ahorros de costos identificados y capturados, eficiencias operativas implementadas, riesgos mitigados y su valor econÃ³mico, benchmarking de honorarios vs. mercado y calidad de servicio, comparativo de costos de tener equipo interno vs. outsourcing, valor de expertise especializado y actualizaciÃ³n continua, disponibilidad 24/7 y respaldo de equipo completo. Incluye casos especÃ­ficos donde nuestro trabajo generÃ³ valor medible y cuantificable para otros clientes similares.`
          },
          {
            title: "JustificaciÃ³n por Complejidad y EspecializaciÃ³n",
            prompt: `Elabora una justificaciÃ³n de honorarios enfocada en la complejidad del caso y nivel de especializaciÃ³n requerido, detallando: anÃ¡lisis de la complejidad tÃ©cnica especÃ­fica del cliente, regulaciones especiales o normativas complejas aplicables, nivel de expertise requerido y certificaciones del equipo, tiempo de investigaciÃ³n y actualizaciÃ³n normativa continua, riesgo profesional asumido y seguros de responsabilidad, inversiÃ³n en tecnologÃ­a y herramientas especializadas, comparativo con tarifas de firmas de similar especializaciÃ³n, escasez de profesionales con el expertise requerido en el mercado.`
          },
          {
            title: "JustificaciÃ³n de Incremento de Honorarios",
            prompt: `Desarrolla una comunicaciÃ³n para justificar un incremento en honorarios a cliente existente que incluya: evoluciÃ³n del alcance y complejidad de servicios vs. contrato original, incrementos en regulaciones y requerimientos de compliance, inversiones realizadas en tecnologÃ­a y capacitaciÃ³n para mejor servicio, inflaciÃ³n y aumentos en costos operativos del mercado, benchmarking actualizado vs. competencia, valor agregado adicional entregado sin costo extra, propuesta de estructura de honorarios escalonada o con incentivos, opciones para optimizar costos manteniendo calidad, y cronograma de implementaciÃ³n gradual del ajuste.`
          }
        ]
      },
      {
        title: "Contratos y Acuerdos",
        prompts: [
          {
            title: "Contrato Integral de Servicios Contables",
            prompt: `Redacta un contrato comprehensivo de servicios contables profesionales que incluya: definiciÃ³n precisa del alcance de servicios y deliverables, responsabilidades de cada parte claramente establecidas, cronograma de entregas y fechas de reporte, estructura de honorarios y tÃ©rminos de pago, clÃ¡usulas de confidencialidad y protecciÃ³n de datos, estÃ¡ndares de calidad y SLAs comprometidos, procedimiento de resoluciÃ³n de disputas, tÃ©rminos de terminaciÃ³n y transiciÃ³n, seguros de responsabilidad profesional, cumplimiento normativo y regulatorio, clÃ¡usulas de modificaciÃ³n del contrato, y governance del proyecto. El contrato debe proteger ambas partes y facilitar una relaciÃ³n profesional exitosa.`
          },
          {
            title: "Contrato de ConsultorÃ­a Especializada",
            prompt: `Desarrolla un contrato especÃ­fico para servicios de consultorÃ­a contable especializada que contemple: definiciÃ³n detallada del proyecto y objetivos esperados, metodologÃ­a de trabajo y fases de implementaciÃ³n, equipo consultor asignado y calificaciones, propiedad intelectual de metodologÃ­as y resultados, criterios de Ã©xito y mÃ©tricas de evaluaciÃ³n, estructura de honorarios (fija, variable, success fee), confidencialidad de informaciÃ³n estratÃ©gica del cliente, limitaciÃ³n de responsabilidad apropiada, garantÃ­as de calidad y remedios por incumplimiento, exclusividad o no-compete segÃºn aplicable, y tÃ©rminos de extensiÃ³n o proyectos adicionales.`
          },
          {
            title: "Contrato de Retainer Mensual",
            prompt: `Elabora un contrato de retainer mensual para servicios contables continuos que establezca: paquete base de servicios incluidos en el retainer, servicios adicionales y su facturaciÃ³n, disponibilidad garantizada del equipo (horas mensuales), prioridad de atenciÃ³n y tiempos de respuesta, rollover de horas no utilizadas o polÃ­tica de uso, ajustes anuales de retainer por inflaciÃ³n o cambios de alcance, tÃ©rminos de aviso para modificaciones o cancelaciÃ³n, facturaciÃ³n y tÃ©rminos de pago del retainer, reportes mensuales de servicios prestados, revisiÃ³n trimestral de adecuaciÃ³n del retainer, y beneficios adicionales por relaciÃ³n de largo plazo. El contrato debe incentivar la retenciÃ³n del cliente y asegurar flujo de caja predecible.`
          }
        ]
      }
    ]
  },

  // 4ï¸âƒ£ REPORTES Y DASHBOARDS INTELIGENTES
  {
    title: "ðŸ“ˆ Reportes y Dashboards Inteligentes",
    icon: "ðŸ“Š",
    subcategories: [
      {
        title: "Sistemas de KPIs",
        prompts: [
          {
            title: "Framework Integral de KPIs por Nivel Organizacional",
            prompt: `DiseÃ±a un sistema completo de KPIs financieros estructurado en 3 niveles: estratÃ©gico (C-level), tÃ¡ctico (gerencias medias) y operativo (supervisiÃ³n). Para cada nivel define: 5-7 KPIs principales con sus fÃ³rmulas especÃ­ficas, frecuencia de mediciÃ³n y reporte, umbrales de alerta (verde/amarillo/rojo), benchmarks del sector cuando aplique, interrelaciÃ³n entre KPIs de diferentes niveles, dashboard visual correspondiente, y responsable de cada mÃ©trica. Incluye KPIs de rentabilidad, liquidez, eficiencia, crecimiento y riesgo. El framework debe permitir cascadeo desde objetivos estratÃ©gicos hasta mÃ©tricas operativas diarias.`
          },
          {
            title: "KPIs Predictivos y de Early Warning",
            prompt: `Desarrolla un conjunto de KPIs financieros predictivos que funcionen como sistema de alerta temprana, incluyendo: indicadores adelantados de problemas de liquidez, mÃ©tricas que predigan deterioro en mÃ¡rgenes, ratios que anticipen dificultades de cobranza, KPIs que alerten sobre desviaciones presupuestarias significativas, indicadores de calidad de earnings, mÃ©tricas de sostenibilidad del modelo de negocio. Para cada KPI define: algoritmo de cÃ¡lculo, fuentes de datos requeridas, periodicidad Ã³ptima de monitoreo, umbrales crÃ­ticos de alerta, acciones automÃ¡ticas a disparar, y correlaciÃ³n con otros indicadores para validaciÃ³n cruzada.`
          },
          {
            title: "KPIs de Value Creation por LÃ­nea de Negocio",
            prompt: `Crea un sistema de KPIs enfocado en mediciÃ³n de creaciÃ³n de valor por unidad de negocio que incluya: ROI ajustado por riesgo para cada lÃ­nea, EVA (Economic Value Added) por segmento, ratios de eficiencia de capital empleado, mÃ©tricas de contribuciÃ³n marginal y punto de equilibrio, KPIs de cross-selling y up-selling, indicadores de satisfacciÃ³n y retenciÃ³n por segmento, mÃ©tricas de market share y posicionamiento competitivo. Establece metodologÃ­a de benchmarking interno y externo, sistema de weightings para KPI compuesto de performance, y recomendaciones de asignaciÃ³n de recursos basada en KPIs de value creation.`
          }
        ]
      },
      {
        title: "Reportes Automatizados",
        prompts: [
          {
            title: "Sistema de Reportes AutomÃ¡ticos Multi-periodicidad",
            prompt: `DiseÃ±a una arquitectura de reportes automatizados que genere: reportes diarios de cash flow y posiciÃ³n financiera, reportes semanales de performance vs. budget, reportes mensuales de P&L completo y anÃ¡lisis de variaciones, reportes trimestrales de tendencias y anÃ¡lisis predictivo, reportes anuales de cierre con comparativos histÃ³ricos. Para cada reporte especifica: fuentes de datos automÃ¡ticas, algoritmos de consolidaciÃ³n, validaciones de calidad de datos, formato de presentaciÃ³n, lista de distribuciÃ³n automÃ¡tica, triggers para reportes especiales por excepciÃ³n, y proceso de escalamiento para anomalÃ­as detectadas.`
          },
          {
            title: "Reportes Inteligentes con AnÃ¡lisis AutomÃ¡tico",
            prompt: `Desarrolla reportes automatizados que incluyan anÃ¡lisis inteligente de datos financieros: identificaciÃ³n automÃ¡tica de tendencias significativas, detecciÃ³n de outliers y anomalÃ­as, anÃ¡lisis automÃ¡tico de causas raÃ­z de variaciones, generaciÃ³n de insights y recomendaciones, comparaciÃ³n automÃ¡tica con perÃ­odos similares y benchmarks, scoring automÃ¡tico de performance, alertas proactivas sobre mÃ©tricas crÃ­ticas. Incluye motor de narrativa automÃ¡tica que explique los nÃºmeros en lenguaje ejecutivo, sistema de priorizaciÃ³n de issues por impacto, y recomendaciones accionables generadas por algoritmos.`
          },
          {
            title: "Reportes Automatizados de ConsolidaciÃ³n Multi-entidad",
            prompt: `Crea sistema de reportes automÃ¡ticos para organizaciones con mÃºltiples entidades que incluya: consolidaciÃ³n automÃ¡tica de estados financieros, eliminaciÃ³n de transacciones intercompaÃ±Ã­a, conversiÃ³n de monedas automÃ¡tica, reportes por entidad y consolidado, anÃ¡lisis de contribuciÃ³n por subsidiaria, reportes de compliance por jurisdicciÃ³n, reconciliaciÃ³n automÃ¡tica entre entidades, reportes de transfer pricing, anÃ¡lisis de synergies y duplicidades. Define proceso de validaciÃ³n cruzada entre entidades, manejo de diferentes calendarios fiscales, y reportes especiales para matriz/holding y reguladores.`
          }
        ]
      },
      {
        title: "Dashboards Ejecutivos",
        prompts: [
          {
            title: "Dashboard Ejecutivo Integral en Tiempo Real",
            prompt: `DiseÃ±a un dashboard ejecutivo integral que muestre en una sola pantalla: performance financiera actual vs. objetivos con grÃ¡ficos de tendencia, top 5 KPIs crÃ­ticos con semÃ¡foros de alerta, cash flow proyectado a 13 semanas, anÃ¡lisis de rentabilidad por lÃ­nea de negocio, principales riesgos identificados y su evoluciÃ³n, opportunities pipeline y su valor potencial, mÃ©tricas de eficiencia operativa clave, comparativos vs. competencia donde disponible. El dashboard debe ser interactivo, permitir drill-down a detalle, actualizarse automÃ¡ticamente, ser responsive para mÃ³viles, y incluir funcionalidad de exportaciÃ³n y comparticiÃ³n.`
          },
          {
            title: "Dashboard de Performance vs. Budget DinÃ¡mico",
            prompt: `Desarrolla un dashboard interactivo enfocado en anÃ¡lisis presupuestario que incluya: vista de performance actual vs. budget con % de cumplimiento, anÃ¡lisis de variaciones por categorÃ­a (volumen, precio, mix, eficiencia), forecast actualizado vs. budget original, anÃ¡lisis de sensibilidad con escenarios, waterfall charts mostrando evoluciÃ³n mes a mes, heatmap de performance por departamento/regiÃ³n, identificaciÃ³n automÃ¡tica de principales drivers de desviaciÃ³n, proyecciÃ³n de cierre de aÃ±o basada en tendencias actuales. Incluye capacidad de simulaciÃ³n de escenarios y herramientas de forecasting colaborativo.`
          },
          {
            title: "Dashboard de Risk Management Ejecutivo",
            prompt: `Crea un dashboard especializado en visualizaciÃ³n de riesgos financieros para nivel ejecutivo que muestre: mapa de calor de riesgos por probabilidad e impacto, mÃ©tricas de exposiciÃ³n por tipo de riesgo (crÃ©dito, mercado, operacional, liquidez), tendencias en scoring de riesgo y early warnings, stress test results bajo diferentes escenarios, concentraciÃ³n de riesgos por cliente/proveedor/regiÃ³n, efectividad de controles implementados, costo de capital ajustado por riesgo, anÃ¡lisis de correlaciÃ³n entre diferentes riesgos. Dashboard debe incluir simulador de impacto y herramientas de what-if analysis para estrategias de mitigaciÃ³n.`
          }
        ]
      },
      {
        title: "AnÃ¡lisis de Variaciones",
        prompts: [
          {
            title: "Sistema de AnÃ¡lisis de Variaciones Multi-dimensional",
            prompt: `Desarrolla un sistema comprensivo de anÃ¡lisis de desviaciones presupuestarias que descomponga variaciones en: variaciÃ³n por volumen (cantidad vendida vs. presupuestada), variaciÃ³n por precio (precio real vs. presupuestado), variaciÃ³n por mix (cambio en composiciÃ³n de productos/servicios), variaciÃ³n por eficiencia (costos unitarios real vs. presupuesto), variaciÃ³n por timing (diferencias temporales), variaciÃ³n por FX (impacto cambiario), variaciones extraordinarias/one-time. Para cada tipo de variaciÃ³n incluye: metodologÃ­a de cÃ¡lculo, asignaciÃ³n de responsabilidad por Ã¡rea, impacto en forecast, acciones correctivas recomendadas, y anÃ¡lisis de tendencias histÃ³ricas.`
          },
          {
            title: "AnÃ¡lisis Predictivo de Desviaciones",
            prompt: `Crea un sistema de anÃ¡lisis predictivo que identifique desviaciones presupuestarias antes de que ocurran, incluyendo: modelos predictivos basados en indicadores adelantados, anÃ¡lisis de correlaciÃ³n entre variables operativas y financieras, identificaciÃ³n de patrones estacionales y cÃ­clicos, early warning system para desviaciones significativas, anÃ¡lisis de sensibilidad ante cambios en variables clave, simulaciÃ³n de escenarios probable/optimista/pesimista, recomendaciones automÃ¡ticas de acciones preventivas. Sistema debe generar alertas proactivas con suficiente tiempo para acciones correctivas y facilitar reforecasting dinÃ¡mico.`
          },
          {
            title: "Framework de Accountability en Desviaciones",
            prompt: `DiseÃ±a un framework integral de responsabilidad por desviaciones presupuestarias que establezca: matriz de responsabilidad por tipo de desviaciÃ³n y Ã¡rea organizacional, umbrales de tolerancia por nivel jerÃ¡rquico y tipo de mÃ©trica, proceso de escalamiento para desviaciones crÃ­ticas, metodologÃ­a de anÃ¡lisis de causas raÃ­z con accountability, sistema de scoring de performance presupuestaria por responsable, incentivos y consecuencias ligados a cumplimiento presupuestario, proceso formal de explicaciÃ³n y plan de acciÃ³n para desviaciones, seguimiento de efectividad de acciones correctivas implementadas.`
          }
        ]
      },
      {
        title: "Reportes de Compliance",
        prompts: [
          {
            title: "Sistema Integral de Reportes Regulatorios",
            prompt: `Desarrolla un sistema completo de reportes de cumplimiento regulatorio que cubra: reportes fiscales (declaraciones mensuales, anuales, informativas), reportes laborales (nÃ³minas, seguridad social, parafiscales), reportes financieros regulatorios (superintendencias, bancos centrales), reportes de comercio exterior (importaciones, exportaciones), reportes ambientales cuando aplique, reportes de precios de transferencia, reportes de prevenciÃ³n de lavado de dinero. Para cada reporte incluye: cronograma de presentaciÃ³n, validaciones de calidad, proceso de aprobaciÃ³n, backup de respaldo, y tracking de status de presentaciÃ³n.`
          },
          {
            title: "Dashboard de Compliance en Tiempo Real",
            prompt: `Crea un dashboard de compliance que monitoree en tiempo real: status de todas las obligaciones regulatorias pendientes, semÃ¡foros de alerta por proximidad a fechas lÃ­mite, tracking de multas o sanciones histÃ³ricas y su follow-up, mÃ©tricas de calidad en presentaciÃ³n de reportes (% error, re-trabajo), anÃ¡lisis de riesgo de compliance por Ã¡rea regulatoria, costo total de compliance (tiempo, recursos, multas), benchmarking de performance vs. mejores prÃ¡cticas del sector, anÃ¡lisis de impacto de cambios regulatorios en pipeline. Dashboard debe facilitar priorizaciÃ³n de esfuerzos y asignaciÃ³n eficiente de recursos de compliance.`
          },
          {
            title: "Reportes de AuditorÃ­a de Compliance",
            prompt: `DiseÃ±a reportes especializados para auditorÃ­as de cumplimiento (internas y externas) que incluya: inventario completo de obligaciones regulatorias aplicables, matriz de cumplimiento con evidencia de soporte, identificaciÃ³n de gaps o Ã¡reas de mejora, evaluaciÃ³n de efectividad de controles internos de compliance, anÃ¡lisis de riesgo residual post-controles, recomendaciones priorizadas por impacto y esfuerzo de implementaciÃ³n, plan de acciÃ³n con responsables y fechas, mÃ©tricas de seguimiento para mejora continua. Los reportes deben facilitar la certificaciÃ³n ejecutiva de compliance y preparar para auditorÃ­as regulatorias.`
          }
        ]
      }
    ]
  },

  // 5ï¸âƒ£ CUMPLIMIENTO FISCAL PROACTIVO
  {
    title: "âš–ï¸ Cumplimiento Fiscal Proactivo",
    icon: "ðŸ“‹",
    subcategories: [
      {
        title: "Calendarios Fiscales",
        prompts: [
          {
            title: "Calendario Fiscal Integral Automatizado",
            prompt: `Desarrolla un calendario fiscal completo que incluya todas las obligaciones tributarias nacionales, regionales y municipales aplicables a [tipo de empresa/sector], organizando: fechas de vencimiento mensuales, bimestrales, trimestrales y anuales, obligaciones diferenciadas por rÃ©gimen tributario (comÃºn, simplificado, especial), alertas automÃ¡ticas con 30, 15 y 5 dÃ­as de anticipaciÃ³n, categorizaciÃ³n por tipo de impuesto (renta, IVA, industria y comercio, retenciones, parafiscales), indicaciÃ³n de formularios y anexos requeridos, valor estimado de cada obligaciÃ³n, responsable interno asignado, y status de cumplimiento. Incluye funcionalidad para actualizaciÃ³n automÃ¡tica por cambios normativos y sincronizaciÃ³n con sistema contable.`
          },
          {
            title: "Calendario Fiscal con AnÃ¡lisis de Impacto de Cash Flow",
            prompt: `DiseÃ±a un calendario de obligaciones tributarias integrado con proyecciÃ³n de flujo de caja que incluya: cronograma de pagos de impuestos con montos proyectados, anÃ¡lisis de impacto en liquidez por perÃ­odos crÃ­ticos, identificaciÃ³n de oportunidades de diferimiento legal de pagos, estrategias de planificaciÃ³n de pagos para optimizar flujo de caja, anÃ¡lisis de beneficios de pagos anticipados vs. costo de oportunidad, proyecciÃ³n de saldos a favor y compensaciones disponibles, calendar de devoluciones esperadas, planificaciÃ³n de financiamiento para pagos importantes, y alertas de perÃ­odos de alta exigencia de liquidez para impuestos.`
          },
          {
            title: "Calendario de Obligaciones por Entidad MÃºltiple",
            prompt: `Crea un sistema de calendario fiscal para grupo empresarial con mÃºltiples entidades que contemple: matriz consolidada de obligaciones por cada empresa del grupo, diferenciaciÃ³n por jurisdicciones y regÃ­menes aplicables, identificaciÃ³n de obligaciones comunes vs. especÃ­ficas por entidad, cronograma de preparaciÃ³n vs. presentaciÃ³n de cada declaraciÃ³n, dependencias entre obligaciones (informaciÃ³n base requerida), anÃ¡lisis de carga de trabajo por perÃ­odos para planificaciÃ³n de recursos, alertas de conflictos de fechas o sobrecargas operativas, dashboard ejecutivo de cumplimiento grupal, y reportes de eficiencia en gestiÃ³n tributaria. Sistema debe optimizar recursos compartidos y evitar duplicaciÃ³n de esfuerzos.`
          }
        ]
      },
      {
        title: "AnÃ¡lisis de Cambios Normativos",
        prompts: [
          {
            title: "AnÃ¡lisis Integral de Reforma Tributaria",
            prompt: `Desarrolla un anÃ¡lisis comprehensivo de [nueva reforma tributaria/cambio normativo] que incluya: resumen ejecutivo de los cambios mÃ¡s relevantes para nuestro tipo de empresa, comparativo detallado entre normativa anterior vs. nueva, anÃ¡lisis cuantitativo del impacto en carga tributaria anual, identificaciÃ³n de nuevas obligaciones y fechas de implementaciÃ³n, oportunidades de planificaciÃ³n fiscal emergentes, riesgos de cumplimiento y Ã¡reas de incertidumbre jurÃ­dica, recomendaciones de acciones inmediatas vs. mediano plazo, anÃ¡lisis de precedentes administrativos y doctrinarios disponibles, cronograma de implementaciÃ³n por fases, y estrategia de comunicaciÃ³n a stakeholders internos.`
          },
          {
            title: "Impacto Sectorial de Cambios Normativos",
            prompt: `Elabora un anÃ¡lisis especÃ­fico del impacto de [cambio normativo] en el sector [industria especÃ­fica], incluyendo: particularidades del cambio para empresas del sector, anÃ¡lisis comparativo de impacto vs. otros sectores, identificaciÃ³n de ventajas o desventajas competitivas creadas, casos especiales o excepciones aplicables al sector, anÃ¡lisis de precedentes en sectores similares, impacto en estructura de costos sectorial, efectos en pricing y competitividad, recomendaciones especÃ­ficas para empresas del sector, anÃ¡lisis de posicionamiento estratÃ©gico frente al cambio, y evaluaciÃ³n de necesidad de reestructuraciÃ³n de operaciones o estructura corporativa.`
          },
          {
            title: "ComunicaciÃ³n Ejecutiva de Cambios Normativos Urgentes",
            prompt: `Redacta una comunicaciÃ³n ejecutiva urgente sobre [cambio normativo especÃ­fico] dirigida al CEO y CFO, estructurada como un memo ejecutivo de alta prioridad que incluya: SecciÃ³n de Alerta CrÃ­tica con nivel de urgencia (crÃ­tico/alto/medio) con justificaciÃ³n, timeline de implementaciÃ³n obligatorio y fechas clave no negociables, consecuencias especÃ­ficas del incumplimiento (multas, sanciones, restricciones operativas), Contexto y AnÃ¡lisis con resumen ejecutivo del cambio en mÃ¡ximo 3 pÃ¡rrafos, comparaciÃ³n antes/despuÃ©s de la regulaciÃ³n, Ã¡reas de negocio impactadas directamente, benchmarking de cÃ³mo estÃ¡n respondiendo competidores e industria, Impacto Financiero Cuantificado con inversiÃ³n requerida desglosada (tecnologÃ­a, personal, consultorÃ­a, procesos), costos de cumplimiento anuales estimados, riesgos financieros de incumplimiento (multas potenciales, pÃ©rdida de licencias), impacto en flujo de caja por trimestres, ROI o anÃ¡lisis costo-beneficio cuando aplique, Plan de AcciÃ³n Ejecutivo con matriz de decisiones crÃ­ticas con opciones, pros/contras y recomendaciÃ³n, roadmap de implementaciÃ³n con hitos verificables, recursos humanos y presupuesto especÃ­fico requerido, dependencias crÃ­ticas y riesgos de ejecuciÃ³n, mÃ©tricas de Ã©xito e indicadores de cumplimiento, Recomendaciones EstratÃ©gicas con priorizaciÃ³n vs. otros proyectos corporativos (matriz de impacto/esfuerzo), prÃ³ximos pasos inmediatos (primeras 48-72 horas), y Solicitudes EspecÃ­ficas con aprobaciones requeridas con deadline.`
          }
        ]
      },
      {
        title: "OptimizaciÃ³n Fiscal",
        prompts: [
          {
            title: "Plan Integral de OptimizaciÃ³n Fiscal Anual",
            prompt: `Desarrolla un plan estratÃ©gico de optimizaciÃ³n fiscal que incluya: anÃ¡lisis de la carga tributaria actual por tipo de impuesto, identificaciÃ³n de oportunidades de ahorro fiscal legales, evaluaciÃ³n costo-beneficio de cada estrategia propuesta, anÃ¡lisis de riesgo tributario vs. beneficio esperado, cronograma de implementaciÃ³n por prioridad e impacto, estimaciÃ³n de ahorros fiscales anuales por estrategia, requerimientos de cambios operativos o estructurales, necesidades de documentaciÃ³n de respaldo, anÃ¡lisis de sostenibilidad a largo plazo de cada estrategia, consideraciones de riesgo reputacional, y plan de monitoreo continuo de efectividad.`
          },
          {
            title: "OptimizaciÃ³n de Estructura Corporativa",
            prompt: `DiseÃ±a una estrategia de optimizaciÃ³n de estructura corporativa para minimizar carga fiscal que contemple: anÃ¡lisis de la estructura actual y su eficiencia fiscal, evaluaciÃ³n de estructuras alternativas (holding, subsidiarias, sucursales), anÃ¡lisis de beneficios fiscales por jurisdicciÃ³n, estrategias de precios de transferencia entre entidades, optimizaciÃ³n de flujos de dividendos y regalÃ­as, consideraciÃ³n de tratados de doble tributaciÃ³n, anÃ¡lisis de thin capitalization rules, evaluaciÃ³n de regÃ­menes especiales disponibles, anÃ¡lisis de substance requirements, costos de restructuraciÃ³n vs. beneficios esperados, y timeline de implementaciÃ³n con aspectos regulatorios.`
          },
          {
            title: "Estrategias de Diferimiento y Timing Fiscal",
            prompt: `Elabora estrategias de optimizaciÃ³n fiscal basadas en timing y diferimiento que incluyan: anÃ¡lisis de oportunidades de diferimiento de ingresos, estrategias de aceleraciÃ³n de deducciones, optimizaciÃ³n del reconocimiento de ingresos y gastos, planificaciÃ³n de realizaciones de inversiones, estrategias de compensaciÃ³n de pÃ©rdidas fiscales, anÃ¡lisis de beneficios de depreciaciÃ³n acelerada, planificaciÃ³n de distribuciÃ³n de utilidades, timing Ã³ptimo para reestructuraciones, consideraciÃ³n de cambios normativos futuros, anÃ¡lisis de valor presente neto de estrategias de timing, riesgos de timing agresivo, y implementaciÃ³n prÃ¡ctica de estrategias seleccionadas.`
          }
        ]
      },
      {
        title: "GestiÃ³n de Riesgos Tributarios",
        prompts: [
          {
            title: "Matriz Integral de Riesgos Tributarios",
            prompt: `Desarrolla una matriz comprehensiva de riesgos tributarios que identifique y evalÃºe: riesgos por tipo de impuesto (renta, IVA, retenciones, territoriales), riesgos por proceso (determinaciÃ³n, declaraciÃ³n, pago, fiscalizaciÃ³n), evaluaciÃ³n de probabilidad e impacto financiero de cada riesgo, anÃ¡lisis de riesgos por posiciones fiscales adoptadas, identificaciÃ³n de Ã¡reas grises o interpretativas, evaluaciÃ³n de calidad de documentaciÃ³n de respaldo, anÃ¡lisis de precedentes desfavorables aplicables, riesgos de auditorÃ­a por sectores de alta fiscalizaciÃ³n, evaluaciÃ³n de controles internos tributarios existentes, cuantificaciÃ³n de exposiciÃ³n mÃ¡xima por riesgo, y plan de mitigaciÃ³n priorizado.`
          },
          {
            title: "AnÃ¡lisis de Riesgo en Posiciones Fiscales Agresivas",
            prompt: `EvalÃºa el riesgo tributario de posiciones fiscales especÃ­ficas adoptadas o en consideraciÃ³n, incluyendo: anÃ¡lisis legal de la solidez de cada posiciÃ³n, evaluaciÃ³n de precedentes administrativos y jurisprudenciales, anÃ¡lisis de doctrina tributaria aplicable, evaluaciÃ³n del apetito de riesgo vs. beneficio fiscal, anÃ¡lisis de probabilidad de cuestionamiento en auditorÃ­a, estimaciÃ³n de costos de defensa y posibles sanciones, evaluaciÃ³n de impacto reputacional de cuestionamientos, anÃ¡lisis de estrategias de documentaciÃ³n defensiva, consideraciÃ³n de consultas previas a autoridades, evaluaciÃ³n de settlements o acuerdos preventivos, estrategias de exit si el riesgo se materializa, y recomendaciÃ³n final sobre adopciÃ³n de la posiciÃ³n.`
          },
          {
            title: "Sistema de Early Warning Tributario",
            prompt: `DiseÃ±a un sistema de alertas tempranas para riesgos tributarios que incluya: identificaciÃ³n de indicadores de riesgo (red flags) por tipo de impuesto, mÃ©tricas que sugieren mayor probabilidad de auditorÃ­a, monitoreo de changes en interpretaciÃ³n administrativa, alertas por vencimiento de estatutos de limitaciÃ³n, seguimiento de litigios tributarios del sector, monitoreo de cambios en criterios de fiscalizaciÃ³n, indicadores de inconsistencias en declaraciones, alertas de desviaciones significativas vs. sector, sistema de scoring de riesgo tributario general, dashboard de alertas por criticidad, protocolos de escalamiento por nivel de riesgo, y plan de acciones preventivas automÃ¡ticas.`
          }
        ]
      },
      {
        title: "DocumentaciÃ³n y Defensa",
        prompts: [
          {
            title: "Sistema Integral de DocumentaciÃ³n Tributaria",
            prompt: `Desarrolla un sistema completo de documentaciÃ³n y cumplimiento tributario que incluya: inventario maestro de obligaciones por jurisdicciÃ³n/entidad/impuesto/perÃ­odo, biblioteca de templates estandarizados con control de versiones y matriz RACI de responsabilidades para generaciÃ³n y custodia documental, cronograma dinÃ¡mico de preparaciÃ³n documental con alertas automÃ¡ticas, sistema de control de versiones con historial completo (cambios/fechas/autores) y checklist de validaciÃ³n de completitud por obligaciÃ³n, procedimientos automatizados de respaldo y recuperaciÃ³n probados, data rooms virtuales de solo lectura para acceso rÃ¡pido en auditorÃ­as y documentaciÃ³n detallada de procesos de cÃ¡lculo y determinaciÃ³n de impuestos, repositorio de evidencia de controles internos tributarios vinculada a soporte, protocolos de confidencialidad con acceso basado en roles, encriptaciÃ³n de datos y pistas de auditorÃ­a inmutables. Cada componente debe incluir: especificaciones tÃ©cnicas, flujos de trabajo, responsables y mÃ©tricas de cumplimiento.`
          },
          {
            title: "Expediente Defensivo Ante AuditorÃ­as",
            prompt: `Crea un expediente defensivo completo preparado para potenciales auditorÃ­as tributarias que contenga: memorando legal de posiciones adoptadas con sustento normativo, documentaciÃ³n completa de transacciones significativas, evidencia de business rationale para decisiones fiscales, contratos y documentos soporte de operaciones, documentaciÃ³n de precios de transferencia cuando aplique, evidencia de cumplimiento de obligaciones formales, memorando de controles internos tributarios implementados, anÃ¡lisis de consistencia entre posiciones contables y fiscales, documentaciÃ³n de consultas realizadas a asesores, precedentes favorables aplicables a nuestras posiciones, y estrategia de presentaciÃ³n organizada por temas/impuestos.`
          },
          {
            title: "DocumentaciÃ³n de Transfer Pricing y Operaciones Internacionales",
            prompt: `Elabora documentaciÃ³n especializada para cumplimiento en precios de transferencia y operaciones internacionales que incluya: master file y local file segÃºn estÃ¡ndares OCDE, anÃ¡lisis econÃ³mico de precios de transferencia aplicados, documentaciÃ³n de comparables y benchmarks utilizados, evidencia de substance en operaciones internacionales, documentaciÃ³n de business rationale para estructuras internacionales, contratos intercompany con tÃ©rminos arm's length, documentaciÃ³n de funciones, activos y riesgos por entidad, evidencia de decision-making process en operaciones internacionales, documentaciÃ³n de intangibles y su valoraciÃ³n, anÃ¡lisis de cadena de valor global, y preparaciÃ³n para auditorÃ­as coordinadas internacionales.`
          }
        ]
      }
    ]
  },

  // 6ï¸âƒ£ AUDITORÃA Y CONTROL ROBUSTO
  {
    title: "ðŸ” AuditorÃ­a y Control Robusto",
    icon: "ðŸ”Ž",
    subcategories: [
      {
        title: "Programas de AuditorÃ­a",
        prompts: [
          {
            title: "DiseÃ±o de Programa Integral de AuditorÃ­a",
            prompt: `ActÃºa como auditor senior certificado (CIA/CPA) con experiencia en [sector especÃ­fico]. DiseÃ±a un programa de auditorÃ­a integral para evaluar [proceso/Ã¡rea especÃ­fica] que incluya: (a) AnÃ¡lisis detallado del entorno regulatorio aplicable (normas locales, internacionales, sectoriales), (b) Matriz de riesgos estratificada por probabilidad e impacto con metodologÃ­a cualitativa y cuantitativa, (c) Objetivos especÃ­ficos SMART alineados con el apetito de riesgo organizacional, (d) Procedimientos sustantivos y de cumplimiento con tÃ©cnicas de muestreo estadÃ­stico (MUS, estratificado, sistemÃ¡tico), (e) Cronograma detallado con hitos crÃ­ticos y dependencias, (f) AsignaciÃ³n de recursos humanos por nivel de experiencia y especializaciÃ³n, (g) Presupuesto detallado con anÃ¡lisis de sensibilidad, (h) MetodologÃ­a de documentaciÃ³n segÃºn estÃ¡ndares internacionales (IIA, AICPA), (i) Indicadores de calidad y efectividad del programa, (j) Plan de contingencia para riesgos identificados durante la ejecuciÃ³n.`
          },
          {
            title: "Programa Basado en Riesgo Empresarial",
            prompt: `Desarrolla un programa de auditorÃ­a basado en Enterprise Risk Management (ERM) para una organizaciÃ³n con: ingresos anuales de [monto], [nÃºmero] empleados, operaciones en [paÃ­ses/regiones], estructura de gobierno corporativo [descripciÃ³n]. El programa debe incluir: (a) Assessment integral del modelo de tres lÃ­neas de defensa, (b) Mapeo detallado de riesgos operacionales, financieros, regulatorios, reputacionales y estratÃ©gicos, (c) EvaluaciÃ³n del risk appetite statement y tolerancia al riesgo por proceso, (d) MetodologÃ­a de priorizaciÃ³n usando matriz de materialidad vs. riesgo residual, (e) DiseÃ±o de universo auditable con frecuencias basadas en riesgo inherente y calidad de controles, (f) TÃ©cnicas de auditorÃ­a continua y monitoreo en tiempo real, (g) IntegraciÃ³n con comitÃ© de auditorÃ­a y reportes al board, (h) MÃ©tricas de cobertura de riesgo y ROI de actividades de auditorÃ­a, (i) Benchmarking con mejores prÃ¡cticas de la industria, (j) Plan plurianual con revisiones dinÃ¡micas del assessment de riesgo.`
          },
          {
            title: "ActualizaciÃ³n y OptimizaciÃ³n Avanzada de Programa",
            prompt: `Conduce una revisiÃ³n comprehensiva y actualizaciÃ³n del programa de auditorÃ­a para [Ã¡rea especÃ­fica] considerando: (a) Gap analysis contra nuevas regulaciones (SOX, GDPR, COSO 2013, ISO 31000), (b) Impacto de transformaciÃ³n digital y controles en ambiente de nube hÃ­brida, (c) IntegraciÃ³n de analytics avanzados (machine learning, process mining, predictive analytics), (d) Lecciones aprendidas de auditorÃ­as anteriores con anÃ¡lisis de causa raÃ­z de deficiencias, (e) Benchmarking contra peer organizations y leading practices, (f) OptimizaciÃ³n de eficiencia operativa mediante automatizaciÃ³n de procedimientos rutinarios, (g) Desarrollo de competencias del equipo auditor en nuevas tecnologÃ­as y metodologÃ­as, (h) IntegraciÃ³n con sistemas de GRC (Governance, Risk & Compliance), (i) MetodologÃ­a de quality assurance y peer review interno, (j) MediciÃ³n del valor agregado de auditorÃ­a mediante balanced scorecard especÃ­fico.`
          }
        ]
      },
      {
        title: "EvaluaciÃ³n de Controles",
        prompts: [
          {
            title: "EvaluaciÃ³n COSO Avanzada",
            prompt: `Conduce una evaluaciÃ³n exhaustiva del sistema de control interno aplicando COSO 2013 con enfoque en los 17 principios fundamentales. Para cada componente: Ambiente de Control: (a) EvaluaciÃ³n de tone at the top mediante anÃ¡lisis de comunicaciones ejecutivas, decisiones Ã©ticas documentadas y cultura organizacional, (b) Assessment de estructura organizacional, lÃ­neas de reporte y accountability framework, (c) RevisiÃ³n de polÃ­ticas de RRHH, competencias profesionales y evaluaciÃ³n de desempeÃ±o, EvaluaciÃ³n de Riesgos: (d) AnÃ¡lisis de proceso de identificaciÃ³n de riesgos (talleres, entrevistas, anÃ¡lisis de escenarios), (e) EvaluaciÃ³n de metodologÃ­a de assessment de riesgos con matrices probabilidad/impacto calibradas, (f) RevisiÃ³n de proceso de respuesta al riesgo y definiciÃ³n de tolerancia, Actividades de Control: (g) EvaluaciÃ³n de controles preventivos, detectivos y compensatorios con testing de efectividad operativa, (h) AnÃ¡lisis de segregaciÃ³n de funciones y controles de autorizaciÃ³n, (i) RevisiÃ³n de controles sobre procesamiento de informaciÃ³n y reportes financieros, InformaciÃ³n y ComunicaciÃ³n: (j) Assessment de calidad y relevancia de informaciÃ³n para toma de decisiones, (k) EvaluaciÃ³n de efectividad de canales de comunicaciÃ³n internos y externos, Monitoreo: (l) RevisiÃ³n de actividades de monitoreo continuo y evaluaciones separadas, (m) Assessment de proceso de reporte de deficiencias y seguimiento de acciones correctivas.`
          },
          {
            title: "Controles IT y Ciberseguridad",
            prompt: `DiseÃ±a una evaluaciÃ³n comprehensiva de controles IT y ciberseguridad que abarque: Governance IT: (a) EvaluaciÃ³n de alineaciÃ³n entre estrategia IT y objetivos de negocio, (b) Assessment de estructura de governance IT (steering committees, roles y responsabilidades), (c) RevisiÃ³n de polÃ­ticas IT y marco de cumplimiento regulatorio, Controles Generales IT: (d) EvaluaciÃ³n de controles de acceso lÃ³gico (identity management, privileged access, segregaciÃ³n de funciones), (e) Assessment de gestiÃ³n de cambios con metodologÃ­a ITIL/DevOps, (f) RevisiÃ³n de controles de operaciÃ³n IT (job scheduling, monitoring, incident management), (g) EvaluaciÃ³n de controles de respaldo y disaster recovery con testing de efectividad, Ciberseguridad: (h) Assessment de security framework (NIST, ISO 27001) y maturity model, (i) EvaluaciÃ³n de controles de seguridad perimetral y endpoint, (j) Testing de respuesta a incidentes y threat intelligence, (k) RevisiÃ³n de programa de awareness y training en seguridad, Controles de AplicaciÃ³n: (l) EvaluaciÃ³n de controles automatizados en aplicaciones crÃ­ticas (validaciones, cÃ¡lculos, interfaces), (m) Testing de integridad y completitud de datos, (n) RevisiÃ³n de controles de reportes financieros automatizados, Emerging Technologies: (o) Assessment de controles en cloud computing y arquitecturas hÃ­bridas, (p) EvaluaciÃ³n de riesgos en IoT, AI/ML y blockchain implementations.`
          },
          {
            title: "Matriz Avanzada de Controles",
            prompt: `Desarrolla una matriz multidimensional de evaluaciÃ³n de controles internos que incorpore: DimensiÃ³n de Riesgo: (a) Mapping detallado risk-to-control con anÃ¡lisis de cobertura de riesgo, (b) ClasificaciÃ³n de riesgos por categorÃ­a (operacional, financiero, cumplimiento, estratÃ©gico, reputacional), (c) Assessment de riesgo inherente vs. residual post-control, DimensiÃ³n de Control: (d) TaxonomÃ­a de controles (preventivo/detectivo/correctivo, manual/automatizado/semi-automatizado), (e) EvaluaciÃ³n de design effectiveness vs. operating effectiveness, (f) Assessment de frecuencia operativa y precisiÃ³n de controles, DimensiÃ³n de Testing: (g) MetodologÃ­a de testing basada en riesgo con tÃ©cnicas de muestreo apropiadas, (h) DefiniciÃ³n de criterios de efectividad y umbrales de tolerancia de desviaciones, (i) Protocolos de re-testing y validaciÃ³n continua, DimensiÃ³n de Performance: (j) MÃ©tricas de efectividad operativa (tasa de fallos, tiempo de detecciÃ³n, costo por transacciÃ³n), (k) KPIs de eficiencia de controles y anÃ¡lisis costo-beneficio, (l) Benchmarking de controles vs. industry best practices, DimensiÃ³n de Governance: (m) Assignment de ownership y accountability por control, (n) Proceso de actualizaciÃ³n y mantenimiento de controles, (o) IntegraciÃ³n con enterprise risk management y strategic planning, Output Analytics: (p) Dashboard ejecutivo con heatmaps de efectividad de controles, (q) Trending analysis y predictive indicators de deterioro de controles, (r) Reporting diferenciado por audiencia (operacional, management, board).`
          }
        ]
      },
      {
        title: "DetecciÃ³n de Fraude",
        prompts: [
          {
            title: "AnÃ¡lisis Forense Avanzado",
            prompt: `Desarrolla un marco integral de auditorÃ­a forense que detecte irregularidades financieras y operacionales mediante anÃ¡lisis estadÃ­stico avanzado. Implementa la Ley de Benford para analizar primer y segundo dÃ­gito con pruebas chi-cuadrado y estadÃ­sticos z, detecta duplicados exactos y difusos usando scoring de similitud, e identifica transacciones fuera de horario laboral, fines de semana y perÃ­odos crÃ­ticos de cierre. Aplica reconocimiento de patrones para detectar nÃºmeros redondos con significancia estadÃ­stica, vacÃ­os de secuencia en documentos o transacciones, y valores atÃ­picos mediante desviaciones estÃ¡ndar, rangos intercuartÃ­licos y control estadÃ­stico de procesos. Incorpora anÃ¡lisis conductual para identificar patrones anÃ³malos de acceso por usuario, velocidades o volÃºmenes de transacciÃ³n inusuales, y mapea relaciones sospechosas entre proveedores, empleados y clientes mediante anÃ¡lisis de redes. Utiliza tÃ©cnicas avanzadas como algoritmos de machine learning supervisado y no supervisado para scoring de anomalÃ­as, procesamiento de lenguaje natural para analizar justificaciones contables, y social network analysis para detectar colusiÃ³n. Incluye pruebas especÃ­ficas por industria enfocadas en reconocimiento de ingresos con pruebas de corte, anÃ¡lisis de gastos discrecionales y viajes, y detecciÃ³n de empleados fantasma o irregularidades en nÃ³mina. Genera reportes mediante dashboards interactivos con capacidad drill-down, modelos probabilÃ­sticos de puntuaciÃ³n de riesgo, y workflows de gestiÃ³n de casos que preserven evidencia para investigaciones.`
          },
          {
            title: "DetecciÃ³n de Fraude Ocupacional Especializado",
            prompt: `DiseÃ±a un programa de detecciÃ³n de fraude ocupacional basado en el Ãrbol de Fraude de la ACFE. Para apropiaciÃ³n indebida de activos, detecta desnatado de efectivo mediante anÃ¡lisis de depÃ³sitos y conciliaciones, fraude en inventario comparando conteos fÃ­sicos contra registros, y facturaciÃ³n fraudulenta identificando empresas fantasma y compras personales vÃ­a anÃ¡lisis del maestro de proveedores. En corrupciÃ³n, evalÃºa sobornos mediante relaciones inusuales con proveedores y anomalÃ­as de precios, comisiones ilÃ­citas a travÃ©s de manipulaciÃ³n de licitaciones y concentraciÃ³n de proveedores, y extorsiÃ³n econÃ³mica por tÃ©rminos contractuales anormales. Para fraude en estados financieros, examina reconocimiento indebido de ingresos con pruebas de corte y transacciones con partes relacionadas, manipulaciÃ³n de gastos revisando capitalizaciÃ³n y reservas, y declaraciones errÃ³neas mediante pruebas de valuaciÃ³n y deterioro. Analiza seÃ±ales de alerta incluyendo indicadores conductuales de presiÃ³n financiera, evidencia documental alterada, y debilidades de control como segregaciÃ³n de funciones deficiente. Implementa protocolos de investigaciÃ³n con tÃ©cnicas de entrevista estructuradas, anÃ¡lisis forense digital de correos y archivos, y preservaciÃ³n de evidencia bajo estÃ¡ndares de cadena de custodia y admisibilidad legal.`
          },
          {
            title: "Sistema de Alertas Inteligentes de AuditorÃ­a",
            prompt: `Construye sistema de alerta temprana con indicadores cuantitativos (razones financieras, DSO, rotaciÃ³n, mÃ¡rgenes, variaciones presupuesto vs real, KPIs con benchmarking) y cualitativos (comportamiento gerencial, estrÃ©s organizacional, factores externos). Habilita monitoreo tecnolÃ³gico con auditorÃ­a continua automatizada, minerÃ­a de procesos y machine learning para patrones. Desarrolla scoring de riesgo multifactorial con modelado predictivo y evaluaciÃ³n dinÃ¡mica en tiempo real. Gestiona umbrales con lÃ­mites estadÃ­sticos, intervalos de confianza optimizando falsos positivos y protocolos de escalamiento multinivel. Implementa respuesta automatizada con alertas priorizadas, workflows estandarizados, dashboards gerenciales y mejora continua mediante anÃ¡lisis y refinamiento constante.`
          }
        ]
      },
      {
        title: "Hallazgos y Recomendaciones",
        prompts: [
          {
            title: "AnÃ¡lisis Costo-Beneficio Avanzado de Recomendaciones",
            prompt: `Desarrolla un framework sofisticado de priorizaciÃ³n de recomendaciones mediante evaluaciÃ³n cuantitativa de riesgo con distribuciones de probabilidad y simulaciÃ³n Monte Carlo para estimar exposiciÃ³n a pÃ©rdidas, anÃ¡lisis de velocidad de riesgo para determinar rapidez de materializaciÃ³n, y mapeo de interdependencias identificando efectos en cascada. Incorpora anÃ¡lisis financiero integral contemplando costos de implementaciÃ³n, operativos y de oportunidad, cÃ¡lculo de ROI mediante NPV y payback period, y anÃ¡lisis de TCO incluyendo tecnologÃ­a, capacitaciÃ³n y mantenimiento. EvalÃºa alineaciÃ³n estratÃ©gica con objetivos organizacionales, requisitos regulatorios y expectativas de stakeholders, impacto en ventaja competitiva y posicionamiento de mercado, y preparaciÃ³n organizacional para el cambio. Analiza factibilidad de implementaciÃ³n mediante requerimientos de recursos humanos, tecnolÃ³gicos y financieros, cronogramas usando Critical Path Method con gestiÃ³n de dependencias, y complejidad de gestiÃ³n del cambio. Desarrolla mÃ©tricas de creaciÃ³n de valor con KPIs para medir Ã©xito, establecimiento de baseline y objetivos medibles, y seguimiento periÃ³dico con protocolos de ajuste. EvalÃºa impacto en stakeholders con requerimientos de comunicaciÃ³n, anÃ¡lisis de resistencia y estrategias de mitigaciÃ³n, e identifica champions con estrategias de involucramiento. AnÃ¡lisis para validar robustez bajo mÃºltiples escenarios.`
          },
          {
            title: "Plan de AcciÃ³n Detallado de Hallazgos",
            prompt: `Transforma hallazgos de auditorÃ­a en planes ejecutables mediante anÃ¡lisis de causa raÃ­z con diagramas de espina de pescado y 5 porquÃ©s, cuantificaciÃ³n de impacto con anÃ¡lisis de escenarios, y evaluaciÃ³n de stakeholders afectados. Desarrolla soluciones alternativas con anÃ¡lisis pros/contras, investigaciÃ³n de mejores prÃ¡cticas y evaluaciÃ³n de tecnologÃ­as emergentes. Planifica implementaciÃ³n con estructura de desglose de trabajo, hitos, dependencias y anÃ¡lisis de ruta crÃ­tica, asignaciÃ³n de recursos humanos, presupuesto y tecnologÃ­a, y plan de gestiÃ³n de riesgos con estrategias de mitigaciÃ³n. Establece gobierno con asignaciÃ³n clara de roles y responsabilidades, comitÃ© directivo con autoridad apropiada, y plan de comunicaciÃ³n con actualizaciones y escalamiento. Desarrolla marco de monitoreo con KPIs lÃ­deres y rezagados, revisiones de hitos con criterios de Ã©xito, y procedimientos de aseguramiento de calidad. Implementa verificaciÃ³n mediante pruebas de efectividad, auditorÃ­a independiente y documentaciÃ³n de evidencia. Asegura mejora continua capturando lecciones aprendidas, bucles de retroalimentaciÃ³n para optimizaciÃ³n, y planificaciÃ³n de sostenibilidad a largo plazo.`
          },
          {
            title: "Framework de Mejora Continua",
            prompt: `Establece marco de mejora continua integrando recomendaciones de auditorÃ­a con excelencia organizacional mediante comitÃ© directivo con patrocinio C-level y representaciÃ³n interfuncional, centro de excelencia para estandarizaciÃ³n metodolÃ³gica, e integraciÃ³n con comitÃ©s de auditorÃ­a, riesgo y calidad existentes. Integra metodologÃ­as Lean Six Sigma para resoluciÃ³n sistemÃ¡tica de problemas, gestiÃ³n de procesos de negocio para visibilidad end-to-end, y metodologÃ­a Ã¡gil para mejoramiento iterativo. Implementa plataforma GRC integrada para seguimiento centralizado de recomendaciones, riesgos y controles, automatizaciÃ³n de workflows con aprobaciones y notificaciones, y dashboards analÃ­ticos para visibilidad en tiempo real. Desarrolla modelo de madurez de capacidades para evaluar preparaciÃ³n organizacional, benchmarking contra lÃ­deres de industria, y anÃ¡lisis de brechas para identificar oportunidades. Gestiona conocimiento mediante repositorio de mejores prÃ¡cticas, base de datos de lecciones aprendidas con causa raÃ­z, y comunidades de prÃ¡ctica interfuncionales. Integra balanced scorecard para alinear mejoras con objetivos estratÃ©gicos, seguimiento de realizaciÃ³n de valor con mÃ©tricas financieras y no financieras, y mediciÃ³n de ROI del programa. Impulsa cultura mediante framework de gestiÃ³n del cambio, programas de reconocimiento e innovaciÃ³n, y capacitaciÃ³n para desarrollo de capacidades. Asegura sostenibilidad con procesos de quality assurance, monitoreo de regresiÃ³n para prevenir retrocesos, y evaluaciÃ³n periÃ³dica con recalibraciÃ³n de prioridades.`
          }
        ]
      },
      {
        title: "Seguimiento y Cierre",
        prompts: [
          {
            title: "Sistema de Seguimiento Avanzado de Hallazgos",
            prompt: `Desarrolla un protocolo exhaustivo de verificaciÃ³n de cierre de hallazgos de auditorÃ­a que contemple: checklist especÃ­fico de validaciÃ³n por tipo de hallazgo, metodologÃ­a de verificaciÃ³n de evidencias presentadas (documental, observaciÃ³n, re-ejecuciÃ³n, confirmaciÃ³n), evaluaciÃ³n de diseÃ±o y efectividad operativa de controles implementados, pruebas de sostenibilidad de las acciones correctivas (mÃ­nimo 3 meses de operaciÃ³n), verificaciÃ³n de que la acciÃ³n aborda la causa raÃ­z y no solo el sÃ­ntoma, evaluaciÃ³n de cambios en procesos, polÃ­ticas o procedimientos, confirmaciÃ³n de capacitaciÃ³n del personal involucrado, validaciÃ³n de documentaciÃ³n actualizada (manuales, workflows), pruebas independientes de la efectividad del control, evaluaciÃ³n de controles compensatorios implementados, anÃ¡lisis de si se generaron riesgos residuales nuevos, sign-off formal de auditorÃ­a interna con criterios objetivos, comunicaciÃ³n formal de cierre a stakeholders relevantes, y archivo completo del expediente de cierre.`
          },
          {
            title: "VerificaciÃ³n de Cierre Comprehensiva",
            prompt: `Desarrolla un protocolo exhaustivo de verificaciÃ³n de cierre de hallazgos de auditorÃ­a que contemple: checklist especÃ­fico de validaciÃ³n por tipo de hallazgo, metodologÃ­a de verificaciÃ³n de evidencias presentadas (documental, observaciÃ³n, re-ejecuciÃ³n, confirmaciÃ³n), evaluaciÃ³n de diseÃ±o y efectividad operativa de controles implementados, pruebas de sostenibilidad de las acciones correctivas (mÃ­nimo 3 meses de operaciÃ³n), verificaciÃ³n de que la acciÃ³n aborda la causa raÃ­z y no solo el sÃ­ntoma, evaluaciÃ³n de cambios en procesos, polÃ­ticas o procedimientos, confirmaciÃ³n de capacitaciÃ³n del personal involucrado, validaciÃ³n de documentaciÃ³n actualizada (manuales, workflows), pruebas independientes de la efectividad del control, evaluaciÃ³n de controles compensatorios implementados, anÃ¡lisis de si se generaron riesgos residuales nuevos, sign-off formal de auditorÃ­a interna con criterios objetivos, comunicaciÃ³n formal de cierre a stakeholders relevantes, y archivo completo del expediente de cierre. El protocolo debe asegurar que los cierres sean reales, sostenibles y que el riesgo haya sido efectivamente mitigado antes de dar por cerrado cualquier hallazgo.`
          },
          {
            title: "Reporte Ejecutivo EstratÃ©gico de AuditorÃ­a",
            prompt: `Elabora un reporte ejecutivo estratÃ©gico de seguimiento de hallazgos para el ComitÃ© de AuditorÃ­a y Alta DirecciÃ³n que incluya: resumen ejecutivo de una pÃ¡gina con highlights clave, mÃ©tricas agregadas de cumplimiento (% implementaciÃ³n, hallazgos cerrados vs. abiertos, aging promedio), anÃ¡lisis de hallazgos crÃ­ticos abiertos con su impacto en el perfil de riesgo organizacional, hallazgos vencidos con explicaciÃ³n de causas de retraso y plan de acciÃ³n acelerado, tendencias de implementaciÃ³n por Ã¡rea/responsable con benchmarking interno, anÃ¡lisis de reincidencias y hallazgos repetitivos que sugieren problemas sistÃ©micos, evaluaciÃ³n de efectividad de acciones correctivas implementadas, identificaciÃ³n de Ã¡reas con mayor resistencia al cambio o menor cultura de control, impacto agregado de hallazgos no cerrados en exposiciÃ³n al riesgo, reconocimiento de Ã¡reas con mejor desempeÃ±o en remediaciÃ³n, recomendaciones estratÃ©gicas para mejorar tasas de implementaciÃ³n, necesidades de recursos o apoyo ejecutivo identificadas, anÃ¡lisis de implicaciones para el plan de auditorÃ­a del prÃ³ximo perÃ­odo, y solicitud de decisiones o aprobaciones requeridas del comitÃ©.`
          }
        ]
      }
    ]
  },

  // 7ï¸âƒ£ CLIENTES INTERNACIONALES SIN FRONTERAS
  {
    title: "ðŸŒ Clientes Internacionales Sin Fronteras",
    icon: "ðŸŒŽ",
    subcategories: [
      {
        title: "Marcos Contables Internacionales",
        prompts: [
          {
            title: "AnÃ¡lisis Comparativo de Marcos Contables Internacionales",
            prompt: `Desarrolla un anÃ¡lisis comparativo exhaustivo entre [IFRS/US GAAP/normativa local especÃ­fica] aplicable a [tipo de empresa/sector] que incluya: tabla comparativa de principales diferencias en reconocimiento, mediciÃ³n y presentaciÃ³n, anÃ¡lisis de impacto financiero de cada diferencia en los estados financieros, identificaciÃ³n de Ã¡reas de convergencia y divergencia material, requerimientos de revelaciÃ³n distintos entre normativas, tratamiento diferenciado de transacciones crÃ­ticas (arrendamientos, instrumentos financieros, consolidaciÃ³n, revenue recognition), anÃ¡lisis de conceptos fundamentales que difieren (matching principle, substance over form, fair value), impacto en ratios financieros clave por diferencias normativas, requerimientos de conciliaciÃ³n entre marcos contables, anÃ¡lisis de costos de conversiÃ³n/dual reporting, casos prÃ¡cticos de aplicaciÃ³n con ejemplos de la industria, timeline de adopciÃ³n de nuevas normas en cada jurisdicciÃ³n, y recomendaciones sobre quÃ© marco contable utilizar segÃºn objetivos estratÃ©gicos del cliente.`
          },
          {
            title: "EvaluaciÃ³n de Impacto de Cambio de Marco Contable",
            prompt: `Elabora un anÃ¡lisis de impacto integral para la transiciÃ³n de [marco contable actual] a [nuevo marco contable] que contemple: gap analysis detallado entre polÃ­ticas contables actuales vs. requeridas, cuantificaciÃ³n del impacto en balance de apertura y estados financieros comparativos, identificaciÃ³n de transacciones que requerirÃ¡n re-mediciÃ³n o reclasificaciÃ³n, anÃ¡lisis de impacto en covenants bancarios y acuerdos contractuales, evaluaciÃ³n de cambios necesarios en sistemas contables y procesos, necesidades de capacitaciÃ³n del equipo contable y financiero, cronograma de implementaciÃ³n con hitos crÃ­ticos, presupuesto estimado de conversiÃ³n (consultores, sistemas, capacitaciÃ³n), anÃ¡lisis de impacto fiscal de ajustes de conversiÃ³n, estrategia de comunicaciÃ³n a inversores y stakeholders sobre cambios, desarrollo de polÃ­ticas contables nuevas bajo el marco adoptado, plan de auditorÃ­a para primera aplicaciÃ³n, y anÃ¡lisis costo-beneficio de la conversiÃ³n. Incluye roadmap detallado de implementaciÃ³n por fases.`
          },
          {
            title: "NavegaciÃ³n de Regulaciones Multi-jurisdiccionales",
            prompt: `DiseÃ±a una guÃ­a integral de cumplimiento para empresa que opera en [lista de paÃ­ses/jurisdicciones] que incluya: matriz de requerimientos regulatorios por jurisdicciÃ³n (contables, fiscales, legales), anÃ¡lisis de conflictos entre regulaciones de diferentes paÃ­ses, identificaciÃ³n de normativas extraterritoriales aplicables (FCPA, UK Bribery Act, GDPR), requerimientos de reporte paÃ­s por paÃ­s (country-by-country reporting), obligaciones de registro y licencias profesionales por jurisdicciÃ³n, regulaciones de precios de transferencia aplicables, restricciones de movimiento de capital y repatriaciÃ³n de utilidades, requerimientos de auditorÃ­a local vs. grupo, obligaciones de gobierno corporativo diferenciadas, plazos y calendarios regulatorios consolidados, anÃ¡lisis de riesgos de cumplimiento por mercado, estrategia de estructura legal Ã³ptima considerando regulaciones, y plan de monitoreo continuo de cambios regulatorios. Incluye directorio de autoridades regulatorias y asesores locales recomendados por jurisdicciÃ³n.`
          }
        ]
      },
      {
        title: "GestiÃ³n Multi-moneda",
        prompts: [
          {
            title: "Sistema de Reporteo Multi-moneda Automatizado",
            prompt: `Desarrolla una arquitectura de reporteo financiero en mÃºltiples monedas que incluya: definiciÃ³n de moneda funcional, de presentaciÃ³n y local para cada entidad, metodologÃ­a de conversiÃ³n para cada tipo de partida (monetaria, no-monetaria, patrimonio), tratamiento de diferencias de cambio (P&L vs. OCI), fuentes de datos para tipos de cambio (spot, promedio, histÃ³rico) con validaciones, frecuencia de actualizaciÃ³n de tipos de cambio y proceso de cierre, consolidaciÃ³n multi-moneda con eliminaciones de transacciones intercompaÃ±Ã­a, reportes simultÃ¡neos en moneda local, funcional y de presentaciÃ³n del grupo, anÃ¡lisis de sensibilidad a variaciones cambiarias, dashboard de exposiciÃ³n cambiaria por moneda y por entidad, revelaciones requeridas sobre riesgo cambiario y exposiciÃ³n, conciliaciÃ³n automÃ¡tica de diferencias de conversiÃ³n, simulador de impacto de escenarios cambiarios en resultados consolidados, reportes de performance eliminando efectos FX para anÃ¡lisis operativo, y auditorÃ­a trail completo de conversiones aplicadas.`
          },
          {
            title: "AnÃ¡lisis de Impacto Cambiario en Performance",
            prompt: `Crea un anÃ¡lisis comprehensivo del impacto de fluctuaciones cambiarias en performance financiera que incluya: descomposiciÃ³n de variaciones en resultados entre efectos operativos vs. efectos FX, anÃ¡lisis de impacto de conversiÃ³n (translaciÃ³n) vs. impacto transaccional, cuantificaciÃ³n de exposiciÃ³n econÃ³mica, transaccional y de traslaciÃ³n por moneda, anÃ¡lisis de sensibilidad mostrando impacto en EBITDA, utilidad neta y flujo de caja de movimientos +/-5%, 10% en principales monedas, identificaciÃ³n de coberturas naturales en el negocio (ingresos y costos en misma moneda), evaluaciÃ³n de estrategias de hedging implementadas y su efectividad, anÃ¡lisis de competitividad relativa por movimientos cambiarios en mercados clave, impacto en pricing power y estructura de costos por variaciones FX, proyecciÃ³n de exposiciÃ³n cambiaria futura basada en pipeline comercial, recomendaciones de estrategia de cobertura Ã³ptima considerando costo vs. beneficio, y presentaciÃ³n de resultados 'constant currency' para mejor anÃ¡lisis de performance operativo. Incluye waterfall charts mostrando impacto de cada moneda en resultados consolidados.`
          },
          {
            title: "Revelaciones y Compliance Multi-moneda",
            prompt: `Elabora el paquete completo de revelaciones sobre aspectos multi-moneda para estados financieros y reportes regulatorios que incluya: nota sobre polÃ­ticas contables de conversiÃ³n de moneda extranjera, revelaciÃ³n de monedas funcionales por entidad significativa, anÃ¡lisis de sensibilidad cuantitativo de exposiciÃ³n a riesgo cambiario, revelaciÃ³n de instrumentos de cobertura y contabilidad de coberturas aplicada, detalle de diferencias de cambio reconocidas en P&L vs. OCI, conciliaciÃ³n de movimientos en reserva de conversiÃ³n acumulada, revelaciÃ³n de restricciones a repatriaciÃ³n de capital por controles cambiarios, anÃ¡lisis de concentraciÃ³n de exposiciÃ³n por moneda, revelaciÃ³n de polÃ­ticas de gestiÃ³n de riesgo cambiario, explicaciÃ³n de cambios en moneda funcional si los hubo, impacto de hiperinflaciÃ³n en economÃ­as aplicables (IAS 29), cumplimiento con requerimientos especÃ­ficos de reguladores locales sobre FX, y presentaciÃ³n ejecutiva que explique impacto FX de manera comprensible para stakeholders no financieros. Incluye templates de revelaciÃ³n cumpliendo IFRS 7, ASC 830 y regulaciones locales aplicables.`
          }
        ]
      },
      {
        title: "Entorno Regulatorio Local",
        prompts: [
          {
            title: "GuÃ­a Ejecutiva de Ambiente Regulatorio Local",
            prompt: `Desarrolla una guÃ­a comprensiva del ambiente regulatorio de [paÃ­s especÃ­fico] para ejecutivos internacionales que incluya: overview del sistema legal (common law vs. civil law) y sus implicaciones, estructura del sistema regulatorio contable y de auditorÃ­a, autoridades regulatorias clave y sus competencias (superintendencias, comisiones, ministerios), marco de normatividad contable aplicable y roadmap de convergencia a IFRS, regulaciones fiscales fundamentales (tasas, incentivos, restricciones), regulaciones laborales crÃ­ticas y costos asociados, regulaciones de comercio exterior y aduaneras, regulaciones ambientales y de sostenibilidad, protecciÃ³n de datos y privacidad aplicable, gobierno corporativo y responsabilidades de directores, regulaciones sectoriales especÃ­ficas si aplica, proceso de establecimiento de presencia legal (sucursal vs. subsidiaria), requerimientos de capital mÃ­nimo y restricciones a inversiÃ³n extranjera, anÃ¡lisis de riesgos regulatorios por orden de impacto, y directorio de autoridades con contactos clave. La guÃ­a debe ser estratÃ©gica, prÃ¡ctica y orientada a facilitar decisiones de entrada o expansiÃ³n en el mercado.`
          },
          {
            title: "AnÃ¡lisis de Compliance Regulatorio Local Detallado",
            prompt: `Crea un anÃ¡lisis exhaustivo de requerimientos de cumplimiento regulatorio en [jurisdicciÃ³n especÃ­fica] que incluya: inventario completo de obligaciones regulatorias por tipo (contables, fiscales, laborales, corporativas, sectoriales), cronograma consolidado de filing y reporting requirements, anÃ¡lisis de sanciones y consecuencias por incumplimiento, requerimientos de licencias y permisos especÃ­ficos del negocio, obligaciones de reporte a autoridades estadÃ­sticas, regulaciones de precios de transferencia y documentaciÃ³n requerida, obligaciones de auditorÃ­a legal y rotaciÃ³n de auditores, requerimientos de gobierno corporativo (composiciÃ³n de junta, comitÃ©s), regulaciones de protecciÃ³n al consumidor aplicables, obligaciones ambientales y de responsabilidad social empresarial, regulaciones de competencia y prÃ¡cticas comerciales, requerimientos de informaciÃ³n pÃºblica para empresas listadas o reguladas, procedimientos de inspecciÃ³n y auditorÃ­a por autoridades, anÃ¡lisis de precedentes de enforcement relevantes para el sector, estimaciÃ³n de costos de cumplimiento (profesionales, sistemas, filing fees), y plan de implementaciÃ³n de compliance program. Incluye matriz de riesgos regulatorios priorizados.`
          },
          {
            title: "ComunicaciÃ³n de Cambios Regulatorios Locales a Matriz",
            prompt: `Elabora un reporte ejecutivo sobre [cambio regulatorio especÃ­fico en paÃ­s] dirigido a casa matriz internacional que incluya: resumen ejecutivo del cambio y su materialidad para el negocio, contexto del cambio (razones, proceso legislativo, presiones polÃ­ticas/sociales), descripciÃ³n tÃ©cnica del cambio en regulaciÃ³n y comparaciÃ³n con situaciÃ³n anterior, anÃ¡lisis de impacto operativo en el negocio local (procesos, sistemas, personas), cuantificaciÃ³n del impacto financiero (costos de cumplimiento, impacto en P&L, balance), timeline de implementaciÃ³n y fechas crÃ­ticas, acciones requeridas y recursos necesarios, anÃ¡lisis de cÃ³mo cambio posiciona la operaciÃ³n local vs. competencia, evaluaciÃ³n de si cambio es tendencia regional que podrÃ­a replicarse, riesgos de implementaciÃ³n y plan de mitigaciÃ³n, recomendaciones estratÃ©gicas (mantener operaciÃ³n, expandir, reducir, reestructurar), anÃ¡lisis de precedentes en otros mercados donde operamos, y solicitud de aprobaciones o recursos de casa matriz. El reporte debe balancear rigurosidad tÃ©cnica con claridad para audiencia internacional que puede no conocer el contexto local.`
          }
        ]
      },
      {
        title: "ComunicaciÃ³n Intercultural",
        prompts: [
          {
            title: "Protocolo de ComunicaciÃ³n Intercultural Corporativa",
            prompt: `Desarrolla un protocolo integral de comunicaciÃ³n intercultural para empresa global que incluya: anÃ¡lisis de dimensiones culturales relevantes (Hofstede, Trompenaars) para mercados donde operamos, guÃ­a de estilos de comunicaciÃ³n preferidos por cultura (directo vs. indirecto, contexto alto vs. bajo), protocolos de meetings y presentaciones por cultura (formalidad, estructura, toma de decisiones), anÃ¡lisis de concepto de tiempo y puntualidad por regiÃ³n (monocrÃ³nico vs. policrÃ³nico), consideraciones de jerarquÃ­a y poder en comunicaciÃ³n organizacional, normas de comunicaciÃ³n escrita (emails, reportes) adaptadas culturalmente, protocolos de negociaciÃ³n y persuasiÃ³n por cultura, manejo de conflictos y feedback con sensibilidad cultural, uso apropiado de humor y small talk por contexto cultural, consideraciones de lenguaje no verbal y proxÃ©mica, gestiÃ³n de reuniones virtuales multi-culturales, consideraciones de zona horaria y scheduling internacional, dÃ­as festivos y perÃ­odos de baja actividad por regiÃ³n, protocolos de traducciÃ³n e interpretaciÃ³n cuando requerido, y capacitaciÃ³n en competencia cultural para equipos globales. Incluye casos prÃ¡cticos y escenarios comunes con do's and don'ts especÃ­ficos.`
          },
          {
            title: "AdaptaciÃ³n de Reportes Financieros por Audiencia Cultural",
            prompt: `DiseÃ±a una metodologÃ­a para adaptar reportes financieros segÃºn contexto cultural de la audiencia que contemple: anÃ¡lisis de preferencias de presentaciÃ³n de informaciÃ³n por cultura (datos vs. narrativa, detalle vs. sÃ­ntesis), adaptaciÃ³n de nivel de contexto requerido en reportes (culturas de alto contexto requieren mÃ¡s background), consideraciones sobre uso de visualizaciones y grÃ¡ficos por preferencia cultural, adaptaciÃ³n de executive summary (longitud, nivel de detalle, estructura), manejo de informaciÃ³n negativa o problemÃ¡tica segÃºn cultura (directo vs. suavizado), Ã©nfasis en diferentes mÃ©tricas segÃºn valores culturales (short-term vs. long-term orientation), consideraciones de traducciÃ³n mÃ¡s allÃ¡ de idioma (conceptos, ejemplos, referencias culturales), protocolo de presentaciÃ³n de reportes (formato, timing, follow-up) por cultura, manejo de preguntas y clarificaciones considerando face-saving, adaptaciÃ³n de recomendaciones y calls-to-action por cultura, uso de referencias comparativas relevantes para cada mercado, y protocolo de validaciÃ³n de comprensiÃ³n cross-cultural. Incluye templates de reportes adaptados para principales mercados donde operamos (AmÃ©rica Latina, Asia, Europa, NorteamÃ©rica).`
          },
          {
            title: "GestiÃ³n de Conflictos Interculturales en Equipos Financieros",
            prompt: `Crea un framework para gestiÃ³n de conflictos en equipos financieros multiculturales que incluya: identificaciÃ³n de fuentes comunes de conflicto intercultural (estilos de comunicaciÃ³n, actitudes al tiempo, jerarquÃ­a, toma de decisiones), protocolo de detecciÃ³n temprana de tensiones culturales, metodologÃ­a de anÃ¡lisis de raÃ­z cultural vs. otros factores en conflictos, estrategias de resoluciÃ³n adaptadas culturalmente (mediaciÃ³n, negociaciÃ³n, escalamiento), consideraciones de face-saving y preservaciÃ³n de relaciones, tÃ©cnicas de facilitaciÃ³n para equipos diversos, protocolos de feedback constructivo cross-cultural, establecimiento de normas de equipo que respeten todas las culturas, role-playing de escenarios de conflicto comÃºn con resoluciones, capacitaciÃ³n en inteligencia cultural para lÃ­deres, creaciÃ³n de psychological safety en contexto multicultural, mecanismos de escalamiento cultural neutral, y mediciÃ³n de efectividad de equipo multicultural. Incluye casos de estudio de conflictos tÃ­picos en consolidaciÃ³n financiera, reporting, y coordinaciÃ³n de cierres entre regiones con soluciones culturalmente inteligentes.`
          }
        ]
      },
      {
        title: "ConsolidaciÃ³n Internacional",
        prompts: [
          {
            title: "Proceso de ConsolidaciÃ³n Multi-entidad Global",
            prompt: `DiseÃ±a un proceso integral de consolidaciÃ³n financiera para grupo multinacional que incluya: arquitectura del chart of accounts global con flexibilidad local, definiciÃ³n de reporting packages estandarizados por tipo de entidad, cronograma de cierre consolidado considerando zonas horarias y calendarios locales, proceso de eliminaciones intercompany automatizado con conciliaciÃ³n, metodologÃ­a de conversiÃ³n de monedas con controles de calidad, tratamiento de participaciones no controladoras y joint ventures, proceso de purchase price allocation y amortizaciÃ³n de intangibles, eliminaciÃ³n de utilidades no realizadas en inventarios/activos fijos, ajustes de uniformidad de polÃ­ticas contables entre entidades, proceso de impairment testing de goodwill e inversiones, consolidaciÃ³n de impuesto diferido a nivel grupo, workflow de validaciones y aprobaciones por niveles, reportes de variaciones pre y post-eliminaciones, anÃ¡lisis de contribuciÃ³n por entidad al consolidado, documentaciÃ³n de asuntos tÃ©cnicos y accounting memos, auditorÃ­a trail completo del proceso de consolidaciÃ³n, y dashboard de status del cierre por entidad. Sistema debe permitir mÃºltiple reporting views (statutory, management, regulatory).`
          },
          {
            title: "GestiÃ³n de Intercompany y Eliminaciones",
            prompt: `Desarrolla un sistema robusto de gestiÃ³n de transacciones intercompany que incluya: catÃ¡logo estandarizado de tipos de transacciones intercompany (ventas, servicios, prÃ©stamos, regalÃ­as, management fees), protocolo de documentaciÃ³n de cada tipo de transacciÃ³n, proceso de confirmaciÃ³n bilateral de saldos intercompany, conciliaciÃ³n automÃ¡tica de diferencias con workflow de resoluciÃ³n, anÃ¡lisis de causas comunes de diferencias (timing, FX, cut-off), eliminaciÃ³n de utilidades no realizadas por tipo de activo, tratamiento de impuesto diferido en eliminaciones, gestiÃ³n de prÃ©stamos intercompany y eliminaciÃ³n de intereses, consolidaciÃ³n de cash pools y netting arrangements, eliminaciÃ³n de dividendos y distribuciones intragrupo, tratamiento de garantÃ­as y comfort letters intercompany, anÃ¡lisis de mÃ¡rgenes en transacciones intercompany vs. arm's length, alineaciÃ³n con documentaciÃ³n de precios de transferencia, reportes de aging de saldos intercompany pendientes, y governance del proceso (responsables, plazos, escalamiento). Incluye controles automatizados y dashboard de calidad de informaciÃ³n intercompany.`
          },
          {
            title: "Reporteo Segmentado y Performance Management Global",
            prompt: `Crea un sistema integral de reporteo por segmentos para grupo multinacional que incluya: definiciÃ³n de segmentos reportables (geogrÃ¡ficos, lÃ­neas de negocio, matriz) segÃºn IFRS 8, asignaciÃ³n de ingresos, costos y activos a segmentos con metodologÃ­a consistente, tratamiento de costos corporativos y su allocaciÃ³n/no-allocaciÃ³n a segmentos, mÃ©tricas de performance diferenciadas por tipo de segmento, anÃ¡lisis de rentabilidad por segmento con ratios especÃ­ficos, transfer pricing interno entre segmentos para management reporting, comparativos vs. budget y forecast por segmento, anÃ¡lisis de sinergias y duplicidades entre segmentos, benchmarking de segmentos vs. pure players del mercado, anÃ¡lisis de interdependencias entre segmentos, reportes de performance ajustados por items especiales, revelaciones requeridas por segmento en estados financieros, conciliaciÃ³n entre reporte segmentado y consolidado, dashboard ejecutivo de portfolio de negocios, y balanced scorecard por segmento con KPIs financieros y no financieros. Sistema debe soportar decisiones de asignaciÃ³n de capital y recursos entre segmentos basadas en performance real.`
          }
        ]
      }
    ]
  }
];

export default promptsData;

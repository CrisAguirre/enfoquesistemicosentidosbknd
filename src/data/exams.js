// Banco de preguntas de evaluación — Los Sentidos: Pensamiento Sistémico
// Formato: type 'theory', subtype 'single' | 'multiple', timeLimit (segundos).
// correctAnswers es un arreglo con las opciones correctas exactas.
// El backend oculta correctAnswers al cliente cuando se consulta el examen.

const EXAMS = {
  vista: {
    title: 'La Vista: Ventana al Mundo',
    questions: [
      {
        id: 'vista-1',
        type: 'theory',
        subtype: 'single',
        text: '¿Cuál es la función principal de la retina dentro del subsistema visual?',
        options: [
          'Actuar como transductor biológico que convierte los fotones de luz en impulsos nerviosos bioeléctricos',
          'Enfocar la luz cambiando su curvatura mediante los músculos ciliares',
          'Regular la cantidad de luz que penetra abriendo o cerrando la pupila',
          'Proteger al ojo del polvo y cuerpos extraños ambientales',
        ],
        correctAnswers: [
          'Actuar como transductor biológico que convierte los fotones de luz en impulsos nerviosos bioeléctricos',
        ],
        timeLimit: 90,
      },
      {
        id: 'vista-2',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 2 (Causalidad), ¿cuál es la secuencia correcta del flujo de información visual desde el estímulo hasta la percepción consciente?',
        options: [
          'Fotones de luz → Córnea → Cristalino → Fotorreceptores retinianos → Nervio Óptico → Corteza Occipital',
          'Nervio Óptico → Retina → Córnea → Corteza Frontal → Imagen mental',
          'Fotones de luz → Cristalino → Nervio Óptico → Iris → Fóvea',
          'Corteza Visual → Nervio Óptico → Fotorreceptores → Luz exterior',
        ],
        correctAnswers: [
          'Fotones de luz → Córnea → Cristalino → Fotorreceptores retinianos → Nervio Óptico → Corteza Occipital',
        ],
        timeLimit: 90,
      },
      {
        id: 'vista-3',
        type: 'theory',
        subtype: 'multiple',
        text: 'Selecciona DOS tipos de células fotorreceptoras presentes en la retina humana y su función característica:',
        options: [
          'Conos: responsables de la visión en color y alta agudeza visual diurna',
          'Bastones: altamente sensibles a la luz tenue para visión nocturna y monocromática',
          'Corpúsculos de Pacini: detectores de la presión de la luz solar',
          'Células ciliadas: transforman los colores en vibraciones mecánicas',
        ],
        correctAnswers: [
          'Conos: responsables de la visión en color y alta agudeza visual diurna',
          'Bastones: altamente sensibles a la luz tenue para visión nocturna y monocromática',
        ],
        timeLimit: 90,
      },
      {
        id: 'vista-4',
        type: 'theory',
        subtype: 'single',
        text: 'Cuando pasas de una habitación oscura a la luz solar intensa, la pupila se contrae (miosis). Este fenómeno representa:',
        options: [
          'Un mecanismo homeostático de retroalimentación negativa que estabiliza la cantidad de luz que ingresa a la retina',
          'Un fallo del sistema visual que pierde su capacidad de enfoque',
          'Un proceso que no guarda relación con el cerebro',
          'Una destrucción temporal de los bastones retinianos',
        ],
        correctAnswers: [
          'Un mecanismo homeostático de retroalimentación negativa que estabiliza la cantidad de luz que ingresa a la retina',
        ],
        timeLimit: 90,
      },
      {
        id: 'vista-5',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 4 (Escalas), ¿en qué rango del espectro electromagnético opera la visión humana?',
        options: [
          'Aproximadamente entre 380 nm y 700 nm (luz visible)',
          'Entre 10 nm y 100 nm (rayos ultravioleta extremos)',
          'Entre 1.000 nm y 10.000 nm (infrarrojo térmico)',
          'En frecuencias de radio de 20 Hz a 20.000 Hz',
        ],
        correctAnswers: [
          'Aproximadamente entre 380 nm y 700 nm (luz visible)',
        ],
        timeLimit: 90,
      },
    ],
  },

  oido: {
    title: 'El Oído: Ondas que se Transforman',
    questions: [
      {
        id: 'oido-1',
        type: 'theory',
        subtype: 'single',
        text: '¿En qué estructura del oído interno ocurre la transducción real de vibración mecánica del líquido coclear a potenciales de acción bioeléctricos?',
        options: [
          'En las células ciliadas del Órgano de Corti dentro de la cóclea',
          'En la membrana timpánica',
          'En la cadena de huesecillos (martillo, yunque y estribo)',
          'En el pabellón auricular exterior',
        ],
        correctAnswers: [
          'En las células ciliadas del Órgano de Corti dentro de la cóclea',
        ],
        timeLimit: 90,
      },
      {
        id: 'oido-2',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 1 (Componentes), ¿cuál es el rol de los tres huesecillos del oído medio?',
        options: [
          'Amplificar la presión de la onda sonora transmitida del tímpano hacia la ventana oval',
          'Secretar cerumen para limpiar el conducto auditivo',
          'Interpretar los instrumentos musicales directamente',
          'Evitar que el sonido llegue al cerebro para protegerlo',
        ],
        correctAnswers: [
          'Amplificar la presión de la onda sonora transmitida del tímpano hacia la ventana oval',
        ],
        timeLimit: 90,
      },
      {
        id: 'oido-3',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 4 (Escalas), el rango promedio de frecuencias audibles para un ser humano sano es:',
        options: [
          '20 Hz a 20.000 Hz',
          '0 dB a 10 dB exclusivamente',
          '100.000 Hz a 500.000 Hz',
          '380 nm a 750 nm',
        ],
        correctAnswers: [
          '20 Hz a 20.000 Hz',
        ],
        timeLimit: 90,
      },
      {
        id: 'oido-4',
        type: 'theory',
        subtype: 'multiple',
        text: 'Selecciona DOS consecuencias fisiológicas de exponer el sistema auditivo a intensidades sonoras superiores a 120 dB:',
        options: [
          'Fatiga y daño irreversible de las células ciliadas cocleares',
          'Activación del umbral del dolor como mecanismo de alerta del sistema',
          'Mejora inmediata de la agudeza auditiva nocturna',
          'Transformación instantánea del oído en ojo biológico',
        ],
        correctAnswers: [
          'Fatiga y daño irreversible de las células ciliadas cocleares',
          'Activación del umbral del dolor como mecanismo de alerta del sistema',
        ],
        timeLimit: 90,
      },
      {
        id: 'oido-5',
        type: 'theory',
        subtype: 'single',
        text: 'Hacia qué área de la corteza cerebral viajan las señales codificadas por el nervio vestibulococlear para ser interpretadas como sonido:',
        options: [
          'Lóbulo Temporal (Corteza Auditiva Primaria)',
          'Lóbulo Occipital',
          'Cerebelo únicamente',
          'Médula Espinal sacra',
        ],
        correctAnswers: [
          'Lóbulo Temporal (Corteza Auditiva Primaria)',
        ],
        timeLimit: 90,
      },
    ],
  },

  'olfato-gusto': {
    title: 'Olfato y Gusto: Los Sentidos Químicos',
    questions: [
      {
        id: 'og-1',
        type: 'theory',
        subtype: 'single',
        text: '¿Por qué se clasifica al olfato y al gusto como "sentidos químicos" o quimiorreceptores?',
        options: [
          'Porque sus células receptoras son estimuladas directamente por moléculas químicas disueltas en moco nasal o saliva',
          'Porque producen compuestos químicos sintéticos para el cerebro',
          'Porque funcionan con luz solar en vez de nutrientes',
          'Porque sustituyen por completo la digestión estomacal',
        ],
        correctAnswers: [
          'Porque sus células receptoras son estimuladas directamente por moléculas químicas disueltas en moco nasal o saliva',
        ],
        timeLimit: 90,
      },
      {
        id: 'og-2',
        type: 'theory',
        subtype: 'single',
        text: 'Cuando estamos congestionados por un resfriado, la comida "no nos sabe a nada". Desde el pensamiento sistémico esto demuestra que:',
        options: [
          'El "sabor" es una propiedad emergente de la integración simultánea entre el gusto (papilas) y el olfato retronasal en el cerebro',
          'Las papilas gustativas se destruyen por completo con el moco',
          'El cerebro apaga todos los sentidos cuando la nariz está tapada',
          'El sentido del gusto no existe de forma autónoma',
        ],
        correctAnswers: [
          'El "sabor" es una propiedad emergente de la integración simultánea entre el gusto (papilas) y el olfato retronasal en el cerebro',
        ],
        timeLimit: 90,
      },
      {
        id: 'og-3',
        type: 'theory',
        subtype: 'multiple',
        text: 'Selecciona DOS sabores básicos reconocidos actualmente por la fisiología sensorial:',
        options: [
          'Umami (glutamato / sabroso)',
          'Amargo (frecuentemente asociado en la naturaleza a alcaloides potencialmente tóxicos)',
          'Picante (capsaicina, mediado en realidad por receptores de dolor del tacto)',
          'Metálico puro',
        ],
        correctAnswers: [
          'Umami (glutamato / sabroso)',
          'Amargo (frecuentemente asociado en la naturaleza a alcaloides potencialmente tóxicos)',
        ],
        timeLimit: 90,
      },
      {
        id: 'og-4',
        type: 'theory',
        subtype: 'single',
        text: 'A diferencia de los demás sentidos, las vías olfatorias tienen la particularidad neuroanatómica de:',
        options: [
          'Conectarse directamente con el sistema límbico (amígdala e hipocampo), explicando su poderosa evocación de emociones y memoria',
          'No tener axones ni neuronas',
          'Pasar obligatoriamente por el nervio óptico',
          'Procesarse en la punta de los dedos',
        ],
        correctAnswers: [
          'Conectarse directamente con el sistema límbico (amígdala e hipocampo), explicando su poderosa evocación de emociones y memoria',
        ],
        timeLimit: 90,
      },
      {
        id: 'og-5',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 7 (Estabilidad y Habituación), ¿por qué al cabo de unos minutos dejamos de percibir el olor de nuestro propio perfume?',
        options: [
          'Los receptores olfativos sufren adaptación sensorial rápida para mantener la capacidad de detectar nuevos olores ambientales',
          'El perfume se vuelve invisible para la atmósfera terrestre',
          'El bulbo olfatorio se apaga permanentemente',
          'El cerebro pierde la memoria de las moléculas',
        ],
        correctAnswers: [
          'Los receptores olfativos sufren adaptación sensorial rápida para mantener la capacidad de detectar nuevos olores ambientales',
        ],
        timeLimit: 90,
      },
    ],
  },

  tacto: {
    title: 'El Tacto: La Piel como Sensor',
    questions: [
      {
        id: 'tacto-1',
        type: 'theory',
        subtype: 'single',
        text: '¿Cuál de los siguientes mecanorreceptores de la dermis profunda está especializado en detectar vibraciones rápidas y cambios bruscos de presión?',
        options: [
          'Corpúsculo de Pacini',
          'Célula fototrópica',
          'Corpúsculo de Krause para ácido',
          'Fotorreceptor ciliar',
        ],
        correctAnswers: [
          'Corpúsculo de Pacini',
        ],
        timeLimit: 90,
      },
      {
        id: 'tacto-2',
        type: 'theory',
        subtype: 'single',
        text: '¿Qué representa el "Homúnculo Sensorial de Penfield" en la corteza somatosensorial del cerebro?',
        options: [
          'Un mapa cortical donde el tamaño asignado a cada parte del cuerpo es proporcional a su densidad de receptores y agudeza táctil',
          'Un muñeco anatómico que muestra solo el esqueleto humano',
          'Una enfermedad degenerativa de las articulaciones',
          'Un dibujo que representa los órganos internos del tórax',
        ],
        correctAnswers: [
          'Un mapa cortical donde el tamaño asignado a cada parte del cuerpo es proporcional a su densidad de receptores y agudeza táctil',
        ],
        timeLimit: 90,
      },
      {
        id: 'tacto-3',
        type: 'theory',
        subtype: 'multiple',
        text: 'Selecciona DOS zonas corporales que cuentan con la mayor densidad de mecanorreceptores y por ende mayor representación en el cerebro:',
        options: [
          'Las yemas de los dedos de las manos',
          'Los labios y la lengua',
          'La zona central de la espalda',
          'El codo',
        ],
        correctAnswers: [
          'Las yemas de los dedos de las manos',
          'Los labios y la lengua',
        ],
        timeLimit: 90,
      },
      {
        id: 'tacto-4',
        type: 'theory',
        subtype: 'single',
        text: 'La prueba de "discriminación de dos puntos" demuestra que en la espalda dos puntos deben estar separados varios centímetros para sentirse distintos, mientras que en la yema del dedo bastan 2 mm. Esto ejemplifica:',
        options: [
          'La escala (L4) espacial y la variación del campo receptivo en distintos componentes del sistema tegumentario',
          'Que la piel de la espalda carece por completo de nervios',
          'Un error de cálculo de la vista',
          'Que las yemas de los dedos son más calientes',
        ],
        correctAnswers: [
          'La escala (L4) espacial y la variación del campo receptivo en distintos componentes del sistema tegumentario',
        ],
        timeLimit: 90,
      },
      {
        id: 'tacto-5',
        type: 'theory',
        subtype: 'single',
        text: 'Los nociceptores (terminaciones nerviosas libres encargadas del dolor) tienen como propósito fundamental (L6):',
        options: [
          'Alertar de daño tisular inminente o en curso para desencadenar reflejos protectores de retirada y preservación',
          'Impedir que el cuerpo sienta caricias',
          'Disminuir el consumo de oxígeno de los músculos',
          'Transportar glucosa hacia la piel',
        ],
        correctAnswers: [
          'Alertar de daño tisular inminente o en curso para desencadenar reflejos protectores de retirada y preservación',
        ],
        timeLimit: 90,
      },
    ],
  },

  'integracion-sensorial': {
    title: 'Integración Sensorial: El Cerebro como Eje Central',
    questions: [
      {
        id: 'is-1',
        type: 'theory',
        subtype: 'single',
        text: 'El principio sistémico de que "el todo es mayor que la suma de sus partes" se evidencia en la integración multisensorial porque:',
        options: [
          'La combinación coordinada de señales visuales, auditivas, táctiles y químicas crea una percepción unificada de la realidad imposible de obtener con los sentidos por separado',
          'El cerebro pesa más que los ojos y oídos sumados',
          'Un sentido destruye la información de los otros cuatro',
          'Cada sentido funciona en un cuerpo diferente',
        ],
        correctAnswers: [
          'La combinación coordinada de señales visuales, auditivas, táctiles y químicas crea una percepción unificada de la realidad imposible de obtener con los sentidos por separado',
        ],
        timeLimit: 90,
      },
      {
        id: 'is-2',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 7 (Estabilidad y Resiliencia), cuando una persona pierde la visión, el fenómeno de neuroplasticidad compensatoria consiste en que:',
        options: [
          'Áreas de la corteza visual se reorganizan para procesar información táctil y auditiva, agudizando la percepción de los sentidos remanentes',
          'El cerebro reduce su tamaño a la mitad',
          'Los ojos vuelven a crecer mágicamente en las manos',
          'El sistema sensorial colapsa permanentemente sin remedio',
        ],
        correctAnswers: [
          'Áreas de la corteza visual se reorganizan para procesar información táctil y auditiva, agudizando la percepción de los sentidos remanentes',
        ],
        timeLimit: 90,
      },
      {
        id: 'is-3',
        type: 'theory',
        subtype: 'multiple',
        text: 'Selecciona DOS áreas de la corteza cerebral clave donde convergen e integran las señales de múltiples modalidades sensoriales:',
        options: [
          'Corteza Parietal Posterior (asociación multisensorial y orientación espacial)',
          'Corteza Prefrontal (toma de decisiones basada en integración sensorial)',
          'Glóbulos rojos del bazo',
          'Membrana timpánica externa',
        ],
        correctAnswers: [
          'Corteza Parietal Posterior (asociación multisensorial y orientación espacial)',
          'Corteza Prefrontal (toma de decisiones basada en integración sensorial)',
        ],
        timeLimit: 90,
      },
      {
        id: 'is-4',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 5 (Conservación del flujo de información), ¿qué ocurre con el tren de impulsos bioeléctricos generado por un estímulo?',
        options: [
          'Se conserva la tasa de disparo y la codificación temporal a lo largo del circuito neuronal, transformándose en patrones sinápticos y respuestas motoras',
          'Se desvanece instantáneamente sin dejar rastro en el sistema',
          'Se convierte en materia sólida que llena el cráneo',
          'Se duplica infinitamente hasta recalentar el cuerpo',
        ],
        correctAnswers: [
          'Se conserva la tasa de disparo y la codificación temporal a lo largo del circuito neuronal, transformándose en patrones sinápticos y respuestas motoras',
        ],
        timeLimit: 90,
      },
      {
        id: 'is-5',
        type: 'theory',
        subtype: 'single',
        text: '¿Cuál es el Propósito Global (Lineamiento 6) del sistema nervioso sensorial integrado?',
        options: [
          'Permitir que el organismo interactúe eficazmente con su entorno, detectando oportunidades, riesgos y preservando la vida mediante conductas adaptativas',
          'Aislar al individuo de todo contacto con el exterior',
          'Reemplazar las funciones de los pulmones y el corazón',
          'Gastar energía sin generar ningún comportamiento útil',
        ],
        correctAnswers: [
          'Permitir que el organismo interactúe eficazmente con su entorno, detectando oportunidades, riesgos y preservando la vida mediante conductas adaptativas',
        ],
        timeLimit: 90,
      },
    ],
  },

  pretest: {
    title: 'Pre-Test: Saberes Previos sobre los Sentidos y el Cerebro',
    questions: [
      {
        id: 'pre-1',
        type: 'theory',
        subtype: 'single',
        text: '¿Qué órgano del cuerpo actúa como el procesador central donde se integran e interpretan las señales que captan los 5 sentidos?',
        options: ['El Cerebro', 'El Corazón', 'La Piel', 'El Estómago'],
        correctAnswers: ['El Cerebro'],
        timeLimit: 60,
      },
      {
        id: 'pre-2',
        type: 'theory',
        subtype: 'single',
        text: '¿En qué estructura del ojo se proyecta la luz invertida y se convierte en señales eléctricas?',
        options: ['La Retina', 'La Córnea', 'El Iris', 'La Esclerótica'],
        correctAnswers: ['La Retina'],
        timeLimit: 60,
      },
      {
        id: 'pre-3',
        type: 'theory',
        subtype: 'single',
        text: '¿Qué tipo de energía detecta el sentido del oído?',
        options: ['Ondas mecánicas sonoras en el aire', 'Radiación electromagnética visible', 'Moléculas químicas disueltas', 'Rayos X'],
        correctAnswers: ['Ondas mecánicas sonoras en el aire'],
        timeLimit: 60,
      },
      {
        id: 'pre-4',
        type: 'theory',
        subtype: 'single',
        text: '¿Por qué cuando tenemos gripe la comida pierde casi todo su sabor?',
        options: [
          'Porque gran parte de lo que llamamos "sabor" proviene del olfato y la nariz congestionada no capta los aromas',
          'Porque las papilas de la lengua mueren con la fiebre',
          'Porque la boca se enfría',
          'Porque las bacterias del resfriado comen la comida antes',
        ],
        correctAnswers: [
          'Porque gran parte de lo que llamamos "sabor" proviene del olfato y la nariz congestionada no capta los aromas',
        ],
        timeLimit: 60,
      },
      {
        id: 'pre-5',
        type: 'theory',
        subtype: 'single',
        text: '¿Cuál es el órgano sensorial más grande del cuerpo humano?',
        options: ['La Piel', 'El Hígado', 'La Lengua', 'El Oído interno'],
        correctAnswers: ['La Piel'],
        timeLimit: 60,
      },
      {
        id: 'pre-6',
        type: 'theory',
        subtype: 'single',
        text: '¿Qué nombre recibe el proceso mediante el cual un receptor biológico convierte un estímulo ambiental en una señal nerviosa?',
        options: ['Transducción sensorial', 'Digestión celular', 'Fotosíntesis', 'Mitosis'],
        correctAnswers: ['Transducción sensorial'],
        timeLimit: 60,
      },
      {
        id: 'pre-7',
        type: 'theory',
        subtype: 'single',
        text: 'Desde una mirada sistémica, si falla uno de los sentidos, ¿qué suele ocurrir en el cerebro?',
        options: [
          'El cerebro reorganiza sus circuitos para potenciar la información proveniente de los otros sentidos (neuroplasticidad)',
          'El cerebro deja de funcionar en su totalidad',
          'No ocurre ningún cambio',
          'Se apaga la memoria',
        ],
        correctAnswers: [
          'El cerebro reorganiza sus circuitos para potenciar la información proveniente de los otros sentidos (neuroplasticidad)',
        ],
        timeLimit: 60,
      },
      {
        id: 'pre-8',
        type: 'theory',
        subtype: 'single',
        text: '¿Qué sentido está más estrechamente vinculado a las emociones y a la memoria a largo plazo en el sistema límbico?',
        options: ['El Olfato', 'La Vista', 'El Oído', 'El Equilibrio'],
        correctAnswers: ['El Olfato'],
        timeLimit: 60,
      },
      {
        id: 'pre-9',
        type: 'theory',
        subtype: 'single',
        text: '¿Qué parte de nuestro cuerpo tiene mayor cantidad de receptores táctiles por centímetro cuadrado?',
        options: ['Las yemas de los dedos y los labios', 'La espalda', 'Las rodillas', 'Los hombros'],
        correctAnswers: ['Las yemas de los dedos y los labios'],
        timeLimit: 60,
      },
      {
        id: 'pre-10',
        type: 'theory',
        subtype: 'single',
        text: '¿Cuál es el objetivo principal del pensamiento sistémico al estudiar los sentidos?',
        options: [
          'Comprender cómo interactúan todas las partes entre sí y con el cerebro para permitir nuestra supervivencia y adaptación',
          'Memorizar nombres anatómicos en latín sin entender su función',
          'Aislar cada sentido y estudiarlo como si funcionara solo',
          'Reemplazar los libros de biología por dibujos estáticos',
        ],
        correctAnswers: [
          'Comprender cómo interactúan todas las partes entre sí y con el cerebro para permitir nuestra supervivencia y adaptación',
        ],
        timeLimit: 60,
      },
    ],
  },

  postest: {
    title: 'Post-Test: Evaluación Final de Pensamiento Sistémico en los Sentidos',
    questions: [
      {
        id: 'post-1',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 1 (Componentes), ¿cuál es el componente común fundamental que comparten todos los órganos de los sentidos?',
        options: [
          'Células receptoras especializadas capaces de convertir estímulos del entorno en potenciales de acción neuronales',
          'Lentes transparentes como el cristalino',
          'Huesos articulados como el martillo y el yunque',
          'Papilas gustativas caliciformes',
        ],
        correctAnswers: [
          'Células receptoras especializadas capaces de convertir estímulos del entorno en potenciales de acción neuronales',
        ],
        timeLimit: 60,
      },
      {
        id: 'post-2',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 2 (Causalidad), ¿qué ocurre cuando la luz incide sobre los conos y bastones de la retina?',
        options: [
          'Se produce una cascada fotoquímica que modifica el potencial de membrana y envía impulsos por el nervio óptico hacia la corteza visual',
          'La luz calienta el ojo hasta que el cerebro produce sonido',
          'El cristalino se derrite temporalmente',
          'Se desactiva la corteza occipital',
        ],
        correctAnswers: [
          'Se produce una cascada fotoquímica que modifica el potencial de membrana y envía impulsos por el nervio óptico hacia la corteza visual',
        ],
        timeLimit: 60,
      },
      {
        id: 'post-3',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 3 (Representación), el Homúnculo de Penfield muestra manos y boca desproporcionadamente grandes porque:',
        options: [
          'Representa la magnitud de la superficie cortical cerebral asignada a la recepción sensorial de esas regiones corporales',
          'Las personas tienen manos más pesadas que su tronco',
          'El dibujo fue hecho con una técnica defectuosa de perspectiva',
          'Esas partes consumen todo el oxígeno del cuerpo',
        ],
        correctAnswers: [
          'Representa la magnitud de la superficie cortical cerebral asignada a la recepción sensorial de esas regiones corporales',
        ],
        timeLimit: 60,
      },
      {
        id: 'post-4',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 4 (Escalas), ¿cuál de las siguientes magnitudes corresponde al límite biológico de la audición humana sin daño?',
        options: [
          'Hasta aproximadamente 85 dB de exposición prolongada y umbral de dolor cercano a 120-130 dB',
          'Entre 5.000 dB y 10.000 dB',
          'Menos de 1 Hz de frecuencia',
          'Exactamente 500 nm de longitud de onda',
        ],
        correctAnswers: [
          'Hasta aproximadamente 85 dB de exposición prolongada y umbral de dolor cercano a 120-130 dB',
        ],
        timeLimit: 60,
      },
      {
        id: 'post-5',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 5 (Conservación), ¿cómo se conserva el flujo de información en una vía sensorial aferente?',
        options: [
          'La energía del estímulo físico/químico se transduce y se conserva en códigos de frecuencia de impulsos eléctricos hasta los centros de procesamiento',
          'La energía se pierde completamente al tocar la piel',
          'Se crean fotones dentro del cerebro',
          'Los impulsos eléctricos se transforman en agua pura',
        ],
        correctAnswers: [
          'La energía del estímulo físico/químico se transduce y se conserva en códigos de frecuencia de impulsos eléctricos hasta los centros de procesamiento',
        ],
        timeLimit: 60,
      },
      {
        id: 'post-6',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 6 (Propósito), ¿cuál es la razón de ser evolutiva de que el sabor amargo tenga un umbral de detección extraordinariamente bajo?',
        options: [
          'Actuar como un sistema de alerta temprana contra toxinas y venenos vegetales potenciales, protegiendo al organismo de la ingesta letal',
          'Facilitar que las personas prefieran los dulces industriales',
          'Hacer que las plantas sepan más ricas para los herbívoros',
          'No tiene ningún propósito biológico conocido',
        ],
        correctAnswers: [
          'Actuar como un sistema de alerta temprana contra toxinas y venenos vegetales potenciales, protegiendo al organismo de la ingesta letal',
        ],
        timeLimit: 60,
      },
      {
        id: 'post-7',
        type: 'theory',
        subtype: 'single',
        text: 'Desde el Lineamiento 7 (Estabilidad y Homeostasis), la habituación sensorial ante un estímulo constante (como el ruido de fondo de un ventilador) permite:',
        options: [
          'Mantener la estabilidad atencional del cerebro, evitando la sobrecarga y liberando capacidad para detectar estímulos novedosos o peligrosos',
          'Dañar los oídos lentamente',
          'Apagar la corteza temporal',
          'Dormir sin respirar',
        ],
        correctAnswers: [
          'Mantener la estabilidad atencional del cerebro, evitando la sobrecarga y liberando capacidad para detectar estímulos novedosos o peligrosos',
        ],
        timeLimit: 60,
      },
      {
        id: 'post-8',
        type: 'theory',
        subtype: 'single',
        text: 'La propiedad de la "percepción multisensorial emergente" significa que:',
        options: [
          'La experiencia sensorial final (ej: saborear un alimento crujiente o ubicar un objeto en movimiento) es cualitativamente superior y distinta a la simple suma aislada de señales',
          'Todos los sentidos se anulan entre sí produciendo silencio',
          'Solo un sentido puede funcionar a la vez',
          'Los sentidos nunca se conectan en el cerebro',
        ],
        correctAnswers: [
          'La experiencia sensorial final (ej: saborear un alimento crujiente o ubicar un objeto en movimiento) es cualitativamente superior y distinta a la simple suma aislada de señales',
        ],
        timeLimit: 60,
      },
      {
        id: 'post-9',
        type: 'theory',
        subtype: 'single',
        text: 'En una persona con ceguera congénita que lee en Braille, los estudios de neuroimagen demuestran que:',
        options: [
          'La corteza occipital (visual) se activa al procesar los patrones táctiles, demostrando la increíble neuroplasticidad y resiliencia del sistema (L7)',
          'El cerebro se congela en el lóbulo occipital',
          'El tacto se traslada a los ojos',
          'No hay actividad cerebral detectable',
        ],
        correctAnswers: [
          'La corteza occipital (visual) se activa al procesar los patrones táctiles, demostrando la increíble neuroplasticidad y resiliencia del sistema (L7)',
        ],
        timeLimit: 60,
      },
      {
        id: 'post-10',
        type: 'theory',
        subtype: 'single',
        text: 'En conclusión, el modelo sistémico del ser humano nos enseña que el cerebro y los 5 sentidos forman:',
        options: [
          'Un sistema cibernético e interactivo, abierto al entorno, coordinado en redes neuronales para percibir, interpretar y actuar armónicamente',
          'Un conjunto de piezas mecánicas independientes que no se comunican',
          'Un circuito cerrado que ignora el ambiente exterior',
          'Una estructura estática que no cambia a lo largo de la vida',
        ],
        correctAnswers: [
          'Un sistema cibernético e interactivo, abierto al entorno, coordinado en redes neuronales para percibir, interpretar y actuar armónicamente',
        ],
        timeLimit: 60,
      },
    ],
  },
};

module.exports = EXAMS;

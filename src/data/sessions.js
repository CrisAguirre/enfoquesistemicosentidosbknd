// Secuencia didáctica (6 sesiones) — pensamiento sistémico aplicado a Los Sentidos y el Cerebro.
// Lineamientos (Dr. Eliécer Pineda Ballesteros, UDES):
//   1 Componentes, 2 Causalidad, 3 Representación, 4 Escalas,
//   5 Conservación/Balance, 6 Propósito, 7 Estabilidad/Resiliencia.

const SESSIONS = [
  {
    number: 1,
    title: 'Introducción al sistema sensorial y pensamiento sistémico',
    objective: 'Reconocer el cuerpo humano como un macrosistema y los sentidos como subsistemas de entrada sensorial comunicados con el cerebro.',
    lineamientos: [],
    sims: ['introduccion'],
    activities: ['video', 'foro', 'puzzle'],
  },
  {
    number: 2,
    title: 'Componentes y Causalidad en la Vista',
    objective: 'Aplicación de Lineamientos 1 (Componentes) y 2 (Causalidad) en el transductor visual (ojo) y la vía retinotópica.',
    lineamientos: [1, 2],
    sims: ['vista'],
    activities: ['simulacion', 'analisis', 'cuestionario'],
  },
  {
    number: 3,
    title: 'Componentes y Causalidad en el Oído',
    objective: 'Aplicación de Lineamientos 1 (Componentes) y 2 (Causalidad) en la transducción mecanoacústica coclear y nervio vestibulococlear.',
    lineamientos: [1, 2],
    sims: ['oido'],
    activities: ['simulacion', 'analisis', 'cuestionario'],
  },
  {
    number: 4,
    title: 'Representación y Escalas en Olfato y Gusto',
    objective: 'Aplicación de Lineamientos 3 (Representación) y 4 (Escalas/Umbrales de concentración) en la quimiorrecepción nasal y lingual.',
    lineamientos: [3, 4],
    sims: ['olfato-gusto'],
    activities: ['simulacion', 'graficacion', 'sintesis'],
  },
  {
    number: 5,
    title: 'Representación y Escalas en el Tacto',
    objective: 'Aplicación de Lineamientos 3 (Representación) y 4 (Escalas de densidad) en los mecanorreceptores de la piel y el homúnculo sensorial.',
    lineamientos: [3, 4],
    sims: ['tacto'],
    activities: ['simulacion', 'homunculo', 'calculo'],
  },
  {
    number: 6,
    title: 'Visión de Totalidad: El Cerebro e Integración Sensorial',
    objective: 'Aplicación de Lineamientos 5 (Conservación del flujo de información), 6 (Propósito adaptativo) y 7 (Estabilidad/Plasticidad compensatoria) en la integración multisensorial.',
    lineamientos: [5, 6, 7],
    sims: ['integracion-sensorial'],
    activities: ['simulacion-global', 'postest', 'evidencia-final'],
  },
];

module.exports = SESSIONS;

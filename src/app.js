const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');

const apiRoutes = require('./routes/api.routes');

const app = express();

// Configuración dinámica de CORS para soportar Vercel, localhost y orígenes configurados
const isAllowedOrigin = (origin) => {
  if (!origin) return true; // Permite health checks, Postman, curl y llamadas server-to-server
  if (config.corsOrigins.includes(origin)) return true;
  // Permitir producción y ramas de preview en Vercel (*.vercel.app)
  if (/^https:\/\/[a-zA-Z0-9_.-]+\.vercel\.app$/.test(origin)) return true;
  // Permitir localhost y 127.0.0.1 con cualquier puerto de desarrollo
  if (/^http:\/\/localhost(:\d+)?$/.test(origin)) return true;
  if (/^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin)) return true;
  return false;
};

// Middlewares
app.use(
  cors({
    origin: (origin, callback) => {
      if (isAllowedOrigin(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', apiRoutes);

// Ruta de salud
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Los Sentidos API está funcionando correctamente',
    timestamp: new Date().toISOString(),
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    path: req.originalUrl,
  });
});

// Manejo de errores global (next es requerido por Express para middleware de error)
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    error: config.nodeEnv === 'development' ? err.message : 'Error interno del servidor',
  });
});

module.exports = app;

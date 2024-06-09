import express from 'express';
import cors from 'cors';

export class CORS {
  static options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false,
  };

  static configure(app: express.Application): void {
    // CORS middleware
    app.use(cors(CORS.options));

    // Preflight request
    app.options('*', cors(CORS.options));
  }
}

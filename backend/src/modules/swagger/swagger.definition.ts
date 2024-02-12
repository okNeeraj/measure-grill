import config from '../../config/config';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'MeasureGrill API documentation',
    version: '0.0.1',
    description: 'This is a backend application for MeasureGrill',
    license: {
      name: 'MIT',
      url: 'https://github.com/okNeeraj/measure-grill.git',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
      description: 'Development Server',
    },
  ],
};

export default swaggerDefinition;

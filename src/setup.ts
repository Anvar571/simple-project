import { INestApplication, ValidationPipe } from '@nestjs/common';

function setupApplication(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ origin: '*' });
}

export default setupApplication;

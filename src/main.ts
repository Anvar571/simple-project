import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import setupApplication from './setup';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { connectDB, sequelize } from './config/database';

async function bootstrap() {
  const port = process.env.PORT as unknown as number | 5000;
  const app = await NestFactory.create(AppModule);
  setupApplication(app);

  const config = new DocumentBuilder()
    .setTitle('AnySoft-task')
    .setDescription('TO-DO with TASK')
    .setVersion('v1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  await app.listen(port, async () => {
    console.log(`Server liten to ${port} port`);
    await connectDB();
    sequelize.sync({ force: false }).then(() => {
      console.log('Synced database successfully...');
    });
  });
}
bootstrap();

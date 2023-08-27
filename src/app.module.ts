import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres', // Set your database dialect
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME,
      autoLoadModels: true, // Auto import models
      synchronize: true, // Automatically create tables based on models (Dev environment only)
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //impede que sejam enviados campos que não estão no DTO
      forbidNonWhitelisted: true, //informa que os campos não permitidos serão rejeitados
      transform: true, //transforma os dados enviados para o tipo do DTO,
      // como por exemplo: string para number, ou Json para objeto
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

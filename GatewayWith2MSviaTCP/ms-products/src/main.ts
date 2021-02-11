import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const port = process.env.PORT ? Number(process.env.PORT) : 4050;
  const host = !!process.env.HOST ? process.env.HOST : '127.0.0.1';
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host,
      port,
      retryAttempts: 0,
      retryDelay: 0
    },
  });
  await app.listen(() => console.log('ms-products listening on host:', host, 'port:', port, ));
}
bootstrap();
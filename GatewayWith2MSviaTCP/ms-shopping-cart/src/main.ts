import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.MS_SHOPPING_CART_PORT ? Number(process.env.MS_SHOPPING_CART_PORT) : 5050;
  const host = process.env.MS_SHOPPING_CART_HOST ? process.env.MS_SHOPPING_CART_HOST : '127.0.0.1';
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host,
      port,
      retryAttempts: 0,
      retryDelay: 0
    },
  });
  await app.listen(() => console.log('ms-shopping-cart listening on host:', host, 'port:', port, ));
}
bootstrap();
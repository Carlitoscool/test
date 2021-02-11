import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    LoggerModule, 
    ProductsModule, 
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        uri: process.env.MONGOURI
      }),
      inject: [ConfigService],
    })
  ],
  providers: [AppService],
  exports: [ConfigModule]
})
export class AppModule { }

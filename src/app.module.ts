import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { User } from './user/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { ProductService } from './product/product.service';
import { ProductrController } from './product/product.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'pedila8486',
      database: 'nest_users',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Product]),
    ProductModule,
  ],
  controllers: [AppController, UserController, AuthController, ProductrController],
  providers: [AppService, UserService, AuthService, ProductService],
})
export class AppModule {}

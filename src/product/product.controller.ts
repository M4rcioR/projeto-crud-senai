import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';



@Controller('products')
export class ProductrController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productService.getAllproducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number): Product {
    return this.productService.getProductById(id);
  }

  @Post()
  createProduct(@Body() product: Product): Product {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() product: Product): Product {
    return this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): void {
    this.productService.deleteProduct(id);
  }
}
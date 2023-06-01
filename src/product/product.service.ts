import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';



@Injectable()
export class ProductService {
  private products: Product[] = [];

  getAllproducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    const Product = this.products.find(Product => Product.id == id);
    if (!Product) {
      throw new NotFoundException(`Product with ID ${id} not found.`);
    }
    return Product;
  }

  createProduct(Product: Product): Product {
    const newId = this.products.length > 0 ? Math.max(...this.products.map(Product => Product.id)) + 1 : 1;
    const newProduct: Product = { id: newId, ...Product };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: number, Product: Product): Product {
    const index = this.products.findIndex(u => u.id == id);
    if (index !== -1) {
      const updatedProduct = { id, ...Product };
      this.products[index] = updatedProduct;
      return updatedProduct;
    }
    return null;
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex(Product => Product.id == id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
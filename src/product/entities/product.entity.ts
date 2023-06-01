import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @Column()
  precoVenda: number;

  @Column()
  quantidade: number;

  @Column()
  dataVencimento: Date;
}
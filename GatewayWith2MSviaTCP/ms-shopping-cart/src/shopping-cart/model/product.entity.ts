import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import ShoppingCart from "./shopping-cart.entity";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public productId: string;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    public price: number;

    @Column()
    public quantity: number;

    @ManyToOne(type => ShoppingCart, shoppingCart => shoppingCart.products)
    public shoppingCart?: ShoppingCart;

}

export default Product;
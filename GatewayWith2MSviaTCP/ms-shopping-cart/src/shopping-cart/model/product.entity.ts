import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import ShoppingCart from "./shopping-cart.entity";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Index({ unique: true })
    public productId: string;

    @Column()
    public price: number;

    @Column()
    public quantity: number;

    @ManyToOne(type => ShoppingCart, shoppingCart => shoppingCart.products)
    public shoppingCart?: ShoppingCart;

}

export default Product;
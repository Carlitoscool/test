import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class ShoppingCart {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @Index({ unique: true })
    public shoppingCartId: string;

    @Column()
    @Index({ unique: true })
    public userId: string;

    @Column()
    public totalPrice: number;

    @Column()
    public totalQuantity: number;

    @OneToMany(type => Product, product => product.shoppingCart,
        { cascade: ['insert', 'update'], onUpdate: "CASCADE", eager: true })
    public products: Product[];

}

export default ShoppingCart;
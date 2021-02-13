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

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    public totalPrice: number;

    @Column()
    public totalQuantity: number;

    @OneToMany(type => Product, product => product.shoppingCart,
        { cascade: ['insert', 'update'], onUpdate: "CASCADE", eager: true })
    public products: Product[];

}

export default ShoppingCart;
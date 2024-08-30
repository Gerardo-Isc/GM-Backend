import { Bill } from "src/finances/bill/entities/bill.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ database: 'finance', name: 'category' })
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, unique: true })
    name: string;

    @Column({ default: () => { return false } })
    graphic: boolean;

    @Column()
    icon: string;

    @OneToMany(() => Bill, bill => bill.category)
    bills: Bill[];
}

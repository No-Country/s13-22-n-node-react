import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        onUpdate: 'CURRENT_TIMESTAMP',
        name: 'updated_at'
    })
    updatedAt: Date;

    @DeleteDateColumn({
        type: 'timestamp',
        default: null,
    })
    deletedAt: Date;

}
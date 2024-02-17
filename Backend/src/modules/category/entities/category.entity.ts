import{BaseEntity} from "src/common/entity/base.entity";
import{Column, Entity} from "typeorm"; 

@Entity()
export class category extends BaseEntity {
    
    @Column()
    name:string;

    @Column()
    type: string;
}

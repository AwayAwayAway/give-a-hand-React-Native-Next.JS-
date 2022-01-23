import {BelongsToMany, Column, DataType, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";
import { User } from "../users/user.model";
import { UserRoles } from "./user-roles.model";

type RoleCreationAttr = {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttr> {
  @ApiProperty({example: 1, description: 'Unique value'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'ADMIN', description: 'unique value of user role'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({example: 'Admin', description: 'role description'})
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}

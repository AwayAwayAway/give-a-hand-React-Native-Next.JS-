import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

type UserCreationAttr = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttr> {
  @ApiProperty({ example: 1, description: 'Unique value' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@test.com', description: 'email address' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'Jon', description: 'First Name' })
  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Last Name' })
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}

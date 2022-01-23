import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {

  @ApiProperty({example: 'ADMIN', description: 'unique value of user role'})
  readonly value: string;

  @ApiProperty({example: 'Admin', description: 'role description'})
  readonly description: string;
}

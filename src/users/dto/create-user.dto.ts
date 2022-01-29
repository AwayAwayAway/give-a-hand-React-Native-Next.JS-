import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@test.com', description: 'email address' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  readonly password: string;

  @ApiProperty({ example: 'Jon', description: 'First Name' })
  readonly firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Last Name' })
  readonly lastName: string;
}

export class LoginUserDto {
  @ApiProperty({ example: 'user@test.com', description: 'email address' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  readonly password: string;
}

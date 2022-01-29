import { ApiProperty } from '@nestjs/swagger';

export class CreateTopicDto {
  @ApiProperty({
    example: 'Main hook rules',
    description: 'Describe Main Problem',
  })
  readonly title: string;

  @ApiProperty({ example: 'fe', description: 'Choose Section (use e-num)' })
  readonly section: string;

  @ApiProperty({ example: 'Jon', description: 'First Name' })
  readonly contact: string;

  @ApiProperty({
    example: 'Eslint throw warning to my UseEffect dependency',
    description: 'Fully describe your Problem',
  })
  readonly description: string;

  @ApiProperty({ example: 'Jon Doe', description: 'Full Name' })
  readonly author: string;
}

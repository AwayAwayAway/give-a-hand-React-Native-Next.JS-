import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

type TopicCreationAttr = {
  title: string;
  section: string;
  description: string;
  contact: string;
  author: string;
};

@Table({ tableName: 'topics' })
export class Topic extends Model<Topic, TopicCreationAttr> {
  @ApiProperty({ example: 1, description: 'Unique value' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'Title', description: 'Describe Main Problem' })
  @Column({ type: DataType.STRING })
  title: string;

  @ApiProperty({ example: 'fe', description: 'Section (use enum)' })
  @Column({ type: DataType.STRING, allowNull: false })
  section: string;

  @ApiProperty({
    example: 'Some text',
    description: 'Fully describe your Problem',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({
    example: 'contact',
    description: 'Share your skype or telegram here',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  contact: string;

  @ApiProperty({
    example: 'Jon Doe',
    description: "Author's Full Name",
  })
  @Column({ type: DataType.STRING })
  author: string;
}

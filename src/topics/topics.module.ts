import { Module } from '@nestjs/common';
import { TopicService } from './topics.service';
import { TopicsController } from './topics.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Topic } from './topics.model';

@Module({
  providers: [TopicService],
  controllers: [TopicsController],
  imports: [SequelizeModule.forFeature([Topic])],
})
export class TopicsModule {}

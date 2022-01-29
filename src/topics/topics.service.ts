import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Topic } from './topics.model';
import { CreateTopicDto } from './dto/create-topic.dto';

@Injectable()
export class TopicService {
  constructor(@InjectModel(Topic) private topicRepository: typeof Topic) {}

  async createTopic(dto: CreateTopicDto) {
    return await this.topicRepository.create(dto);
  }

  async getAllTopicBySection(section: string) {
    return await this.topicRepository.findAll({ where: { section } });
  }

  async getTopicById(id: number) {
    return await this.topicRepository.findOne({ where: { id } });
  }
}

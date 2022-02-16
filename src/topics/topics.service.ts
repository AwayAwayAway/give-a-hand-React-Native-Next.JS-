import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Topic } from './topics.model';
import { CreateTopicDto } from './dto/create-topic.dto';

@Injectable()
export class TopicService {
  constructor(@InjectModel(Topic) private topicRepository: typeof Topic) {}

  async createTopic(dto: CreateTopicDto) {
    dto.status = false;
    return await this.topicRepository.create(dto);
  }

  async updateTopic(id: any, dto: any) {
    console.log(id);
    console.log(dto);
    // dto.status = false;
    return await this.topicRepository.update(dto, { where: { id } });
  }

  async getAllTopicByQuery(section: string, authorId: number) {
    switch (true) {
      case section !== undefined:
        return await this.topicRepository.findAll({ where: { section } });
      case authorId !== undefined:
        return await this.topicRepository.findAll({ where: { authorId } });
    }
  }

  async getTopicById(id: number) {
    return await this.topicRepository.findOne({ where: { id } });
  }
}

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TopicService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Topics')
@Controller('topics')
export class TopicsController {
  constructor(private topicService: TopicService) {}

  @Post()
  create(@Body() dto: CreateTopicDto) {
    return this.topicService.createTopic(dto);
  }

  @Get('/:value')
  getByValue(@Param('value') value: number) {
    return this.topicService.getTopicById(value);
  }

  @Get()
  getBySection(@Query('section') section: string) {
    return this.topicService.getAllTopicBySection(section);
  }
}

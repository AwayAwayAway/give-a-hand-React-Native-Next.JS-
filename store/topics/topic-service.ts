import axios from "axios";
import {TopicsModel} from "../../shared/models/topics/topics-model";
import {IP} from "../../shared/constants/ip-value";

class TopicService {
  getTopicList(type: string) {
    return axios.get(`${IP.HOME}/topics`, {params: {section: type}});
  }

  getUserTopicList(authorId: number | null) {
    return axios.get(`${IP.HOME}/topics`, {params: {authorId: authorId}});
  }

  getTopicById(id: number) {
    return axios.get(`${IP.HOME}/topics/${id}`);
  }

  sendTopic(topic: TopicsModel, type: string, id?: string) {
    switch (type) {
      case 'new':
        return axios.post(`${IP.HOME}/topics`, topic);
      case 'edit':
        return axios.patch(`${IP.HOME}/topics/${id}`, topic);
    }
  }
}


export const topicService = new TopicService();
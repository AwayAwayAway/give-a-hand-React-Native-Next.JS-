import axios from "axios";
import {LoginModel} from "../../shared/models/login/login-model";
import {TopicsModel} from "../../shared/models/topics/topics-model";
import {IP} from "../../shared/constants/ip-value";

class TopicService {
  getTopicList(type: string) {
    return axios.get(`${IP.HOME}/topics`, {params: {section: type}});
  }

  sendTopic(topic: TopicsModel, type: string) {
    switch (type) {
      case 'new':
        return axios.post(`${IP.HOME}/topics`, topic);
    }
  }
}


export const topicService = new TopicService();
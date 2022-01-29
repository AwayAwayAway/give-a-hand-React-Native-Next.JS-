import axios from "axios";
import {LoginModel} from "../../shared/models/login/login-model";

class TopicService {
  getTopicList(type: string) {
    return axios.get('http://10.104.2.46:5000/topics', {params: {section: type}});
  }
}


export const topicService = new TopicService();
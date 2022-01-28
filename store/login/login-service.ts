import axios from "axios";
import {LoginModel} from "../../shared/models/login/login-model";

class LoginService {
  login(userCredits: LoginModel, type: string) {
    switch (type) {
      case 'signIn':
        return axios.post('http://10.104.2.46:5000/auth/login', {...userCredits});
      case 'signUp':
        return axios.post('http://10.104.2.46:5000/auth/registration', {...userCredits});
    }
  }
}

export const loginService = new LoginService();
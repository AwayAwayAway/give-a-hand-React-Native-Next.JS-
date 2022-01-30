import axios from "axios";
import {LoginModel} from "../../shared/models/login/login-model";
import {IP} from "../../shared/constants/ip-value";

class LoginService {
  login(userCredits: LoginModel, type: string) {
    switch (type) {
      case 'signIn':
        return axios.post(`${IP.HOME}/auth/login`, {...userCredits});
      case 'signUp':
        return axios.post(`${IP.HOME}/auth/registration`, {...userCredits});
    }
  }
}

export const loginService = new LoginService();
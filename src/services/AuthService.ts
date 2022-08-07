import axios from "axios";
import UrlService from "./UrlService";
import CookieService from "./CookieService";

const expiresAt = 60 * 24;

class AuthService {
  
  async login(username: string, password: string) {
    
    const response = await axios.post(UrlService.loginUrl(), {
      username,
      password,
    });
    if (response.data.token) {
      let date = new Date();
      date.setTime(date.getTime() + expiresAt * 60 * 1000);
      const options = { path: "/", expires: date };
      CookieService.set("token", response.data.token, options);
      return true;
    }
    return response.data;
  }
}

export default new AuthService();

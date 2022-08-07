import axios from "axios";
import UrlService from "./UrlService";

class ProductService {
  async list() {
    const response = await axios.get(UrlService.productUrl(), {
    });
    return response.data;
  }
}

export default new ProductService();

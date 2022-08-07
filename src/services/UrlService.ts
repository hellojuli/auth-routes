let apiDomain = "";
if (process.env.NODE_ENV === "production") {
  apiDomain = "https://dummyjson.com/";
} else {
  apiDomain = "https://dummyjson.com/";
}

class UrlService {
  static loginUrl() {
    return apiDomain + "auth/login";
  }
  static productUrl() {
    return apiDomain + "products";
  }
}

export default UrlService;

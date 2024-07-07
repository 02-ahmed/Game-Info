import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f371911cc60a48deb7be643aa5799df9'
  }
})
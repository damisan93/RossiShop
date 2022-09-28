import axios from 'axios';

const getData = async (data, { resolve, reject }) => {
    const url = "http://localhost:8081/authenticationctr";
    const header = { headers: { Authorization: "Bearer " + data}};
    try {
      const response = await axios.get(url, header);
      resolve(response); 
    }
    catch (error) {
      resolve(error.response);
    }
    
}

export default (data) =>
  new Promise((resolve, reject) => {
    getData(data, { resolve, reject });
  });
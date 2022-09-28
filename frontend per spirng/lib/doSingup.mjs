import axios from 'axios';

const doSingup = async (data, { resolve, reject }) => {

    const url = "http://localhost:8081/user/singup"

    try {
      const response = await axios({
        method: 'post',
        url: url,
        headers: {'Content-Type': 'application/json', }, 
        data: data
      });
      resolve(response); 
    }
    catch (error) {
      resolve(error.response);
    }
    
}

export default (data) =>
  new Promise((resolve, reject) => {
    doSingup(data, { resolve, reject });
  });
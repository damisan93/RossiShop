import axios from 'axios';

const getAuth = async (data, { resolve, reject }) => {
    const url = "http://localhost:8081/authenticationctr"
    const authJwt = {
                      "username": data.username,
                      "pwd": data.pwd
                      };
    try {
      const response = await axios({
        method: 'post',
        url: url,
        headers: {'Content-Type': 'application/json', }, 
        data: JSON.stringify(authJwt)
      });
      resolve(response); 
    }
    catch (error) {
      resolve(error.response);
    }
    
}

export default (data) =>
  new Promise((resolve, reject) => {
    getAuth(data, { resolve, reject });
  });
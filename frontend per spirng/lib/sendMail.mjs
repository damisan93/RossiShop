import axios from 'axios';

const sendMail = async (data, { resolve, reject }) => {
    const url = "http://localhost:8082/mail/singup"

    const emailBody = {
      email: data.email,
      username: data.username,
      pwd : data.password,
      nome: data.nome,
      cognome: data.cognome
  }

    try {
      const response = await axios({
        method: 'post',
        url: url,
        headers: {'Content-Type': 'application/json'}, 
        data: emailBody
      });
      resolve(response); 
    }
    catch (error) {
      resolve(error.response);
    }
    
}

export default (data) =>
  new Promise((resolve, reject) => {
    sendMail(data, { resolve, reject });
  });
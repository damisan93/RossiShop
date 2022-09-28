import axios from 'axios';

const updateUser = async (data, userData, {
  resolve,
  reject
}) => {
  const url = "http://localhost:8081/user/update";
  const header = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + data
      
    }
    
  };

  var userDataObj = JSON.parse(JSON.parse(userData.substring(1,userData.length-4)))
  
  try {
    const response = await axios.put(url, userDataObj, header);
    resolve(response);
  } catch (error) {
    resolve(error.response);
  }

}

export default (data, userData) =>
new Promise((resolve, reject) => {
  updateUser(data, userData, {
    resolve,
    reject
  });
});
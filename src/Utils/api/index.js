import axios from '../customAxios';
import uaxios from 'axios';
import config from '../env';


// ------------------------------------------------------------
// ----------------------- Signin ------------------------------
// ------------------------------------------------------------

export const ragisterNewUser = async data => {
  const LoginURL = `${config.API_URL}app/userphoneregistration`;
  try {
    const loginResponse = await uaxios.post(LoginURL, data);
    return loginResponse;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async data => {
  const LoginURL = `${config.API_URL}app/userphonelogin`;
  try {
    const loginResponse = await uaxios.post(LoginURL, data);
    return loginResponse.data;
  } catch (error) {
    console.log(error);
  }
};

export const EditUser = async (id, data) => {
  const UserExistURL = `${config.API_URL}app/edit_profile/${id}`;
  try {
    const response = await axios.put(UserExistURL, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
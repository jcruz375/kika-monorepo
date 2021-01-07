import api from "../services/api";

const token = localStorage.getItem("AuthToken");

const isAuthenticated = async () => {
  return false
  if(token) {
    const response = await api.post('/admin/verifyToken', {
      token
    });
    if(response.data.auth === true) {
      console.log('logadooooooooooooooooo')
      return true
    } else {
      console.log('seu token não é válido');
      return false;
    }
  } else {
    console.log('você não está autenticado');
    return false;
  }
};

export default isAuthenticated;

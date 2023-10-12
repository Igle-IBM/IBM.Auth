
import axios from './axiosinstance'
import { useToast } from 'primevue/usetoast';
import { handleInfo, handleError } from '../services/ToastService';
// const toast = useToast();   

// const showError = (message: string) => {
//   toast.add({ severity: 'error', summary: 'Ocurrio un error', detail: message, life: 3000 });
// };

const AuthService = {
  async login(email: string, password: string) {
    try {
      const response = await axios.post("/auth/login", { email, password });
      return response.data;
    } catch (error: any) {
      var errorMessage = error.response.data || 'Ocurrio un error al comunicarse con el servidor';
      handleError(errorMessage);
    }
  },

  // async register(email: string, password: string) {
  //   try {
  //     const response = await axios.post("/register", { email, password });
  //     return response.data;
  //   } catch (error) {
  //     throw new Error("Registration failed. Please try again later.");
  //   }
  // },
};

export default AuthService;

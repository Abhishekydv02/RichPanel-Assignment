import { toast } from 'react-toastify';

export const notification = (message, error = false) => {
    const options = {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    };

    if (error) {
      toast.error(message, options);
    } else {
      toast.success(message, options);
    }
  };
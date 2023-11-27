import { createContext, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast'

const ToastContext = createContext();

export const useToast = () => {
    return useContext(ToastContext)
}

export const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={[toast]}>
        <Toaster />
        {children}
    </ToastContext.Provider>
  )
}

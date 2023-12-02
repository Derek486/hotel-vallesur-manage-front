import { createContext, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast'

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={[toast]}>
        <Toaster />
        {children}
    </ToastContext.Provider>
  )
}

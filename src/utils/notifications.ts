import { toast } from 'react-toastify'

export const handleError = (message = 'Непредвиденная ошибка') => {
    toast.error(message, { autoClose: false })
}

export const handleSuccess = (message: string) => {
    toast.success(message, { autoClose: 1000, hideProgressBar: true })
}

export const handleWarning = (message: string) => {
    toast.warning(message, { autoClose: 3000, hideProgressBar: true })
}

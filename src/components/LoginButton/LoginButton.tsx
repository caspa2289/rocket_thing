import { FC, useState } from 'react'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { LoginForm } from './LoginForm'

export const LoginButton: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onLoginClick = () => {
        setIsModalOpen(true)
    }

    const handleClose = () => {
        setIsModalOpen(false)
    }

    if (isModalOpen) {
        return (
            <Modal isActive={isModalOpen} onClose={handleClose} size="lg">
                <LoginForm />
            </Modal>
        )
    }

    return (
        <Button onClick={onLoginClick} displayType="ghost">
            Войти
        </Button>
    )
}

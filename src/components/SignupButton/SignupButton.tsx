import { FC, useState } from 'react'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { SignupForm } from './SignupForm'

export const SignupButton: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onSignupClick = () => {
        setIsModalOpen(true)
    }

    const handleClose = () => {
        setIsModalOpen(false)
    }

    if (isModalOpen) {
        return (
            <Modal isActive={isModalOpen} onClose={handleClose} size="lg">
                <SignupForm />
            </Modal>
        )
    }

    return <Button onClick={onSignupClick}>Регистрация</Button>
}

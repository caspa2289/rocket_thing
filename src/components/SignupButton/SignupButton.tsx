import { FC, useState } from 'react'
import { Button } from '../Button'
import { Modal } from '../Modal'

export const SignupButton: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onSignupClick = () => {
        setIsModalOpen(true)
    }

    const handleClose = () => {
        setIsModalOpen(false)
    }

    if (isModalOpen) {
        return <Modal isActive={isModalOpen} onClose={handleClose} size="lg" />
    }

    return <Button onClick={onSignupClick}>Регистрация</Button>
}

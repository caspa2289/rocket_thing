import styles from './App.module.css'
import { Button, TButtonSize } from '../Button'
import { useState } from 'react'

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [text, setText] = useState('')
    const [size, setSize] = useState<TButtonSize>('md')

    const handleDemoClick = () => {
        setIsLoading(true)
        setText('dumaem')

        setTimeout(() => {
            setIsLoading(false)
            setText('zakonchili dumat')
        }, 2000)
    }

    return (
        <div className={styles.wrapper}>
            <h3>{text}</h3>
            Пример использования:
            <br />
            <Button size="sm" onClick={() => setSize('sm')}>
                Сделать демо кнопку маленькой
            </Button>
            <Button size="sm" onClick={() => setSize('md')}>
                Сделать демо кнопку средней
            </Button>
            <Button size="sm" onClick={() => setSize('lg')}>
                Сделать демо кнопку большой
            </Button>
            <hr />
            <Button size={size} isLoading={isLoading} onClick={handleDemoClick}>
                Демо кнопка
            </Button>
        </div>
    )
}

export default App

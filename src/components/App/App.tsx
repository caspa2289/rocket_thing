import styles from './App.module.css'
import { Button, TButtonSize } from '../Button'
import { Players } from '../Players'
import { useState } from 'react'

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [text, setText] = useState('')
    const [size, setSize] = useState<TButtonSize>('md')

    function randomFlyTime(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        const rand = min - 0.5 + Math.random() * (max - min + 1)
        return rand
    }

    const handleDemoClick = () => {
        setIsLoading(true)
        setText('dumaem')

        setTimeout(() => {
            setIsLoading(false)
            setText('zakonchili dumat')
        }, randomFlyTime(0, 10000))
    }

    return (
        <div className={styles.wrapper}>
            <Players />
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

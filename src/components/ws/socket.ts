import { io } from 'socket.io-client'

const URL = 'http://localhost:6970'

export const socket = io(URL, {
    autoConnect: false,
})

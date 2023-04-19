import { io } from 'socket.io-client'

const URL = 'https://rocketbackend.up.railway.app:6970'

export const socket = io(URL, {
    autoConnect: false,
})

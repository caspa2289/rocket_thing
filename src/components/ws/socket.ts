import { io } from 'socket.io-client'

const URL = 'https://rocketbackend.up.railway.app'

export const socket = io(URL, {
    autoConnect: false,
})

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8000";

const App = () => { 

    const [notification, setNotification] = useState('Nenhuma notificação por aqui!');
    const [usersConnected, setUsersConnected] = useState(0);
    const [myid, setMyId] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => { 
        const socket = socketIOClient.io(ENDPOINT, { 
            withCredentials:true,
            transports: ['websocket'],
            query: { 
                id: '63599287-f2f7-4973-b8f1-d89689e3e5c2'
            },
        });

        socket.on('new_message', ({ message }) => { 
            console.log(message)
        });

        socket.on('response', data => {
            console.log(data);
        })

        socket.on('connected-users', ({ quantity_users }) => { 
            setUsersConnected(quantity_users);
        });

        socket.on('connected-user', ({ id }) => { 
            setMyId(id);
        });
    },[])

    const sendMessage = async () => {
        try{
            const config = {
                headers: { 
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc190ZWFjaGVyIjpmYWxzZSwiaXNfY29udHJhY3RvciI6dHJ1ZSwiaWF0IjoxNjIwNDgxMzU3LCJleHAiOjE2MjA1Njc3NTcsInN1YiI6IjYzNTk5Mjg3LWYyZjctNDk3My1iOGYxLWQ4OTY4OWUzZTVjMiJ9.FhAYRkRgSZX17HgvbP328w2WmJkQvgVJ5WqnAVQ8S8w`,
                }
            };
            const teste = await axios.post('http://localhost:8000/api/chat/send/f5ec469a-f097-4d7b-8c2c-9960a7cc4184', {message: 'bernardo teste'}, config);
            console.log(teste);
        } catch (error){
            console.log(error.response);
        }
    }

    return (
        <div className="App">
            <p>{notification}</p>
            <p>meu id é = {myid}</p>
            
            <span>{usersConnected} usuário{usersConnected > 0 ? 's' : ''} conectado{usersConnected > 0 ? 's' : ''}</span>
            <button onClick={()=> sendMessage()}>send</button>
        </div>
    );
}

export default App;
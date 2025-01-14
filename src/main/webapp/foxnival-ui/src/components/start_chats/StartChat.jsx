import React, { useEffect, useState } from 'react'
import ChatSideBar from './ChatSideBar'
import { Paper } from '@mui/material'
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

export default function StartChat() {

  const [stompClient, setStompClient] = useState(null);
  const [receiver, setReceiver] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const connectWebSocket = () => {
      const sock = new SockJS('http://localhost:8080/ws');
      const client = Stomp.over(sock);
      client.connect({}, () => {
        setStompClient(client);
        console.log("connected..", stompClient);

        console.log("subcribing with ", receiver);
        
        client.subscribe(`/user/${receiver}/private`, (message) => {
          console.log("message receive ", message);
          const receiveMessage = JSON.parse(message);
          console.log(receiveMessage);
          
          // setMessages((prev) => [...prev, receiveMessage]);
        })

      })

    }
    connectWebSocket();
  }, [receiver])

  const sendMessage = (msg) => {
    console.log("sendign message ", msg);
    
    if(stompClient) {
      stompClient.send(`/app/send-private-message`, {}, JSON.stringify(msg));
    }
  }

  return (
    <Paper square elevation={0} sx={{ height: "100vh", display: 'flex' }}>
      <ChatSideBar setReceiver = {setReceiver} sendMessage = {sendMessage} messages={messages} setMessages={setMessages}/>
      {/* <ChatBox/> */}
    </Paper>
  );
}

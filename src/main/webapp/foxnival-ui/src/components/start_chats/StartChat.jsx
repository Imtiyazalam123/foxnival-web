import React, { useEffect, useState } from 'react'
import ChatSideBar from './ChatSideBar'
import { Paper } from '@mui/material'
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

export default function StartChat() {

  const [loggedinUser, setLoggedinUser] = useState(null)

  const [stompClient, setStompClient] = useState(null);
  const [receiverUser, setReceiverUser] = useState(null);
  const [privateMessages, setPrivateMessages] = useState(new Map());

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (currentUser) {
      setLoggedinUser(currentUser);
    }
  }, []);

  useEffect(() => {
    const connectWebSocket = () => {
      const sock = new SockJS('http://localhost:8080/ws');
      const client = Stomp.over(sock);
      client.connect({}, () => {
        setStompClient(client);
        console.log("connected..", stompClient);

        console.log("subcribing with ", receiverUser);

        client.subscribe(`/user/${loggedinUser?.id}/private`, (message) => {
          console.log("message receive ", message);
          const receiveMessage = JSON.parse(message.body);
          console.log("receiveMessage ", receiveMessage);
          if (!privateMessages?.get(receiveMessage?.senderId)) {
            setPrivateMessages(new Map(privateMessages.set(receiveMessage?.senderId, [...receiveMessage])));
          } else {
            privateMessages?.get(receiveMessage?.senderId).push(receiveMessage);
            setPrivateMessages(new Map(privateMessages));
          }

        })

      })

    }
    if (loggedinUser) {
      connectWebSocket();
    }
  }, [loggedinUser])

  const sendMessage = (msg) => {
    console.log("sendign message ", msg);

    if (stompClient) {
      stompClient.send(`/app/send-private-message`, {}, JSON.stringify(msg));
      if (!privateMessages?.get(receiverUser?.id)) {
        setPrivateMessages(new Map(privateMessages.set(msg?.receiverId, [msg])));
      } else {
        privateMessages?.get(receiverUser?.id).push(msg);
        setPrivateMessages(new Map(privateMessages));
      }

    }
  }

  const handleOnSelectUser = (selectedUser) => {

    let msg = [{
      id: 1,
      senderId: 1,
      receiverId: 2,
      text: "Hi Jane, how are you?",
      timestamp: "2023-10-01T10:00:00",
    },
    {
      id: 2,
      senderId: 2,
      receiverId: 1,
      text: "I'm good, thanks! How about you?",
      timestamp: "2023-10-01T10:05:00",
    },
    {
      id: 3,
      senderId: 1,
      receiverId: 3,
      text: "Hello Alice!",
      timestamp: "2023-10-01T11:00:00",
    },]


    let msg1 = [{
      senderId: 1,
      receiverId: 5,
      text: "Hi Jane, how are you?",
      timestamp: "2023-10-01T10:00:00",
    },
    {
      senderId: 5,
      receiverId: 1,
      text: "I'm good, thanks! How about you?",
      timestamp: "2023-10-01T10:05:00",
    },];

    if (selectedUser) {
      if (!privateMessages?.get(selectedUser?.id)) {
        setPrivateMessages(new Map(privateMessages.set(selectedUser?.id, msg1)));
      }
      console.log("privateMessages ", privateMessages);
    }
    setReceiverUser(selectedUser);
    console.log("recieverUser ", receiverUser);
    // setPrivateMessages(msg); 

  }

  return (
    <Paper square elevation={0} sx={{ height: "100vh", display: 'flex' }}>
      <ChatSideBar receiverUser={receiverUser} sendMessage={sendMessage} privateMessages={privateMessages} loggedinUser={loggedinUser} handleOnSelectUser={handleOnSelectUser} />
      {/* <ChatBox/> */}
    </Paper>
  );
}

import React, { useState, useEffect } from 'react'
import Button from './Button'
import Message from "@/app/components/Message"
import Cookies from "js-cookie";

interface Message {
    id: number;
    message: string;
    sender: boolean;
    recipient_id: number;
    sender_id:number
}
interface propsType {
    reciepient_id: number
}
function MessageInput({ reciepient_id }: propsType) {
    const authToken = Cookies.get("auth_token");
    const sender_id=parseInt(Cookies.get("user_id")??"");
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    
    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:8000/ws/chat/${reciepient_id}/?token=${authToken}`);

        socket.onopen = () => {
            console.log('WebSocket connection established.');
        };

        socket.onmessage = (event) => {
            const receivedMessage = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed.');
        };

        return () => {
            socket.close();
        };
    }, []);

    const sendMessage = () => {
        if (message.trim() === '') {
            return;
        }
        const newMessage: Message = {
            id: Date.now(), // Generate a unique ID for the message
            message: message,
            sender: true, // Assume the user is the sender
            recipient_id: reciepient_id,
            sender_id:sender_id,
        };
        const socket = new WebSocket(`ws://localhost:8000/ws/chat/${reciepient_id}/?token=${authToken}`);
        socket.onopen = () => {
            socket.send(JSON.stringify({ newMessage }));
            setMessage('');
        };
        socket.onclose = () => {
            console.log('WebSocket connection closed.');
        };
    
        // setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage('');
        
    };
    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
        console.log(messages)
    };
    return (<div>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {messages.map((msg) => (
            <Message key={msg.id} text={msg.message} send={msg.sender_id != reciepient_id} />
        ))}
        </div>

        <div className="bg-gray-200 px-4 py-2 flex items-center">
            <input
                value={message}
                placeholder='type your message'
                onChange={handleMessageChange}
                type="text" className="flex-1 bg-white border border-gray-300 rounded-full px-4 py-2 mr-2 focus:outline-none" />
            <Button type={"submit"} title={"send"} disabled={false} onClick={sendMessage} />


        </div>

    </div>
    )
}

export default MessageInput
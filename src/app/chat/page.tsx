"use client"
import Message from "@/app/components/Message"
import React from 'react'
import MessageInput from "../components/MessageInput"
import Link from "next/link"
import ChatSidebar from "../components/ChatSidebar"
// import HigherOrderComponent from "@/helpers/Hoc"
function ChatArea() {
//  const Hoc=HigherOrderComponent(ChatSidebar)
  return (
    <div className="flex-1 overflow-y-auto bg-gray-100 px-4 py-2 flex">
      {/* Sidebar */}
     <ChatSidebar/>
     {/* <Hoc/> */}

      {/* Main content */}
      {/* <div className="flex-1">
        <div className="overflow-y-auto">
        
          <Message text="Hello!" send={true} />
          <Message text="Hi there!" send={false} />
        </div>

        <MessageInput />
      </div> */}
    </div>





  )
}

export default ChatArea
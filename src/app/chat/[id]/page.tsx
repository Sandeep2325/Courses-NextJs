"use client"
import Message from "@/app/components/Message"
import React from 'react'
import MessageInput from "../../components/MessageInput"
import Link from "next/link"
import ChatSidebar from "../../components/ChatSidebar"

function ChatArea({params}: any) {
  
  const users = [
    "user 1", "user 2"
  ]
  return (
    <div className="flex-1 overflow-y-auto bg-gray-100 px-4 py-2 flex">
    
      {/* Sidebar */}
     <ChatSidebar/>

      {/* Main content */}
      <div className="flex-1">
        {/* Messages container */}
        <div className="overflow-y-auto">
          <h3 className=" flex justify-center bg-blue-200 p-5 mb-5">Chat Now</h3>
        </div>

        {/* Message input */}
        <MessageInput reciepient_id={params.id.toString()} />
      </div>
    </div>





  )
}

export default ChatArea
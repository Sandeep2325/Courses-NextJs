"use client"
import React from "react";
import MessageInput from "./MessageInput";
interface messagetype {
    text: String;
    send: boolean;
}
function Message({ text, send }: messagetype) {
    return (
        <div className={`flex justify-${send ? 'end' : 'start'} mb-2`}>
            <div className={`max-w-xs rounded-lg overflow-hidden ${send ? 'bg-green-500 text-white' : 'bg-gray-300'} p-2`}>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Message;

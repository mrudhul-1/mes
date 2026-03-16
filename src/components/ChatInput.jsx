import { useState } from "react"

const ChatInput = ({onSend,onImageSend}) => {
  const [Message, setmessage] =useState("")

  const handelsend = () => {
    if(Message.trim() === "") return

    onSend(Message)
    setmessage("")
  }
  return (
    <div className="w-full flex">

        <input type="text" placeholder="Type your message..." value={Message} onChange={(e)=>setmessage(e.target.value)} className="flex-1 px-4 py-2 border rounded-full outline-none" />

        <input type="file" accept="image/*" onChange={(e)=>onImageSend(e.target.files[0])}/>

        <button onClick={handelsend} className="px-4 py-2 bg-indigo-600 text-white rounded-full">Send</button>
      
    </div>
  )
}

export default ChatInput

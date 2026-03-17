import { useState } from "react"
import ChatMessage from "./Chatmessage"
import ChatInput from "./ChatInput"

const ChatWindow = () => {

  const [messages, setMessages] = useState([
    { text: "Welcome to ChatApp 👋", sender: "bot" },
    { text: "What's your name?", sender: "bot" }
  ])

  const [isTyping,setIsTyping] = useState(false)

  const [step,setStep] = useState(0)

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:"",
    profilePic:null
  })

  // step logic***********************************************************************

  const handleSend = (msg) => {

    const newMessage = { text: msg, sender: "user", type: "text" }

    setMessages((prev)=>[...prev, newMessage])

      

  if(step === 0){
    setFormData(prev => ({...prev,name:msg}))

    setIsTyping(true)
    setTimeout(()=>{
      setIsTyping(false)
      setMessages(prev => [...prev,
        {text:`Nice to meet you ${msg}!`,sender:"bot",type:"text"},
        {text:"What's your email?", sender:"bot",type:"text"}
      ])
    },1500)

    setStep(1)

  }

  else if(step === 1){

    setFormData(prev => ({...prev,email:msg}))

    setIsTyping(true)
    setTimeout(()=>{
      setIsTyping(false)
      setMessages(prev => [...prev,
        {text:"create a password",sender:"bot",type:"text"}
      ])
    },1500)

    setStep(2)
  }

  else if(step === 2){
    setFormData(prev => ({...prev,password:msg}))

    setIsTyping(true)
    setTimeout(()=>{
      setIsTyping(false)
      setMessages(prev => [...prev,
        {text:"Confirm your password",sender:"bot",type:"text"}
      ])
    },1500)

    setStep(3)
  }

  else if(step === 3){

    if(msg === formData.password){
      setFormData(prev => ({...prev,confirmpassword:msg}))
      setIsTyping(true)
       setTimeout(()=>{
        setIsTyping(false)
        setMessages(prev => [...prev,
          {text:"✅ Password confirmed!", sender:"bot",type:"text"},
        {text:"Please upload your profile photo 📷", sender:"bot",type:"text"}
        ])
       },1500)

       setStep(4)
    }

    else{
      
      setIsTyping(true)
      setTimeout(()=>{
       setIsTyping(false)
        setMessages(prev => [...prev,
          {text:"Password do not match. Please retype password.",sender:"bot",type:"text"}
        ])
      },1000)
    }
  }
}

// this is image logic ***********************************************************

const handleImageSend = (file) => {

  if(step !== 4) return

  const imageURL = file

  // Show image in chat
  setMessages(prev => [...prev,
    { text: imageURL, sender: "user", type: "image" }
  ])

  // Save to formData
  setFormData(prev => ({...prev,
    profilePic: file
  }))

  setIsTyping(true)

  setTimeout(() => {

    setIsTyping(false)

    setMessages(prev => [
      ...prev,
      { text: "Nice photo! 👍", sender: "bot", type:"text" },
      { text: "Click register to complete ✅", sender: "bot", type:"text" }
    ])

  },1500)

  setStep(5)
}

  



  return (
    <div className="w-full h-full flex flex-col justify-between">

      {/* Message Area */}
      <div className="flex flex-col gap-4 p-6 overflow-y-auto">

        {messages.map((msg, index)=>(
          <ChatMessage
            key={index}
            text={msg.text}
            sender={msg.sender}
            type={msg.type}
          />
        ))}

        {/* BOT TYPING INDICATOR */}
        {isTyping && (
        <ChatMessage text="Typing..." sender="bot" />
        )}

      </div>

      {/* Input Area */}
      {step < 5 && (<ChatInput onSend={handleSend} onImageSend={handleImageSend} step={step}/>)}

      {step === 5 && (
      <div className="p-4">
      <button className="w-full h-12 bg-green-600 text-white rounded-xl">
      Register
      </button>
      </div>)}

    </div>
  )
}

export default ChatWindow

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
    profilpic:""
  })

  const handleSend = (msg) => {

    const newMessage = { text: msg, sender: "user" }

    setMessages((prev)=>[...prev, newMessage])

      // step logic***********************************************************************

  if(step === 0){
    setFormData(prev => ({...prev,name:msg}))

    setIsTyping(true)
    setTimeout(()=>{
      setIsTyping(false)
      setMessages(prev => [...prev,
        {text:`Nice to meet you ${msg}!`,sender:"bot"},
        {text:"What's your email?", sender:"bot"}
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
        {text:"create a password",sender:"bot"}
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
        {text:"Confirm your password",sender:"bot"}
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
          {text:"✅ Password confirmed!", sender:"bot"},
        {text:"Please upload your profile photo 📷", sender:"bot"}
        ])
       },1500)

       setStep(4)
    }

    else{
      
      
      setTimeout(()=>{
        
        setMessages(prev => [...prev,
          {text:"Password do not match. Please retype password.",sender:"bot"}
        ])
      },1000)
    }
  }
  }

  const handeImageSend = (onImageSend)=>{

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
          />
        ))}

        {/* BOT TYPING INDICATOR */}
        {isTyping && (
        <ChatMessage text="Typing..." sender="bot" />
        )}

      </div>

      {/* Input Area */}
      <ChatInput onSend={handleSend} />

    </div>
  )
}

export default ChatWindow

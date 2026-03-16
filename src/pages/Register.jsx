
import ChatWindow from "../components/ChatWindow"


const Register = () => {
  // const handelSend = (msg)=>{
  //   console.log(msg)
  // }
  return (
<div className="w-screen h-screen flex flex-col md:flex-row">
        {/* Left side */}
    <div className="md:w-1/2 w-full md:h-full h-1/2 bg-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
            Chat App
    </div>
        {/* Right side */}
    <div className="md:w-1/2 w-full md:h-full h-1/2 bg-gray-100 flex items-center justify-center ">
        {/* Chat container */}
        {/* <div className="w-full max-w-md flex flex-col gap-4 p-6">

          <Chatmessage text="Welcome to ChatApp 👋" sender="bot" />
          <Chatmessage text="What's your name?" sender="bot" />
          <Chatmessage text="John" sender="user" />

        </div> */}

        {/* <ChatInput onSend={handelSend}></ChatInput> */}

      <ChatWindow></ChatWindow>
        
    </div>
      
</div>
  )
}

export default Register

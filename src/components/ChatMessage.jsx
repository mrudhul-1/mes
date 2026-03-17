

const Chatmessage = ({text,sender,type}) => {
  return (
    // ******************************* audjesting the chat based on the sender******************************
    <div className={`w-full flex  ${sender === "user" ? "justify-end":"justify-start"}`}>
    {/* ******************************** adding the bubble border for the chat ***************************** */}
         <div className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${sender === "user" ? "bg-indigo-600 text-white" : "bg-gray-200 text-black"}`}>
            {type === "image" ? (<img src={text} className="w-24 h-24 rounded-full object-cover" />) : (text)}
        </div>
    </div>
    
  )
}

export default Chatmessage

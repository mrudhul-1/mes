import { useState } from "react"
import ImageCropper from "./ImageCropper"

const ChatInput = ({ onSend, onImageSend, step }) => {

  const [selectedImage, setSelectedImage] = useState(null)
  const [showCropper, setShowCropper] = useState(false)
  const [Message, setmessage] = useState("")

  const handelsend = () => {
    if (Message.trim() === "") return
    onSend(Message)
    setmessage("")
  }

  return (
    <>
      <div className="w-full flex p-2">

        {/* TEXT INPUT (always present) */}
        <input
          type="text"
          placeholder="Type your message..."
          value={Message || ""}
          onChange={(e) => setmessage(e.target.value)}
          disabled={step === 4}
          className="flex-1 px-4 py-2 border rounded-full outline-none"
        />

        {/* SEND BUTTON */}
        {step !== 4 && (
          <button
            onClick={handelsend}
            className="px-4 py-2 bg-indigo-600 text-white rounded-full ml-2"
          >
            Send
          </button>
        )}

        {/* FILE INPUT ONLY AT STEP 4 */}
        {step === 4 && (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0]
              if (!file) return

              const imageURL = URL.createObjectURL(file)
              setSelectedImage(imageURL)
              setShowCropper(true)
            }}
          />
        )}

      </div>

      {/* ✅ IMAGE CROPPER */}
      {showCropper && (
        <ImageCropper
          image={selectedImage}
          onCropDone={(croppedImage) => {
            onImageSend(croppedImage)
            setShowCropper(false)
          }}
          onCancel={() => setShowCropper(false)}
        />
      )}
    </>
  )
}

export default ChatInput

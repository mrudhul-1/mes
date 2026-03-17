import { useState } from "react"
import Cropper from "react-easy-crop"

const ImageCropper = ({ image, onCropDone, onCancel }) => {

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onCropComplete = (croppedArea, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels)
  }

  // convert cropped area to image
  const createCroppedImage = async () => {

  if (!croppedAreaPixels) return  // ✅ FIX

  const img = new Image()
  img.src = image

  await new Promise((resolve) => (img.onload = resolve))

  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")

  canvas.width = croppedAreaPixels.width
  canvas.height = croppedAreaPixels.height

  ctx.drawImage(
    img,
    croppedAreaPixels.x,
    croppedAreaPixels.y,
    croppedAreaPixels.width,
    croppedAreaPixels.height,
    0,
    0,
    croppedAreaPixels.width,
    croppedAreaPixels.height
  )

  const croppedImage = canvas.toDataURL("image/jpeg")

  onCropDone(croppedImage)
}

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">

      {/* Crop Area */}
      <div className="relative w-[300px] h-[300px] bg-black">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1}   // 🔥 square crop
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>

      {/* Controls */}
      <div className="mt-4 flex gap-4">
        <button 
          onClick={onCancel}
          className="px-4 py-2 bg-gray-400 rounded-lg"
        >
          Cancel
        </button>

        <button 
          onClick={createCroppedImage}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Done
        </button>
      </div>

    </div>
  )
}

export default ImageCropper
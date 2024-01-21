import { ChangeEvent, useState } from "react";
import { FiTrash, FiUpload } from "react-icons/fi";

interface ImageItemProps {
  uid: number;
  name: string;
  previewUrl: string;
}

const Upload = () => {
  const [kidImages, setKidsImages] = useState<ImageItemProps[]>([]);

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        handleUpload(image);
      } else {
        alert("Send a image file png or Jpeg");
        return;
      }
    }
  };

  async function handleUpload(image: File) {
    console.log(image);
    const imageItem = {
      name: image.name,
      uid: image.lastModified,
      previewUrl: URL.createObjectURL(image),
    };
    setKidsImages((prev) => [...prev, imageItem]);
  }

  return (
    <div>
      <div className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-normal text-4xl text-green-500">
          Upload Daily Photo
        </h1>
      </div>
      <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-gray-600 h-32">
        <div className="absolute cursor-pointer">
          <FiUpload size={30} color="#000" />
        </div>
        <div className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="opacity-0 cursor-pointer"
            onChange={handleFile}
          />
        </div>
      </button>
      <div className="w-full h-32 items-center flex justify-center relative">
        {kidImages.map((item) => (
          <>
            <button
              key={item.name}
              className="absolute"
              // onClick={() => handleDeleteImage(item)}
            >
              <FiTrash size={28} color="#fff" />
            </button>
            <img
              src={item.previewUrl}
              className="rounded-lg w-full h-32 object-cover"
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Upload;

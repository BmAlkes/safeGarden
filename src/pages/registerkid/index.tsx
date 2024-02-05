import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { FiTrash, FiUpload } from "react-icons/fi";
import axios from "axios";
import api from "@/services/authService";

interface ImageItemProps {
  uid: number;
  name: string;
  previewUrl: string;
}
const schemaForm = z.object({
  name: z.string(),
  lastname: z.string(),
  adress: z.string(),
  parentPhone: z.string(),
  HMO: z.string(),
  allergic: z.string(),
  bloodtype: z.string(),
});
const RegisterKid = () => {
  const [kidsImage, setKidsImages] = useState<ImageItemProps[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaForm),
  });

  const handleFormSubmit = (data: any) => {
    const response = api.post("/api/child/addChild", data);
    console.log(response);
  };
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

  console.log(errors);
  return (
    <section className="container p-2 md:p-8">
      <div className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-normal text-4xl text-green-500">Register Kids</h1>
      </div>
      <div className="efeito-vidro md:w-full w-64">
        <h3 className="font-normal text-2xl text-center my-3 text-green-500">
          Register new kid
        </h3>
        <form className="p-5" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="py-2 md:w-full w-52">
            <label htmlFor="name" className="font-light text-xl">
              Name
            </label>
            <input
              type="text"
              placeholder="type kid name"
              id="name"
              className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-200"
              {...register("name")}
            />
          </div>
          <div className="py-2 md:w-full w-52">
            <label htmlFor="lastname" className="font-light text-xl">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="type kid lastname"
              className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-200"
              {...register("lastname")}
            />
          </div>
          <div className="py-2 md:w-full w-52">
            <label htmlFor="adress" className="font-light text-xl">
              Adress
            </label>
            <input
              type="text"
              placeholder="type kid adress"
              className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-200"
              {...register("adress")}
              id="adress"
            />
          </div>
          <div className="py-2 md:w-full w-52">
            <label htmlFor="phone" className="font-light text-xl">
              Parents Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="type parents phone"
              className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-200"
              {...register("parentPhone")}
            />
          </div>
          <div className="py-2 md:w-full w-52">
            <label htmlFor="HMO" className="font-light text-xl">
              HMO
            </label>
            <input
              type="text"
              id="HMO"
              placeholder="type kid HMO"
              className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-200"
              {...register("HMO")}
            />
          </div>
          <div className="py-2 md:w-full w-52">
            <label htmlFor="allergic" className="font-light text-xl">
              allergic
            </label>
            <input
              type="text"
              placeholder="type kid allergic"
              id="allergic"
              className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-200"
              {...register("allergic")}
            />
          </div>
          <div className="py-2 md:w-full w-52">
            <label htmlFor="blood" className="font-light text-xl">
              Blood Type
            </label>
            <input
              type="text"
              id="blood"
              placeholder="Blood Type"
              className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-200"
              {...register("bloodtype")}
            />
          </div>
          <div className="py-2 flex flex-col">
            <label htmlFor="picture" className="font-light text-xl">
              Picture
            </label>

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
              {kidsImage.map((item) => (
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
          <button
            type="submit"
            className="w-full bg-green-500 h-9 rounded-lg my-5  text-white font-medium text-xl hover:bg-green-600  bottom-8"
          >
            Register
          </button>
        </form>
      </div>
      <Link to="/mykids">
        <button className="bg-green-500 mt-7 text-white font-thin h-10 p-6 flex items-center rounded-lg hover:bg-green-600">
          Back to MyKids
        </button>
      </Link>
    </section>
  );
};

export default RegisterKid;

import { UserContext } from "@/context/authContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FiUpload } from "react-icons/fi";
import api from "@/services/authService";

interface ImageItemProps {
  uid: number;
  name: string;
  previewUrl: string;
}
const schemaForm = z.object({
  kindergardenName: z.string(),
  kindergardenAddress: z.string(),
  kindergardenAuthority: z.string(),
  kindergardenWorkHours: z.string(),
});
const RegisterKindegarden = () => {
  const { user } = useContext(UserContext);
  const [, setGanPic] = useState<ImageItemProps[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaForm),
  });
  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        handleUpload(image);
      } else {
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
    setGanPic((prev) => [...prev, imageItem]);
  }

  const handleRegisterGan = (data: any) => {
    console.log(data);
    try {
      const response = api.post("/api/kindergarden/register", {
        ...data,
        director: [user?.data.user._id],
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  console.log(errors);
  return (
    <section className="container">
      <div className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h2 className="font-normal text-4xl text-green-500">
          Register Kidergarten
        </h2>
      </div>
      {user?.data.user.role !== "director" ? (
        <>
          <h2>You dont have permission to register a Kidergarten</h2>
        </>
      ) : (
        <>
          <section className="container">
            <form
              className="p-5 shadow-2xl rounded-lg"
              onSubmit={handleSubmit(handleRegisterGan)}
            >
              <div className="py-2 md:w-full w-52 mb-3">
                <label htmlFor="" className="font-light text-xl">
                  Kindergarden Name
                </label>
                <input
                  type="text"
                  placeholder="Kindergarden Name"
                  className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-200"
                  {...register("kindergardenName")}
                />
              </div>
              <div className="py-2 md:w-full w-52 mb-3">
                <label htmlFor="address" className="font-light text-xl">
                  Kindergarden Adress
                </label>
                <input
                  type="text"
                  placeholder="Kindergarden Address"
                  id="address"
                  className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-200"
                  {...register("kindergardenAddress")}
                />
              </div>
              <div className="py-2 md:w-full w-52 mb-3">
                <label htmlFor="address" className="font-light text-xl">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Kindergarden Address"
                  id="address"
                  className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-200"
                  {...register("kindergardenAuthority")}
                />
              </div>
              <div className="py-2 md:w-full w-52">
                <label htmlFor="hours" className="font-light text-xl">
                  Kindergarden Start
                </label>
                <input
                  type="text"
                  id="hours"
                  placeholder=" 09-17"
                  className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-200"
                  {...register("kindergardenWorkHours")}
                />
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
              <button
                type="submit"
                className="w-full bg-green-500 h-9 rounded-lg my-5  text-white font-medium text-xl hover:bg-green-600  bottom-8"
              >
                Register
              </button>
            </form>
          </section>
        </>
      )}
    </section>
  );
};

export default RegisterKindegarden;

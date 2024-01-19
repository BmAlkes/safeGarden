import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaForm),
  });

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <section className="container">
      <div className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-normal text-4xl text-green-500">Register Kids</h1>
      </div>
      <div className="efeito-vidro">
        <h3 className="font-normal text-2xl text-center my-3 text-green-500">
          Register new kid
        </h3>
        <form className="p-5" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="py-2">
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
          <div className="py-2">
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
          <div className="py-2">
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
          <div className="py-2">
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
          <div className="py-2">
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
          <div className="py-2">
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
          <div className="py-2">
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
            <input type="file" />
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

import Header from "../../../components/header";
import logo from "../../../assets/logo (2).jpg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaForm = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(5, "please the password must need to be at more 5 than 5 caracters")
    .max(20, "Please the password must be at least 20 characters"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaForm),
  });

  const handleSubmitForm = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <Header />
      <section className=" fullScreen flex items-center justify-center">
        <div className="efeito-vidro w-[350px] md:w-[700px]  p-10 flex flex-col items-center ">
          <img src={logo} alt="" className="w-full h-32 object-contain my-8 " />
          <h2 className="text-3xl text-slate-400 text-center">
            Welcome to your Safegarden
          </h2>
          <h3 className="text-xl text-slate-400 py-7">Login Page </h3>
          <form className="w-full" onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-500"
                placeholder="john.doe@company.com"
              />
              {errors?.email?.message && (
                <p className="text-red-600">
                  {errors?.email?.message.toString()}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full h-12 rounded-md p-2 bg-transparent border-2 border-green-500"
                placeholder="•••••••••"
                {...register("password")}
              />
              {errors?.password?.message && (
                <p className="text-red-600">
                  {errors?.password?.message?.toString()}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 h-9 rounded-lg  text-white font-medium text-xl hover:bg-green-600  bottom-8"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;

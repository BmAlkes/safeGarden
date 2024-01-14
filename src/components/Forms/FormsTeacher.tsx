import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const schemaForm = z.object({
  firstName: z.string({
    required_error: "First name is required",
    invalid_type_error: "First name must be a string",
  }),
  lastName: z.string({
    required_error: "Lastname is required",
    invalid_type_error: "Lastname must be a string",
  }),

  nameOfKind: z.string(),
  city: z.string(),
  Hours: z.string(),
  Adress: z.string({
    required_error: "Adress is required",
  }),
  email: z.string().email(),
  password: z
    .string()
    .min(5, "please the password must need to be at more 5 than 5 caracters")
    .max(20, "Please the password must be at least 20 characters"),
});

const FormsTeacher = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaForm),
  });
  const navigate = useNavigate();

  const handleKindeGardenForm = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(handleKindeGardenForm)}>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2 flex-1">
          <label>Name</label>
          <input
            type="text"
            className="border-2 rounded-md p-1 w-36 md:w-full"
            placeholder="Name"
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label>Last Name</label>
          <input
            type="text"
            className="border-2 rounded-md p-1 w-36 md:w-full"
            placeholder="LastName"
            {...register("lastName", { required: true })}
          />
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2 flex-1">
          <label>Password</label>
          <input
            className="border-2 rounded-md p-1 w-36 md:w-full"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              maxLength: 15,
              minLength: 5,
            })}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label>Email</label>
          <input
            type="email"
            className="border-2 rounded-md p-1 w-36 md:w-full"
            placeholder="email"
            {...register("email", { required: true })}
          />
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2 flex-1">
          <label>The name of the residence</label>
          <input
            type="text"
            className="border-2 rounded-md p-1 w-36 md:w-full"
            placeholder="Residence"
            {...register("nameOfKind", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label>Adress Residence</label>
          <input
            type="text"
            className="border-2 rounded-md p-1 w-36 md:w-full"
            placeholder="adress"
            {...register("Adress", { required: true })}
          />
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2 flex-1">
          <label>Open Hours</label>
          <input
            className="border-2 rounded-md p-1 w-36 md:w-full"
            type="time"
            placeholder="Open Hours"
            {...register("Hours", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label>City of the residence</label>
          <input
            className="border-2 rounded-md p-1 w-36 md:w-full"
            type="Text"
            placeholder="City of the residence"
            {...register("city", { required: true })}
          />
        </div>
      </div>

      <p className=" py-5">
        By clicking Sign Up, you agree to our
        <br />
        <span
          className="cursor-pointer text-green-500 mr-1"
          onClick={() => navigate("/Terms")}
        >
          Terms, Privacy Policy and Cookies Policy.
        </span>
        You may receive SMS Notifications from us and can opt out any time.
      </p>

      <button
        type="submit"
        className="w-full bg-green-500 h-9 rounded-lg  text-white font-medium text-xl hover:bg-green-600  bottom-8"
      >
        Register
      </button>
    </form>
  );
};

export default FormsTeacher;

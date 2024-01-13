import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "@/context/authContext";

const schemaForm = z.object({
  firstName: z.string({
    required_error: "First name is required",
    invalid_type_error: "First name must be a string",
  }),
  lastName: z.string({
    required_error: "Lastname is required",
    invalid_type_error: "Lastname must be a string",
  }),
  telephone: z.string({
    required_error: "Telephone is required",
  }),
  children: z.string({
    required_error: "Children name is required",
  }),
  childrenId: z.string({
    required_error: "children ID is required",
  }),
  healthPlan: z.string(),
  allergic: z.string({
    required_error: "Allergic is required",
  }),
  adress: z.string({
    required_error: "Adress is required",
  }),
  email: z.string().email(),
  password: z
    .string()
    .min(5, "please the password must need to be at more 5 than 5 caracters")
    .max(20, "Please the password must be at least 20 characters"),
});

const FormParents = () => {
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaForm),
  });
  const navigate = useNavigate();
  const handleRegisterForm = (data: any) => {
    registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegisterForm)}>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2 flex-1">
          <label>Name</label>
          <input
            className="border-2 rounded-md p-1 w-36 md:w-full"
            type="text"
            placeholder="Name"
            {...register("firstName", { required: true })}
          />

          {errors?.firstName?.message && (
            <p className="text-red-600 text-xs">
              {errors?.firstName?.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label>Last Name</label>
          <input
            type="text"
            className="border-2 rounded-md p-1 w-36 md:w-full"
            placeholder="LastName"
            {...register("lastName", { required: true })}
          />
          {errors?.lastName?.message && (
            <p className="text-red-600 text-xs">
              {errors?.lastName?.message.toString()}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2  ">
        <div className="flex flex-col gap-2 flex-1">
          <label>Telephone</label>
          <input
            className="border-2 rounded-md p-1 w-36 md:w-full"
            placeholder="phone"
            {...register("telephone")}
          />
          {errors?.telephone?.message && (
            <p className="text-red-600 text-xs">
              {errors?.telephone?.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label>Password</label>
          <input
            className="border-2 rounded-md p-1 w-36 md:w-full"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors?.password?.message && (
            <p className="text-red-600 text-xs">
              {errors?.password?.message.toString()}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2 flex-1">
          <label>Children Name</label>
          <input
            type="text"
            className="border-2 rounded-md p-1 w-36 md:w-full"
            placeholder="Children Name"
            {...register("children", { required: true })}
          />
          {errors?.children?.message && (
            <p className="text-red-600 text-xs">
              {errors?.children?.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2  flex-1">
          <label>Children ID</label>
          <input
            className="border-2 rounded-md p-1 w-36 md:w-full"
            type="text"
            placeholder="Children ID"
            {...register("childrenId")}
          />
          {errors?.childrenId?.message && (
            <p className="text-red-600 text-xs">
              {errors?.childrenId?.message.toString()}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2 flex-1">
          <label>Health Plans</label>
          <select
            {...register("healthPlan")}
            className="border-2 rounded-md p-1"
          >
            <option value="Maccabi">Maccabi</option>
            <option value="clalit">Clalit</option>
            <option value="meuhedet">Meuhedet</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label>Allergic</label>
          <input
            className="border-2 rounded-md p-1"
            type="text"
            placeholder="allergic"
            {...register("allergic")}
          />
          {errors?.allergic?.message && (
            <p className="text-red-600 text-xs">
              {errors?.allergic?.message.toString()}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label>Residence Name</label>
        <input
          className="border-2 rounded-md p-1"
          type="text"
          placeholder="Residence Name"
          {...register("adress", { required: true })}
        />
        {errors?.adress?.message && (
          <p className="text-red-600 text-xs">
            {errors?.adress?.message.toString()}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label>Email</label>
        <input
          className="border-2 rounded-md p-1"
          type="text"
          placeholder="Email@email"
          {...register("email", { required: true })}
        />
        {errors?.email?.message && (
          <p className="text-red-600 text-xs">
            {errors?.email?.message.toString()}
          </p>
        )}
      </div>

      <p className="py-3">
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

export default FormParents;

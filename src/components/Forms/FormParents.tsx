import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const FormParents = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const handleRegisterForm = (data: any) => {
    console.log(data);
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
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label>Last Name</label>
          <input
            type="text"
            className="border-2 rounded-md p-1 w-36 md:w-full"
            placeholder="LastName"
            {...register("lastname", { required: true })}
          />
        </div>
      </div>
      <div className="flex gap-2  ">
        <div className="flex flex-col gap-2 flex-1">
          <label>Telefone</label>
          <input
            className="border-2 rounded-md p-1 w-36 md:w-full"
            type="Number"
            placeholder="phone"
            {...register("phone", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label>Password</label>
          <input
            className="border-2 rounded-md p-1 w-36 md:w-full"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2 flex-1">
          <label>Children Name</label>
          <input
            type="text"
            className="border-2 rounded-md p-1 w-36 md:w-full"
            placeholder="Children Name"
            {...register("childrenName", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2  flex-1">
          <label>Children ID</label>
          <input
            className="border-2 rounded-md p-1 w-36 md:w-full"
            type="text"
            placeholder="Children ID"
            {...register("childreId")}
          />
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2 flex-1">
          <label>Health Plans</label>
          <select {...register("health")} className="border-2 rounded-md p-1">
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
            {...register("alergic", { required: true })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label>Residence Name</label>
        <input
          className="border-2 rounded-md p-1"
          type="text"
          placeholder="Residence Name"
          {...register("residence", { required: true })}
        />
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

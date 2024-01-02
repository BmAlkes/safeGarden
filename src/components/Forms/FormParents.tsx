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
      <h2>Parents Signup</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="LastName"
          {...register("lastname", { required: true })}
        />
      </div>
      <div>
        <label>Telefone</label>
        <input
          type="Number"
          placeholder="phone"
          {...register("phone", { required: true })}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
      </div>
      <div>
        <label>Children Name</label>
        <input
          type="text"
          placeholder="Children Name"
          {...register("childrenName", { required: true })}
        />
      </div>
      <div>
        <label>Children ID</label>
        <input
          type="text"
          placeholder="Children ID"
          {...register("childreId")}
        />
      </div>
      <div>
        <label>Health Plans</label>
        <select {...register("health")}>
          <option value="Maccabi">Maccabi</option>
          <option value="clalit">Clalit</option>
          <option value="meuhedet">Meuhedet</option>
        </select>
      </div>
      <div>
        <label>Allergic</label>
        <input
          type="text"
          placeholder="allergic"
          {...register("alergic", { required: true })}
        />
      </div>
      <div>
        <label>Residence Name</label>
        <input
          type="text"
          placeholder="Residence Name"
          {...register("residence", { required: true })}
        />
      </div>
      <div className="buttonContainer">
        <div>
          <p>
            By clicking Sign Up, you agree to our
            <span className="terms" onClick={() => navigate("/Terms")}>
              Terms, Privacy Policy and Cookies Policy.
            </span>
            You may receive SMS Notifications from us and can opt out any time.
          </p>
        </div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default FormParents;

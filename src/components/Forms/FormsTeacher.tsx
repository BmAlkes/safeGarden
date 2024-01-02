import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormsTeacher = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleKindeGardenForm = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleKindeGardenForm)}>
      <h2>Kindergarten Tearch signup</h2>
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
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            maxLength: 15,
            minLength: 5,
          })}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <label>The name of the residence</label>
        <input
          type="text"
          placeholder="Residence"
          {...register("Residence", { required: true })}
        />
      </div>
      <div>
        <label>Adress Residence</label>
        <input
          type="text"
          placeholder="adress"
          {...register("adress", { required: true })}
        />
      </div>
      <div>
        <label>Open Hours</label>
        <input
          type="time"
          placeholder="Open Hours"
          {...register("hours", { required: true })}
        />
      </div>
      <div>
        <label>City of the residence</label>
        <input
          type="Text"
          placeholder="City of the residence"
          {...register("citie", { required: true })}
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

export default FormsTeacher;

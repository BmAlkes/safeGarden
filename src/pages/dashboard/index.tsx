import logo from "../../assets/logo (2).jpg";
const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="lg:text-6xl text-2xl mb-7 font-thin bg-gradient-to-r from-orange-500 via-green-500 to-orange-500 inline-block text-transparent bg-clip-text">
        Welcome to
      </h2>
      <img src={logo} alt="" className="w-64 lg:w-auto" />
    </div>
  );
};

export default Dashboard;

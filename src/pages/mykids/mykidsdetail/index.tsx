import { Link } from "react-router-dom";

const MyKidsDetail = () => {
  return (
    <div className="container mt-16">
      <div className="rounded-lg flex lg:flex-row-reverse flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.09),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="p-6 flex-1 md:flex-col">
          <h4 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Amily
          </h4>
          <div className="flex flex-col md:flex-row gap-5">
            <h5 className="font-bold">My kindergarten:</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              BabyLend
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <h5 className="font-bold">My Teacher:</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Neta Cohen
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <h5 className="font-bold">Teache's Phone:</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              054-6144917
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <h5 className="font-bold">Adress:</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Ashekelon, Eli Cohen 38
            </p>
          </div>
          <p className="text-base text-neutral-600 dark:text-neutral-200"></p>
        </div>
        <div className="relative overflow-hidden bg-cover bg-no-repeat lg:w-80">
          <img
            className="rounded-3xl "
            src="https://www.campaignforkids.com/wp-content/uploads/2015/03/freekid-1024x768.jpg"
            alt=""
          />
        </div>
      </div>
      <Link to="/mykids">
        <button className="bg-green-500 text-white font-thin h-10 p-6 flex items-center rounded-lg hover:bg-green-600 mt-8">
          Back
        </button>
      </Link>
    </div>
  );
};

export default MyKidsDetail;

import { Link } from "react-router-dom";

const KidsDetail = () => {
  return (
    <div className="container mt-16">
      <div className="rounded-lg flex lg:flex-row-reverse flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.09),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="p-6 flex-1 md:flex-col">
          <h4 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Amily
          </h4>
          <div className="flex flex-col md:flex-row gap-5">
            <h5 className="font-bold">Main parent:</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Naama Zafrir
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <h5 className="font-bold">Phone number:</h5>
            <a
              href={`tel:+972054758499`}
              className="mb-4 text-base text-neutral-600 dark:text-neutral-200"
            >
              054-7585999
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <h5 className="font-bold">Adress:</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              : Ashkelon, Ben gurion 4\10
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <h5 className="font-bold">HMO:</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Clalit
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <h5 className="font-bold">Allergies:</h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Peanuts
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden bg-cover bg-no-repeat lg:w-80">
          <img
            className="rounded-3xl "
            src="https://www.campaignforkids.com/wp-content/uploads/2015/03/freekid-1024x768.jpg"
            alt=""
          />
        </div>
      </div>
      <Link to="/kindergarten">
        <button className="bg-green-500 text-white font-thin h-10 p-6 flex items-center rounded-lg hover:bg-green-600 mt-8">
          Back
        </button>
      </Link>
    </div>
  );
};

export default KidsDetail;

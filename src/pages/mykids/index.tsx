import { useState } from "react";
import { Link } from "react-router-dom";

const MyKids = () => {
  const [kids] = useState([]);
  const [reportAttendance, setReportAttendance] = useState<String[]>([]);

  const handleReportAttendance = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const hour = date.getHours();
    const minute = date.getMinutes();

    const dayAttendance = `${day}/${month} ${hour}:${minute} attendance`;
    setReportAttendance((prev) => [...prev, dayAttendance]);
  };
  return (
    <div className="container">
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-normal text-4xl text-green-500">My Kids</h1>
      </nav>

      <div className="w-full flex items-center justify-end mb-16">
        <Link to="/registerKid">
          <button className="bg-green-500 text-white font-thin h-10 p-6 flex items-center rounded-lg hover:bg-green-600">
            Register new children
          </button>
        </Link>
      </div>
      {kids.length === 0 ? (
        <>
          <div>
            <Link to={`/mykids/id`}>
              <div className="rounded-lg flex md:flex-row-reverse flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Amily
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Exercitationem fugiat est, neque assumenda molestiae
                    repudiandae dolor a rerum voluptatibus nesciunt perspiciatis
                    omnis eligendi, consequuntur soluta minima iusto magni quae
                    esse!
                  </p>
                  <p className="text-base text-neutral-600 dark:text-neutral-200"></p>
                </div>
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="rounded-3xl "
                    src="https://www.campaignforkids.com/wp-content/uploads/2015/03/freekid-1024x768.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
            <div className="flex flex-col md:flex-row items-center justify-between mt-11 gap-5">
              <div>
                <button
                  onClick={handleReportAttendance}
                  className="bg-green-500 text-white font-thin h-10 p-6 flex items-center rounded-lg hover:bg-green-600"
                >
                  Report Attendance
                </button>
                {reportAttendance.length > 0 && (
                  <p>{reportAttendance[reportAttendance.length - 1]}</p>
                )}
              </div>
              <button className="bg-red-500 text-white font-thin h-10  p-6 flex items-center rounded-lg hover:bg-red-600">
                Not comming Today
              </button>
            </div>
            <div className="flex justify-end gap-6 mt-6">
              <div className="flex items-center gap-3">
                <label htmlFor="sick">Sick</label>
                <input
                  type="checkbox"
                  id="sick"
                  name="sick"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="vacation">Vacation</label>
                <input
                  type="checkbox"
                  id="vacation"
                  name="vacation"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-center text-green-500 text-4xl ">
            You Dont Have any children registered yet
          </h2>
        </>
      )}
    </div>
  );
};

export default MyKids;

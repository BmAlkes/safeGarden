import { useEffect, useState } from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpeg";
import logo from "../../assets/logo (2).jpg";
import { IoBookSharp, IoShieldOutline, IoSunnyOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineChildCare, MdOutlineSecurity } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { TfiPalette } from "react-icons/tfi";
import { GrCertificate } from "react-icons/gr";
import Accordion from "../questions";
import { Link } from "react-router-dom";

const BackgroundSliderSection = () => {
  const [photo, setPhoto] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const change = () => {
    if (photo === 3) {
      setPhoto(1);
      return;
    }
    setPhoto((prev) => prev + 1);
  };
  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return img1;
      case 2:
        return img2;
      case 3:
        return img3;
      default:
        return img1;
    }
  };
  return (
    <>
      <section
        className="bg-slider flex items-center "
        style={{
          backgroundImage: `url(${returnPhotoURL()})`,
        }}
      >
        <div className="flex-col lg:max-w-3xl sm:max-w-lg flex items-center ml-6 justify-center p-7 h-full sm:p-5 z-10 z-50">
          <h1 className=" text-2xl text-white lg:text-5xl">
            You can be calm with safegarden. Best web app for daycare
            management.
          </h1>
          <p className="text-white mt-5 text-sm lg:text-lg py-4">
            Welcome to our state-of-the-art daycare management website, crafted
            with meticulous planning and a vision to streamline and enhance
            daycare management.
            <br /> Our platform is designed to optimize every aspect of your
            daycare experience, ensuring a seamless and efficient journey for
            both kindergartners and parents alike.
          </p>
          <Link
            to="/login"
            className=" bg-green-500 text-white p-2 rounded-md absolute bottom-16 left-12 cursor-pointer "
          >
            Let The Fun Begin
          </Link>
        </div>
      </section>
      <section>
        <div className="flex w-full lg:flex-row  flex-col">
          <div className="flex-1 bg-[#60cd96] p-5">
            <IoBookSharp size={60} color="#FFF" />
            <h2 className="font-semibold text-white text-lg py-2">
              Managing all the children in the daycare in one place
            </h2>
            <p className="text-slate-100 tracking-wider antialiased leading-6">
              We will make sure to provide you with all the important
              information including the child's medical card.
            </p>
          </div>
          <div className="flex-1 bg-[#69d2e7] p-5">
            <IoSunnyOutline size={60} color="#FFF" />
            <h2 className="font-semibold text-white text-lg py-2">
              Attendance reporting
            </h2>
            <p className="text-slate-100 tracking-wider antialiased leading-6">
              Includes notifications for parents who have not reported
              attendance, to ensure the safety of your children in the moment of
              the day.
            </p>
          </div>
          <div className="flex-1 bg-[#fa8f6f] p-3">
            <AiOutlineSafetyCertificate size={60} color="#FFF" />
            <h2 className="font-semibold text-white text-lg py-2">
              Managing an event diary
            </h2>
            <p className="text-slate-100 tracking-wider antialiased leading-6">
              with which you can see all the important events of the
              kindergarten.
            </p>
          </div>
          <div className="flex-1 bg-[#9c87c2] p-3">
            <MdOutlineSecurity size={60} color="#FFF" />
            <h2 className="font-semibold text-white text-lg py-2">
              Security Information
            </h2>
            <p className="text-slate-100 tracking-wider antialiased leading-5">
              We maintain your safety and the information in the application
              with high security levels, to ensure that your and your child's
              information will always be protected!
            </p>
          </div>
        </div>
      </section>
      <section className="container mr-auto ml-auto flex flex-col justify-center items-center w-full my-11 ">
        <h2 className="text-4xl my-12 text-slate-800">What We Offer</h2>
        <p className="max-w-[800px] text-center py-5 mb-10 font-light">
          At our education center, we provide a variety of benefits and
          advantages for your kids successful education, while allowing your kid
          to stay fully active, creative, and healthy.
        </p>
        <div className="container flex flex-col items-center justify-center">
          <div className="flex gap-5 lg:flex-row flex-col">
            <div className="flex-1  flex flex-col  items-center justify-center h-56 bg-slate-100 p-3 rounded-xl">
              <div className="greenball">
                <IoShieldOutline size={50} color="#6ec599" />
              </div>
              <h3 className="font-semibold text-center mt-3">Safety First</h3>
              <p className="text-center py-4 font-thin text-slate-600">
                We offer first-className protection and security for your
                children at Kinderex.
              </p>
            </div>
            <div className="flex-1  flex flex-col  items-center justify-center h-56 bg-slate-100 p-3 rounded-xl">
              <div className="greenball">
                <MdGroups size={50} color="#6ec599" />
              </div>
              <h3 className="font-semibold text-center mt-3">Safety First</h3>
              <p className="text-center py-4 font-thin text-slate-600">
                We offer first-className protection and security for your
                children at Kinderex.
              </p>
            </div>
            <div className="flex-1  flex flex-col  items-center justify-center h-56 bg-slate-100 p-3 rounded-xl">
              <div className="greenball">
                <GrCertificate size={50} color="#6ec599" />
              </div>
              <h3 className="font-semibold text-center mt-3">Safety First</h3>
              <p className="text-center py-4 font-thin text-slate-600">
                We offer first-className protection and security for your
                children at Kinderex.
              </p>
            </div>
          </div>
          <div className="flex my-4 gap-5 lg:flex-row flex-col">
            <div className="flex-1  flex flex-col  items-center justify-center h-56 bg-slate-100 p-3 rounded-xl">
              <div className="greenball">
                <MdOutlineChildCare size={50} color="#6ec599" />
              </div>

              <h3 className="font-semibold text-center mt-3">Safety First</h3>
              <p className="text-center py-4 font-thin text-slate-600">
                We offer first-className protection and security for your
                children at Kinderex.
              </p>
            </div>
            <div className="flex-1  flex flex-col  items-center justify-center h-56 bg-slate-100 p-3 rounded-xl">
              <div className="greenball">
                <TfiPalette size={50} color="#6ec599" />
              </div>
              <h3 className="font-semibold text-center mt-3">Safety First</h3>
              <p className="text-center py-4 font-thin text-slate-600">
                We offer first-className protection and security for your
                children at Kinderex.
              </p>
            </div>
            <div className="flex-1  flex flex-col  items-center justify-center h-56 bg-slate-100 p-3 rounded-xl">
              <div className="greenball">
                <IoSunnyOutline size={50} color="#6ec599" />
              </div>
              <h3 className="font-semibold text-center mt-3">Safety First</h3>
              <p className="text-center py-4 font-thin text-slate-600">
                We offer first-className protection and security for your
                children at Kinderex.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-center lg:text-left font-medium title-font mb-2 text-4xl my-12 text-slate-800">
              A Few Words About Us
            </h1>
            <p className="leading-relaxed text-base text-center lg:text-right">
              At Kinderex, our mission is to provide excellence in preschool,
              kindergarten, before and after school programs and summer camp for
              families living in the greater local area. Here you ll find
              exceptional teachers, curriculum and learning environments that
              encourage children to learn, play, and explore in a safe, healthy,
              and nurturing environment promoting creative thinking.
            </p>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <img src={img4} alt="" className="rounded-lg" />
          </div>
        </div>
      </section>

      <section className="text-white body-font bg-[#9c87c2]">
        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font">
              Slow-carb next level shoindxgoitch ethical authentic, scenester
              sriracha forage.
            </h1>
            <button className="flex-shrink-0 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg mt-10 sm:mt-0">
              Button
            </button>
          </div>
        </div>
      </section>

      <footer className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto">
          <div className="">
            <Accordion />
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Contact Us
                </label>
                <input
                  type="text"
                  id="footer-field"
                  placeholder="send a message to us"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Send
              </button>
              <div className="lg:ml-11 ml-0 mt-8 lg:mt-0">
                <img src={logo} alt="" className="h-14" />
              </div>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2021 made by
              <a
                href="https://brunomalkes.com"
                className="text-gray-600 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bmalkes
              </a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BackgroundSliderSection;

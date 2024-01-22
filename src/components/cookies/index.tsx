import { Link } from "react-router-dom";

const Cookies = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <div
      onClick={onClose}
      className={`absolute bottom-0  transistion-colors h-36 border border-gray-300 w-full bg-white p-6 flex items-center  justify-between ${
        open ? "visible" : "invisible"
      } `}
    >
      <p className="text-lg font-light">
        We use Cookies to enhance your user experience. <br />
        By using cookies our website, you agree to the terms and conditions of
        use cookies.
        <Link to="/terms" className="text-green-700 font-semibold">
          {" "}
          Cookie Policy
        </Link>
      </p>

      <button
        className="w-28 bg-green-500 h-9 rounded-lg  text-white font-medium text-xl hover:bg-green-600  bottom-8"
        onClick={onClose}
      >
        Accept
      </button>
    </div>
  );
};

export default Cookies;

/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function Layout(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" banner bg-gray-800 text-white p-5">
        <h1
          className="  text-4xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Bunny Blog MERN stack
        </h1>
      </div>
      <div className="p-5">{props.children}</div>
    </div>
  );
}

export default Layout;

import LoginForm from "../components/LoginForm";
import ilustrasi from "../assets/Illustrasi Login.png";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const RegisterScreen = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <div className=" grid grid-cols-2">
        <div>
          <LoginForm onDataValue={(value) => setShowAlert(value)} />
          {showAlert && (
            <div className=" bg-red-100 px-5 flex justify-between mx-10 mt-64 rounded">
              <p className=" text-sm text-red-500 my-1">
                password yang anda masukan salah{" "}
              </p>
              <button onClick={() => setShowAlert(false)}>
                <XMarkIcon className="h-4 w-4 my-2 text-red-500" />
              </button>
            </div>
          )}
        </div>
        <div className="relative h-screen w-auto overflow-hidden">
          <img
            className="absolute h-full w-full object-cover right-0"
            src={ilustrasi}
            alt="ilustartion"
          />
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;

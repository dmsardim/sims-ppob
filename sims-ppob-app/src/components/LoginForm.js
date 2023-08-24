import logo from "../assets/Logo.png";
import TextInput from "./TextInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUserLogin } from "../store/actions/actionCreators";

const LoginForm = ({onDataValue}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataFromLogin = {
    email: email,
    password: password,
  };

  const handleLogin = () => {
    dispatch(postUserLogin(dataFromLogin))
      .then((_) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        onDataValue(true)
        setWrongPassword(true);
      });
  };
  return (
    <>
      <div className="flex flex-col mt-48 items-center">
        <div className="flex items-center mb-5">
          <div>
            <img src={logo} className="h-5" alt="logo" />
          </div>
          <div className="ml-2 font-bold text-lg">SIMS PPOB</div>
        </div>
        <div className="font-bold text-xl mb-5">
          Masuk atau buat akun untuk memulai
        </div>
        <div className=" items-center">
          <TextInput
            alert={false}
            typeInput="email"
            nameIcon={"AtSymbolIcon"}
            placeholder={"masukan email anda"}
            onDataChange={(value) => setEmail(value)}
          />
          <TextInput
            alert={wrongPassword}
            typeInput="password"
            nameIcon={"LockClosedIcon"}
            placeholder={"masukan password anda"}
            onDataChange={(value) => setPassword(value)}
          />
          <button
            className="btn w-full bg-primary hover:bg-primary text-white mt-7"
            onClick={handleLogin}
          >
            Masuk
          </button>
        </div>

        <div className=" mt-4">
          <p className=" text-sm">
            belum punya akun? register{" "}
            <Link to={`/auth/register`} id="to-register">
              <span
                style={{ cursor: "pointer" }}
                className=" text-red-600 font-bold"
              >
                disini
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

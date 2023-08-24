import RegisterForm from "../components/RegisterForm";
import ilustrasi from "../assets/Illustrasi Login.png";

const RegisterScreen = () => {
  return (
    <>
      <div className=" grid grid-cols-2">
        <div className="mx-auto">
          <RegisterForm />
        </div>
        <div className="relative h-screen w-auto overflow-hidden">
          <img
            className="absolute h-full w-full object-cover right-0"
            src={ilustrasi}
            alt="ilustration"
          />
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;

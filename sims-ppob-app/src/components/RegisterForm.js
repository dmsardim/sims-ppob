import logo from '../assets/Logo.png';
import TextInput from './TextInput';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUserRegister } from '../store/actions/actionCreators';
const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMinim, setPasswordMinim] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const formRegister = {
    email: email,
    password: password,
    first_name: firstName,
    last_name: lastName,
    confirmPassword: confirmPassword,
  };

  const handleSubmitRegister = () => {
    if (password !== confirmPassword) {
      setWrongPassword(true);
      return;
    }
    if (password.length < 8) {
      setPasswordMinim(true);
      return;
    }
    dispatch(postUserRegister(formRegister))
      .then((_) => {
        navigate('/auth/login');
      })
      .catch((err) => {
        console.log('Maaf server bermasalah');
      });
  };
  return (
    <>
      <div className="flex flex-col mt-14 items-center">
        <div className="flex items-center mb-5">
          <div>
            <img src={logo} className="h-5" alt="logo" />
          </div>
          <div className="ml-2 font-bold text-lg">SIMS PPOB</div>
        </div>
        <div className="font-bold text-xl mb-5">Lengkapi data untuk membuat akun</div>
        <div className=" items-center">
          <TextInput alert={false} typeInput="email" nameIcon={'AtSymbolIcon'} placeholder={'Masukan email anda'} onDataChange={(value) => setEmail(value)} />
          <TextInput alert={false} typeInput="text" nameIcon={'UserIcon'} placeholder={'Nama Depan'} onDataChange={(value) => setFirstName(value)} />
          <TextInput alert={false} typeInput="text" nameIcon={'UserIcon'} placeholder={'Nama Belakang'} onDataChange={(value) => setLastname(value)} />
          <TextInput alert={passwordMinim} typeInput="password" nameIcon={'LockClosedIcon'} placeholder={'Buat password'} onDataChange={(value) => setPassword(value)} eyeIcon={true} message={'Password minimal 8'} />
          <TextInput alert={wrongPassword} typeInput="password" nameIcon={'LockClosedIcon'} placeholder={'Konfirmasi password'} onDataChange={(value) => setConfirmPassword(value)} eyeIcon={true} message={'Password tidak sama'} />
          <button onClick={handleSubmitRegister} className="btn w-full bg-primary hover:bg-primary  text-white mt-7">
            Registrasi
          </button>
        </div>
        <div className=" mt-4">
          <p className=" text-sm">
            sudah punya akun? login{' '}
            <Link to={`/auth/login`} id="to-login">
              <span style={{ cursor: 'pointer' }} className=" text-red-600 font-bold">
                disini
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;

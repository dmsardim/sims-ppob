import profilPhoto from '../assets/Profile-Photo.png';
import TextInput from '../components/TextInput';
import { updateProfile, uploadImageProfile } from '../store/actions/actionCreators';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountScreen = () => {
  const { data: profile } = useSelector((state) => state.profile);
  const [email, setEmail] = useState(profile.email);
  const [firstName, setFirstName] = useState(profile.first_name);
  const [lastName, setLastName] = useState(profile.last_name);
  const [disabled, setDisabled] = useState(true);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataUpdateProfile = {
    email: email,
    first_name: firstName,
    last_name: lastName,
  };

  const handleUpdateProfile = () => {
    if (disabled) return;
    const token = localStorage.getItem('token');
    dispatch(updateProfile(token, dataUpdateProfile))
      .then((_) => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUploadImage = () => {
    const token = localStorage.getItem('token');
    const fileForm = new FormData();
    if (!file) return;
    fileForm.append('file', file);
    dispatch(uploadImageProfile(token, fileForm))
      .then((_) => {
        setFile(null);
      })
      .then((_) => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth/login');
  };
  return (
    <>
      <div className="p-10 mt-10 mx-auto w-3/5">
        <div className="mx-auto">
          <div className="flex justify-center">
            <img
              src={profile.profile_image}
              alt="Profile"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = profilPhoto;
              }}
              className=" w-28 h-28 rounded-full"
            />
            <span onClick={() => window.my_modal_1.showModal()} className="text-center bg-gray-50 border border-gray-300 rounded-full px-1 py-1 mt-20 ml-24 flex items-center absolute w-8 text-gray-800 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </span>
          </div>

          <p className="font-bold text-center">
            {profile.first_name} {profile.last_name}
          </p>
        </div>

        <div className="mt-2">
          <p>Email</p>
          <TextInput className={'w-full'} nameIcon={'AtSymbolIcon'} placeholder={'Masukan email anda'} dataValue={email} disabled={disabled} onDataChange={(value) => setEmail(value)} />
        </div>
        <div className="mt-2">
          <p>Nama Depan</p>
          <TextInput className={'w-full'} nameIcon={'UserIcon'} dataValue={firstName} placeholder={'Masukan Nama Depan anda'} disabled={disabled} onDataChange={(value) => setFirstName(value)} />
        </div>
        <div className="mt-2">
          <p>Nama Belakang</p>
          <TextInput className={'w-full'} nameIcon={'UserIcon'} dataValue={lastName} placeholder={'Masukan Nama Belakang anda'} disabled={disabled} onDataChange={(value) => setLastName(value)} />
        </div>
        <div className="my-5">
          <button
            className="w-full bg-red-500 border border-gray-50  text-gray-50 py-2 font-bold"
            onClick={() => {
              setDisabled(!disabled);
              handleUpdateProfile();
            }}
          >
            {disabled ? 'Edit Profile' : 'Simpan'}
          </button>
        </div>
        <div className="my-5">
          {disabled ? (
            <button className="w-full bg-gray-50 border border-gray-300  text-red-500 py-2 font-bold" onClick={handleLogout}>
              Logout
            </button>
          ) : null}
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box text-center">
          <h3 className="font-bold text-lg">Update Foto Profile</h3>
          <label className="label mx-auto border rounded-md">
            <input
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </label>
          <div className=" flex flex-col mt-5">
            <button className="p-0 text-red-500 font-bold" onClick={handleUploadImage}>
              Update Foto Profile
            </button>

            <button
              className="p-0 text-gray-300 font-bold my-5"
              onClick={() => {
                window.my_modal_1.close();
              }}
            >
              Batalkan
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default AccountScreen;

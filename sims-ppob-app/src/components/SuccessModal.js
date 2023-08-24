import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ formattedAmount, idModal, message }) => {
  const navigate = useNavigate();
  return (
    <dialog id={idModal} className="modal">
      <form method="dialog" className="modal-box text-center">
        <h3 className="font-bold text-lg">
          <CheckCircleIcon className=" h-24 w-24 text-green-500 mx-auto" />
        </h3>
        <p className="py-4">{message}</p>
        <p>
          <span className="font-bold text-4xl py-2">{formattedAmount}</span>
        </p>
        <p className="py-2">Berhasil</p>
        <div className=" flex flex-col mt-5">
          <button
            className="p-0 text-red-500 font-bold"
            onClick={() => {
              window.my_modal_3.close();
              navigate('/');
            }}
          >
            Kembali ke Beranda
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default SuccessModal;

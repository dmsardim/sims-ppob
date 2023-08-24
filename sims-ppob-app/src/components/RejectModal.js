import { XCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
const RejectModal = ({ formattedAmount, idModal, message }) => {
  const navigate = useNavigate();
  return (
    <dialog id={idModal} className="modal">
      <form method="dialog" className="modal-box text-center">
        <h3 className="font-bold text-center">
          <XCircleIcon className=" h-24 w-24 text-red-500 mx-auto" />
        </h3>
        <p className="py-2">{message}</p>
        <p>
          <span className="font-bold text-4xl my-2">{formattedAmount}</span>
        </p>
        <p className="py-1">Gagal</p>
        <div className=" flex flex-col mt-3">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="p-0 text-red-500 font-bold"
            onClick={() => {
              window.my_modal_2.close();
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

export default RejectModal;

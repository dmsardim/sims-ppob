import { CreditCardIcon } from '@heroicons/react/24/solid';

const QuestionModal = ({ handleSubmitTopUp, formattedAmount, idModal, message }) => {
  return (
    <dialog id={idModal} className="modal">
      <form method="dialog" className="modal-box text-center">
        <h3 className="font-bold text-lg">
          <CreditCardIcon className=" h-24 w-24 text-red-500 mx-auto" />
        </h3>
        <p className="py-4">{message}</p>
        <p>
          <span className="font-bold text-4xl">{formattedAmount} ?</span>
        </p>
        <div className=" flex flex-col mt-5">
          {/* if there is a button in form, it will close the modal */}
          <button className="p-0 text-red-500 font-bold" onClick={handleSubmitTopUp}>
            Ya, lanjut Bayar
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
  );
};

export default QuestionModal;

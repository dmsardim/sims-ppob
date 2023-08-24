import TextInput from '../components/TextInput';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import QuestionModal from '../components/QuestionModal';
import SuccessModal from '../components/SuccessModal';
import { transactionCreate } from '../store/actions/actionCreators';
import RejectModal from '../components/RejectModal';
import rupiahFormatter from '../helpers/helper';

const PaymentScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.services);
  const service = services.find((item) => item.service_code === id);
  const [amount, setAmount] = useState(service.service_tariff);
  const handleChange = (value) => {
    const inputValue = value.replace(/[^0-9]/g, '');

    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setAmount(numericValue);
    } else {
      setAmount('');
    }
  };

  const handleSubmitTrx = () => {
    const token = localStorage.getItem('token');
    dispatch(transactionCreate(token, { service_code: id }))
      .then((_) => {
        window.my_modal_1.close();
        window.my_modal_3.showModal();
      })
      .catch((err) => {
        window.my_modal_1.close();
        window.my_modal_2.showModal();
      });
  };

  return (
    <>
      <div className="ml-16 mr-64">
        <p>Pembayaran</p>
        <div className="flex items-center mb-5">
          <div>
            <img src={service.service_icon} className="h-9" alt="payment" />
          </div>
          <div className="ml-2 font-bold text-lg">{service.service_name}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5 ml-16 mr-10">
        <div>
          <TextInput className={'w-full'} nameIcon={'CreditCardIcon'} dataValue={rupiahFormatter(amount)} typeInput={'text'} placeholder={'Masukkan Nominal'} onDataChange={handleChange} disabled={true} />
          <button
            type="button"
            className="bg-gray-400 w-full rounded-lg py-2 hover:bg-gray-300"
            onClick={() => {
              window.my_modal_1.showModal();
            }}
          >
            Bayar
          </button>
        </div>
        <QuestionModal idModal={'my_modal_1'} formattedAmount={rupiahFormatter(amount)} handleSubmitTopUp={() => handleSubmitTrx()} message={`Beli ${service.service_name} senilai`} />
        <SuccessModal idModal={'my_modal_3'} formattedAmount={rupiahFormatter(amount)} message={`Pembayaran ${service.service_name} sebesar`} />
        <RejectModal idModal={'my_modal_2'} formattedAmount={rupiahFormatter(amount)} message={`Pembayaran ${service.service_name} sebesar`} />
      </div>
    </>
  );
};

export default PaymentScreen;

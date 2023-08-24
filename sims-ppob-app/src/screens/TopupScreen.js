import React from 'react';
import TextInput from '../components/TextInput';
import { topUpBalance } from '../store/actions/actionCreators';
import { useDispatch } from 'react-redux';
import { QuestionModal, RejectModal, SuccessModal } from '../components';
import rupiahFormatter from '../helpers/helper';

const dataRupiah = [
  {
    id: 1,
    nominal: 10000,
  },
  {
    id: 2,
    nominal: 20000,
  },
  {
    id: 3,
    nominal: 50000,
  },
  {
    id: 4,
    nominal: 100000,
  },
  {
    id: 5,
    nominal: 250000,
  },
  {
    id: 6,
    nominal: 500000,
  },
];

const TopupScreen = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState('');
  const token = localStorage.getItem('token');

  const handleChange = (value) => {
    const inputValue = value.replace(/[^0-9]/g, '');

    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setAmount(numericValue);
    } else {
      setAmount('');
    }
  };

  const handleSubmitTopUp = () => {
    if (amount < 10000) {
      window.my_modal_1.close();
      window.my_modal_2.showModal();
      return;
    }
    dispatch(topUpBalance(token, { top_up_amount: amount }));
    window.my_modal_1.close();
    window.my_modal_3.showModal();
  };
  return (
    <div className="mx-20">
      <div>
        <p>Silakan masukkan</p>
        <p className="text-xl font-bold">Nominal Top Up</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div>
          <TextInput
            className="w-full"
            nameIcon="CreditCardIcon"
            typeInput="text"
            dataValue={rupiahFormatter(amount)}
            placeholder="Masukkan Nominal Top Up"
            onDataChange={(value) => {
              handleChange(value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              window.my_modal_1.showModal();
            }}
            disabled={amount === ''}
            className={`${amount === '' ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-400'} w-full rounded-lg py-2 text-slate-50`}
          >
            Top Up
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {dataRupiah.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                handleChange(item.nominal.toString());
              }}
              className="border border-slate-300 hover:border-indigo-300 rounded-lg"
            >
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(item.nominal)}
            </button>
          ))}
        </div>
      </div>
      <QuestionModal idModal={'my_modal_1'} formattedAmount={rupiahFormatter(amount)} message={'Anda yakin untuk Top Up sebesar'} handleSubmitTopUp={handleSubmitTopUp} />
      <RejectModal idModal={'my_modal_2'} formattedAmount={rupiahFormatter(amount)} message={'Top Up Sebesar'} />
      <SuccessModal idModal={'my_modal_3'} formattedAmount={rupiahFormatter(amount)} message={'Top Up Sebesar'} />
    </div>
  );
};

export default TopupScreen;

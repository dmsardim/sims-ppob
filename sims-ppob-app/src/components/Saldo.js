import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';
import rupiahFormatter from '../helpers/helper';

const Saldo = () => {
  const [eye, setEye] = useState(false);
  const { balance } = useSelector((state) => state.balance);
  const { balance: value } = balance;

  return (
    <>
      <div className="backgroundSaldo h-[240px] static bg-no-repeat ml-24">
        <p className="ml-10 text-white font-semibold mt-6">Saldo Anda</p>
        <p className="ml-10 text-white font-bold text-3xl mt-2">{eye ? `${value ? rupiahFormatter(value) : 'Rp 0'}` : 'Rp ••••••'}</p>
        <div className="flex items-center ml-10 text-white font-light text-xs mt-5">
          <p className="mr-1">Lihat Saldo</p>
          <button onClick={() => setEye(!eye)}>{eye ? <EyeIcon className="h-4 w-4" /> : <EyeSlashIcon className="h-4 w-4" />}</button>
        </div>
      </div>
    </>
  );
};

export default Saldo;

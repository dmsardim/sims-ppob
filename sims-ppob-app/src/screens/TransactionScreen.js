import { useEffect, useState } from 'react';
import Transaction from '../components/Transactions';
import { useDispatch, useSelector } from 'react-redux';
import { transactionHistory } from '../store/actions/actionCreators';

const TransactionScreen = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.transaction);
  const [limit, setLimit] = useState(5);
  const [month, setMonth] = useState('');

  const year = 2023;
  const monthsInYear = [];
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 1);
    const monthName = date.toLocaleString('id-ID', { month: 'long' });
    monthsInYear.push(monthName);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    const getListTransactionHistory = (dataToken) => {
      dispatch(transactionHistory(dataToken, { limit: 1000000 }));
    };
    getListTransactionHistory(token);
  }, [dispatch, limit]);

  useEffect(() => {
    let monthNow = new Date().toLocaleString('id-ID', { month: 'long' });
    console.log(monthNow, 'monthNow<<<');
    setMonth(monthNow);
  }, []);

  const addLimit = () => {
    setLimit(limit + 5);
  };
  if (!value) return;
  const filtereTransaction = value.filter((x) => new Date(x.created_on).toLocaleString('id-ID', { month: 'long' }) === month);
  const sliceFive = filtereTransaction.slice(0, limit);
  return (
    <>
      <div>
        <p className=" font-bold ml-20">Semua Transaksi</p>
        <div className=" flex flex-row ml-20 gap-4 mt-4 text-slate-400 font-medium">
          {monthsInYear.map((x, i) => (
            <button key={i} className={`${month === x ? 'text-gray-700' : 'text-slate-400'}`} onClick={() => setMonth(x)}>
              {x}
            </button>
          ))}
        </div>
        <div className="mt-7 ml-20">
          {sliceFive?.map((item, i) => {
            return <Transaction dataProp={item} key={i} />;
          })}
          <div className="flex justify-center">
            {sliceFive.length === 0 ? (
              <p className=" text-sm text-slate-400 mt-20">Maaf tidak ada histori transaksi saat ini</p>
            ) : (
              <button className="text-center text-red-500 py-1 w-fit mx-auto my-10 px-2 font-bold text-base rounded-lg" onClick={addLimit}>
                Show More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionScreen;

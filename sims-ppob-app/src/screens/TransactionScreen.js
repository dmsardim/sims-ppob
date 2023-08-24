import { useEffect, useState } from "react";
import Transaction from "../components/Transactions";
import { useDispatch, useSelector } from "react-redux";
import { transactionHistory } from "../store/actions/actionCreators";

const TransactionScreen = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.transaction);
  const [limit, setLimit] = useState(5);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getListTransactionHistory = (dataToken) => {
      dispatch(transactionHistory(dataToken, { limit: limit }));
    };
    getListTransactionHistory(token);
  }, [dispatch, limit]);

  const addLimit = () => {
    setLimit(limit + 5);
  };
  console.log(value, "value");
  return (
    <>
      <div>
        <p className=" font-bold ml-20">Semua Transaksi</p>
        <div className="mt-7 ml-20">
          {value?.map((item) => {
            return <Transaction dataProp={item} />;
          })}
          <div className="flex justify-center">
            <button
              className="text-center text-red-500 py-1 w-fit mx-auto my-10 px-2 font-bold text-xl rounded-lg"
              onClick={addLimit}
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionScreen;

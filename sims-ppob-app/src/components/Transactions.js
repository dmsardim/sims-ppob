import rupiahFormatter from '../helpers/helper';

const Transaction = ({ dataProp }) => {
  const formatedDate = new Date(dataProp.created_on).toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formatTime = () => {
    let hour = new Date(dataProp.created_on).getHours();
    let minute = new Date(dataProp.created_on).getMinutes();
    return `${hour}:${minute} WIB `;
  };

  return (
    <>
      <div className=" rounded-md border p-5 mt-5 flex justify-between">
        <div>
          <h3 className={`font-bold ${dataProp.transaction_type === 'PAYMENT' ? 'text-red-400' : 'text-green-400'}  text-2xl`}>
            {dataProp.transaction_type === 'PAYMENT' ? '-' : '+'} {rupiahFormatter(dataProp.total_amount)}
          </h3>
          <div className=" flex flex-row gap-3">
            <p className="text-xs text-gray-300 font-semibold">{formatedDate}</p>
            <p className="text-xs text-gray-300 font-semibold">{formatTime()}</p>
          </div>
        </div>
        <p className=" text-sm">{dataProp.description}</p>
      </div>
    </>
  );
};

export default Transaction;

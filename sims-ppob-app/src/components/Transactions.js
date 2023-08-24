import rupiahFormatter from '../helpers/helper';

const Transaction = ({ dataProp }) => {
  const formatedDate = new Date(dataProp.created_on).toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className=" rounded-md border p-5 mt-5 flex justify-between">
      <div>
        <h3 className={`font-bold ${dataProp.transaction_type === 'PAYMENT' ? 'text-red-400' : 'text-green-400'}  text-2xl`}>
          {dataProp.transaction_type === 'PAYMENT' ? '-' : '+'} {rupiahFormatter(dataProp.total_amount)}
        </h3>
        <div className="text-xs text-gray-300 font-semibold">{formatedDate}</div>
      </div>
      <p className=" text-sm">{dataProp.description}</p>
    </div>
  );
};

export default Transaction;

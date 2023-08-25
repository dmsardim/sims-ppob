import { AtSymbolIcon, LockClosedIcon, UserIcon, EyeIcon, EyeSlashIcon, CreditCardIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const TextInput = ({ className, alert = false, nameIcon, dataValue, typeInput = 'text', placeholder, onDataChange, eyeIcon = false, disabled = false, message }) => {
  const handleChange = (e) => {
    onDataChange(e.target.value);
  };
  const [active, setActive] = useState(false);
  let dataIcon = [
    {
      name: 'AtSymbolIcon',
      icon: <AtSymbolIcon className="w-5 h-4 my-2 mx-2 text-gray-400" />,
    },
    {
      name: 'LockClosedIcon',
      icon: <LockClosedIcon className={`w-5 h-4 my-3 mx-2 ${alert ? 'text-red-500' : 'text-gray-400'} `} />,
    },
    {
      name: 'UserIcon',
      icon: <UserIcon className="w-5 h-4 my-2 mx-2 text-gray-400" />,
    },
    {
      name: 'CreditCardIcon',
      icon: <CreditCardIcon className="w-5 h-4 my-2 mx-2 text-gray-400" />,
    },
  ];
  return (
    <>
      <div className={` flex ${alert ? ' border-red-500' : 'border-gray-300'} border my-1 px-2 py-2 rounded-lg ${className ?? 'max-w-xs  w-full'}`}>
        {dataIcon.find((item) => item.name === nameIcon).icon}
        <input
          type={active === true ? 'text' : typeInput}
          placeholder={placeholder ? placeholder : 'Placeholder'}
          value={dataValue}
          onChange={handleChange}
          disabled={disabled}
          className={` outline-none px-2 w-[90%] ${className ? className : 'max-w-xs'}`}
        />
        {eyeIcon &&
          (active ? (
            <button className="p-0 mx-5" onClick={() => setActive(!active)}>
              <EyeIcon className="w-4 h-4 text-gray-400 hover:bg-none" />
            </button>
          ) : (
            <button className="p-0 mx-5" onClick={() => setActive(!active)}>
              <EyeSlashIcon className="w-4 h-4 text-gray-400 hover:bg-none" />
            </button>
          ))}
      </div>
      {alert && message ? (
        <label className="label justify-end">
          <span className="label-text-alt text-right text-red-500">{message}</span>
        </label>
      ) : null}
    </>
  );
};

export default TextInput;

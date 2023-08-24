/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import logo from '../assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setActive('to-home');
    } else if (location.pathname === '/top-up') {
      setActive('to-top-up');
    } else if (location.pathname === '/transaction') {
      setActive('to-transaction');
    } else if (location.pathname === '/account') {
      setActive('to-account');
    }
  }, [location]);

  return (
    <>
      <div className="navbar bg-base-100 border-b-2 border-slate-200">
        <div className="navbar-start flex justify-start p-4 items-center ml-28 ">
          <img src={logo} className="h-5" alt="Logo" />
          <Link to={`/`} id="to-home">
            <div className="ml-2 font-bold text-lg">SIMS PPOB - Dimas Ardiyanto</div>
          </Link>
        </div>

        <div className="navbar-end mr-64">
          <ul className="flex space-x-20 text-black font-semibold">
            <li>
              <Link to={'/top-up'}>
                <span>Top Up</span>
                {active === 'to-top-up' ? <hr className="border-b-2 border-primary rounded-lg mt-0.5" /> : <hr className="border-b-2 border-transparent rounded-lg mt-0.5" />}
              </Link>
            </li>
            <li>
              <Link to={'/transaction'}>
                <span>Transaction</span>
                {active === 'to-transaction' ? <hr className="border-b-2 border-primary rounded-lg mt-0.5" /> : <hr className="border-b-2 border-transparent rounded-lg mt-0.5" />}
              </Link>
            </li>
            <li>
              <Link to={'/account'}>
                <span>Akun</span>
                {active === 'to-account' ? <hr className="border-b-2 border-primary rounded-lg mt-0.5" /> : <hr className="border-b-2 border-transparent rounded-lg mt-0.5" />}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

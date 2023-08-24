import Saldo from '../components/Saldo';
import Profil from '../components/Profil';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, listBanner, listServices, userBalance } from '../store/actions/actionCreators';
import { Outlet } from 'react-router-dom';

const HomeScreen = () => {
  const { data: profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const getProfileUser = async () => {
      try {
        await dispatch(getProfile(token));
      } catch (error) {
        console.log(error);
      }
    };
    const getBalanceUser = async () => {
      try {
        await dispatch(userBalance(token));
      } catch (error) {
        console.log(error);
      }
    };
    const getServices = async () => {
      try {
        await dispatch(listServices(token));
      } catch (error) {
        console.log(error);
      }
    };
    const getBanner = async () => {
      try {
        await dispatch(listBanner(token));
      } catch (error) {
        console.log(error);
      }
    };
    getProfileUser();
    getBalanceUser();
    getServices();
    getBanner();
  }, [dispatch]);

  return (
    <>
      <div className="ml-16 mr-64">
        <div>
          <div>
            <div className="grid grid-cols-2 mt-10">
              <Profil dataProfile={profile} />
              <Saldo />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

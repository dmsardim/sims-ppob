import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Services = ({ service }) => {
  const navigate = useNavigate();
  const goToPage = (service_code) => {
    navigate(`/services/${service_code}`);
  };

  return (
    <>
      <div className="flex flex-col mx-auto items-center">
        <img
          src={service.service_icon}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = logo;
          }}
          style={{ cursor: 'pointer' }}
          alt="service"
          onClick={() => goToPage(service?.service_code)}
        />
        <p className="text-sm text-center">
          {service.service_name.split(' ').map((word, index) => (
            <span key={index} style={{ display: 'block' }}>
              {word}
            </span>
          ))}
        </p>
      </div>
    </>
  );
};

export default Services;

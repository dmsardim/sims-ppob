import profilePhoto from "../assets/Profile-Photo.png";

const Profil = ({ dataProfile }) => {
  return (
    <>
      <div className="ml-20">
        <img
          src={dataProfile?.profile_image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = profilePhoto;
          }}
          alt="profile"
          className="rounded-full w-28 h-28"
        />
        <p className="mt-4">Selamat datang,</p>
        <p className="text-xl font-bold">
          {dataProfile?.first_name} {dataProfile?.last_name}
        </p>
      </div>
    </>
  );
};

export default Profil;

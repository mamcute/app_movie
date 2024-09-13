const TVShowInformation = ({ tvInfo }) => {
  return (
    <>
      <p className="font-bold text-[1.4vw] mb-4">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{tvInfo.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <p>
          {(tvInfo.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
              className="w-[1.4vw] mt-1 mr-1"
            />
          ))}
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{tvInfo.status}</p>
      </div>
      <div className="mb-4">
      <p className="font-bold">Network</p>
        {(tvInfo.networks || []).map((network) => (
          <img
          className=" mt-1"
            key={network.id}
            src={`https://media.themoviedb.org/t/p/h30/${network.logo_path}`}
            alt=""
          />
        ))}
      </div>
    </>
  );
};

export default TVShowInformation;

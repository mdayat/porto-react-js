import React from "react";

export const Address = () => {
  const myAddress = ["Indonesia", "Jawa Timur", "Lamongan"];
  return (
    <div className="basis-4/12">
      <h3 className="font-poppins font-black uppercase mb-3 text-md md:text-lg">
        Adrress
      </h3>
      {myAddress.map((address) => (
        <p key={address} className="font-sm">
          {address}
        </p>
      ))}
    </div>
  );
};

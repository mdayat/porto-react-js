import React from "react";

export const Cards = () => {
  const imgCardList = [
    { nama: "survey-form.png", link: "https://codepen.io/DayT22/pen/jOwGewV" },
    { nama: "landing-page.png", link: "https://codepen.io/DayT22/pen/ZEyrpXP" },
    { nama: "porto-web.png", link: "https://codepen.io/DayT22/pen/powamNM" },
  ];
  return (
    <div className="flex flex-wrap justify-evenly items-center">
      {imgCardList.map((card) => (
        <a
          href={card.link}
          key={card.nama}
          className="my-5 shadow-xl rounded-lg hover:shadow-2xl ease-in-out duration-300 xl:my-10 xl:mx-5"
        >
          <img
            src={card.nama}
            alt="Portofolio Cards"
            className="sm:w-80 lg:w-96 object-contain object-center rounded-lg"
          />
        </a>
      ))}
    </div>
  );
};

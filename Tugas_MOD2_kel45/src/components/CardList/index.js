import React from "react";

export default function CardList(props) {
  const { card_data, isNameBold, univ } = props;

  return (
    <div className="bg-blue-100 shadow">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="font-bold text-2xl tracking-tight text-gray-900">
          Meet Our Team
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {card_data.map(({nama, nim, kelompok, gambar}) => (
            <div className="rounded-2xl bg-gray-100 group relative shadow-xl">
              <div className="py-5 px-5 w-80 min-h-80 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-70 lg:aspect-none object-center">
                <img
                  src={gambar}
                  alt="Gambar"
                  className=" ring-4 ring-blue-300 rounded-full h-60 w-60 object-scaledown"
                />
              </div>
              <div className="mt-5 flex pb-5 pr-5 justify-between">
                <div>
                  <h3
                    className={`${
                      isNameBold ? "font-bold " : ""
                    } px-5 text-sm text-gray-700`}
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {nama}
                  </h3>
                  <p className="px-5 mt-1 text-sm font-medium text-gray-900">{nim}</p>
                  <p className="px-5 text-sm font-medium text-gray-900">
                  Kelompok {kelompok}
                </p>
                <p className="mt-10 px-5 text-sm font-medium text-gray-900">
                  {univ}
                </p>
                </div>
                <div>
                  <img 
                    src = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'
                    className = 'object-scaledown h-6 w-6 mb-3'
                    alt = 'Instagram logo'
                  />
                  <img 
                    src = 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
                    className = 'object-scaledown h-6 w-6'
                    alt = 'Linkedin logo'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

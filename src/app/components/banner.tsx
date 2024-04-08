"use client"
import { useState, useEffect } from 'react';
import { getPage } from '../services/homeService';
import { PageModel } from '../models/pageModels';

const Banner = () => {
  const [bannerData, setBannerData] = useState<PageModel | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPage('index');
        setBannerData(data);
        console.log(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []); // Executa somente uma vez no carregamento inicial

  const divStyle = {
    'backgroundImage': `url("${bannerData?.banner[0]?.bg}")`,
    'backgroundPosition': 'center',
    'backgroundSize': 'cover',
  };

  return (
    <div className="w-full h-screen absolute top- bg-gray-900 pt-14 text-white p-20" style={divStyle}>
      <div className="grid grid-cols-3 h-full items-center">
        <div className=" ">
        <h5 className={`text-2xl text-${bannerData?.banner[0].subtitle.color.toLocaleLowerCase()} font-bold`}>{bannerData?.banner[0].subtitle.text}</h5>
        <h1 className=' font-black text-4xl'>{bannerData?.banner[0].title}</h1>
        <p className=' text-sm mt-4 font-normal'>{bannerData?.banner[0].text}</p>
        </div>

      </div>
    </div>
  );
};

export default Banner;

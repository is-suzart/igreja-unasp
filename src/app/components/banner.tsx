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
    <div className="w-full h-screen absolute top- bg-gray-900 pt-14 text-white" style={divStyle}>
      <p>oi</p>
    </div>
  );
};

export default Banner;

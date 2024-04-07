import { CSSProperties } from 'react';
import { getPage } from '../services/homeService';
export default async function Banner (){
    //const bannerData = await getHomePage()
    const divStyle: CSSProperties = {
        'backgroundImage': `url("https://igrejaunasp.com/api/wp-content/uploads/2024/04/x540e5b7c9ecc14c71892b05825344a84.png.pagespeed.ic_.eY0acaNsks.webp")`,
        'backgroundPosition': 'center',
        'backgroundSize': 'cover'
    }
    return(
      <div className="w-full h-screen absolute top-0 bg-red-500 pt-14" style={divStyle}>
        <p>oi</p>
      </div>
    )
  }
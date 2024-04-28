import '../styles/HomeStyle.css'
import Banner from "../components/Banner";
import SpecialOffers from "../components/SpecialOffers";
import PopularShoes from "../components/PopularShoes";

export default function Home() {
 
  //HOME :
    /*
      - BANNER (coleccion temporada)
      - SPECIALOFFERS
      - POPULAR ZAPATILLAS 
    */
   
  return (
    <div className="container mt-4">
      <Banner />
      <SpecialOffers />
      <PopularShoes />
    </div>
  );
}

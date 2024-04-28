import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/HomeStyle.css'
import SearchBar from "../components/SearchBar";
import ShoesList from "../components/ShoeList";
import Banner from "../components/Banner";
import SpecialOffers from "../components/SpecialOffers";
import PopularShoes from "../components/PopularShoes";

export default function Home() {
  const [shoes, setShoes] = useState([]); // declaramos un array de shoes 
  const [filteredShoes, setFilteredShoes] = useState([]); // array de zapatillas filtradas


  useEffect(() => {
    const fetchShoes = async () => {
      try {
        // Realiza la solicitud GET al servidor para obtener las zapatillas
        const response = await axios.get('/shoes');
        console.log(response.data);
        setShoes(response.data); // inicializamos el array de zapatillas , con el getAllShoes() de nuestro endpoint
      } catch (error) {
        console.error('Error al obtener las zapatillas:', error);
      }
    };

    fetchShoes(); // Llama a la función para obtener las zapatillas al cargar el componente
  }, []);

  /*
    const handleSearch = (searchTerm) => {
      //recogemos el seachTerm :
      console.log(searchTerm);
      
    };*/

  // Función para manejar el filtro
  const handleFilter = (brand, color) => {
    console.log("marca " + brand);
    console.log("color " + color);

    // Filtrar las zapatillas según la marca y el color si ambos están presentes
    // Si solo se proporciona la marca, filtra solo por la marca
    let filtered;
    if (brand && color) {
      filtered = shoes.filter(shoe => shoe.brand === brand && shoe.color === color);
    } else if (brand) {
      filtered = shoes.filter(shoe => shoe.brand === brand);
    } else {
      // Si no se proporciona ni la marca ni el color, muestra todas las zapatillas
      filtered = shoes;
    }

    setFilteredShoes(filtered); // Actualiza el estado con las zapatillas filtradas
  };

  //   <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
  //HOME :
    /*
      - BANNER (coleccion temporada)
      - SPECIALOFFERS
      - CATALOGO (LIMIT 8 ) CON BUSQUEDA FILTROS 
      

    */
  return (
    <div className="container mt-4">
      <Banner />
      <SpecialOffers />
      <PopularShoes />


     {/* 
      <h2 className="text-center mb-4">Catálogo</h2>
      <SearchBar onFilter={handleFilter} />
      <ShoesList filteredShoes={filteredShoes.length > 0 ? filteredShoes : shoes} />
     
     */}

  
    </div>
  );
}

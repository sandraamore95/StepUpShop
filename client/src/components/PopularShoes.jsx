import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import '../styles/PopularShoes.css'

export default function PopularShoes() {
    const [shoes, setShoes] = useState([]); // declarar un array de shoes 

    useEffect(() => {
        const fetchShoes = async () => {
            try {
                // Realizar la solicitud GET al servidor para obtener las zapatillas
                const response = await axios.get('/shoes');
                console.log(response.data);
                setShoes(response.data); // inicializar el array de zapatillas con los datos obtenidos del servidor
            } catch (error) {
                console.error('Error al obtener las zapatillas:', error);
            }
        };

        fetchShoes(); // Llamar a la función para obtener las zapatillas al cargar el componente
    }, []);

    // Ordenar las zapatillas según su popularidad (de mayor a menor)
    const popularShoes = shoes.sort((a, b) => b.popularity - a.popularity).slice(0, 8); // Mostrar solo las 10 zapatillas más populares

    return (
        <div className="container mt-4">
            <h2>Las 10 zapatillas más populares entre nuestros usuarios</h2>
            <div className="popular-shoes">
                {popularShoes.map((shoe, index) => (
                    <div key={index} className="shoe-card">
                        <Link to={`/detailShoe/${shoe._id}`}>
                            <img src={shoe.images[0]} className="card-img-top" alt={`Imagen de ${shoe.brand}`} />
                        </Link>
                        <h3>{shoe.brand} {shoe.model}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

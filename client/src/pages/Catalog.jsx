import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from "../components/SearchBar";
export default function Catalog() {
    const [catalogShoes, setcatalogShoes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    useEffect(() => {
        const fetchCatalogShoes = async () => {
            try {
                const response = await axios.get(`/shoes`);
                console.log(response.data);
                setcatalogShoes(response.data)
            } catch (error) {
                console.error('Error al obtener el cstalogo de zapatillas:', error);
            }
        };

        fetchCatalogShoes();
    },[]);

    // llamar a shoeList pero pasarle todos los zapatos, y hacer una PAGINACION !!!!
    // Calcula el índice de la primera y última zapatilla de la página actual
    const indexOfLastShoe = currentPage * pageSize;
    const indexOfFirstShoe = indexOfLastShoe - pageSize;
    const currentShoes = catalogShoes.slice(indexOfFirstShoe, indexOfLastShoe);


    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };


    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (

        <div className="container mt-4">
            <h2>Catálogo de Zapatillas</h2>
            <div className="row">
                {currentShoes.map((shoe, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <Link to={`/detailShoe/${shoe._id}`}>
                                <img src={shoe.images[0]} className="card-img-top" alt={`Imagen de ${shoe.brand}`} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{shoe.brand} - {shoe.model}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
                <span>Página {currentPage}</span>
                <button onClick={nextPage} disabled={currentShoes.length < pageSize}>Siguiente</button>
            </div>
        </div>
    );
}

import React, { useState } from 'react';

export default function FilterBar({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');


  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = () => {
    onFilter(brandFilter, colorFilter); // le pasamos al componente Home nuestras elecciones (marca, color)
  };

  return (
    <div>
    
         {/*   <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}
     {/* <button onClick={handleSearch}>Buscar</button> */}

      <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
        <option value="">Filtrar por marca</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="Reebok">Reebok</option>
        <option value="Puma">Puma</option>
        {/* Agregar más opciones de marca según sea necesario */}
      </select>

      <select value={colorFilter} onChange={(e) => setColorFilter(e.target.value)}>
        <option value="">Filtrar por color</option>
        <option value="White">White</option>
        <option value="Black">Black</option>
        {/* Agregar más opciones de color según sea necesario */}
      </select>

      <button onClick={handleFilter}>Filtrar</button>
    </div>
  );
}

// initialData .js  -> shoes, collection , offers
const shoesData = [
    {
        brand: 'Nike',
        model: 'Air Max 90',
        size: 10,
        price: 150,
        color: 'White',
        images: [
            'https://i8.amplience.net/i/jpl/jd_689848_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689848_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689848_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689848_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Adidas',
        model: 'Originals Gazelle para Mujer',
        size: 9,
        price: 100,
        color: 'Black',
        images: [
            'https://i8.amplience.net/i/jpl/jd_702859_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_702859_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_702859_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_702859_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },{
        brand: 'Reebok',
        model: 'club c 85',
        size: 8,
        price: 90,
        color: 'White',
        images: [
            'https://i8.amplience.net/i/jpl/jd_619896_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_619896_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_619896_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_619896_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Puma',
        model: '180',
        size: 7,
        price: 80,
        color: 'Blue',
        images: [
            'https://i8.amplience.net/i/jpl/jd_690796_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690796_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690796_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690796_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Nike',
        model: 'Air Max 90',
        size: 9,
        price: 120,
        color: 'White',
        images: [
            'https://i8.amplience.net/i/jpl/jd_647114_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_647114_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_647114_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_647114_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Nike',
        model: 'Air Max 95',
        size: 8,
        price: 150,
        color: 'Black',
        images: [
            'https://i8.amplience.net/i/jpl/jd_680546_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_680546_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_680546_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_680546_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Reebok',
        model: 'Classic Leather Hexalite',
        size: 9,
        price: 90,
        color: 'White',
        images: [
            'https://i8.amplience.net/i/jpl/jd_690901_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690901_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690901_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690901_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },
    {
        brand: 'Reebok',
        model: 'Preseason 94 Low',
        size: 8,
        price: 100,
        color: 'White',
        images: [
            'https://i8.amplience.net/i/jpl/jd_687044_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_687044_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_687044_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_687044_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },





    {
        brand: 'Nike',
        model: 'Air Max 270 Children',
        size: 8,
        price: 100,
        color: 'White',
        images: [
            'https://i8.amplience.net/i/jpl/jd_689363_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689363_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689363_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_689363_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    },

    {
        brand: 'Puma',
        model: 'Suede XL',
        size: 8,
        price: 100,
        color: 'White',
        images: [
            'https://i8.amplience.net/i/jpl/jd_690794_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690794_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690794_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_690794_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    }
    , {
        brand: 'Reebok',
        model: 'Classic Leather Perfect Split Children',
        size: 8,
        price: 100,
        color: 'White',
        images: [
            'https://i8.amplience.net/i/jpl/jd_686946_a?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_686946_b?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_686946_c?qlt=92&w=750&h=531&v=1&fmt=auto',
            'https://i8.amplience.net/i/jpl/jd_686946_e?qlt=92&w=750&h=531&v=1&fmt=auto'
            
        ]
    }
];

const collectionsData = [
    {
        name: 'Colección de Verano',
        description: 'Descubre nuestra colección de verano con zapatillas frescas y coloridas.',
        includedShoes: ['Air Max 90', 'Preseason 94 Low'] // Nombres de las zapatillas que pertenecen a esta colección
    },
    {
        name: 'Colección de Invierno',
        description: 'Explora nuestra colección de invierno con zapatillas cálidas y resistentes.',
        includedShoes: ['Classic Leather Hexalite', 'club c 85'] // Nombres de las zapatillas que pertenecen a esta colección
    }
];

const offersData = [
    {
        title: 'Oferta de Verano',
        details: '¡Descuento especial en zapatillas para el verano!',
        includedShoes: ['180','Preseason 94 Low','Air Max 95'] // Nombres de las zapatillas incluidas
    },
    {
        title: 'Oferta de Invierno',
        details: '¡Gran venta de invierno en zapatillas!',
        includedShoes: ['Classic Leather Hexalite'] // Nombres de las zapatillas incluidas
    }
];

module.exports = {
    shoesData,
    collectionsData,
    offersData
};
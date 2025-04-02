import PropTypes from 'prop-types';
import './ProductList.css';
function ProductList() {
    // Removed unused showCart state

    const plantCategories = [
        "Air Purifying Plants", "Aromatic Fragrant Plants", "Insect Repellent Plants", "Medicinal Plants", "Low Maintenance Plants"
    ];

    const plantsArray = {
        "Air Purifying Plants": [
            { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
            { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
            { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", description: "Removes mold spores and purifies the air.", cost: "$18" },
            { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity to the air and removes toxins.", cost: "$20" }
        ],
        "Aromatic Fragrant Plants": [
            { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop", description: "Calming scent, used in aromatherapy.", cost: "$20" },
            { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop", description: "Sweet fragrance, promotes relaxation.", cost: "$18" }
        ],
        "Insect Repellent Plants": [
            { name: "Oregano", image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg", description: "Oregano contains compounds that deter insects.", cost: "$10" },
            { name: "Marigold", image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg", description: "Natural insect repellent, also adds color to the garden.", cost: "$8" }
        ],
        "Medicinal Plants": [
            { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Soothing gel used for skin ailments.", cost: "$14" },
            { name: "Echinacea", image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg", description: "Boosts immune system, helps fight colds.", cost: "$16" }
        ],
        "Low Maintenance Plants": [
            { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop", description: "Thrives in low light and requires minimal watering.", cost: "$25" },
            { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg", description: "Tolerates neglect and can grow in various conditions.", cost: "$10" }
        ]
    };

    return (
        <div>
            <h2>Plant Categories</h2>
            {plantCategories.map(category => (
                <div key={category}>
                    <h3>{category}</h3>
                    <div className="product-grid">
                        {plantsArray[category].map((plant, index) => (
                            <div key={index} className="product-card">
                                <img src={plant.image} alt={plant.name} />
                                <h4>{plant.name}</h4>
                                <p>{plant.description}</p>
                                <p>Price: {plant.cost}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
ProductList.propTypes = {
    onHomeClick: PropTypes.func,
};

export default ProductList;

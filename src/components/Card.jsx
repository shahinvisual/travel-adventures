
const Card = ({ item }) => {
    const { adventureTitle, image, ecoFriendlyFeatures } = item;
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{adventureTitle}</h2>
                <div>
                    {
                        ecoFriendlyFeatures.map((eco, idx) => <li key={idx}>{eco}</li>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#2A4759] text-white rounded-lg">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
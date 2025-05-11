import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Home = () => {
    const travelData = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8 w-11/12 mx-auto bg-[rgba(235,235,235,0.57)] rounded-xl p-5 px-4 sm:px-6 lg:px-8 py-10 ">
            {
                travelData.map((item, index) => <Card key={index} item={item}></Card>)
            }
        </div>
    );
};

export default Home;
import { useLoaderData, useParams } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { GiHiking } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { GiPalmTree } from "react-icons/gi";
import { WiStormWarning } from "react-icons/wi";
import { LiaToolsSolid } from "react-icons/lia";
import { AiOutlinePropertySafety } from "react-icons/ai";
const Details = () => {
    const { id } = useParams();
    const loadingData = useLoaderData();
    const findData = loadingData.find(item => item.id === JSON.parse(id));
    const {
        adventureTitle,
        image,
        categoryName,
        longDescription,
        adventureCost,
        bookingAvailability,
        location,
        duration,
        adventureLevel,
        includedItems,
        ecoFriendlyFeatures,
        maxGroupSize,
        specialInstructions } = findData;

    return (
        <div className=' w-11/12 lg:w-10/12 mx-auto flex justify-center py-12'>
            <div className="card bg-base-100 w-full lg:w-2/3 shadow-sm">
                <figure>
                    <img
                    className='w-full'
                        src={image}
                        alt="image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {adventureTitle}
                        <div className="badge bg-[#67AE6E]">$ {adventureCost}</div>
                    </h2>
                    <p>{longDescription}</p>
                    <div className='border-b-2'></div>
                    <p className='flex gap-1 items-center text-lg font-semibold'><CiLocationOn size={22} />{location}</p>
                    <p className='flex gap-1 items-center text-lg font-semibold'><BiCategory />{categoryName}</p>
                    <p className='flex gap-1 items-center text-lg font-semibold'><GiHiking />{adventureLevel}</p>
                    <p className='flex gap-1 items-center text-lg font-semibold'><GrGroup />{maxGroupSize}</p>
                    <div className='border-b-2'></div>
                    <div>
                        <h1 className='flex gap-1 items-center text-lg font-semibold'><GiPalmTree />ecoFriendlyFeatures</h1>
                        {
                            ecoFriendlyFeatures.map((item, idx) => <>
                                <li key={idx}>{item}</li>
                            </>)
                        }
                    </div>
                    <div className='border-b-2'></div>
                    <div>
                        <h1 className='flex gap-1 items-center text-lg font-semibold'><LiaToolsSolid />includedItems</h1>
                        {
                            includedItems.map((item, idx) => <>
                                <li key={idx}>{item}</li>
                            </>)
                        }
                    </div>
                    <div className='border-b-2'></div>
                    <div>
                        <h1 className='flex gap-1 items-center text-lg font-semibold'><AiOutlinePropertySafety />specialInstructions</h1>
                        {
                            specialInstructions.map((item, idx) => <>
                                <li key={idx}>{item}</li>
                            </>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
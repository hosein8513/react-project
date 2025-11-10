import { useEffect, useState } from "react";
import { getphotos } from "../../services/photos";

const Gallery = () => {

    const [photo, setphoto] = useState([])

    const handlegettasks = async () => {
        try {
            const data = await getphotos()
            setphoto(data.slice(1, 11) || [])
        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        handlegettasks()
    }, [])

    return (
        <div className="w-full overflow-y-auto">
            <div className="w-[70%]  grid grid-cols-1 md:grid-cols-2 gap-4 pb-24 mx-auto">
                {photo.map(ph => (
                    <div className="w-full bg-orange-100 rounded-lg border flex flex-col p-4" key={ph.id}>
                        <span className="text-[15px] font-semibold text-gray-900">{ph.title}</span>
                        <img src={ph.url} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
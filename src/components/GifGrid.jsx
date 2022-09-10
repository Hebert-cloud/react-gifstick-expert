//import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGif } from "../hooks/useFetchGif";
import { GrifItems } from "./GifItems";


export const GifGrid = ({category, tipo}) =>{

    const {images, isLoading} = useFetchGif(category, tipo);

    /*const [images, setImages] = useState([]);

    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();     
    }, []);*/

    return (
        <div>
            <h3>{category}</h3>

            {
                isLoading && ( <h2>CARGANDO...</h2> )
            }

            <div className="card-grid"> 
                {
                    images.map( (img) => (
                        <GrifItems 
                            key={img.id} 
                            {...img}                           
                        />
                    ))
                }
            </div>
        </div>
    )
}
import { useState } from "react";
import { AddCategory } from "./components/AddCategy";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState([ 'One Punch' ]);
    const [tipo, setTipo] = useState('gifs');

    const typeGifs = () => setTipo('gifs');
    const typeStickers = () => setTipo('stickers');

    const onAddCategories = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return( 
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={ value => onAddCategories(value) }
            />

            <button aria-label="btn-Gifs" onClick={typeGifs}>Buscar Gifs</button>
            <button aria-label="btn-Stickers" onClick={typeStickers}>Buscar Stickers</button>

            {/* Listado */}           
            {
                categories.map( category =>
                <GifGrid key={category} category={category} tipo={tipo} />
                )
            }
        </>
    );
};
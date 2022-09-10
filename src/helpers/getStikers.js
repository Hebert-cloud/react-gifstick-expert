/*const btn_gifs = document.getElementById('btn-Gifs');
const btn_stick = document.getElementById('btn-Stikers');

let value = '';

btn_gifs.addEventListener('click', (e) =>{
    e.preventDefault();
    
    console.log('ok');
});

btn_stick.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('ok');
});

export const getValue = () =>{
    return 'hola'
}
getValue();

export const getStikers = async(name = 'default') =>{
    try {
        const api_key = 'O3IF1ExtGyDEorwSJShTa4eIWPvEtEe7';
        const url= `https://api.giphy.com/v1/stickers/search?api_key=${api_key}&q=${name}&limit=20`;
        const resp = await fetch( url );

        const { data = [] } = await resp.json();

        const stikers = data.map(img =>({
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }))

        return stikers;
    } catch (error) {
        throw error;
    }
}*/
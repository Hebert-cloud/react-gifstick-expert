
export const getGifs = async(name = 'default', tipo = 'stickers') =>{
    try {
        const api_key = 'O3IF1ExtGyDEorwSJShTa4eIWPvEtEe7';
        const url= `https://api.giphy.com/v1/${tipo}/search?api_key=${api_key}&q=${name}&limit=20`;
        const resp = await fetch( url );

        const { data = [] } = await resp.json();

        const gifs = data.map(img =>({
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        })) 

        return gifs;
    } catch (error) {
        throw error;
    }
}
export const getGifs = async(category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=RQONVCkRdhDBZQQD4lVaaI2B7QoxJBk8&limit=5`;
        const res = await fetch(url);
        const {data} = await res.json();
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }))
        return gifs;
    } catch (error) {
        console.log(error);
    }

}
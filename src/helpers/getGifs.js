export const getGifs = async (category) => {
    const link = `https://api.giphy.com/v1/gifs/search?api_key=s8BcNKs8PxEb31xZ79aBL2pMSqNuzHvC&q=${encodeURI(category)}&limit=15`
    const resp = await fetch(link);
    const { data } = await resp.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
    })

    return gifs
    
}
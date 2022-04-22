import { getGifs } from "../../helpers/getGifs"

describe('pruebas con helper getgifs', () => {

    test('Debe de traer 10 elementos', async() => { 
        const gifs  = await getGifs('Mikasa')
        expect(gifs.length).toBe(10)
    })

    test('El componente getGifs debe tener algo que buscar', async() => { 
        const gifs  = await getGifs('zoe Kravitz')
        expect(gifs.length > 0).toBe(true)
    })
 })
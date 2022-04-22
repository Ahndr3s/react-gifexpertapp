import React from 'react'
import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('pruebas en <GifGriditem />', () => { 
    const title = 'Un titulo'
    const url =  'https://localhost/algo.jpg'
    // shallow es un metodo que renderiza un solo elemento qu esta siendo probado
    const wrapper = shallow(<GifGridItem title={title} url={url}/> )
    
    test('Debe mostrara el componente correctamente', () => { 
        expect (wrapper).toMatchSnapshot()
    })

    test('debe tener un parrafo por title', () => {  
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })

    test('la imagen debe sangrar', () => { 
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title) 
     })

    test('el div cuanta conm la clase fadeIn', () => { 
        const dv = wrapper.find('div')
        expect(dv.prop('className').includes('animate__fadeIn')).toBe(true)
     })
})
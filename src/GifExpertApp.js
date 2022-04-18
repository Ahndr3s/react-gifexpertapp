import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    
    const [categorias, setcategorias] = useState(['forest'])
    // const handleAdd = () => {
        // setcategorias([...categorias,'Teen titans'])
    // }
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setcategorias={setcategorias} />
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ul>
                {
                    categorias.map((category) => (
                        // <li key={categorie}>{categorie}</li>
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ul>
        </div>
    )
}

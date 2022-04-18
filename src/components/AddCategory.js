import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setcategorias}) => {
  const [entry, setentry] = useState('')

  const handleChange = (e) => {
    setentry(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(entry.length > 2){
        setcategorias(cats => [ entry, ...cats])
        setentry('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type={'text'} 
            placeholder={'Type Something'} 
            value={entry}
            onChange={handleChange}            
        />
    </form>
  )
}

AddCategory.propTypes = {
    setcategorias: PropTypes.func.isRequired
}


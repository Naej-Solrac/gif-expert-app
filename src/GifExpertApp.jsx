import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  //hook para mantener el estado 
  const [ categories, setCategories ] = useState(['One punch', 'Dragon ball'])
  console.log(categories);

  const onAddCategory = () => {

    setCategories( [...categories, 'jean'] ) // una forma de agregar categoria
    //setCategories( cat =>  [...categories, 'jean']) // otra forma de hacelo
  }

  return (
    <>
      { /*titulo*/ }
      <h1>GifExpertApp!</h1>

      { /*Input*/ }
        <AddCategory/>
      { /*Listado de Gif*/ }
      <button onClick={onAddCategory}>agregar</button>
      <ol>
        {categories.map(category => {
          return <li key={category}> { category } </li>
          })
        }
      </ol>
        { /*Gif Item*/ }
    </>
  )
}

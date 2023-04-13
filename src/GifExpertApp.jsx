import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  //hook para mantener el estado 
  const [ categories, setCategories ] = useState(['primer elemento'])
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
        <AddCategory setCategories= { setCategories }/>
      { /*Listado de Gif*/ }

      <ol>
        {
          categories.map(category => {
            return <li key={ category }> { category } </li>
          })
        }
      </ol>
        { /*Gif Item*/ }
    </>
  )
}

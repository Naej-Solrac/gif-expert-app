import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  //hook para mantener el estado 
  const [ categories, setCategories ] = useState(['primer elemento'])
  console.log(categories);

  const onAddCategory = ( newCategory ) => {
    console.log(newCategory);

    //para que no se repita la misma busqueda
    if (categories.includes( newCategory )) {
      return;
    }

    setCategories([newCategory,...categories]);
    //setCategories( [...categories, 'jean'] ) // una forma de agregar categoria
    //setCategories( cat =>  [...categories, 'jean']) // otra forma de hacelo
  }

  return (
    <>
      { /*titulo*/ }
      <h1>GifExpertApp!</h1>

      { /*Input*/ }
        <AddCategory 
          onNewCategory = {(event) => onAddCategory(event)}
        />
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

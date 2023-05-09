import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //hook para mantener el estado 
  const [ categories, setCategories ] = useState(['elemento 1', 'elemento 2'])
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

      <h1>GifExpertApp!</h1>


        <AddCategory 
          onNewCategory = {(event) => onAddCategory(event)}
        />


        {
          categories.map(category => (
              <GifGrid key={ category } category={ category}/>
            ))
        }


    </>
  )
}

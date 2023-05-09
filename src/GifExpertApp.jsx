import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  //hook para mantener el estado 
  const [ categories, setCategories ] = useState(['one piece'])
  //console.log(categories);

  const onAddCategory = ( newCategory ) => {
    //console.log(newCategory);

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

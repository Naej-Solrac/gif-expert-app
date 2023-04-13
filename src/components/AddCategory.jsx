import { useState } from "react";
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);// para cambiar el estado
    }

    const onSubmit = (event) => {

        event.preventDefault(); //para evitar que se refresque
        console.log(inputValue);
        
        //apra no permitir que hayan espacios vacion ni una sola letra, min 2
        if (inputValue.trim().length <= 1) return ;
        //le envio el nuevo valor ingresado a categories
        setCategories((categories) => [inputValue, ...categories]);
        setInputValue('');

    }

  return (
    <form onSubmit={ (event) => onSubmit(event) } >
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
        />
    </form>
  );
};

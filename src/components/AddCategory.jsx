import { useState } from "react";
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);// para cambiar el estado
    }

    const onSubmit = (event) => {
        event.preventDefault(); //para evitar que se refresque
        //console.log(inputValue);
        
        if (inputValue.trim().length <= 1) return ;

        onNewCategory( inputValue.trim() )
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

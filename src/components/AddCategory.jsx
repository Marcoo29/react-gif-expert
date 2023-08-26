import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => { //lo recibe como props

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( event ) => {
        setInputValue(event.target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault(); //para que no se reincie cuando demos enter
        if ( inputValue.trim().length <= 1 ) return;
        
        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs..."
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
        
    )
}

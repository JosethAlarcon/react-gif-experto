import { useState } from "react"


export const AddCategoria = ({onNuevaCategoria}) => {

    const [inputValor, setInputValor] = useState('')

    const onInputChange = ({target}) => {
        setInputValor(target.value)
        console.log(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValor.trim().length <= 1)return
        
        onNuevaCategoria(inputValor.trim())
        //setCategorias(categorias => [inputValor, ...categorias])
        setInputValor('')
    }

    return (
        <form onSubmit={event => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar gif"
                value={inputValor}
                onChange={ event => onInputChange(event) }
            />
        </form>
        
    )
}

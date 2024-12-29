import { useState } from "react"
import { AddCategoria } from "./components/AddCategoria"
import { GifRed } from "./components/GifRed"

export const GifExpertoApp = () => {

    const [categorias, setCategorias] = useState([ 'One Punch' ])

    const onAddCategoria = (nuevaCategoria) => {
        if(categorias.includes(nuevaCategoria)){
            return
        }
        console.log(nuevaCategoria)

        setCategorias([ nuevaCategoria, ...categorias])
    }

    return(
        <>
            <h1>GifExpertoApp</h1>
                <AddCategoria
                    onNuevaCategoria={(event) => onAddCategoria(event)}
                />
            {
                categorias.map((category) => (
                    <GifRed 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    )
}
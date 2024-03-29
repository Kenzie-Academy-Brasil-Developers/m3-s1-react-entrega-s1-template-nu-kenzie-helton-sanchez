
export function Card ({description, removeCard}) {

    return(
        <li className={
            description.typeValue === "entrada" ? "liEntrada":
            "liSaida"
        }>
        <h3>{description.description}</h3>
        <p>{description.typeValue}</p>
        <div>
            <p>R${description.value},00</p>
            <button onClick={() => removeCard(description.id)}>Excluir</button>
            </div>
        </li>
    )
    
}
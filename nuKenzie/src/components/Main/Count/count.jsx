
export function Count ({summary}) {

    const contability = summary.reduce((acumulate, item) => (
        item.typeValue === "saida" ? acumulate - Number(item.value):
        acumulate + Number(item.value)
    ), 0)

    return(
        <div>
            <p>Valor Total: <span>R$ {Number(contability).toFixed(2)}</span></p>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}
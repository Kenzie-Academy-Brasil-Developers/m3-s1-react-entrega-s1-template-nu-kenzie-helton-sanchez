import { Card } from "./card.jsx";

export function FinancialSummaryList ({summary, removeCard}) {

    return(
        <>
        <h2>Resumo financeiro</h2>

        <ul> 
            {summary.map((description) => {
                return <Card key={description.id} description={description} removeCard={removeCard} />
            })}
        </ul>
        </>

    )
}
import { useState } from "react"

export function Form ({ addToSummary }) {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [typeValue, setTypeValue] = useState("");

    const submit = (event) => {
        event.preventDefault();

        const formData = {description, value};
        addToSummary(formData);
    }

    return(

        <form onSubmit={submit}>

            <label htmlFor="description">Descrição</label>
            <input type="text" name="description" placeholder="Digite aqui sua descrição" value={description} onChange={(event) => setDescription(event.target.value)}/>
            <span>Ex: Compra de roupas.</span>

            <label htmlFor="value">Valor (R$)</label>
            <input type="number" name="value" value={value} onChange={(event) => setValue(event.target.value)}/>

            <label htmlFor="typeValue">Tipo de Valor</label>
            <select name="typeValue" value={typeValue} onChange={(event) => setTypeValue(event.target.value)}>
                <option value="entrada">Entrada</option>
                <option value="saida">Saida</option>
            </select>
            <button type="submit">Inserir Valor</button>

        </form>
    )

}

export function Form () {

    return(
        <form>

            <label htmlFor="description">Descrição</label>
            <input type={"text"} name="description" placeholder="Digite aqui sua descrição"/>
            <span>Ex: Compra de roupas.</span>
            <label htmlFor="value">Valor (R$)</label>
            <input type={"number"} name="value" />
            <label htmlFor="typeValue">Tipo de Valor</label>
            <select name="typeValue" >
                <option value="">Entrada</option>
            </select>
            <button type="submit">Inserir Valor</button>

        </form>
    )

}
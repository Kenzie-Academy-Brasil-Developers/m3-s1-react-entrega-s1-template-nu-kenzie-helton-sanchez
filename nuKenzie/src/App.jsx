import { useState } from 'react'
import { IndexHeader } from './components/Header/index'
import { Count } from './components/Main/Count/count.jsx'
import { Form } from './components/Main/Form/form.jsx'
import { FinancialSummaryList } from './components/Main/SectionList/list.jsx'

import { v4 as uuidv4} from 'uuid';



import './styles/reset.css'
import './styles/globalStyle.css'
import './styles/home.css'

function App() {

  const [summary, setSummary] = useState([])



  function addToSummary (formData) {
    const newCard = { ...formData, id: uuidv4()}
    const newCardList = [...summary, newCard];
    setSummary(newCardList);
  }

  function removeCard (descriptionId) {
    const newSummary = summary.filter(description => description.id !== descriptionId)
    setSummary(newSummary);
  }

  return (
    <>

    <IndexHeader />
    <main>
      <section className='container__form'>
        <Form addToSummary={addToSummary} />
        <Count summary={summary} />
      </section>
      <section className='container__summary'>
        <FinancialSummaryList summary={summary} removeCard={removeCard} />
      </section>
    </main>

    </>
  )
}

export default App

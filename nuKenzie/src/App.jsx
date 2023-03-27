import { useState } from 'react'
import { IndexHeader } from './components/Header/index'
import { Count } from './components/Main/Count/count.jsx'
import { Form } from './components/Main/Form/form.jsx'
import { Card } from './components/Main/SectionList/card'
import { FinancialSummaryList } from './components/Main/SectionList/list.jsx'

import './styles/reset.css'
import './styles/globalStyle.css'
import './styles/home.css'

function App() {

  return (
    <>

    <IndexHeader />
    <main>
      <section className='container__form'>
        <Form />
        <Count />
      </section>
      <section className='container__summary'>
        <FinancialSummaryList />
      </section>
    </main>

    </>
  )
}

export default App

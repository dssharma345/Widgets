import React , {useState} from 'react'
import Accordion from './components/Accordion'
import SearchContents from './components/SearchContents'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items=[
    {
        title: 'What is React?',
        content: 'React is a front end JavaScript framework.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite library among engineers.'
    },
    {
        title: 'What do you like most about React?',
        content: 'It is easy to learn and and mostly javascript.'
    }
]

const options =[
    {
        label: 'The green Color',
        value: 'Green'
    },
    {
        label: 'The red Color',
        value: 'Red'
    },
    {
        label: 'The saffron Color',
        value: 'Saffron'
    }

]

 const App = ()=>{
    const [selected, setSelected]= useState(options[0])
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/search-contents">
                <SearchContents />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected}/>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            
        </div>
    )
}

export default App
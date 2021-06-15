import React, {useState, useEffect} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options =[
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Italian',
        value: 'it'
    }


]

const Translate=()=>{
    const[language, setLanguage]=useState(options[2]);
    const[text, setText]=useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
            </div>
            <Dropdown label="Select a Language" options={options} selected={language} onSelectedChange={setLanguage} />
            <hr/>
            <h3 classname="ui header">Output</h3>
            <Convert language={language} text={text}/>
        </div>
    )
};

export default Translate;
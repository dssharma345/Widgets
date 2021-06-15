import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SearchContents =()=>{
    const[term, setTerm]=useState('react')
    const[results, setResults]=useState([])
    
    useEffect(()=>{
        const search= async()=>{
            const {data}= await axios.get("https://en.wikipedia.org/w/api.php", {
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
        });
        setResults(data.query.search);
        };

        if(term && !results.length){  //preventing the timelag for the first render
            search()
        }
        else{
            const timeoutId= setTimeout(()=>{
                term && search(); //conditional rendering
            }, 400);
    
            return ()=>{
                clearTimeout(timeoutId)
            }
        }
         
    }, [term]);

    const onInputChange=(event)=>{
        setTerm(event.target.value)
    }

    const renderedResults = results.map((result)=>{
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    target="_blank" rel="noreferrer">Go</a>
                </div>
                <div className="content">
                    <div className="title">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
        })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input type='text' onChange={(event)=>onInputChange(event)}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default SearchContents
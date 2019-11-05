import React from 'react'

const FAQ = ({faq, index, toggleFAQ}) => {

    const addAnswer = (a) => {
    
        const aa = ref.aa;
        faq.answer.push(aa);
        faq.open = false;
    }

    const userInput = (event) => {
        faq.open = false;
        return event.target.value;
    }

    


    return (
        <div 
        className={"faq " + (faq.open ? 'open' : '')}
        key={index}
        onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer.map(n=> {
                    
                    return <div> <li>{[n]}</li> <br></br>
                    </div>
                })}
                
            </div>
            <div>
            {}

            </div>
            <input type="text" className="inputQuestion" onClick={(event) => userInput(event)} id="a" ref="aa"></input>
            <button onClick={() => addAnswer(document.getElementById('a').value)} className="faq-addAnswer" >Add Answer</button>


        </div>
    )
}

export default FAQ

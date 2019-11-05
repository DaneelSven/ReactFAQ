import React, {useState} from 'react';
import Header from './Header'
import FAQ from './FAQ'


function App() {

  
  const [faqs, setfaqs] = useState([
    {
      question: 'Can I travel from Lillestrom to Oslo?',
      answer: ['Yes, you can just check out the front page and select desired deptarture and destination', 'noo', 'thats not how it works'],
      open: true
    },
    {
      question: 'Is it possible to travel on a sunday?',
      answer: ['Yes, you can travel on a sunday but there is a reduction in traffic', 'kansje'],
      open: false
    },{
      question: 'How long is my ticket valid for?',
      answer: ['This depends on your journey duration since it varies.'],
      open: false
    },{
      question: 'How long in advance can i purchase a ticket?',
      answer: ['It is possible to purchase a ticket up to a year from today but we do recommend anything between 1-4 months.'],
      open: false
    },{
      question: 'Whats the difference between betjent and ubetjent on the trains?',
      answer: ['ubetjent is for people who have already purchased a ticket and betjent is for travellers whom wish to purchase the ticket on the train.'],
      open: false
    },{
      question: 'Can i take my bike on the train?',
      answer: ['Yes, you can and wont have to pay any additional fees.'],
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) =>{
      if(i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

  const addquestion = (addQuestion) => {
      faqs.push({
      question: addQuestion,
      answer: [],
      open: false
    });
    toggleFAQ();
  }


  return (
    <div className="App">
      <Header/>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}
          />  
             
        ))}

      </div>
      <input className="askQuestion" id="addQuestion"></input>
      <button className="addQuestion"onClick={() => addquestion(document.getElementById('addQuestion').value)}>Add a Question</button>
    </div>
  );
}

export default App;

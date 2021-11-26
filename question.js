import React from 'react'
function question({Hand,han,showanswer,data:{question,correct_answer,answers}}){

    return(
        <>

<div className="question">
  <h1 dangerouslySetInnerHTML={{__html:question}}/>
</div>
<div className='button_class'>
  {answers.map((answer,idx)=>{
    const sp=showanswer ? (answer===correct_answer ? "green":"red"):"";
    return (
      
      <button className={`normal_button ${sp}`} onClick={()=>{Hand(answer)}} dangerouslySetInnerHTML={{__html:answer}}/>
    )
  })}
  
  
</div>
{showanswer && (<button onClick={han} className="next_button">Next Question</button>)}
        </>
    )
}
export default question
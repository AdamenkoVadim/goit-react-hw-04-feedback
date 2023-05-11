import css from "components/FeedbackOptions/FeedbackOptions.module.css"


export const FeedbackOptions = ({options,onLeaveFeedback})=>{
    return(
        <> 
        {options.map(elem =>{
            return(
         
            <button 
                key={elem}
                type="button"
                className={css.options__btn} 
                onClick = {()=>onLeaveFeedback(elem)}
             >{elem}
            </button>
            )
            })
        }   
        </>
    )
}
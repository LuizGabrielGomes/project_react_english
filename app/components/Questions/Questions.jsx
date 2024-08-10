"use client"
import { data } from "../../staticData/data"

export function Questions() {
function correction(object) {
    console.log(object)


    
    const isCorrect = object.alternatives.map(item =>
        {
            if (item.isCorrect === true) {
                const getElement = document.getElementById(item.alternative);
                getElement.style.background = "green";

            }
        }
    ) 
}
    return (
        <>
        <div class="question">
            
            <p>{data.map(object => {
                return(
                    <>
                        <div id="title" key={object.title} class="title">
                            {object.title}
                        </div>

                        {object.alternatives.map(item => <div id={item.alternative} key={item} class="alternatives">
                            <p class="paragraph">
                                <input type="radio" class="input-radio" name="question" />
                                {item.alternative}
                            </p>
                        </div>)}

                        <div id="buttons" class="question-buttons">
                            <button class="button" onClick={(event) => correction(object)}>
                                correction
                            </button>
                        </div>
                    </>
                )} )}                                                            
            </p>
        </div>
        </>
    )
}
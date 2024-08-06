"use client"
import { Fragment } from "react"
import { data } from "../../staticData/data"

export function Questions() {

console.log(data)





    return (
        <>
            <div class="question">
            
            <p>{data.map(item => {
                return(
                    <>
                        <div id="title" key={item.title} class="title">
                            {item.title}
                        </div>


                        <div id="alternatives" class="alternatives">
                            <p class="paragraph" id="correct-1">
                                <input type="radio" class="input-radio" name="question" />
                                A- Discover a fact or piece of information 
                            </p>

                            <p class="paragraph">
                                <input type="radio" class="input-radio" name="question" /> 
                                B- Means to eventually decide something    
                            
                            </p>
                            <p class="paragraph">
                                <input type="radio" class="input-radio" name="question" />
                                C- To have a good relationship with someone    
                            </p>
                        </div>

                        <div id="buttons" class="question-buttons">
                            {/* <button class="button">
                                previous
                            </button> */}
                            <button class="button" onclick="correction('correct-1')">
                                correction
                            </button>
                            {/* <button class="button">
                                next
                            </button> */}
                        </div>
                    </>
                )} )}                                                            
            </p>

                
            
                
            </div>
        </>
    )
}
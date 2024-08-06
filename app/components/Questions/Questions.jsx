"use client"
import { data } from "../../staticData/data"

export function Questions() {

    return (
        <>
        <div class="question">
            
            <p>{data.map(object => {
                return(
                    <>
                        <div id="title" key={object.title} class="title">
                            {object.title}
                        </div>

                        {object.alternatives.map(item => <div id="alternatives" key={item} class="alternatives">
                            <p class="paragraph" id="correct-1">
                                <input type="radio" class="input-radio" name="question" />
                                {item}
                            </p>
                        </div>)}

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
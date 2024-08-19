"use client"

import { useState } from "react"
import { data } from "../../staticData/data"

export function Questions() {
    const [state, setState] = useState(false);

    function correction(object) {
        // Passo 1) Receber o objeto com todas as infos da questao (para sabermos a alternativa correta)
        console.log("object", object)

        // Passo 2) Quero separar a alternativa correta das demais. 
        const isCorrect = object.alternatives.map(item => {
            if(item.isCorrect === true) {
                // Muda o estado (state) e com isso mudar a alternativa para considerar o isCorrect.
                setState(true)
            }
        })
    }

     // Passo 3) Sabendo qual e a alternativa correta quero que mude o CSS para fundo da alternativa ficar verde. 
    const changeBackgroundWhenIsCorrect = (alternative) => {
        return (state === true && alternative.isCorrect) ? { backgroundColor: "green"} : null;
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
                                <p class="paragraph" style={ changeBackgroundWhenIsCorrect(item) }>
                                    <input type="radio" class="input-radio" name="question" />
                                    {item.alternative}
                                </p>
                            </div>)}

                            <div id="buttons" class="question-buttons">
                                <button 
                                    class="button" 
                                    onClick={(event) => correction(object)}
                                >
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
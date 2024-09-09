"use client"

import { useState } from "react"
import { data } from "../../staticData/data"

export function Questions() {
    const [state, setState] = useState(false);
    const [questionId, setQuestionId]= useState("");
    
    function correction(object) {
        // Passo 1) Receber o objeto com todas as infos da questao (para sabermos a alternativa correta)
        console.log("object", object)

        // Passo 2) Quero separar a alternativa correta das demais. 
        const isCorrect = object.alternatives.map(item => {
            if(item.isCorrect === true) {
                // Muda o estado (state) e com isso mudar a alternativa para considerar o isCorrect.
                setState(true)
                setQuestionId(object._id)
            }
        })
    }

     // Passo 3) Sabendo qual e a alternativa correta quero que mude o CSS para fundo da alternativa ficar verde. 
    const changeBackgroundWhenIsCorrect = (object, alternative) => {
        return (state === true && object._id === questionId && alternative.isCorrect) ?  { backgroundColor: "#22c55e", color: "#fff"} : null;
    }

    return (
        <>
            <div className="question">
                
                <div>{data.map(object => {
                    return(
                        <div key={object._id}>
                            <div id="title"  className="title">
                                {object.title}
                            </div>

                            {object.alternatives.map(item => 
                                <div id={item.alternative} key={item.alternative} className="alternatives">
                                    <label htmlFor={item.alternative + "alternative"} className="paragraph" style={ changeBackgroundWhenIsCorrect(object, item) }>
                                        <input id={item.alternative + "alternative"} type="radio" className="input-radio" name={item} />
                                        {item.alternative}
                                    </label>
                                </div>
                            )}

                            <div id="buttons" className="question-buttons">
                                <button 
                                    className="button" 
                                    onClick={(event) => correction(object)}
                                >
                                    correction
                                </button>
                            </div>
                        </div>
                    )} )}                                                            
                </div>
            </div>
        </>
    )
}
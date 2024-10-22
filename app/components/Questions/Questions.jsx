"use client"

import "./styles.css"
import { useState } from "react"
import { data } from "../../staticData/data"
import Modal from 'react-modal';

export function Questions() {
    const [state, setState] = useState(false);
    const [questionId, setQuestionId]= useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
    };

    function correction(event, object) {
        // Passo 1) Receber o objeto com todas as infos da questao (para sabermos a alternativa correta)
        event.preventDefault()

        console.log("object", object) 
        console.log(event)
        // Passo 2) Quero separar a alternativa correta das demais. 
        const isCorrect = object.alternatives.map(item => {
            if(item.isCorrect === true) {
                // Muda o estado (state) e com isso mudar a alternativa para considerar o isCorrect.
            console.log(item.isCorrect)
                setState(true)
                setQuestionId(object._id)
                setModalIsOpen(true)
            }
        })
    }

     // Passo 3) Sabendo qual e a alternativa correta quero que mude o CSS para fundo da alternativa ficar verde. 
    const changeBackgroundWhenIsCorrect = (object, alternative) => {
        return (state === true && object._id === questionId && alternative.isCorrect) ?  { backgroundColor: "#22c55e", color: "#fff"} : null;
    }

    function handleModal() {
        setModalIsOpen(false)
    } 
    

// funcao para saber se a alternativa esta correta 





    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                style={customStyles}
            >
                {state === true ? "Congratulations, you got it right" : "Incorrect option. Please try again."}

                <div>
                    <button  onClick={() => handleModal()} className="button-question">Close</button>
                </div> 
            </Modal>

            <form className="question" onSubmit={(event) => correction(event)}>
                
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
                                    // onClick={(event) => correction(event, object)}
                                >
                                    correction
                                </button>
                            </div>
                        </div>
                    )} )}                                                            
                </div>
            </form>
        </>
    )
}
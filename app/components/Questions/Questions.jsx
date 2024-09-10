"use client"

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

    function correction(object) {
        // Passo 1) Receber o objeto com todas as infos da questao (para sabermos a alternativa correta)
        // console.log("object", object)

        // Passo 2) Quero separar a alternativa correta das demais. 
        const isCorrect = object.alternatives.map(item => {
            if(item.isCorrect === true) {
                // Muda o estado (state) e com isso mudar a alternativa para considerar o isCorrect.
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
    

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                style={customStyles}
            >
                <p>Congratulations, you got it right</p>
                <button onClick={() => handleModal()}>Close</button>
            </Modal>

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
"use client"

export function Container() {
    return (
        <>
            <div class="container">
            
                <div id="title" class="title">
                    <p>
                        1) What is the meaning of find out?
                    </p>
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
            
                <div id="buttons" class="container-buttons">
                    <button class="button">
                        previous
                    </button>
                    <button class="button" onclick="correction('correct-1')">
                        correction
                    </button>
                    <button class="button">
                        next
                    </button>
                </div>
            </div>
        </>
    )
}
import React, { useState } from 'react'


const Textarea = () => {
    const [text, settext] = useState('')

    const handleonclick=() => {
        let up=text.toUpperCase()
        settext(up)
    }

    const handleonchange=(event) => {
        settext(event.target.value)
    }


    return (
        <>
            <div className='container my-3'>
                <h3>Enter the text below</h3>
                <form>
                    <div className="form-group">
                        {/* <label HTMLfor="exampleFormControlTextarea1">Example textarea</label> */}
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleonchange} placeholder="enter your text"></textarea>
                    </div>
                </form>
                <button className="btn btn-primary" onClick={handleonclick}>Convert UpperCase</button>
            </div>
        </>
    )
}

export default Textarea

import { useState } from 'react'
function Education () {

    const[isSaved, setIsSaved] = useState(false)
    const[educationInfo, setInfo] = useState (
        {
            institution: '',
            qualification:'',
            yearStarted:'',
            yearFinished:'',
        }
    )


    const handleChange = (event) => {
        const {name, value} = event.target
        setInfo(prev=>({
            ...prev,
            [name]: value,

        }))
    }

    const handleSaved = () => {
        setIsSaved(!isSaved)
    }

    

    return (
        <div className='education'>
            <div className='section-heading'>
                Education
            </div>
            <div className='education-info'>
                <Form isSaved={isSaved} educationInfo={educationInfo} handleChange = {handleChange} handleSaved = {handleSaved}/>
            </div>
            
        </div>
    )
}

function Form ( {isSaved, educationInfo, handleChange, handleSaved} ) {
    

    return (
    <div className='education-form'>
        <label htmlFor='institution'>Institution</label>
        {
            isSaved ? 
            <div className='institution'> {educationInfo.institution}</div> :
            <input 
                name='institution'
                type='Text'
                value={educationInfo.institution}
                onChange={handleChange}
            />
        }
        <label htmlFor='qualification'>Qualification</label>
        {
            isSaved ?
            <div className='qualification'> {educationInfo.qualification} </div>:
            <input
                name='qualification'
                type='Text'
                value={educationInfo.qualification}
                onChange={handleChange}
            />                
        }
        <label htmlFor='yearStarted'>Year Started</label>
        {
            isSaved?
            <div className='yearStarted'> {educationInfo.yearStarted} </div>:
            <input
                name='yearStarted'
                type='date'
                value={educationInfo.yearStarted}
                onChange={handleChange}
            />
        }
        <label htmlFor='yearFinished'>Completion Year</label>
        {
            isSaved?
            <div className='yearFinished'> {educationInfo.yearFinished} </div>:
            <input
                name='yearFinished'
                type='date'
                value={educationInfo.yearFinished}
                onChange={handleChange}
            />
        }
        <input className = 'submit-button'
            name='submit'
            type='button'
            value={isSaved? 'Edit Info' : 'Save Info'}
            onClick={handleSaved}
        />
    </div>
    )

}

export default Education
import { useState } from 'react'


function Experience () {

    const [isSaved, setIsSaved] = useState(false)
    const [experienceInfo, setInfo] = useState(
        {
            companyName: '',
            positionHeld:'',
            dateStarted:'',
            dateEnded:'',
            reference:'',
        }
    )

    const handleSaved = () => {
        setIsSaved(!isSaved)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setInfo(prev =>({
            ...prev,
            [name]:value
        }))
    }

    return (
        <div className='experience'>
            <div className='section-heading'>
                Work Experience
            </div>
            <div className='experience-info'>
                <Form experienceInfo={experienceInfo} isSaved={isSaved} handleSaved={handleSaved} handleChange={handleChange}/>
            </div>
        </div>
    )
}


const Form = ( { experienceInfo, isSaved, handleSaved, handleChange }) => {
    return (
        <form className='experience-form'>
            <label htmlFor='companyName'>Company Name:</label>
            {
                isSaved?
                <div className='companyName'>{experienceInfo.companyName}</div> :
                <input 
                    name='companyName'
                    type='text'
                    value={experienceInfo.companyName}
                    onChange={handleChange}
                />
            }
            <label htmlFor='positionHeld'>Position Held:</label>
            {
                isSaved?
                <div className='positionHeld'>{experienceInfo.positionHeld}</div>:
                <input
                    name='positionHeld'
                    type='text'
                    value={experienceInfo.positionHeld}
                    onChange={handleChange}
                />
            }
            <label htmlFor='dateStarted'>Start Date</label>
            {
                isSaved?
                <div className='dateStarted'>{experienceInfo.dateStarted}</div>:
                <input
                    name='dateStarted'
                    type='date'
                    value={experienceInfo.dateStarted}
                    onChange={handleChange}
                /> 
            }
            <label htmlFor='dateFinished'>End Date</label>
            {
                isSaved?
                <div className='dateFinished'>{experienceInfo.dateFinished}</div>:
                <input
                    name='dateFinished'
                    type='date'
                    value={experienceInfo.dateFinished}
                    onChange={handleChange}
                /> 
            }
            <input className='submit-button'
                name='submit'
                type='button'
                value={isSaved? 'Edit Info': 'Save Info'}
                onClick={handleSaved}
            />

        </form>
    )
}

export default Experience
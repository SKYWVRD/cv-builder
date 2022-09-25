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
                <Form />
            </div>
        </div>
    )
}


const Form = ( { experienceInfo, isSaved, handleSaved, handleChange }) => {
    return (
        <form>
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
            <label htmlFor='positionHeld'>{experienceInfo.positionHeld}</label>'
            {
                isSaved?
                <div className='positionHeld'>{experienceInfo.positionHeld}</div>:
                <input
                    name='positionHeld'
                    type='text'
                    value={exerienceInfo.companyName}
                    onChange={handleChange}
                />
            }
            <label htmlFor='dateStarted'>Start Date</label>'
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
            <label htmlFor='dateFinished'>End Date</label>'
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

        </form>
    )
}

export default Experience
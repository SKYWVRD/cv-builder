import { useState } from 'react'
import defaultImage from '../../images/default-image.png'

function Personal () {

    const[isSaved, setIsSaved] = useState (false)
    const[personalInfo, setInfo] = useState(
        {
            name: '',
            surname: '',
            email: '',
        }
    )        

    const handleChange = (event) => {
        const { name, value } = event.target
        setInfo(prev => ({
            ...prev,
            [name]: value,
        }))

    }

    const handleSave = () => {
        setIsSaved(true)
    }

    const handleEdit = () => {
        setIsSaved(false)
        setInfo(prev => ({
            ...prev
        }))
    }

    return (
            <div className='personal'>
                <div className='section-heading'>
                    Personal Particulars
                </div>
                <div className='personal-info'>
                    <div className='personal-picture'>
                        <img src={defaultImage} alt='Candidate'/>
                    </div>
                    {!isSaved ? <Form personalInfo={ personalInfo } handleChange = { handleChange} handleSave = { handleSave }/> 
                    : <Display personalInfo={ personalInfo } handleEdit={ handleEdit }/>}
                </div>
            </div>
    )
}



const Display = ( { personalInfo, handleEdit}) => {

    return(
        <div className='personal-form'>
                <label htmlFor='name'>Name:</label>
                <div className='personal-display'>{personalInfo.name}</div>
                <label htmlFor='surname'>Surname:</label>
                <div className='personal-display'>{personalInfo.surname}</div>
                <label htmlFor='Email'>Email Address:</label>
                <div className='personal-display'>{personalInfo.email}</div>
                <input className='submit-button'
                    name='submit'
                    type='button'
                    value='Edit Info'
                    onClick= { handleEdit }
                />
        </div>
    )
}

const Form = ( { personalInfo, handleChange, handleSave }) => {
    //TODO: Update to be more dynamic so you have a single Form component without a display component

    return (
        <form className='personal-form'>
            <label htmlFor='name'>Name:</label>
            <input
                name='name' 
                type='Text'
                value={personalInfo.name}
                onChange={ handleChange }
            />
            <label htmlFor='surname'>Surname:</label>
            <input
                name='surname'
                type='Text'
                value={personalInfo.surname}
                onChange={ handleChange }
            />
            <label htmlFor='Email'>Email Address:</label>
            <input
                name='email'
                type='Text'
                value={personalInfo.email}
                onChange={ handleChange }
            />
            <input className='submit-button'
                name='submit'
                type='button'
                value='Save Info'
                onClick = { handleSave }
            />
        </form>
    )
}


export default Personal
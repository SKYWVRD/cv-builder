import { Component } from 'react'
import defaultImage from '../../images/default-image.png'

class Personal extends Component {

    render (){
        return (
            <div className='personal'>
                <div className='section-heading'>
                    Personal Particulars
                </div>
                <div className='personal-info'>
                    <div className='personal-picture'>
                        <img src={defaultImage} alt='Candidate'/>
                    </div>
                    <form className='personal-form'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            name='name' 
                            type='Text'
                        />
                        <label htmlFor='surname'>Surname:</label>
                        <input
                            name='surname'
                            type='Text'
                        />
                    </form>
                </div>
                
            </div>
        )
    }
}


export default Personal
import { useState } from 'react'

function Education () {

    const[isSaved, setIsSaved] = useState(false)
    const[educationInfo, setEducationInfo] = useState (
        {
            institution: '',
            qualification:'',
            yearStarted:'',
            yearFinished:'',
        }
    )

    return (
        <div>
            
        </div>
    )
}

export default Education
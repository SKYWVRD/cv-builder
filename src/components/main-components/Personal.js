import { useState, useReducer } from "react";
import defaultImage from "../../images/default-image.png";

const personalInfoReducer = (state, action) => {

  let name = state.name;
  let surname = state.surname;
  let email = state.email;

  switch(action.type){
    case 'name':
      name = action.val;
      break;
    case 'surname':
      surname = action.val;
      break;
    case 'email':
      email = action.val;
      break;
    default:
      console.log(`Could not find action type ${action.type}`);
  }

  // if (action.type === "name") {
  //   return {
  //     name: action.val,
  //     surname: state.surname,
  //     email: state.email,
  //   };
  // }
  // if (action.type === "surname") {
  //   return {
  //     name: state.name,
  //     surname: action.val,
  //     email: state.email,
  //   };
  // }
  // if (action.type === "email") {
  //   return {
  //     name: state.name,
  //     surname: state.surname,
  //     email: action.val,
  //   };
  // }

  return {
    name: name,
    surname: surname,
    email: email,
  };
};

function Personal() {
  const [isSaved, setIsSaved] = useState(false);

  const [personalInfoState, dispatchPersonalInfo] = useReducer(
    personalInfoReducer,
    {
      name: "",
      surname: "",
      email: "",
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatchPersonalInfo({
      type: name,
      val: value,
    });
  };

  const handleSave = () => {
    setIsSaved(true);
  };

  const handleEdit = () => {
    setIsSaved(false);
  };

  return (
    <div className="personal">
      <div className="section-heading">Personal Particulars</div>
      <div className="personal-info">
        <div className="personal-picture">
          <img src={defaultImage} alt="Candidate" />
        </div>
        {!isSaved ? (
          <Form
            personalInfoState={personalInfoState}
            handleChange={handleChange}
            handleSave={handleSave}
          />
        ) : (
          <Display
            personalInfoState={personalInfoState}
            handleEdit={handleEdit}
          />
        )}
      </div>
    </div>
  );
}

const Display = ({ personalInfoState, handleEdit }) => {
  return (
    <div className="personal-form">
      <label htmlFor="name">Name:</label>
      <div className="personal-display">{personalInfoState.name}</div>
      <label htmlFor="surname">Surname:</label>
      <div className="personal-display">{personalInfoState.surname}</div>
      <label htmlFor="Email">Email Address:</label>
      <div className="personal-display">{personalInfoState.email}</div>
      <input
        className="submit-button"
        name="submit"
        type="button"
        value="Edit Info"
        onClick={handleEdit}
      />
    </div>
  );
};

const Form = ({ personalInfoState, handleChange, handleSave }) => {
  //TODO: Update to be more dynamic so you have a single Form component without a display component

  return (
    <form className="personal-form">
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        type="Text"
        value={personalInfoState.name}
        onChange={handleChange}
      />
      <label htmlFor="surname">Surname:</label>
      <input
        name="surname"
        type="Text"
        value={personalInfoState.surname}
        onChange={handleChange}
      />
      <label htmlFor="Email">Email Address:</label>
      <input
        name="email"
        type="Text"
        value={personalInfoState.email}
        onChange={handleChange}
      />
      <input
        className="submit-button"
        name="submit"
        type="button"
        value="Save Info"
        onClick={handleSave}
      />
    </form>
  );
};

export default Personal;

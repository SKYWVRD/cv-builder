import { useState, useReducer } from "react";

const experienceReducer = (state, action) => {
  
  let companyName = state.companyName
  let positionHeld = state.positionHeld
  let dateStarted = state.dateStarted
  let dateEnded = state.dateEnded
  let reference = state.reference
  
  switch(action.type){
    case "companyName":
      companyName = action.val;
      break;
    case "positionHeld":
      positionHeld = action.val;
      break;
    case "dateStarted":
      dateStarted = action.val;
    case "dateEnded":
      dateEnded = action.val;
    case reference:
      reference = action.val;
  }
  return {
    companyName: state.companyName,
    positionHeld: state.positionHeld,
    dateStarted: state.dateStarted,
    dateEnded: state.dateEnded,
    reference: state.reference,
  };
};

function Experience() {
  const [isSaved, setIsSaved] = useState(false);
  // const [experienceInfo, setInfo] = useState({
  //   companyName: "",
  //   positionHeld: "",
  //   dateStarted: "",
  //   dateEnded: "",
  //   reference: "",
  // });

  const [experienceInfoState, dispatchExperienceInfo] = useReducer(
    experienceReducer,
    {
      companyName: "",
      positionHeld: "",
      dateStarted: "",
      dateEnded: "",
      reference: "",
    }
  );

  const handleSaved = () => {
    setIsSaved(!isSaved);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatchExperienceInfo({
      type: name,
      val: value,
    });
    // setInfo((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
  };

  return (
    <div className="experience">
      <div className="section-heading">Work Experience</div>
      <div className="experience-info">
        <Form
          experienceInfoState={experienceInfoState}
          isSaved={isSaved}
          handleSaved={handleSaved}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

const Form = ({ experienceInfoState, isSaved, handleSaved, handleChange }) => {
  return (
    <form className="experience-form">
      <label htmlFor="companyName">Company Name:</label>
      {isSaved ? (
        <div className="companyName">{experienceInfoState.companyName}</div>
      ) : (
        <input
          name="companyName"
          type="text"
          value={experienceInfoState.companyName}
          onChange={handleChange}
        />
      )}
      <label htmlFor="positionHeld">Position Held:</label>
      {isSaved ? (
        <div className="positionHeld">{experienceInfoState.positionHeld}</div>
      ) : (
        <input
          name="positionHeld"
          type="text"
          value={experienceInfoState.positionHeld}
          onChange={handleChange}
        />
      )}
      <label htmlFor="dateStarted">Start Date</label>
      {isSaved ? (
        <div className="dateStarted">{experienceInfoState.dateStarted}</div>
      ) : (
        <input
          name="dateStarted"
          type="date"
          value={experienceInfoState.dateStarted}
          onChange={handleChange}
        />
      )}
      <label htmlFor="dateFinished">End Date</label>
      {isSaved ? (
        <div className="dateFinished">{experienceInfoState.dateFinished}</div>
      ) : (
        <input
          name="dateFinished"
          type="date"
          value={experienceInfoState.dateFinished}
          onChange={handleChange}
        />
      )}
      <input
        className="submit-button"
        name="submit"
        type="button"
        value={isSaved ? "Edit Info" : "Save Info"}
        onClick={handleSaved}
      />
    </form>
  );
};

export default Experience;

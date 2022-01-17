import React from "react";
import UserInput from "./UserInput";
import ShowFormDetails from "./ShowFormDetails";
import Heading from "./Heading";
function Form() {
  let [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  let [isSubmit, setIsSubmit] = React.useState(false);
  function submitForm() {
    setIsSubmit(true);
  }
  //   function formDetails() {
  //     if (isSubmit) {
  //       return <ShowFormDetails user={user} />;
  //     } else {
  //       return <h1>No Details yet..</h1>;
  //     }
  //   }
  return (
    <div>
      <UserInput
        user={user}
        submitForm={submitForm}
        setUser={setUser}
        isSubmit={isSubmit}
        submitForm={submitForm}
      />
      {/* {formDetails()} */}
      {isSubmit && (
        <ShowFormDetails
          user={user}
          renderHeading={<Heading name={user.name} />}
        />
      )}
    </div>
  );
}

export default Form;

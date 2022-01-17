import React from "react";
function UserInput(props) {
  let [data, setData] = React.useState(null);
  function handleChange(event) {
    props.setUser({
      ...props.user,
      [event.target.name]: event.target.value,
    });
  }
  function submit() {
    props.submitForm();
  }
  React.useEffect(() => {
    console.log(props);
    // return () => {
    //for unmount return
    // }
  }, [data]);
  return (
    <div>
      <div>
        <label>Enter Your Name: </label>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={props.user.name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Enter your Email: </label>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={props.user.email}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Enter Password: </label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={props.user.password}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default UserInput;

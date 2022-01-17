function ShowFormDetails(props) {
  return (
    <div>
      <div>Name: {props.user.name}</div>
      <div>Email: {props.user.email}</div>
      <div>{props.renderHeading}</div>
    </div>
  );
}

export default ShowFormDetails;

import React from "react";

function Layout(props) {
  return (
    <React.Fragment>
      {props.header && props.header}
      {props.children}
      {props.footer && props.footer}
    </React.Fragment>
  );
}

export default Layout;

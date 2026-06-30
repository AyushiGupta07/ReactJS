import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <h1>About page</h1>
        <h2>This is namaste React course</h2>
        <UserClass name={"Kshitij Sahu"} location={"Jhansi"} />
      </div>
    );
  }
}

export default About;

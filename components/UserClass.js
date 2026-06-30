import React from "react";
import { json } from "react-router-dom";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy name",
        location: "Deafult",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ayushi0709");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
    console.log(jsonData);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount(){
    
  }

  render() {
    const { login, location, url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name :{login}</h2>
        <h3>Location :{url}</h3>
        <h4>Contact : 2767328632323</h4>
      </div>
    );
  }
}

export default UserClass;

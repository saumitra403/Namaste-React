import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default"
      }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saumitra403");
    const json = await data.json();

    this.setState({
      userInfo: json
    });

    console.log(json)
  }

  componentDidUpdate() {
    console.log("Component did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;


/*
  -----------------MOUNTING LIFECYCLE -------------------
  Constructor(dummy)
  Render (dummy)
    <HTML dummy>
  Component Did Mount
    <API CALL>
    <this.setState> -> State variable is update

  ---------------- UPDATE ---------------------------
    render(API UPDATE)
     <HTML (new API data) >
    componentDidUpate
  
*/
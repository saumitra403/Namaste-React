import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>This is a class component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserClass />
      </div>
    );
  }
}

export default About;

//UserContext.Consumer is another way to consume the context besides using the hook useContext
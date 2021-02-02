import React from "react";
import AgeIinfo from "./ageInfo";
export default class age extends React.Component {
  constructor() {
    super();
    this.state = {
      birthday: "2017-01-01",
      name: "Sir/Mam",
      showStats: false
    };
  }
  changeBirthday = (event) => {
    // alert("clicked change birthday function");
    this.setState({ birthday: event.target.value, showStats: true });
  };
  getName = () => {
    var username = prompt("Please enter your name");
    this.setState({ name: username });
  };

  render() {
    return (
      <div>
        <h1 className="heading">Age Teller Game</h1>
        <h2>Welcome {this.state.name}</h2>
        <h2>Please click on the button below to enter your name</h2>
        <button onClick={this.getName}>Enter Name</button>
        <h2>Please enter your birthdate</h2>
        <input
          type="date"
          value={this.state.birthday}
          onChange={this.changeBirthday}
        />

        {this.state.showStats ? (
          <div className="fades age-stats">
            <AgeIinfo date={this.state.birthday} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

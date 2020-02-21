import React, { Component } from "react";

export default class FlashMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      login: false
    };
    this.toggleFlash = this.toggleFlash.bind(this);
  }
  toggleFlash() {
    this.setState({ toggle: !this.state.toggle });
  }

  componentDidUpdate() {
    if (this.state.toggle) {
      setTimeout(() => {
        this.toggleFlash();
        this.setState({ login: !this.state.login });
      }, this.props.duration);
    }
  }
  render() {
    return (
      <div>
        {this.state.toggle ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: 150,
                backgroundColor: this.props.bgcolor,
                color: this.props.color
              }}
            >
              <p>{!this.state.login ? this.props.message : `Logging Out`}</p>
            </div>
          </div>
        ) : (
          ""
        )}
        <button
          style={{
            backgroundColor: this.state.login ? "green" : "",
            color: this.state.login ? "white" : ""
          }}
          onClick={this.toggleFlash}
        >
          {`${this.state.login ? "Log Out" : "Login"}`}
        </button>
      </div>
    );
  }
}

import React from "react";
import "./Register.css";
import PasswordChecklist from "../../assets/PasswordChecklist/PasswordChecklist";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      passwordError: "",
      passwordVisible: false,
    };

    // Define password rules once — reusable anywhere
    this.passwordRules = [
      { label: "At least 8 characters", test: /.{8,}/ },
      { label: "One uppercase letter", test: /[A-Z]/ },
      { label: "One lowercase letter", test: /[a-z]/ },
      { label: "One number", test: /[0-9]/ },
      { label: "One special character", test: /[^A-Za-z0-9]/ },
    ];
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  validatePassword = (password) => {
    for (let rule of this.passwordRules) {
      if (!rule.test.test(password)) {
        return `Password must include: ${rule.label}`;
      }
    }
    return "";
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    const password = event.target.value;
    const error = this.validatePassword(password);
    this.setState({ password, passwordError: error });
  };

  onSubmitSignIn = () => {
    const { passwordError, email, password, name } = this.state;
    if (passwordError) {
      alert("Please fix password errors before submitting.");
      return;
    }
    fetch(`${this.props.hostRoute}/register`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { password, passwordError } = this.state;
    const { passwordVisible } = this.state;
    const icon = passwordVisible ? FaEye : FaEyeSlash;

    return (
      <div>
        <article className="br3 bg-near-white ba b--white-200 mv4 w-250 mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="register" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    id="email-address"
                    autoComplete="on"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="mv3 password-input-container">
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 password-input"
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    autoComplete="off"
                    onChange={this.onPasswordChange}
                  />
                  <span
                    onClick={this.togglePasswordVisibility}
                    className="password-toggle-icon"
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div className="password-checklist-container">
                  {/* Reusable password checklist */}
                  <PasswordChecklist
                    password={password}
                    rules={this.passwordRules}
                  />
                  {/* Error message */}
                  <div className="password-validation-message">
                    {passwordError ||
                      ("\u00A0" && (
                        <p className="password-validation-message">
                          {passwordError}
                        </p>
                      ))}
                  </div>
                </div>
              </fieldset>
              <div>
                <input
                  onClick={this.onSubmitSignIn}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;

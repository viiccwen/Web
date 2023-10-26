import React, { StrictMode } from "react";
import { NextUIProvider } from "@nextui-org/system";
import { Button } from "@nextui-org/button";

class PasswordGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            length: 4,
            upper: false,
            lower: false,
            number: false,
            symbol: false
        };

        this.LenSelClick = this.LenSelClick.bind(this);
        this.UpperCheckBox = this.UpperCheckBox.bind(this);
        this.LowerCheckBox = this.LowerCheckBox.bind(this);
        this.NumberCheckBox = this.NumberCheckBox.bind(this);
        this.SymbolCheckBox = this.SymbolCheckBox.bind(this);
    }

    LenSelClick(event) {
        var Length = parseInt(event.target.value);
        this.setState({ length: Length });
    }

    UpperCheckBox(event) {
        this.setState({ upper: event.target.checked });
    }

    LowerCheckBox(event) {
        this.setState({ lower: event.target.checked });
    }

    NumberCheckBox(event) {
        this.setState({ number: event.target.checked });
    }

    SymbolCheckBox(event) {
        this.setState({ symbol: event.target.checked });
    }

    generatePassword() {
        var length = this.state.length;
        var upper = this.state.upper;
        var lower = this.state.lower;
        var number = this.state.number;
        var symbol = this.state.symbol;
        var password = "";
        var charSet = "";

        if (upper) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lower) charSet += "abcdefghijklmnopqrstuvwxyz";
        if (number) charSet += "0123456789";
        if (symbol) charSet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        if (!upper && !lower && !number && !symbol) {
            alert("Please select at least one option");
            return;
        }

        for (var i = 0; i < length; i++) {
            var random = Math.floor(Math.random() * charSet.length);
            password += charSet[random];
        }

        this.setState({ password: password });
    }

    render() {
        const password = this.state.password;

        return (
            <>
                <div className="container password-gnenrator-container">
                    <h1>Password Generator</h1>
                    <div className="Inner-container">
                        <div className="password-length">
                            <label htmlFor="length">Length: </label>
                            <input type="number" value={this.state.length} min="4" max="16" onChange={this.LenSelClick} />
                        </div>
                        <div className="password-options">
                            <input type="checkbox" name="upper" onChange={this.UpperCheckBox} />
                            <label htmlFor="upper">Include uppercase letters: </label>
                        </div>
                        <div className="password-options">
                            <input type="checkbox" name="lower" onChange={this.LowerCheckBox} />
                            <label htmlFor="lower">Include lowercase letters: </label>
                        </div>
                        <div className="password-options">
                            <input type="checkbox" name="number" onChange={this.NumberCheckBox} />
                            <label htmlFor="number">Include numbers: </label>
                        </div>
                        <div className="password-options">
                            <input type="checkbox" name="symbol" onChange={this.SymbolCheckBox} />
                            <label htmlFor="symbol">Include symbols: </label>
                        </div>
                        <div className="password-button">
                            <button className="btn" onClick={() => this.generatePassword()}>Generate Password</button>
                        </div>
                        <div className="password-display">
                            <input className="display-text" type="text" value={password} />
                        </div>
                        <button>Press me</button>
                    </div>
                </div>
            </>
        );
    }

}

const App = () => (
    <StrictMode>
        <PasswordGenerator />
    </StrictMode>
);

export default App;
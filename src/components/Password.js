import React, { useState } from "react";
import "./password.css";

export default function Password() {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState(0);
    const [blockChecker1, setBlockChecker1] = useState("normal");
    const [blockChecker2, setBlockChecker2] = useState("normal");
    const [blockChecker3, setBlockChecker3] = useState("normal");

    const feedback = {
        1: "Password is too short",
        2: "Password is too weak",
        3: "Password is medium",
        4: "Password is strong"
    }[strength];

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        validatePassword(e.target.value);
    };

    const validatePassword = (password) => {
        if (password.match(/\d+/g) || password.match(/\W+/g) || password.match(/[a-zA-Z]+/g)) {
            setStrength(2);
            setBlockChecker1("small");
            setBlockChecker2("normal");
            setBlockChecker3("normal");
        };
        if ((password.match(/[a-zA-Z]+/g) && password.match(/\d+/g)) || (password.match(/\d+/g) && password.match(/\W+/g)) || (password.match(/\W+/g) && password.match(/[a-zA-Z]+/g))) {
            setStrength(3);
            setBlockChecker1("medium");
            setBlockChecker2("medium");
            setBlockChecker3("normal");
        };
        if (password.match(/\W+/g) && password.match(/[a-zA-Z]+/g) && password.match(/\d+/g)) {
            setStrength(4);
            setBlockChecker1("strong");
            setBlockChecker2("strong");
            setBlockChecker3("strong");
        };
        if (password.length < 7) {
            setStrength(1);
            setBlockChecker1("small");
            setBlockChecker2("small");
            setBlockChecker3("small");
        };
        if (password.length === 0) {
            setBlockChecker1("normal");
            setBlockChecker2("normal");
            setBlockChecker3("normal");
        };
    };

    return (
        <div className="App">
            <div className="title">Please input your password </div>
            <input
                type ="password"
                className="input-password"
                value={password}
                onChange={(e) => handleChangePassword(e)}
            />
            <div className="block-box">
                <div className={`block-${blockChecker1}`}></div>
                <div className={`block-${blockChecker2}`}></div>
                <div className={`block-${blockChecker3}`} ></div>
            </div>
            <div className={`feedback strength-${strength}`} hidden={password.length === 0}>
                {feedback}
            </div>
        </div>
    );
}
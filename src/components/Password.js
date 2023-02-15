import React, { useState } from "react";
import "./password.css";
import StrongMeter from "./StrongMeter";
import Feedback from "./Feedback";

export default function Password() {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState(0);
    const [arr, setArr] = useState(['normal', 'normal', 'normal']);

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        validatePassword(e.target.value);
    };

    const validatePassword = (password) => {
        const digits = password.match(/\d+/g);
        const letters = password.match(/[a-zA-Z]+/g);
        const symbols = password.match(/\W+/g);
        if (digits || symbols || letters) {
            setArr(["small", "normal", "normal"]);
            setStrength(2);
        };
        if ((letters && digits) || (digits && symbols) || (symbols && letters)) {
            setArr(["medium", "medium", "normal"]);
            setStrength(3);
        };
        if (symbols && letters && digits) {
            setArr(["strong", "strong", "strong"]);
            setStrength(4);
        };
        if (password.length < 7) {
            setArr(["small", "small", "small"]);
            setStrength(1);
        };
        if (password.length === 0) {
            setArr(["normal", "normal", "normal"]);
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
            <StrongMeter arr={arr} />
            <Feedback strength={strength} password={password} />
        </div>
    );
}
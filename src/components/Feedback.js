const Feedback = ({strength, password}) => {
    const feedback = {
        1: "Password is too short",
        2: "Password is too weak",
        3: "Password is medium",
        4: "Password is strong"
    }[strength];
    return (
        <div className={`feedback strength-${strength}`} hidden={password.length === 0}>
            {feedback}
        </div>
    )
}

export default Feedback;
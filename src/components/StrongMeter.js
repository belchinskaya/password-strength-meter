import "./password.css";

const StrongMeter = ({arr}) => {
    return (
        <div className="block-box">
            {arr.map((checkerClass, index) => {
                return <div key={index} className={`block-${checkerClass}`}></div>
            })
            }
        </div>

    );
}

export default StrongMeter;
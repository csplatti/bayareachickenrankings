import './css/TierLabel.css'

function TierLabel(props) {
    return (
        <>
        <div className={props.labelClass + " label"} >
                <span className="label_text">{props.labelName}</span>
        </div>
        </> 
    );
}

export default TierLabel
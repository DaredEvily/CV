import getRatingStars from "./rating"
export default (props)=>(
    <div>
    {props.lang && (
        <ul className="list">
            <li className="li">{props.lang}</li>
            <div className="rate">{getRatingStars(props.lrating)}</div>
        </ul>
    )}
    {props.tools && (
        <ul className="list">
            <li className="li">{props.tools}</li>
            <div className="rate">{getRatingStars(props.trating)}</div>
        </ul>
    )}
    
    {props.framework && (
        <ul className="list">
            <li className="li">{props.framework}</li>
            <div className="rate">{getRatingStars(props.frating)}</div>
        </ul>
    )}
    
    {props.llang && (
        <ul className="list">
            <li className="li">{props.llang}</li>
            <div className="rate">{getRatingStars(props.rating)}</div>
        </ul>
    )}
        </div>
    
    )
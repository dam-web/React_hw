
import './Mess.css';


export const Mess = (props) => {
    return (
        <div>
            <header className="Mess-header">
                <h3> It will be {props.text}</h3>
            </header>
        </div>
    );
}

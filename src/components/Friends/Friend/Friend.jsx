import classes from './Friend.module.css'

function Friend(props) {
    return (
        <div>
            <div className={classes.item}>
                <img src={props.img}
                     alt="User logo"
                />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
}

export default Friend;
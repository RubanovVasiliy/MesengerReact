import Friend from "./Friend/Friend";

function Friends(props) {
    let friendElement = props.store.getState().friendsPage.friends
        .map(f => <Friend name={f.name} img={f.img}/>)

    return (
        <div >
            Friends
            {friendElement}
        </div>
    );
}

export default Friends;
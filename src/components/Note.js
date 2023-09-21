export default function Note(props){
    function update()
    {
        props.del(props.id);
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={update}>X</button>
        </div>
    );
}
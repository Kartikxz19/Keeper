import {useState} from "react";
function Createarea(props)
{
    const [create,setCreate]=useState({title:"",text:""});
    function handleChange(event)
    {
        const newevent=event.target.name;
        const newval=event.target.value;
        setCreate((prev)=>{
                return({
                    ...prev,[newevent]:newval
                });
        });
    }
    function update(event)
    {
        
        const newnote={
            title:create.title,
            content:create.text
        }
        props.add(newnote);
        setCreate({title:"",text:""});
        event.preventDefault();
    }
    return(
        
        <div>
            <form>
                <input onChange={handleChange} name="title" placeholder="Title" value={create.title}></input>
                <textarea
                 onChange={handleChange} 
                 name="text" 
                 placeholder="Enter text..." 
                 value={create.text}
                 >
    
                 </textarea>
                <button onClick={update}>Add</button>
            </form>
        </div>
    )
}
export default Createarea;
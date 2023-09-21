import {useState} from "react";
import Fab from '@mui/material/Fab';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Zoom from '@mui/material/Zoom';
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
    const [textareaClicked,setClicked]=useState(false);
    function click()
    {
        setClicked(!textareaClicked);
    }
    return(
        
        <div>
            <form className="create-form">
                <input onChange={handleChange} 
                        name="title"
                        placeholder="Title" 
                        value={create.title} 
                        style={{display:textareaClicked?null:"none"}}
                ></input>
                <textarea
                onClick={click}
                
                 onChange={handleChange} 
                 name="text" 
                 placeholder="Enter text..." 
                 value={create.text}
                 rows={textareaClicked?3:1}
                 >
    
                 </textarea>
                 <div>
                    
                 </div>
                 <Zoom in={textareaClicked?true:false} >
                    <Fab
                    style={{display:textareaClicked?null:"none"}} 
                    onClick={update}
                    ><AddBoxIcon/></Fab>
                 </Zoom>
                
            </form>
        </div>
    )
}
export default Createarea;
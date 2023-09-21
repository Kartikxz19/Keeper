import {useState} from "react";
import Heading from './Header';
import End from './Footer';
import Note from './Note';
import notes from '../notes';
import Createarea from './Createarea';
function App() {
  const [curnotes,setCurnotes]=useState(notes);
  function addNote(newnote) 
  {
    const {title,content}=newnote;
    const key=curnotes[curnotes.length-1].key+1;
    setCurnotes((prev)=>{
      return [...prev,{key:key,title:title,content:content}];
    });
  }
  function deleteNote(id)
  {
    const copy=curnotes.filter((element,index)=>{
        return id!==index;
    })
    setCurnotes(copy);
  }
  return (
    <div>
      <Heading/>
      <Createarea add={addNote}/>
      <div className="Content_area" >
      {curnotes.map((element,index)=>{
        return <Note key={element.key} id={index} title={element.title} content={element.content} del={deleteNote}/>
      })}
    </div>
    <End/>
    </div>
  );
}

export default App;

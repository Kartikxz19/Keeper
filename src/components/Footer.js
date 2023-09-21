const d=new Date();
const year=d.getFullYear();
function End(){
    return(
        <footer><p className='paraend'>Copyright @{year}</p></footer>
    );
}
export default End;
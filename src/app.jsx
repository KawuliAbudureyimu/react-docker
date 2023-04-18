export const App = () =>{
    const onClickButton = () =>{
        alert("clicked");
    }
    const headerstyle = {
        color:"blue",
        fontSize: "30px",
        backgroundColor:"yellow",
        
    }
    const btnEl ={
        width:"150px",
        height:"40px",
        border:"20px",
        backgroundColor:"pink",
        fontSize:"20px"
    }
    return (<>
    {console.log("TEST")}
        <h1 style={{color:"red"}}>hello JSX</h1>
    <p style={headerstyle}>yes react</p>
    <button style={btnEl} onClick={onClickButton}>click me</button>
    
    </>)
}

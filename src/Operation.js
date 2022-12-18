function Operation(props){
    let setvalue=props.setvalue

    return (<div className="row p-0 m-0  " >
        <button className=" operatioBtns col-3 border-white btn btn-success rounded-0" onClick={()=>{setvalue("+")}}>+</button>
        <button className=" operatioBtns col-3 border-white btn btn-success rounded-0" onClick={()=>{setvalue("-")}}>-</button>
        <button className=" operatioBtns col-3 border-white btn btn-success rounded-0" onClick={()=>{setvalue("*")}}>x</button>
        <button className=" operatioBtns col-3 border-white btn btn-success rounded-0" onClick={()=>{setvalue("/")}}>÷</button>
    </div>)

      
}
export default Operation
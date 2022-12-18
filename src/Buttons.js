function Buttons(props){
    let setvalue=props.setvalue
    let ClearAll=props.ClearAll
    let backHandeler=props.backHandeler
    let Result=props.Result

    return (<div className="row p-0 m-0  ">
        <div className="col-9 p-0 ">
            <div className="row m-0 p-0">
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0" onClick={()=>{setvalue("7")}}>7</button>
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0" onClick={()=>{setvalue("8")}}>8</button>
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0" onClick={()=>{setvalue("9")}}>9</button>
            </div>
            <div className="row m-0 p-0">
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0" onClick={()=>{setvalue("4")}}>4</button>
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0" onClick={()=>{setvalue("5")}}>5</button>
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0" onClick={()=>{setvalue("6")}}>6</button>
            </div>
            <div className="row m-0 p-0">
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0" onClick={()=>{setvalue("1")}}>1</button>
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0" onClick={()=>{setvalue("2")}}>2</button>
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0" onClick={()=>{setvalue("3")}}>3</button>
            </div>
            <div className="row m-0 p-0">
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0" onClick={()=>{setvalue(".")}}>.</button>
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0" onClick={()=>{setvalue("0")}}>0</button>
                <button className=" operatioBtns col-4 border-white btn btn-success rounded-0"  onClick={()=>{backHandeler()}} >C</button>
            </div>
        </div>
        <div className="col-3 p-0 ">
            <button className=" w-100 h-50  border-white btn btn-warning rounded-0" style={{fontWeight:"bold",fontSize:"2.2rem"}} onClick={()=>{ClearAll()}} >AC</button>
            <button className=" w-100 h-50 border-white btn btn-warning rounded-0" style={{fontWeight:"bold",fontSize:"2.5rem"}} onClick={()=>{Result()}} >=</button>
        </div>
    </div>)

      
}
export default Buttons
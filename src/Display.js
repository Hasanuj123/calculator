function Display(props){
    let value=props.value
    // let value="5+5"
    // setTimeout(()=>{
    //     value="5+5+5+5"
    //     console.log(value)
    // },[5000])
    
    return (
            <div className="bg-dark  shadows text-white d-flex justify-content-end pr-2 align-items-center mr-2 " style={{height:"25%",fontSize:"1.5rem",paddingRight:'1rem'}}>
            {value} 
            </div>
            )

      
}
export default Display
import React, { useState } from "react"
import Buttons from "./Buttons"
import Display from "./Display"
import Operation from "./Operation"

function CAlculator(){
    const [value,setvalue]=useState("")
    // setTimeout(()=>{
    //     setvalue("")
    // },[10000])
    const operatioBtnsHand= function (clickvalue){
        setvalue(value+clickvalue)
    }
    // setvalue((p)=>{
    //     console.log(p,"...................")
    // })
    const backHandeler=()=>{
        let arrayData=value.split("")
        let lengthdata=arrayData.length
        console.log(arrayData,"mmmmmmmmmmmmmm")
        let modifyValue=""
        let looping=arrayData.map((val,index)=>{
            console.log(index+1,"index")
            if(lengthdata==index+1){
                // console.log("yes")
            }else{
            modifyValue=modifyValue+val
                // console.log("no")
            }
        })
        // console.log(modifyValue,"modifyValue")
        setvalue(modifyValue)
    }
    const ClearAll=()=>{
        setvalue("")
    }
    const Result=()=>{
        let result=""
        try{
             result=eval(value)
        }catch(err){
         result="invlid"
        }
        console.log(result,"ress")
        setvalue(result)
    }
    return (

        <div  className=" ClaculatorDiv pt-5   mx-auto my-auto" >
            <div className=" h-100" >
                <Display value={value}/>
                <Operation setvalue={operatioBtnsHand}/>
                <Buttons setvalue={operatioBtnsHand} ClearAll={ClearAll} backHandeler={backHandeler} Result={Result}/>
            </div>
        </div>
    )
}
// class Calculator extends React.Component(){
//     state={
//         value:""
//     }
//     render(){
//         return(<div>
//                 <div  className=" ClaculatorDiv pt-5   mx-auto my-auto" >
//             <div className=" h-100" >
//                 <Display/>
//                 <Operation/>
//                 <Buttons/>
//             </div>
//         </div>
//         </div>)
//     }
    
// }
export default CAlculator
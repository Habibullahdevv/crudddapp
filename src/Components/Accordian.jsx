import { useState } from "react"

import data from "./AccordianData"
export default function Accordian() {

    const [Selected, setSelected] = useState(null);
    
    function HandleSingleSelection(getCurrentId){

        setSelected(getCurrentId === Selected ? null : getCurrentId);

    }
    
    return (<>
<hr />
        <div>



            <div className="wrapper">
            <h1 className="Accordianheading">--Accordians</h1>
                <div className="accordian">
                    {

                        data && data.length > 0 ?
                            data.map(dataItem =>
                                <div className="item">
                                    <div className="title" onClick={()=>HandleSingleSelection(dataItem.id)}>
                                        <h3>{dataItem.question}</h3> 
                                      
                                        
                                        {Selected === dataItem.id ?  <span>-</span>:<span>+</span>}  
                                        {Selected === dataItem.id ? <div>{dataItem.answer}</div>:""}  
                                    </div>

                                </div>)
                            : <div>No data found!!</div>

                    }
                </div>
            </div>

        </div>;

    </>)

}
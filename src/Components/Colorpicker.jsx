import { useState } from "react"

function Colorpicker(){

const [color,setcolor] = useState("#FFFF")

 function Handlecolor(event){

setcolor(event.target.value)

}  


return(

<>
<div>

<h1>
Color Picker
</h1>
<div style={{backgroundColor:color}}>
<p>Select a color{color}</p>
</div>

<label >Select a color</label>
<input type="color" value={color} onChange={Handlecolor}/>
</div>

</>
    )

}

export default Colorpicker
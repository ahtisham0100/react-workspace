import { useState } from "react";
import Preview from "./Preview";
function ProductCustomizer() {

  const [customization, setCustomization] = useState({
  color: "black",
  size: "m",
});

const colorOptions = [
  {
    id: "black",
    name: "Black",
    hex: "#000000",
    previewUrl: "/images/tshirts/black.png",
  },
  {
    id: "white",
    name: "White",
    hex: "#FFFFFF",
    previewUrl: "/images/tshirts/white.png",
  },
  {
    id: "red",
    name: "Red",
    hex: "#FF0000",
    previewUrl: "/images/tshirts/red.png",
  },
  {
    id: "blue",
    name: "Blue",
    hex: "#0000FF",
    previewUrl: "/images/tshirts/blue.png",
  },
];


function SizeOptions() {
  const sizeOptions = [
    { id: "s", label: "Small" },
    { id: "m", label: "Medium" },
    { id: "l", label: "Large" },
    { id: "xl", label: "X-Large" },
  ]; 

  function handleSize(e) {
    console.log(`Selected Size :  ${e.target.getAttribute("id")}`)
    let shirtsize = e.target.getAttribute("id");
setCustomization(prev=>({
 ...prev, 
size:shirtsize
}))
  }
      console.log(customization.color , customization.size)

  return (
    <div className="size-container">
      {sizeOptions.map((Option) => (
        <div onClick={handleSize} className="size-option" id={Option.id} key={Option.id}>
          {Option.label}
        </div>
      ))}
    </div>
  );
}



function ChangeColor() {
  
//  {
//     id: "blue",
//     name: "Blue",
//     hex: "#0000FF",
//     previewUrl: "/images/tshirts/blue.png",
//   }

function handleColor(e) {
  let itemcolor =  e.target.getAttribute("id")
  setCustomization(prev=>({
...prev, 
color:itemcolor
  }
   
  ))
}
  return(
<> 
<div className="color-options"> 
  {colorOptions.map((option)=>(
    <div className={`color-item ${option.id}`} onClick={handleColor} key={option.id} id={option.name} previewurl={option.previewUrl}> {option.name} </div>
  ))}
</div>
</>

  )
}


  

return(
<>
<div className="customizer"> 
<Preview color={customization.color}  size={customization.size} />
<ChangeColor/>
<SizeOptions />
</div>
</>

)

} 



export default ProductCustomizer;
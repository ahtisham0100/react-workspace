
function Preview({color , size}) {
    
    return( 
        <div className="preview-container"> 
        <img src="images/" className={color} alt={`shirt color ${color}`} />
        <span className="sizeLabel">{size}</span>
        </div>
    )
} 


export default Preview;
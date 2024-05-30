import React from "react";


export function Button({fun , text}){
    return(
        <div>
            <button className="bg-indigo-300 mr-2 p-2 rounded-md" onClick={fun}>{text}</button>
        </div>
    )
}
// export default Button;
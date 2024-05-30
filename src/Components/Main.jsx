import { useState } from "react";
import { Navbar } from './Navbar';
import { Button } from "./Button";

export function Main(){
    const [inputText , setInputText] = useState("")
    
    const handleChange = (e)=>{
        setInputText(e.target.value);
    };

    const handleUppercase = ()=>{
        setInputText(inputText.toUpperCase());
    }
    const handleLowercase = ()=>{
        setInputText(inputText.toLowerCase());
    }
    const clearText = ()=>{
        setInputText("");
    }
    const removeExtra = ()=>{
        setInputText(inputText.trim());
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(inputText);
    }
    return(
        <div className="">
            <Navbar />
            <div className="px-4 md:px-24 my-4">
                <span className="text-3xl font-semibold my-4">Try TextEdit - word counter, character counter, remove extra spaces</span>

                <div>
                    <textarea value={inputText} type="text" className="overflow-y-auto border border-black h-64 rounded-md p-2 w-full my-4" onChange={handleChange} />
                    <div className="flex flex-wrap justify-center md:justify-start">
                        <Button fun={handleUppercase} text="Convert to uppercase" />
                        <Button fun={handleLowercase} text="Convert to lowercase" />
                        <Button fun={clearText} text="Clear Text" />
                        <Button fun={copyText} text="Copy Text" />
                        <Button fun={removeExtra} text="Remove extra spaces" />
                    </div>
                </div>

                <div className="my-4">
                    <span className="text-2xl font-semibold">Preview</span>
                    <div>{inputText === "" ? "Nothing to preview" : inputText}</div>
                </div>
            </div>
        </div>
    )
}

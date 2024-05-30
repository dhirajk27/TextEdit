import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export function About(){
    return(
        <div className="p-4 m-4">
            <div className="font-bold text-5xl">About Us</div>

            <div className="my-8">
                <div className="text-3xl font-semibold">Free to use</div>
                <span className="text-xl ">TextEdit is a free character counter tool that provides instant character count & word count statistics for a given text. TextEdit reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</span>
            </div>

            <div className="my-8">
                <div className="text-3xl font-semibold">Browser Compatible</div>
                <span className="text-xl ">This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</span>
            </div>

            <div className="my-8 mb-16">
                <div className="text-3xl font-semibold">Analyze your text</div>
                <span className="text-xl ">TextEdit gives you a way to analyze your text quickly and efficiently. Be it word count, character count or</span>
            </div>

            <Link to="/" className="bg-indigo-300 p-4 mt-8 text-xl">Back to home page</Link>
        </div>
    )
}
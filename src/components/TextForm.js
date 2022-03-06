import React, {useState} from 'react'



export default function TextForm(props) {

    // arrow function for Uppercase Text
    const handleUpClick=()=>{

        // console.log("uppercase was clicked" + text);
        let newText=text.toLocaleUpperCase();
        setText(newText);
        props.showAlert(" Text Converted To UpperCase", "success ");
    }

    // arrow function for Lowercsee Text
    const handleDownClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" Text Converted To LowerCase", "success ");
    }

    // arrow function for clear text(empty)
    const clearText=()=>{
        
        let newText="";
        setText(newText);
        props.showAlert(" Text box is empty", "success ");
    }

    // arrow function for title case (first letter will be capital)
    const titleCase=()=>{
        let sentence = text.toLowerCase().split(" ");
        for (let i = 0; i < sentence.length; i++) {
          sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
          
          
        }
        setText(sentence.join(" "));

        // return sentence.join(" ");
        }    
    
    
    // arrow function for remove extra spaces from text box
    const removeExtraSpaces=()=>{
        
        let newText=text.replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert(" Extra Spaces are removed", "success ");
    }
    
    // arrow function for remove all spaces
    const removeAllSpaces=()=>{
        
        let newText=text.replace(/\s+/g, '');
        setText(newText);
        props.showAlert(" All Spaces Removed", "success ");
    } 

    // arrow function for copy text
    const copyText = ()=> {
        // console.log("contain copied....");
        // var text=document.getElementById("myBox");
        // text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert(" Text Copied to clipbord", "success ");

    }

    // arrow function for handle text on text change event
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    // in below usestate bracket we can enter default text
    const [text, setText] = useState('');
    // text="new text"; worng way to set state  
    //  setText=("new text");  // worng way to set state 
    return (
        <>
            <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.Heading}</h1>
                    <div className="mb-3">
                    <br/>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#999191':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
                </div>

                {/* create buttons and their event */}
                <button disabled={text.length===0 || text===" "} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}><strong>To Upper Case</strong></button>
                <button disabled={text.length===0 || text===" "} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}><strong>To Lower Case</strong></button>
                <button disabled={text.length===0 || text===" "} className="btn btn-primary mx-1 my-1" onClick={clearText}><strong>Clear Text</strong></button>
                <button disabled={text.length===0 || text===" "} className="btn btn-primary mx-1 my-1" onClick={titleCase}><strong>Title Case</strong></button>
                <button disabled={text.length===0 || text===" "} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}><strong>Remove Extra Spaces</strong></button>
                <button disabled={text.length===0 || text===" "} className="btn btn-primary mx-1 my-1" onClick={removeAllSpaces}><strong>Remove All Spaces</strong></button>
                <button disabled={text.length===0 || text===" "} className="btn btn-primary mx-1 mt-3 my-1" onClick={copyText}><strong>Copy Text</strong></button>
            </div>
            
            {/* color code for below textarea */}
            <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
                <h2 className="my-3">Your Text Summary</h2>
                <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length} </b>character</p>
                <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minute to read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "enter in above text box to preview here"}</p>
                
            </div>
         </>
    )
}

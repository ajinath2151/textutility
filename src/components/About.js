import React from 'react'


export default function About(props) {

    // usestate for disp current style and set style of body
    // const [myStyle, setMyStyle] = useState({   
    //     color:'black',
    //     backgroundColor:'white'rgb(137 131 131)
    // })

    let myStyle= {
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#4e4a4a':'white',
        // border: '2px solid',
        borderColor:props.mode==='dark'?'white':'black'
        
    }

    // usestate for intitial and set button text
    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // // arrow functon for toggle color of doc and button set mode
    // const toggleStyle = ()=>{t

    //     if(myStyle.color === 'black') {
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
               
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //             border:'1px solid black'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
    
    // displayed content
    return (
        <div className="container">
            <h2 className='my-3' style={{color:props.mode==='dark'?'white':'black'}}  >About Us</h2>

            <div className="accordion" id="accordionExample"  style={myStyle} >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Groth</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Fundamentals</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Team Support</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            {/* enable dark mode button below accordiance */}
            {/* <div className="container mt-3" >
            <button type="button" className="btn btn-dark" onClick={toggleStyle}>{btntext}</button>
            </div> */}
        </div>
    )
}

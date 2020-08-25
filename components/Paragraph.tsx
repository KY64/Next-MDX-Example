import * as React from "react";

const Paragraph = (props) => (
    <p style={{color:"#555",
               width: "55%",
               margin: "24px auto",
			   fontSize: "13pt",
			   lineHeight: "1.5"}}
               {...props}	
    />
)

export default Paragraph;
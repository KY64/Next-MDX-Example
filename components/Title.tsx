import * as React from "react";

const Title: React.FC = (props) => (
    <h1 style={{fontWeight:400,
                textAlign:"center",
                margin: 0}}
               {...props} 
    />
)

export default Title
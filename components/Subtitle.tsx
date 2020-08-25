import * as React from "react"

const Subtitle :React.FC = (props) => (
    <h2 style={{textAlign: "center",
                fontWeight:400,
                fontStyle: "italic",
                color:"DarkGray",
                marginTop: "2px"}}
                {...props}
    />
)

export default Subtitle
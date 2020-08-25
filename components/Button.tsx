import * as React from "react";

interface buttonProps {
    children: string,
    bgColor: string,
    color: string
}

const Button :React.FC <buttonProps> = ({children, bgColor, color} :buttonProps) => (
    <button>
        {children}
    <style jsx>{`
        button {
            padding: 10px 24px;
            background: ${bgColor};
            border: 2px solid white;
            color: ${color};
            cursor: pointer 
        }
        button:hover {
            background: white;
            color: #D50000;
        }
    `}</style>
    </button>
)

export default Button;
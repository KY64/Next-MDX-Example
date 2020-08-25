import * as React from "react";

interface gridProps {
  col: string;
  row: string;
  gap?: string;
  justify?: string;
  align?: string;
  children: JSX.Element[];
}

const Grid: React.FC<gridProps> = ({
  children,
  col,
  row,
  gap = "auto",
  justify = "initial",
  align = "initial",
} :gridProps) => (
  <div
    style={{
      display: "grid",
      gridTemplate: `${row} / ${col}`,
      justifyContent: `${justify}`,
      alignItems:`${align}`,
      gridGap: `${gap}`,
    }}
  >{children}</div>
);

export default Grid;
import * as React from "react";

interface cardProps {
  title: string;
  subtitle: string;
  cover: string;
}

const Card: React.FC<cardProps> = ({ title, subtitle, cover } :cardProps) => (
  <div className="card" style={{ background: "white", cursor:"pointer" }}>
    <img
      src={cover}
      width="320px"
      style={{ margin: 0 }}
    />
    <div style={{ padding: "12px" }}>
      <h3 style={{margin:0}}>{title}</h3>
      <p style={{color:"grey"}}>
        {subtitle}
      </p>
    </div>
<style jsx>{`
  .card {
    transition: .3s;
  }
  .card:hover {
    box-shadow: 0 0 4px rgba(0,0,0,.3)
  }
`}</style>
  </div>
);

export default Card;

import * as React from "react";
import { Title, Button } from "@/.";
import Link from "next/link";

interface featuredProps {
  title: string;
  description: string;
  cover: string;
  path: string;
}

const Featured: React.FC<featuredProps> = ({
  title,
  description,
  cover,
  path,
}: featuredProps) => (
  <div style={{ position: "relative", marginBottom: "180px" }}>
    <div
      style={{
        background: "#D50000",
        width: "55%",
        color: "white",
        padding: "20px",
      }}
    >
      <div style={{ width: "80%", height: "300px" }}>
        <h1 style={{ fontWeight: 400 }}>{title}</h1>
        <p
          style={{
            fontSize: "14pt",
            textAlign: "justify",
            lineHeight: "1.5",
            height: "170px",
          }}
        >
          {description}
        </p>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link href="blog/[uid]" as={path}>
            <a>
              <Button bgColor="transparent" color="white">
                Baca lebih lanjut
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
    <img
      src={cover}
      style={{
        position: "absolute",
        top: 40,
        right: 65,
        width: "620px",
        height: "400px",
        boxShadow: "0 0 30px rgba(0,0,0,.3)",
        objectFit: "cover",
      }}
    />
  </div>
);

export default Featured;

import * as React from "react";
import Link from "next/link";

interface navbarProps {
  logo: string;
}

const Navbar: React.FC<navbarProps> = ({ logo } :navbarProps) => (
  <header>
    <nav
      style={{padding: "5px 0", marginBottom: "30px"}}
    >
      <img
        src={logo}
        style={{ display: "block", margin: "0 auto", width: "500px" }}
      />
      <div style={{textAlign:"center"}}>
        <Link href="/"><a>Beranda</a></Link>
        <a>Tentang</a>
      </div>
    </nav>
<style jsx>{`
	a {
		color: darkgray;
    padding: 0 22px;
    text-decoration: none;
	}

	a:hover {
		color: firebrick;
		cursor: pointer;
	}
`}</style>
  </header>
);

export default Navbar;

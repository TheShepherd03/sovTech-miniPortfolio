import Link from "next/link";

const Navbar = () => (
  <nav style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "60px",
    margin: "0 auto",
    maxWidth: "450px",
    borderRadius: "30px",
    opacity:"99%",
    padding: "0 20px",
    background: "#0a7b8a",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
  }}>
    <Link href="#" style={{ marginLeft: "20px", fontWeight: "bold" }}>
      Home
    </Link>
    <ul style={{
      display: "flex",
      listStyle: "none",
      marginRight: "20px"
    }}>
      <li style={{ marginRight: "20px" }}>
        <Link href="#about-sakhiseni">
          About
        </Link>
      </li>
      <li style={{ marginRight: "20px" }}>
        <Link href="#why-i-want-to-be-a-developer-at-sovtech">
          Why SovTech
        </Link>
      </li>
      <li style={{ marginRight: "20px" }}>
        <Link href="#contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

const App = () => {

  const Navbar = () => {
    return (
      <nav style={styles.navbar}>
        
        {/* Image from public */}
        
      import logo from "./components/logo/1.webp";

<img src={logo} alt="logo" style={styles.logo} />
      



        <ul style={styles.links}>
          <li><a href="#" style={styles.link}>Home</a></li>
          <li><a href="#" style={styles.link}>About</a></li>
          <li><a href="#" style={styles.link}>Contact</a></li>
        </ul>

      </nav>
    );
  };

  return (
    <>
      <Navbar />
    </>
  );
};

// Inline CSS
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e293b",
    padding: "15px 30px",
  },
  logo: {
    width: "50px",
    height: "50px",
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  }
};

export default App;
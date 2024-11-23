export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">E-Tutor</div>
      <nav className="nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <button className="signup-btn">Sign Up</button>
    </header>
  );
};

// import "./App.css";
import Category from "./components/category/Category";
import DashBoard from "./components/dashboard/DashBoard";
import { Navbar } from "./components/navbar/NavBar";

function App() {
  const imageData = [
    require("./assets/images/Become an Instructor.png"),
    require("./assets/images/Your teaching & earning steps.png"),
  ];

  return (
    <div className="App">
      <Navbar />
      <DashBoard />
      <Category />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {imageData.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`categeory${index + 1}`}
            style={{
              width: "35%",
              height: "auto",
              borderRadius: "8px",
              padding: "10px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

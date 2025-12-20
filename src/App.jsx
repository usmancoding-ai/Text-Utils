import About from "./components/About"
import Alert from "./components/Alert";
import Navbar from "./components/Navbar"
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextForm from "./components/TextForm"

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toogleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#002032";
      showalert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Dark mode has been disabled", "success")
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Navbar title="Text Utils" mode={mode} toogleMode={toogleMode} />
      <div className="container">
        <Alert alert={alert} />
        {/* Router code commented out */}
        {/* <Routes>
          <Route path="/" element={<TextForm
            showalert={showalert}
            heading="Enter the text to analyze below"
            mode={mode}
          />} />
          <Route path="/about" element={<About />} />
        </Routes> */}

        {/* Without router, just render TextForm directly */}
        <TextForm
          showalert={showalert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        {/* You can also render About directly if needed */}
        {/* <About /> */}
      </div>
    </>
  )
}

export default App

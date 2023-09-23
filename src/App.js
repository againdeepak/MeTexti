import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
import Contact from "./components/Contact";
function App() {
  const [mode, setmode] = useState('light')
  const [modetext, setmodetext] = useState('Dark')
  const [btnclr, setbtnclr] = useState('primary')
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const darkFun = () => {
    if (mode === 'light') {
      setmode('dark');
      setbtnclr('light');
      setmodetext('Light')
      document.body.style.backgroundColor = '#4848a8'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setmodetext('Dark')
      setmode('light');
      setbtnclr('primary')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // setInterval(() => {
      //   document.title="Changing in title"
      // }, 1000);
    }
  }
  return (
    <>
      <Navbar title="Melloite" mode={mode} enableDark={darkFun} modetext={modetext} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform heading="Enter text here" mode={mode} btnclr={btnclr} />
      </div>
      <Contact/>
      
    </>
  );
}

export default App;

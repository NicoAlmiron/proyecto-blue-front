import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./component/views/Homepage";
import Menu from "./component/common/Menu.jsx";
import Footer from "./component/common/Footer.jsx";

function App() {
  return (
    <>
      <Menu></Menu>
      <Homepage></Homepage>
      <Footer></Footer>
    </>
  );
}

export default App;

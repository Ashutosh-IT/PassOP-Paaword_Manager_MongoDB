import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

const App = function App() {
  return (
    <>
      <Navbar/>
      <div className="pb-5 min-h-[85vh] bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Manager/>
      </div>
      <Footer/>
    </>
  )
}

export default App;

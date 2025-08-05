import { useEffect, useState   } from "react";
import logo from "../assets/logo.png";
import acc from "../assets/acce.jpg";
import emb from "../assets/emb.jpg";
import Card from "./Card";

function App() {
  const [moved, setMoved] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMoved(true), 1500);
    return () => clearTimeout(timer);
  }, []);
  
  
  return (
    <div className="w-screen h-screen   overflow-hidden flex flex-col   items-center justify-around">
      <div className=" flex justify-around w-screen items-center">
        <img
          src={logo}
          alt="Logo"
          className={`w-32 h-32 logo rounded-md`}
        />

        {/* AXECY text appears at logo's initial position */}
        {(
          <h1 className={`text-4xl font-bold text-cyan-800 ${moved ? "opacity-100 duration-1000" : "opacity-0"}`}>
            AXECY
          </h1>
        )}
      </div>
      <div className="flex justify-around w-screen">
            {/* Image 1 */}
            <Card to = "/register" image={emb} label={"+New Account"}/>
            {/* Image 2 */}
            <Card to = "/login" image={acc} label={"Login"}/>
          </div>
    </div>
  );
}

export default App;

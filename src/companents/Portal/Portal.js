import ReactDOM from "react-dom";
import {useEffect} from "react";

const Portal = ({children}) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "";
  }, []);

  return ReactDOM.createPortal(children, document.getElementById("modal"));
};

export default Portal;
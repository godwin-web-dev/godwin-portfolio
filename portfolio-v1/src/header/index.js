// import React from "react";
// import { Link } from "react-router-dom";
// import Themetoggle from "../components/themetoggle";
// import { logotext, socialprofils } from "../content_option";
// import "./style.css";

// const Headermain = () => {
//   return (
//     <header className="fixed-top site__header">
//       <div className="d-flex align-items-center justify-content-between">
//         <Link className="navbar-brand nav_ac" to="/">
//           {logotext}
//         </Link>
//         <div className="d-flex align-items-center">
//           <ul className="the_menu d-flex">
//             <li className="menu_item">
//               <a href="#home" className="my-3">
//                 Home
//               </a>
//             </li>
//             <li className="menu_item">
//               <a href="#about" className="my-3">
//                 About
//               </a>
//             </li>
//             <li className="menu_item">
//               <a href="#portfolio" className="my-3">
//                 Portfolio
//               </a>
//             </li>
//             <li className="menu_item">
//               <a href="#contact" className="my-3">
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <Themetoggle />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Headermain;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Themetoggle from "../components/themetoggle";
import { logotext } from "../content_option";
import "./style.css";

const Headermain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed-top site__header">
      <div className="d-flex align-items-center justify-content-between">
        <Link className="navbar-brand nav_ac" to="/">
          {logotext}
        </Link>
        <div className="d-flex align-items-center">
          <div className="menu_toggle" onClick={toggleMenu}>
            ☰
          </div>
          <ul className={`the_menu ${menuOpen ? "open" : ""}`}>
            <li className="menu_item">
              <a href="#home" className="my-3" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="menu_item">
              <a href="#about" className="my-3" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className="menu_item">
              <a href="#skills" className="my-3" onClick={toggleMenu}>
                Skills
              </a>
            </li>

            <li className="menu_item">
              <a href="#portfolio" className="my-3" onClick={toggleMenu}>
                Portfolio
              </a>
            </li>
            <li className="menu_item">
              <a href="#contact" className="my-3" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
          <Themetoggle />
        </div>
      </div>
    </header>
  );
};

export default Headermain;

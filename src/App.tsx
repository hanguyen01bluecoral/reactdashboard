import * as React from "react";
import './app/global.css';
import './app/header.css';
import './app/headermobile.css';
import Navbar from "./nav/page";

export default function App() {
  return(
    <html lang="en">
      <body>
        {/* heder */}
         <Navbar />
      </body>
    </html>
    
  );
}
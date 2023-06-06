import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((item)=> <a key={item} href={`#${item}`}>{item}</a>)}</nav>;
}

export default NavBar;

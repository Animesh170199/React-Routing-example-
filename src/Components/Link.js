import React from "react";

function Link({ className, href, children }) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
}

export default Link;

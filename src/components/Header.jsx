import React from 'react'

function Header({ text }) {
  return (
    <div className="flex text-primary">
      <span className="text-4xl max-[800px]:text-3xl font-Syne font-extrabold ">
        {text}
      </span>
    </div>
  );
}

export default Header;
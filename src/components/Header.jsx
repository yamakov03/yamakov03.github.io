import React from 'react'

function Header({ text }) {
  return (
    <div className="flex items-center align-middle">
      <span className="text-4xl max-[800px]:text-2xl text-left font-Syne font-extrabold items-left highlight-yellow-bg">
        {text}
      </span>
    </div>
  );
}

export default Header;
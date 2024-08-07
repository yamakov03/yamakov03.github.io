import React from 'react'

function SubHeader({ text }) {
  return (
    <div className="flex items-center mb-4 align-middle text-secondary">
      <span className="text-4xl max-[800px]:text-2xl text-left font-Syne font-bold items-left">
        {text}
      </span>
    </div>
  );
}

export default SubHeader;
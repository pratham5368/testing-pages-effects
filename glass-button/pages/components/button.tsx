import React from 'react'
import Link from 'next/link';

function button() {
  return (
    <div>
      <Link href="" className="flex flex-col justify-center align-center absolute h-64 w-40 z-50  first">
        <button className="h-16 w-36 bg-black border-red-500 border-2 shadow-[0_-3px_15px_0_rgba(222, 122, 122, 0.3)] rounded-lg">View Source</button>
        <span></span>
      </Link>
    </div>
  )
}

export default button
import React from 'react'

const Nav = () => {
  return (
    <div className='h-20 w-full bg-blue-800 flex justify-between items-center px-10'>
      <div className="logo text-white text-3xl font-bold ">
        <h1>MedInfo</h1>
      </div>
      <div className="right h-16 w-16 rounded-full ">
         <img  className=' rounded-full h-15 w-15 object-fit'src="https://tse2.mm.bing.net/th/id/OIP.CIn8fInVEpY4ti24C9LfWgHaFJ?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
      </div>
    </div>
  )
}

export default Nav

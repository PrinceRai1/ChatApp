import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'


const Sidebar = () => {
  return (
    <aside  className="border-r border-slate-500 p-4 flex flex-col">

        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutButton/>
    </aside>
  )
}

export default Sidebar
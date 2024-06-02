"use client"
import React from 'react'
import { users } from './fakeuser'
import { useState,useTransition } from 'react'

const page = () => {
  const[search,setSearch] = useState();
  const[filtered,setFiltered] = useState(users);
  const[isPending,startTransition] = useTransition(); //standard hook to mark things no urgent

  const handleChange = ({target:{value}}) => {
        setSearch(value);

        startTransition(() => {
            setFiltered(users.filter((item) => item.name.includes(value)))
        })
  }
  return (
    <main>
     <div className='w-60 mx-auto my-10'>
     {isPending?(<div>loading......</div>):(<p className='text-center pb-2'>{users.length!==filtered.length?`${filtered.length} matches`:`${users.length} results`}</p>)}
      <input type="text" onChange={handleChange} value={search} className='border p-2'/>

     </div>
      <div>
        {isPending?(<div className='text-center'>loading......</div>):(
        <div className='flex flex-wrap mx-auto gap-10 justify-center'>
          {filtered.map((user,index) => (
          <div key={index} className='border p-2 grid items-center justify-center w-40'>
            <img src={user.avatar} alt="img" className='w-20'/>
            <h2 className='font-semibold w-20 text-center'>{user.name}</h2>
          </div>
        ))}
        </div>
      )}
      </div>
    </main>
  )
}

export default page
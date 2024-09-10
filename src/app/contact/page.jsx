import React from 'react'

export default function Contact() {
  return (
    <div className='bg-slate-950 text-white h-screen'>

      <h2 className='flex justify-around items-center text-yellow-400 text-2xl capitalize '>
      Just say Hey!
      </h2>
      <h1 className='flex justify-start p-5 ml-5 text-7xl font-mono'>
      Send us
      </h1>
      <h1 className='flex justify-start p-5 ml-5 text-7xl font-mono'>
      an Email.
      </h1>
      <p>

      </p>

      <form>

      <fieldset>
        <ul className='flex p-28 items-center text-center'>
          <li className='ml-8 text-2xl'>
            <label for='name'>Full name</label>
            <input className='outline-dashed mt-11 text-black ml-3 text-center text-sm' placeholder='enter your name' type="text" name='name' id='fullname' />
          </li>

          <li>
            <label For="email">Email</label>
            <input  className='outline-dashed text-black mt-11 text-sm text-center required:' placeholder='enter your email' type="email" name='email' id='email' />
          </li>

          <li>
            <label For="phone">Phone Number</label>
            <input  className='outline-double mt-11 text-black ml-3 text-center text-sm' placeholder='enter phone number' type="tel" name='phone-number' id='phone-number'/>
          </li>

          <li>
            <label For="message">Message</label>
            <input className='outline-dashed h-36 w-3/5 ml-3 text-center text-black text-sm' placeholder='Go on!!' type="text" name='message' id='message' />
          </li>
        </ul>
        <input className='ml-96 justify-center cursor-pointer' type="submit" value="submit" />
      </fieldset>
      </form>
    </div>
  )
}

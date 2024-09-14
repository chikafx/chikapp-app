import React from 'react'

export default function Contact() {
  return (
    <div className='bg-slate-950 text-white h-screen'>

      <h2 className='flex justify-around items-center text-yellow-400 text-2xl capitalize '>
      Just say Hey!
      </h2>
      <h1 className='flex justify-start  ml-5 text-7xl font-mono'>
      Send us
      </h1>
      <h1 className='flex justify-start ml-5 text-7xl font-mono'>
      an Email.
      </h1>
      <p>

      </p>

      <form>

      <fieldset>
        <ul className='flex-auto mt-14 items-center text-center'>
          <li className='ml-8 text-2xl'>
            <label for='name'>Full name:</label>
            <input className='outline-dashed  text-black ml-3 text-center text-sm' placeholder='enter your name' type="text" name='name' id='fullname' />
          </li>

          <li>
            <label For="email">Email:</label>
            <input  className='outline-dashed text-black mt-11 ml-3 text-sm text-center required:' placeholder='enter your email' type="email" name='email' id='email' />
          </li>

          <li>
            <label For="phone">Phone Number:</label>
            <input  className='outline-double mt-11 text-black ml-3 text-center text-sm' placeholder='enter phone number' type="tel" name='phone-number' id='phone-number'/>
          </li>

          <li>
            <label For="message">Message:</label>
            <input className='outline-dashed h-36 w-3/5 ml-3 mt-9 text-black text-sm text-center' placeholder='Go on!!' type="text" name='message' id='message' />
          </li>
        </ul>
        <input className='ml-96 justify-center cursor-pointer mt-9' type="submit" value="submit" />
      </fieldset>
      </form>
    </div>
  )
}

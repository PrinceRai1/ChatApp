import React from 'react'
import GenderCheckbox from './GenderCheckBox'

const signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        Login
        <span className="text-blue-500"> ChatApp</span>
      </h1>

      <form action="Submit">
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter fullname"
            className="w-full input input-bordered h-10"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full input input-bordered h-10"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full input input-bordered h-10"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Re-enter Password"
            className="w-full input input-bordered h-10"
          />
        </div>
        <GenderCheckbox/>
        <a
          href="#"
          className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
        >
          Already have an account?
        </a>

        <div>
          <button className="btn btn-block btn-sm mt-2 text-white outline-none bg-blue-800 hover:text-blue-600 ">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default signup
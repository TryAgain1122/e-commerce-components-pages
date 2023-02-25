import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [authentication, setAuthentication] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setAuthentication((prevValue) => {
            if (name === "username") {
                return {
                    username: value,
                    password: prevValue.password
                }
            }
            else if (name === "password") {
                return {
                    username: prevValue.username,
                    password: value
                }
            }
        });
    }

  return (
    <div className='flex justify-center'>
        <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%] mobile:w-[90%]'>
            <label>Login</label>
            <div className='flex mt-3'>
                <input 
                    type="username" 
                    placeholder='password'
                    className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                    value={authentication.username}
                    onChange={handleChange}
                    name="username"
                    required
                />
            </div>
            <div className='flex mt-3'>
                <input 
                    type="password" 
                    placeholder='password'
                    className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                    onChange={handleChange}
                    name="password"
                    required
                    />
            </div>
            <input type="button" value='Login'
            className='btn mt-7 hover:scale-[1.02]'
            />
        </div>
    </div>
  )
}

export default Login
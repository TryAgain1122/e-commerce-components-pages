import React from 'react'
import { useState } from 'react'

const Register = () => {

    const [authentication, setAuthentication] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirm: "",
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setAuthentication((prevValue) => {
            if (name === "username") {
                return {
                    firstname: prevValue.firstname,
                    lastname: prevValue.lastname,
                    username: value,
                    password: prevValue.password,
                    confirm: prevValue.confirm
                }
            }
            else if (name === "password") {
                return {
                    firstname: prevValue.firstname,
                    lastname: prevValue.lastname,
                    username: prevValue.username,
                    password: value,
                    confirm: prevValue.confirm
                }
            }
            else if (name === "firstname") {
                return {
                    firstname: value,
                    lastname: prevValue.lastname,
                    username: prevValue.username,
                    password: prevValue.password,
                    confirm: prevValue.confirm
                }
            }
            else if (name === "lastname") {
                return {
                    firstname: prevValue.firstname,
                    lastname: value,
                    username: prevValue.username,
                    password: prevValue.password,
                    confirm: prevValue.confirm
                }
            }
            else if (name === "confirm") {
                return {
                    firstname: prevValue.firstname,
                    lastname: prevValue.lastname,
                    username: prevValue.username,
                    password: prevValue.password,
                    confirm: value
                }
            }
        });
    }

  return (
    <div className='flex justify-center'>
        <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%] mobile:w-[90%]'>
            <label>Register</label>
            <div lassName='flex mt-3'>
                <input 
                    type="firstname" 
                    placeholder='firstname'
                    className='border-[2px] rounded-lg w-[50%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                    value={authentication.firstname}
                    onChange={handleChange}
                    name="firstname"
                    required
                />
                <input 
                    type="lastname" 
                    placeholder='lastname'
                    className='border-[2px] rounded-lg w-[50%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 '
                    value={authentication.lastname}
                    onChange={handleChange}
                    name="lastname"
                    required
                />
            </div>
            <div className='flex mt-3'>
                <input 
                    type="username" 
                    placeholder='username'
                    className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                    value={authentication.username}
                    onChange={handleChange}
                    name="username"
                    required
                />
            </div>
            <div className='flex mt-3'>
                <input 
                    placeholder='password'
                    className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                    onChange={handleChange}
                    name="password"
                    required
                    value={authentication.password}
                    /> {" "}
                <input  
                    placeholder='Confirm'
                    className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3'
                    onChange={handleChange}
                    name="confirm"
                    value={authentication.confirm}
                    required
                    />
            </div>
            <input type="button" value='register'
            className='btn mt-7 hover:scale-[1.02]'
            />
        </div>
    </div>
  )
}

export default Register;
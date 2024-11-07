## Hi there 👋

<!--form
**Griffolyin/griffolyin** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

import React, {useState} from 'react'

export default function FormHandling() {

    const [formData, setFormData] = useState({
        username: '',
        email:'',
        password:'',
        isSuscribed:'',
        role:''
     })

     const handleChange = (event)=>{
            const {name,value,type,checked} =event.target;
            const fieldValue = type === 'checkbox' ? checked : value;

            setFormData({
                ...formData,
                [name]:fieldValue
            })
        }

        const handleSumbit = (event) =>{
            event.preventDefault();
            console.log('Form Data', formData);
        }

  return (
    <form onSubmit={handleSumbit}>
        <div>
            <label htmlFor='username'>UserName:</label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
            </div>

             <div>  
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            </div> 

            <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
            </div>

            <div>
            <label htmlFor='isSuscribe'>Suscribe:</label>
            <input
              type='checkbox'
              id='isSuscribe'
              name='isSuscribe'
              value={formData.isSuscribed}
              onChange={handleChange}
            />
            </div>

            <div>
            <label htmlFor='role'>Role:</label>
            <select
            id='role'
            name='role'
            value={formData.role}
              onChange={handleChange}
            >
                <option value=''>Select Role</option>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
                <option value='guest'>Guest</option>
                </select>
            </div>

            <button type='submit'>Submit</button>
        
    </form>
  )
}


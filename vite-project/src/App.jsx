import { useState } from 'react'
import './App.css'

function App() {
  const [formData , setFormData] = useState( {firstName:"", lastName:"" , email:"", country:"India" , StreetAddress:"" , city:"" , state:"" ,zip:"" , comments:false , candidates:false , offers:false ,pushNotifications:""})

  function changeHandler(event){
    //destucturing 
    const {name, value, type , checked} = event.target;
    setFormData( (prev) => ({...prev ,[name] : type === "checkbox" ? checked: value}));
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className='flex flex-col items-center mt-2 w-11/12 max-w-[800px] mx-auto font-semibold border border-slate-300 rounded-sm'>
      <form onSubmit={submitHandler}>
          <br/>
          <label htmlFor='firstName'>First name</label>
          <br/>
          <input type='text'
          placeholder='Isha'
          name='firstName'
          id='firstName'
          value={formData.firstName}
          onChange={changeHandler}
          className='border-1 border-y-blue-300 border-x-slate-300 placeholder:text-gray-400  rounded min-w-190 p-[2.5px] m-[5px]'
          />

          <br/>
          <label htmlFor='lastName'>Last name</label>
          <br/>
          <input type='text'
          placeholder='Kumari'
          name='lastName'
          id='lastName'
          value={formData.lastName}
          onChange={changeHandler}
          className='border-1 border-y-blue-300 border-x-slate-300 placeholder:text-gray-400 rounded min-w-190 p-[2.5px] m-[5px]'
          />

          <br/>
          <label htmlFor='email'>Email address</label>
          <br/>
          <input type='email'
          placeholder='abcd@gmail.com'
          name='email'
          id='email'
          value={formData.email}
          onChange={changeHandler}
          className='border-1 border-y-blue-300 border-x-slate-300 placeholder:text-gray-400  rounded min-w-190 p-[2.5px] m-[5px]'
          />

          <br/>
          <label htmlFor='country'>Country</label>
          <br/>
          <select
             id='country'
             name='country'
             value={formData.country}
             onChange={changeHandler}
             className='border-1 border-y-blue-300 border-x-slate-300 placeholder:text-gray-400 rounded min-w-190 p-[2.5px] m-[5px]'
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>

         <br/>
          <label htmlFor='StreetAddress'>Street address</label>
          <br/>
          <input type='StreetAddress'
          placeholder='1234 Main st'
          name='StreetAddress'
          id='StreetAddress'
          value={formData.StreetAddress}
          onChange={changeHandler}
          className='border-1 border-y-blue-300 border-x-slate-300 placeholder:text-gray-400  rounded min-w-190 p-[2.5px] m-[5px]'
          />

         <br/>
          <label htmlFor='city'>City</label>
          <br/>
          <input type='text'
          placeholder='Indore'
          name='city'
          id='city'
          value={formData.city}
          onChange={changeHandler}
          className='border-1 border-y-blue-300 border-x-slate-300 placeholder:text-gray-400  rounded min-w-190 p-[2.5px] m-[5px]'
          />

          <br/>
          <label htmlFor='state'>State / Province</label>
          <br/>
          <input type='text'
          placeholder='Madhya Pradesh'
          name='state'
          id='state'
          value={formData.state}
          onChange={changeHandler}
          className='border-1 border-y-blue-300 border-x-slate-300 placeholder:text-gray-400  rounded min-w-190 p-[2.5px] m-[5px]'
          />

          <br/>
          <label htmlFor='zip'>ZIP / Postal code</label>
          <br/>
          <input type='text'
          placeholder='454001'
          name='zip'
          id='zip'
          value={formData.zip}
          onChange={changeHandler} 
          className='border-1 border-y-blue-300 border-x-slate-300 placeholder:text-gray-400 rounded min-w-190 p-[2.5px] m-[5px]'
          />

          <fieldset className='m-2'>
            <legend className='m-[3px] font-semibold'>By Email</legend>

           <div className='flex gap-3 font-semibold m-[1.5px]'>
            <input 
               name='comments'
               id='comments'
               type="checkbox"
               value={formData.comments}
               onChange={changeHandler}
               
            />   
            <label htmlFor='comments'>Comments</label>
           </div>
      
            <div className='p-[1.5px]'>
              
              <p className='text-gray-500 font-semibold text-[15px] mx-6'>Get Notified When Someones posts a comment on a posting.</p>
            </div>
           

           <div className='flex gap-3 font-semibold m-[1.5px]'>
            <input
               name='candidates'
               id='candidates'
               type="checkbox"
               value={formData.candidates}
               onChange={changeHandler}
            />   
            <label htmlFor='candidates'>Candidates</label>
            </div>

            <div className='p-[1.5px]'>
              
              <p className='text-gray-500 font-semibold text-[15px] mx-6'>Get Notified When a candidate applies for a job.</p>
            </div>
           

           <div className='flex gap-3 font-semibold m-[1.5px]'>
            <input 
               name='offers'
               id='offers'
               type="checkbox"
               value={formData.offers}
               onChange={changeHandler}
            />   
            <label htmlFor='offers'>Offers</label>
            </div>

            <div className='p-[1.5px]'> 
              
              <p className='text-gray-500 font-semibold text-[15px] mx-6'>Get Notified When a candidate accepts or rejects an offer.</p>
            </div>
           

          </fieldset>

          <fieldset className='m-2'>
            <legend className='m-[3px] font-semibold'>Push Notifications</legend>

            <p className='text-gray-500 font-semibold text-[15px]'>These are delivered via SMS to your mobile phone.</p>

            
            <input type='radio'
              id='pushEverything'
              name='pushNotifications'
              value= "Everything"
              onChange={changeHandler}
              />

            <label htmlFor='pushEverything' className='font-semibold mx-3'>Everything</label>  
            
            <br/>
            <input type='radio'
              id='pushEmail'
              name='pushNotifications'
              value= "Same as email"
              onChange={changeHandler}
              />

            <label htmlFor='pushEmail' className='font-semibold mx-3'>Same as email</label>

            <br/>
            <input type='radio'
              id='noPush'
              name='pushNotifications'
              value= "No push notification"
              onChange={changeHandler}
              />

            <label htmlFor='noPush' className='font-semibold mx-3'>No push notification</label>
          </fieldset>
  
          <button className='border-transparent py-2 px-8 rounded bg-blue-600 text-white m-4 mx-7'>Save</button>

      </form>    
      
    </div>
  )
}

export default App

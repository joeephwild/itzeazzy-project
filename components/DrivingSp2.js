import React from "react";

const DrivingSp2 = () => {
  return <div>
     <form >
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                  name="name"
                    
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='name'
                  />
                  </div>
                  
               
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                  name="email"
                    
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                  name="subject"
                    
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                  />
                </div>
                
              </form>
  </div>;
};

export default DrivingSp2;

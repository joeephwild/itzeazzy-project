import { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import  ProgressBar  from "@ramonak/react-progress-bar"


//setting the radio button variable
const plans = [
  {
    name: 'female',
  },
  {
    name: 'male',
  },
 
]

const DrivingSp1 = () => {
  const [progressPlus, setProgressPlus] = useState(0)
  const [value, setValue] = useState("")
  const [checked, setChecked] = useState(false)

 //radio checked function 
   const checkedFunction = () => {
    setChecked(!checked)
   }
   
   //radio checked function2
   const checkedChange = () => {
    setChecked(!checked)
   }


  //input increment when more than two
  const handleChange = (e) => {
    setValue(e.target.value)
    if(value.length > 2){
      setProgressPlus(progressPlus + 10)
    }else {
      setProgressPlus(!progressPlus)
    }
    //reduce function
    if(value.length < 2){
      setProgressPlus(progressPlus - 10)
    }else {
      setProgressPlus(progressPlus)
    }
  };
  
  return <div className="col-span-3 w-full h-auto">
    <div >
      <ProgressBar completed={progressPlus} maxCompleted={progressPlus} bgColor="#ff0000" />
    </div>
    <div className="space-y-3">
        <CustomDropdown/>
    </div>
    {/* form input section */}
    <form >
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                  name="name"
                  placeholder="Enter name"
                 value={value}
                 onChange={handleChange}
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='name'
                  />
                  </div>
                  {/* radio section2 */}
                  <p className="py-2">Nature of Driving Licence</p>
                  <div className="grid grid-cols-2 gap-2 py-2">
                  <div className='border-2 rounded-lg p-3 flex border-gray-300'>
                  <input
                  name="Private"
                  checked={checked}
                  onChange={checkedFunction}
                    onClick={() => setProgressPlus(progressPlus + 10)}
                    type='radio'
                  />
                   <p className=" text-gray-500 text-sm max-w-36 tracking-widest pl-2">Private</p>
                </div>
                <div className='border-2 rounded-lg p-3 flex border-gray-300'>
                  <input
                  name="Commercial"
                  checked={checked}
                  onChange={checkedFunction}
                    onClick={() => setProgressPlus(progressPlus + 10)}
                    type='radio'
                  />
                  <p className=" text-gray-500 text-sm max-w-36 tracking-widest pl-2">Commercial</p>
                </div>
                
                  </div>
                
                  {/* radio section2 */}
                  <p className="py-2">Type of Driving Licence</p>
                <div className="grid grid-cols-2 gap-2 py-2">
                  <div className='border-2 rounded-lg p-3 flex border-gray-300'>
                   <input type="radio"
                   checked={checked}
                   onChange={checkedChange}
                   onClick={() => setProgressPlus(progressPlus + 10)}
                   value="Paper Driving Licence" />
                      <p className=" text-gray-500 text-sm max-w-36 tracking-widest pl-2">Paper</p>
                    </div>
                    <div className='border-2 rounded-lg p-3 flex border-gray-300'>
                   <input type="radio"
                   checked={checked}
                   onChange={checkedChange}
                   onClick={() => setProgressPlus(progressPlus + 10)}
                   value="Smart Driving Licence" />
                      <p className=" text-gray-500 text-sm max-w-36 tracking-widest pl-2">Smart</p>
                    </div>
                  </div>
              </form>



   
  </div>;
};

export default DrivingSp1;

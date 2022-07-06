import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import ProgressBar from '@ramonak/react-progress-bar';

function DrivingSp2({ formData, setFormData, navigation }) {
  const [progressPlus, setProgressPlus] = useState(60);
  const [value, setValue] = useState('');

  // input increment when more than two
  const handleChange = (e) => {
    setValue(e.target.value);
    if (value.length > 8) {
      setProgressPlus(progressPlus + 10);
    } else if (value.length < 8) {
      setProgressPlus(progressPlus === 0);
    }
  };

  return (
    <div>
       <div>
        <ProgressBar completed={progressPlus} maxCompleted={80} bgColor="#ff0000" />
       </div>
      <form>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">
            Place where Driving Licence was Issued
          </label>
          <input
            name="name"
            placeholder="Enter place name"
            value={value}
            onChange={handleChange}
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="name"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">
          Type of  Issued Licence
          </label>
          <div className="w-full  py-2 ">
            <select className="border-2 rounded-lg p-3 flex border-gray-300 w-96 px-12">
              <option>Driver Licence</option>
              <option>Visa Handling</option>
              <option>Transaction Payment</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">
           Type of previous Driving Licence
          </label>
          <div className="w-full  py-2 ">
            <select className="border-2 rounded-lg p-3 flex border-gray-300 w-96 px-12">
              <option>choose expired year of licence</option>
              <option>Visa Handling</option>
              <option>Transaction Payment</option>
            </select>
          </div>
        </div>
      </form>
       <button
         onClick={() => navigation.previous()}
         type="button"
         className="bg-red-600 place-content-center text-white px-8 py-2 rounded-full flex items-center text-center"
       >
        <AiOutlineArrowLeft />
        {' '}
        Back
       </button>
    </div>
  );
}

export default DrivingSp2;

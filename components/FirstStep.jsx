import { useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { Radio } from '@mui/material';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function DrivingSp1({ navigation }) {
  const [progressPlus, setProgressPlus] = useState(0);
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(false);

  // radio checked function
  const handleChecked = (event) => {
    setSelectedValue(event.target.value);
  };

  // input increment when more than two
  const handleChange = (e) => {
    setValue(e.target.value);
    if (value.length > 8) {
      setProgressPlus(progressPlus + 20);
    } else if (value.length < 8) {
      setProgressPlus(progressPlus === 0);
    }
  };

  return (
    <div className="col-span-3 w-full h-auto">
      <div>
        <ProgressBar completed={progressPlus} maxCompleted={80} bgColor="#ff0000" />
      </div>
      {/* form input section */}
      <form>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2">Name</label>
          <input
            name="name"
            placeholder="Enter name"
            value={value}
            onChange={handleChange}
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="name"
          />
        </div>
        {/* radio section2 */}
        <div className="grid grid-cols-2 gap-2 py-2">
          <div className="border-2 rounded-lg p-3 flex border-gray-300">
            <input type="date" className="border-none outline-none focus:outline-none" />
          </div>
          <div className="border-2 rounded-lg p-3 flex border-gray-300">
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        {/* radio section2 */}
        <p className="py-2">Nature of Driving Licence</p>
        <div className="grid grid-cols-2 gap-2 py-2">
          <div className="border-2 rounded-lg p-3 flex border-gray-300">
            <Radio
              onClick={() => {
                navigation.next();
                setProgressPlus(progressPlus + 20);
              }}
              size="small"
              checked={selectedValue === 'a'}
              onChange={handleChecked}
              value="a"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />
            <p className=" text-gray-500 text-sm max-w-36 tracking-widest pl-2">Private</p>
          </div>
          <div className="border-2 rounded-lg p-3 flex border-gray-300">
            <Radio
              onClick={() => {
                navigation.next();
                setProgressPlus(progressPlus + 20);
              }}
              size="small"
              checked={selectedValue === 'b'}
              onChange={handleChecked}
              value="b"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'B' }}
            />
            <p className=" text-gray-500 text-sm max-w-36 tracking-widest pl-2">Commercial</p>
          </div>
        </div>
      </form>
      <button
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

export default DrivingSp1;

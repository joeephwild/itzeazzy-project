import { useState } from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import DrivingSp1 from "./DrivingSp1";
import DrivingSp2 from "./DrivingSp2";

const Form = () => {
    const [page, setPage] = useState(0)

    const formTitles = ['Driver Info', 'More Info']

    const pageDisplay = () => {
        if (page == 0){
            return <DrivingSp1/>
        }else if(page == 1){
            return <DrivingSp2/>
        }else{
            return <DrivingSp1/>
        }
    };
  return <div className="justify-center items-center p-5">
    <div>
        {pageDisplay()}
    </div>
    <div>

        <button 
        className="bg-red-600 place-content-center text-white px-8 py-2 rounded-full flex items-center text-center">
           <AiOutlineArrowLeft/> Back
            </button>
    </div>
   </div>
  </div>;
};

export default Form;

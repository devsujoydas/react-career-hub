
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import loacationImg from "../../../public/assets/icons/Location.png"

const Applied = () => {
    const btnStyle = "px-5 py-2 font-bold rounded-md hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white border  text-[#7E90FE] border-[#7E90FE] transition-all active:scale-95 duration-900"

    const viewDetailsBtn = "bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded-md hover:bg-gradient-to-t hover:from-[#7E90FE] hover:to-[#9873FF] active:scale-95 transition-all font-semibold text-white"


    return (
        <div className="rounded-xl border p-5 ">
            <div className="flex justify-between items-center gap-6">

                <div className='flex gap-5 justify-center items-center'>

                    <div className='bg-base-200 rounded-xl h-52 w-52 flex justify-center items-center'>
                        <img src="https://i.ibb.co/PzrbTxh/google-1-1-1.png" alt="" />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h2 className="font-bold text-2xl">Technical Database Engineer</h2>
                        <h2 className="font-semibold text-gray-500 text-xl">Google LLC</h2>

                        <div className="flex gap-5">
                            <button className={btnStyle}>Remote</button>
                            <button className={btnStyle}>Full Time</button>
                        </div>

                        <div className=' flex flex-col md:flex-row md:gap-5 gap-2 text-lg'>
                            <h1 className='flex items-center gap-1'><img src={loacationImg} alt="" />Dhaka, Bangladesh</h1>
                            <h1 className='flex items-center gap-1'><AiOutlineDollarCircle />Salary : 100k-150k</h1>
                        </div>
                    </div>
                </div>

                <div>
                    <Link to={`/job/1`}>
                        <button className={viewDetailsBtn}>View Details</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Applied
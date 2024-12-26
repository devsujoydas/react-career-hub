
import { Link } from 'react-router-dom'
import bannerImg from '../../../public/assets/images/user.png'
const Banner = () => {
    return (
        <div className='bg-[#7E90FE] bg-opacity-10 pt-10 mb-20 '>
            <div className='max-w-screen-2xl md:mx-auto mx-10'>

                <div className='md:mx-28 flex lg:flex-row flex-col justify-between md:leading-10 items-center'>

                    <div className=' flex flex-col gap-10 pt-10'>

                        <h1 className='md:text-7xl text-5xl font-bold'>One Step <br /> Closer To Your <br />Dream Job</h1>

                        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                        <div>
                            <Link to={'/jobs'}>
                                <button className="text-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-[#7E90FE] px-5 py-4 text-white font-semibold rounded-lg active:scale-95 transition-all">Get Started</button>
                            </Link>
                        </div>

                    </div>

                    <img className='md:mt-0 mt-5 lg:-mr-24' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
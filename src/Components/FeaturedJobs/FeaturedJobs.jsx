import { useEffect } from "react"
import { useState } from "react"
import Job from "../Job/Job"

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLenght, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="max-w-screen-2xl mx-auto my-10">
            <div className="md:mx-28 mx-10 grid gap-10">

                <div className="text-center flex flex-col gap-5">
                    <h1 className="text-5xl font-semibold">Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    {
                        jobs.slice(0,dataLenght).map((job, idx) => <Job key={idx} job={job} />)
                    }
                </div>
            </div>
            <div className={dataLenght===jobs.length ? 'hidden' :"flex justify-center items-center p-10"}>
                <button className= 'bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded-md hover:bg-gradient-to-t hover:from-[#7E90FE] hover:to-[#9873FF] active:scale-95 transition-all font-semibold text-white' onClick={()=> setDataLength(jobs.length)}>Show All</button>
            </div>
        </div>
    )
}

export default FeaturedJobs
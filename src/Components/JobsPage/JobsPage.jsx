import { useEffect } from "react"
import { useState } from "react"
import Job from "../Job/Job"
import bgImg1 from "/assets/images/bg1.png"
import bgImg2 from "/assets/images/bg2.png"

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <img className="absolute top-0 right-0" src={bgImg2} alt="" />
            <div className="h-56 bg-[#7E90FE] bg-opacity-5 flex justify-center items-center relative">
                <h1 className="font-bold text-3xl">Jobs</h1>
                <img className="absolute bottom-0 left-0" src={bgImg1} alt="" />
            </div>

            <div className="max-w-screen-2xl mx-auto my-10">
                <div className="md:mx-28 mx-10 grid gap-10">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {jobs.map((job, idx) => <Job key={idx} job={job} />)}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default JobsPage
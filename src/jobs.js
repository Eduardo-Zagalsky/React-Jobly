import { useEffect, useState } from "react";
import Job from "./backend/models/job"
import JobDetail from "./job";
import { Link } from "react-router-dom";

const Jobs = () => {
    const [jobData, setJobData] = useState(new Job);

    useEffect(() => {
        const getJobs = async () => {
            const jobs = await Job.get();
            setJobData(jobs);
        };

        getJobs();
    }, []);

    return (
        <div>
            <form>
                <input type="text" />
            </form>
            {jobData.map((details) => <Link to={`/jobs/${details.title}`} ><JobDetail datails={details} /></Link>)}
        </div>
    )
}
export default Jobs;
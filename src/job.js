import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Job from "./backend/models/job";

const JobDetail = () => {
    const { name } = useParams();
    const [job, setJob] = useState(new Job());

    useEffect(() => {
        const getJob = async () => {
            const job = await Job.get(name);
            setJob(job);
        };
        getJob();
    }, []);

    return (<div>
        <h1>Job: {job.name}</h1>
        <h4>{job.description}</h4>
    </div>);
}
export default JobDetail;
import { useState, useEffect } from "react"
import axios from "axios"

// Components
import ListFilters from "./ListFilters"
import Job from "./Job"
import JobFiltrado from "./JobFiltrado"

export default function JobList() {

    const [jobs, setJobs] = useState([]);
    const [fields, setFields] = useState([]);
    const [jobFiltrado, setJobFiltrado] = useState([]);

    useEffect(() => {

        const callJobs = async () => {
            const url = import.meta.env.VITE_DATA_JOBS;
            const { data } = await axios(url);

            setJobs(data);
        }

        callJobs();

    }, []);

    return (
        <div className="container mx-auto px-5 mb-10">
            {fields.length !== 0 && (
                <ListFilters
                    fields={fields}
                    setFields={setFields}
                    jobs={jobs}
                    setJobFiltrado={setJobFiltrado}
                />
            )}
            {fields.length === 0 ? (
                <div className="grid gap-16 mt-16">
                    {jobs?.map(job => (
                        <Job
                            key={job.id}
                            jobData={job}
                            fields={fields}
                            setFields={setFields}
                        />
                    ))}
                </div>
            ) : (
                jobFiltrado.map(jf => (
                    <div className="grid gap-16 mt-16" key={jf.id}>
                        <JobFiltrado
                            key={jf.id}
                            datos={jf}
                            fields={fields}
                            setFields={setFields}
                        />
                    </div>
                ))
            )}
        </div>
    )
}

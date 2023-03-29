import { useEffect } from 'react';

import close from '../assets/icon-remove.svg';

export default function Field({ field, fields, setFields, jobs, setJobFiltrado }) {


    const eliminarTech = () => {
        const fieldDeleted = fields.filter(fieldState => fieldState !== field);

        setFields(fieldDeleted);
    }

    useEffect(() => {
        const filtrarJob = () => {

            const jobFilter = jobs?.filter(job => job.role === field || job.level === field || job.languages.find(lang => lang === field) || job.tools.find(tool => tool === field));

            setJobFiltrado(jobFilter);
        }

        filtrarJob();
    }, [fields])

    return (
        <div className='flex items-center gap-3 bg-lightGrayishCyanFilterTablets rounded-tl-md rounded-bl-md'>
            <p className='pl-2 font-bold text-desaturatedDarkCyan'>{field}</p>
            <div
                className=' bg-desaturatedDarkCyan hover:bg-veryDarkGrayishCyan transition-colors p-2 rounded-tr-md rounded-br-md cursor-pointer'
                onClick={eliminarTech}
            >
                <img
                    src={close}
                    alt="img close"
                />
            </div>
        </div>
    )
}

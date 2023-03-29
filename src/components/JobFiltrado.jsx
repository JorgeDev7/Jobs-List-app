export default function JobFiltrado({ datos, fields, setFields }) {

    const { company, logo, newJob, featured, position, role, level, postedAt, contract, location, languages, tools } = datos;

    const handleInfo = value => {

        if (!fields.includes(value)) {
            setFields([...fields, value]);
            return;
        }
    }

    return (
        <div
            className={`bg-white p-5 rounded-md shadow-cyandow shadow-desaturatedDarkCyan ${featured ? 'border-l-8 border-desaturatedDarkCyan' : 'border-l-0'} lg:flex lg:justify-between lg:items-center lg:gap-10`}
        >
            <div className=" flex flex-col lg:flex-row lg:items-center lg:gap-5 border-b-2 lg:border-b-0 pb-5 lg:pb-0">
                <div className="-mt-12 lg:-mt-0 pb-4">
                    <img
                        src={logo}
                        alt={`brand of ${company}`}
                        className="w-16"
                    />
                </div>
                <div>
                    <div className="flex gap-2 items-center pb-3">
                        <h2 className="pr-5 font-bold text-desaturatedDarkCyan">{company}</h2>
                        {newJob && (
                            <span className="bg-desaturatedDarkCyan text-lighGrayishCyanBg font-bold uppercase py-1 px-2 text-sm rounded-full">New!</span>
                        )}
                        {featured && (
                            <span className=" bg-veryDarkGrayishCyan text-lighGrayishCyanBg font-bold uppercase py-1 px-2 text-sm rounded-full">Featured</span>
                        )}
                    </div>
                    <div className="pb-3">
                        <p className="text-veryDarkGrayishCyan font-bold hover:text-desaturatedDarkCyan transition-colors cursor-pointer">{position}</p>
                    </div>
                    <ul className="flex gap-5 list-disc text-darkGrayishCyan font-bold">
                        <li className="list-none">{postedAt}</li>
                        <li>{contract}</li>
                        <li>{location}</li>
                    </ul>
                </div>
            </div>
            <div
                className="pt-5 lg:pt-0"
            >
                <ul className="flex flex-wrap gap-5">
                    <li className=" bg-lightGrayishCyanFilterTablets hover:bg-desaturatedDarkCyan transition-colors rounded">
                        <button
                            className="py-1 px-2 font-bold text-desaturatedDarkCyan hover:text-white transition-colors"
                            type="sumbit"
                            value={role}
                            onClick={e => handleInfo(e.target.value)}
                        >{role}</button>
                    </li>
                    <li className=" bg-lightGrayishCyanFilterTablets hover:bg-desaturatedDarkCyan transition-colors rounded">
                        <button
                            className="py-1 px-2 font-bold text-desaturatedDarkCyan hover:text-white transition-colors"
                            type="sumbit"
                            value={level}
                            onClick={e => handleInfo(e.target.value)}
                        >{level}</button>
                    </li>
                    {languages?.map(lang => (
                        <li
                            key={lang}
                            className="bg-lightGrayishCyanFilterTablets hover:bg-desaturatedDarkCyan transition-colors rounded"
                        >
                            <button
                                className="py-1 px-2 font-bold text-desaturatedDarkCyan hover:text-white transition-colors"
                                type="submit"
                                value={lang}
                                onClick={e => handleInfo(e.target.value)}
                            >{lang}</button>
                        </li>
                    ))}
                    {tools?.map(tool => (
                        <li
                            key={tool}
                            className=" bg-lightGrayishCyanFilterTablets hover:bg-desaturatedDarkCyan transition-colors rounded"
                        >
                            <button
                                className="py-1 px-2 font-bold text-desaturatedDarkCyan hover:text-white transition-colors"
                                type="submit"
                                value={tool}
                                onClick={e => handleInfo(e.target.value)}
                            >{tool}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

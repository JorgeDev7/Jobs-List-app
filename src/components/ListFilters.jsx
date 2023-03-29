// Components
import Field from './Field';

export default function ListFilters({ fields, setFields, jobs, setJobFiltrado }) {

    const limpiarFiltro = () => {
        setFields([]);
        setJobFiltrado([]);
    }

    return (
        <div className='bg-white flex justify-between items-center p-5 rounded -mt-10 shadow-cyandow shadow-desaturatedDarkCyan'>
            <div className='flex flex-wrap gap-3'>
                {fields?.map(field => (
                    <Field
                        key={field}
                        field={field}
                        fields={fields}
                        setFields={setFields}
                        jobs={jobs}
                        setJobFiltrado={setJobFiltrado}
                    />
                ))}
            </div>
            <div>
                <p
                    className='text-darkGrayishCyan font-bold cursor-pointer hover:text-desaturatedDarkCyan hover:underline transition-colors'
                    onClick={limpiarFiltro}
                >Clear</p>
            </div>
        </div>
    )
}

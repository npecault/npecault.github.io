import useStorageServiceValue from "../storage-service/useStorageServiceValue";

const StorageGraph = () => {
    const [values, setValues] = useStorageServiceValue<number[]>(
        'graphValues',
        (value) => JSON.parse(value ?? '[]')
    );

    return (
        <div className="flex flex-col gap-4 min-h-fit w-fit">
            <div className="flex gap-4">
                <div className="flex flex-col justify-between">
                    {values.map((value, index) => (
                            <div className="flex gap-3 justify-between items-center">
                                {`Value ${index}`}
                                <input
                                    key={index}
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    className=""
                                    value={value}
                                    onChange={(e) =>
                                        setValues(values.map((value, i) => index === i ? parseFloat(e.target.value) : value))
                                    }
                                />
                            </div>
                        )
                    )}
                </div>
                <div className="flex gap-2 items-end">
                    {values.map((value, index) => (
                        <div key={index} className={`bg-blue-500 rounded-full w-2`} style={{height: `${value * 100}%`}}/>
                    ))}
                </div>
            </div>
            <button className='border-2 rounded-full' onClick={() => setValues([...values, Math.random()])}>Add a value</button>
        </div>

    );
};
export default StorageGraph;

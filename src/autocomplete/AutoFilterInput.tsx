import {useState} from "react";
import Highlighted from "./Highlighted";

export interface AutoFilterInputProps<T> {
    items: T[]
    lens: (item: T) => string
    valueChange: (value: T) => void
}

export default function AutoFilterInput<T>({items, lens, valueChange}: AutoFilterInputProps<T>) {
    const [search, setSearch] = useState('');

    const filteredItems = items.filter(item => lens(item).toLowerCase().includes(search.toLowerCase()));
    const displayDropdown = search.length > 0;

    return (
        <div className='flex flex-col'>

            <input value={search} onChange={(e) => setSearch(e.target.value)} className='border-2 rounded'/>

            {displayDropdown && <div className='flex flex-col bg-white rounded p-2'>
                {filteredItems.map((opt, index) =>
                    <div key={`${index}`} className='p-3 rounded cursor-pointer hover:bg-gray-100'
                         onClick={() => {
                             setSearch(lens(opt));
                             valueChange(opt);
                         }}>
                        <Highlighted text={lens(opt)} highlight={search}/>
                    </div>
                )}
            </div>}
        </div>);
};

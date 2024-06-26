import {useContext} from "react";
import DialogContext from "../dialog/DialogContext";
import {DialogType} from "../dialog/DialogType";

export interface UserRowProps {
    name: string
    type?: DialogType
}

const UserRow = ({name, type = DialogType.DIALOG}: UserRowProps) => {
    const {open} = useContext(DialogContext);

    return <button onClick={() => open({
        header: <h1>{name}</h1>,
        body: <p>Here are some information about {name}</p>,
        footer: <i>I'm a footer look at me</i>,
        type: type
    })}>
        <div className='flex flex-row gap-2 border-2 rounded-xl p-2 cursor-pointer'>
            {name}
        </div>
    </button>;
}

export default UserRow;

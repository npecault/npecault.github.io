import UserRow from "./UserRow";
import {DialogType} from "../dialog/DialogType";
import {useContext} from "react";
import DialogContext from "../dialog/DialogContext";

const SpawnModal = () => {
    const {close} = useContext(DialogContext);
    return (
        <div className='flex flex-col gap-4 min-h-fit w-fit'>
            <h1>Exercise 2</h1>
            <h2>Modal Users</h2>
            <UserRow name='Maurice Lechat' type={DialogType.MODAL}/>
            <UserRow name='Lucien Lechat' type={DialogType.MODAL}/>
            <UserRow name='Cookies Lechat' type={DialogType.MODAL}/>
            <h2>Dialog Users</h2>
            <UserRow name='Maurice Ladialog'/>
            <button className='border-2 rounded-xl p-2 font-bold' onClick={close}>Close current dialog</button>
        </div>
    );
}

export default SpawnModal;

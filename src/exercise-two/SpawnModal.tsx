import UserRow from "./UserRow";
import {DialogType} from "../dialog/DialogType";

const SpawnModal = () => {
    return (
        <div className='flex flex-col gap-4 min-h-fit w-fit'>
            <h1>Exercise 2</h1>
            <h2>Modal Users</h2>
            <UserRow name='Maurice Lechat' type={DialogType.MODAL}/>
            <UserRow name='Lucien Lechat' type={DialogType.MODAL}/>
            <UserRow name='Cookies Lechat' type={DialogType.MODAL}/>
            <h2>Dialog Users</h2>
            <UserRow name='Maurice Ladialog'/>
        </div>
    );
}

export default SpawnModal;

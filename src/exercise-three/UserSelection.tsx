import AutoFilterInput from "../autocomplete/AutoFilterInput";
import React, {useState} from "react";
import {User, users} from "./usersData";

const UserSelection = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    return <div className='flex flex-col gap-4 min-h-fit w-fit'>
        <h1>Exercise 3</h1>
        {selectedUser ? <span><b>Selected:</b> {selectedUser.name}</span> : <b>No user selected, start typing in the search input to see options</b>}
        <div className='flex'>
            <label>Search user: </label>
            <AutoFilterInput items={users} lens={x => x.name} valueChange={(user) => setSelectedUser(user)}/>
        </div>
    </div>
};

export default UserSelection;

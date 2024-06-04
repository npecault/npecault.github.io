import AutoFilterInput from "../autocomplete/AutoFilterInput";
import React, {useState} from "react";
import {albums, users} from "./usersData";

const UserSelection = () => {
    const [selectedUser, setSelectedUser] = useState<{ name: string } | null>(null);
    const [selectedAlbum, setSelectedAlbum] = useState<{ title: string } | null>(null);

    return <div className='flex flex-col gap-4 min-h-fit w-full'>
        <h1>Exercise 3</h1>
        {selectedUser ? <span><b>Selected:</b> {selectedUser.name}</span> :
            <b>No user selected, start typing in the search input to see options</b>}
        {selectedAlbum ? <span><b>Selected album:</b> {selectedAlbum.title}</span> : <b>No album selected</b>}

        <div className='flex flex-col'>
            <label>Search user: </label>
            <AutoFilterInput items={users} lens={x => x.name} valueChange={(user) => setSelectedUser(user)}/>
            <label>Search album: </label>
            <AutoFilterInput items={albums} lens={x => x.title} valueChange={(album) => setSelectedAlbum(album)}/>
        </div>
    </div>
};

export default UserSelection;

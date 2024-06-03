import React from 'react';
import StorageGraph from "./exercise-one/StorageGraph";
import DialogContext from "./dialog/DialogContext";
import Dialog from "./dialog/Dialog";
import SpawnModal from "./exercise-two/SpawnModal";
import useDialogContext from "./dialog/useDialogContext";
import {DialogType} from "./dialog/DialogType";


function App() {
    const dialogContext = useDialogContext();

    return (
        <DialogContext.Provider value={dialogContext}>
            <Dialog open={dialogContext.displayDialog}
                    onClose={dialogContext.close}
                    header={dialogContext.config.header}
                    footer={dialogContext.config.footer}
                    type={dialogContext.config.type ?? DialogType.MODAL}
            >
                {dialogContext.config.body}
            </Dialog>

            <div className="flex flex-col h-full gap-3">
                <StorageGraph/>
                <hr/>
                <SpawnModal/>
            </div>
        </DialogContext.Provider>
    );
}

export default App;

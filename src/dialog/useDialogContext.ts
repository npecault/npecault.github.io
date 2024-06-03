import {useState} from "react";
import DialogContextState from "./DialogContextState";

/**
 * Used to initialize the dialog context that needs to be provided to the DialogContext.Provider.
 * This handles the state of the dialog.
 */
const useDialogContext = (): DialogContextState => {
    const [dialogContext, setDialogContext] = useState<DialogContextState>({
        displayDialog: false,
        open: (config) => {
            setDialogContext(dialog => ({...dialog, displayDialog: true, config: config ?? dialog.config}))
        },
        close: () => {
            setDialogContext(dialog => ({...dialog, displayDialog: false, config: {}}))
        },
        config: {}
    });
    return dialogContext;
}

export default useDialogContext;

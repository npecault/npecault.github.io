import React from "react";
import {DialogType} from "./DialogType";

export interface DialogConfig {
    header?: React.ReactNode
    body?: React.ReactNode
    footer?: React.ReactNode
    type?: DialogType
}

export default interface DialogContextState {
    displayDialog: boolean
    open(config?: DialogConfig): void
    close(): void
    config: DialogConfig
}

export const UndefinedDialog : DialogContextState = {
    displayDialog: false,
    open: () => { console.warn('No dialog context configured') },
    close: () => { console.warn('No dialog context configured') },
    config: {}
}

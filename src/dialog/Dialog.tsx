import React, {useEffect, useRef} from "react";
import {DialogType} from "./DialogType";

export interface DialogProps {
    open: boolean
    type: DialogType
    header?: React.ReactNode
    children: React.ReactNode
    footer?: React.ReactNode
    onClose: () => void
}

const Dialog = ({open, type, header, children, footer, onClose}: DialogProps) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (open) {
            modalRef.current?.close();
            switch (type) {
                case DialogType.DIALOG:
                    modalRef.current?.show();
                    break;
                case DialogType.MODAL:
                    modalRef.current?.showModal();
                    break;
            }
        } else {
            modalRef.current?.close();
        }
    }, [open, type]);

    return (
        <>{open && <dialog ref={modalRef}
                           onClose={onClose}
                           className='flex flex-col items-center gap-4 bg-white rounded-2xl min-h-2 p-8 drop-shadow-2xl'>
            <div className='flex w-full justify-between items-center'>
                {header}
                <button onClick={onClose}>
                    <svg width="30" height="30" viewBox="0 0 40 40">
                        <path d="M 10,10 L 30,30 M 30,10 L 10,30" stroke="black" strokeWidth="4"/>
                    </svg>
                </button>
            </div>
            <h2>{children}</h2>
            {footer}
        </dialog>
        }</>
    )
};
export default Dialog;

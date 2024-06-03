import {useContext, useSyncExternalStore} from "react";
import StorageService from "./StorageService";
import StorageContext from "./StorageContext";

function useStorageServiceValue(key: string): [string | null, (value: string) => void];
function useStorageServiceValue<T>(key: string, transform: (value: string | null) => T): [T, (value: T) => void];
function useStorageServiceValue<T>(
    key: string,
    transform?: (value: string | null) => T
): [string | null | T, ((value: string) => void) | ((value: T) => void)] {
    const storageService: StorageService = useContext(StorageContext);
    const value = useSyncExternalStore(storageService.subscribe(key), () => storageService.get(key));

    if (transform !== undefined) {
        const setFunction = (value: T) => storageService.set(key, JSON.stringify(value));
        return [transform(value), setFunction];
    } else {
        const setFunction = (value: string) => storageService.set(key, value);
        return [value, setFunction];
    }
}
export default useStorageServiceValue;

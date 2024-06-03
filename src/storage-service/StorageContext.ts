import {createContext} from "react";
import LocalStorageService from "./LocalStorageService";

const StorageContext = createContext(new LocalStorageService());
export default StorageContext;

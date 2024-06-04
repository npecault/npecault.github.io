import StorageService from "./StorageService";
import {Observer} from "./subscribers";

/**
 * Implementation of a StorageService which uses the localStorage of the browser
 */
export default class LocalStorageService implements StorageService {
    private subscribers: Map<string, Observer[]> = new Map();

    private updateSubscribers(key: string, update: (current: Observer[]) => Observer[]) {
        const current = this.subscribers.get(key) ?? [];
        this.subscribers.set(key, update(current));
    }

    private notify(key: string, value: string | null): void {
        this.subscribers.get(key)?.forEach(callback => callback(value));
    }

    startCheckInterval(interval: number = 500): NodeJS.Timer {
        let lastValues = {...localStorage};
        return setInterval(() => {
            const newValues = {...localStorage};
            new Set([...Object.keys(lastValues), ...Object.keys(newValues)]).forEach(key => {
                const newValue = newValues[key];
                if (newValue !== lastValues[key]) this.notify(key, newValue);
            });
            lastValues = newValues;
        }, interval);
    }

    set(key: string, value: string): void {
        localStorage.setItem(key, value);
        this.notify(key, value);
    }

    get(key: string): string | null {
        return localStorage.getItem(key);
    }

    subscribe(key: string): (onChange: (value: string | null) => void) => (() => void) {
        return (onChange) => {
            this.updateSubscribers(key, (list) => [...list, onChange]);
            const index = this.subscribers.get(key)!!.length - 1;

            return () => {
                this.updateSubscribers(key, (list) => list.slice(index));
            };
        };
    }

    remove(key: string): void {
        localStorage.removeItem(key);
        this.notify(key, null);
    }
}

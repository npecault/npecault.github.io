/**
 * This defines a service storing string values to an abstract storage method (for example, LocalStorage) and
 * allowing a consumer to be updated about changes on a specific key.
 */
export default interface StorageService {
    set(key: string, value: string): void
    get(key: string): string | null
    subscribe(key: string): (onChange: (value: string | null) => void) => (() => void)
    remove(key: string): void
}

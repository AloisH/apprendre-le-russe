export class LocalStorageHelper {
	public get<T>(key: string): T | null {
		const item = localStorage.getItem(key);
		if (!item) return null;
		return JSON.parse(item);
	}

	public set<T>(key: string, value: T): void {
		localStorage.setItem(key, JSON.stringify(value));
	}
}

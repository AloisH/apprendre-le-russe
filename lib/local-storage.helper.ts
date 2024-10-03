export class LocalStorageHelper {
	public get<T>(key: string): T | null {
		if (!localStorage) {
			return null;
		}

		const item = localStorage.getItem(key);
		if (!item) return null;
		return JSON.parse(item);
	}

	public set<T>(key: string, value: T): void {
		if (!localStorage) {
			return;
		}

		localStorage.setItem(key, JSON.stringify(value));
	}
}

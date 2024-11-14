export interface GlobalError {
	code: string;
	message: string;
	status: number;
}

export interface AppState {
	initialized: boolean;
	globalError: GlobalError | null;
}
export const handleFetchError = (error: unknown) => {
    if (error instanceof Error) {
        return error.message || 'Failed to fetch data';
    } else {
        return 'An unknown error occurred';
    }
};

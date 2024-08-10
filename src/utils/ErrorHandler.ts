export const handleFetchError = (error: unknown) => {
    console.clear();
    if (error instanceof Error) {
        throw new Error(error.message || 'Failed to fetch data');
    }
};

export const requiredField = value => {
    if (value) {
        return undefined;
    }
    return 'Field is required';
};

export const maxLengthCreate = max => value => {
    if (value.length > max) {
        return `Max length is ${max} symbols`;
    }
    return undefined;
};
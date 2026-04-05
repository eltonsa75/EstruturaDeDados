export function defaultEquals(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }
    return a === b;
}
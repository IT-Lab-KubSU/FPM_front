export const stringifyDate = (date: Date | string | number) => {
    return new Date(date).toLocaleDateString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
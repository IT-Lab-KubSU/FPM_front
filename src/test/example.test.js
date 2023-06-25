export function sum(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}
describe('Math functions', () => {
    test('sum adds two numbers correctly', () => {
        expect(sum(2, 3)).toBe(5);
    });

    test('subtract subtracts two numbers correctly', () => {
        expect(subtract(5, 2)).toBe(3);
    });
});
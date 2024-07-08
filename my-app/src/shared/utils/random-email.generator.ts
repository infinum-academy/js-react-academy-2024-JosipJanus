export function generateRandomEmailAddress(): string {
    return `random-email-${Math.random()
        .toString(36)
        .substring(7)}@example.com`;
}

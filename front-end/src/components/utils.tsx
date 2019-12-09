
export function removeUnderscores(eventType: string): string {
    return eventType.replace(/_/g, ' ');
}
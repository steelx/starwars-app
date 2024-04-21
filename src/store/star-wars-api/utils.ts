export const getFilmIds = (filmUrls: string[]): string[] | null => {
    if (!filmUrls.length) return null;

    const idRegex = /\/api\/films\/(\d+)\//;
    const filmIds = filmUrls.map(url => {
        const match = url.match(idRegex);
        return match ? match[1] : null;
    })

    return filmIds.every(id => typeof id === 'string') ? filmIds as string[] : null;
}

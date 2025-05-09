
export const chunkArray = (text: string, size: number) => {

    const splitText = text.trim() ? text.replace(/\s+/g, ' ').split(" ") : [];
    
    const chunks = [];
    for (let i = 0; i < splitText.length; i += size) {
        chunks.push(splitText.slice(i, i + size));
    }
    return chunks;
};
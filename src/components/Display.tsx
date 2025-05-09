export const Display = ({ taal, chunkedLyrics, chunkedNotes, chunkedChord }: { taal: number; chunkedLyrics: string[][]; chunkedNotes: string[][]; chunkedChord: string[][] }) => {

    const maxLength = Math.max(chunkedLyrics.length, chunkedNotes.length, chunkedChord.length);

    return (
        <div className="mt-6 flex flex-wrap">

            {Array.from({ length: maxLength }).map((_, index) => (

                <div key={`block-${index}`} className="mb-6 pr-4 rounded-md">

                    <div className="flex">
                        {Array.from({ length: taal }).map((_, cell) => (

                            <>
                                <div className="flex border">
                                    {Array.from({ length: 1 }).map((_) => (
                                        <div>
                                            <div className="print">{chunkedLyrics[index] && chunkedLyrics[index][cell] ? chunkedLyrics[index][cell] : ''}</div>
                                            <div className="print-notes">{chunkedNotes[index] && chunkedNotes[index][cell] ? chunkedNotes[index][cell] : ''}</div>
                                            <div className="print">{chunkedChord[index] && chunkedChord[index][cell] ? chunkedChord[index][cell] : ''}</div>
                                        </div>
                                    ))}
                                </div>
                            </>  

                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};
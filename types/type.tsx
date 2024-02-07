import React from 'react';

// export type TImage = {
//     src: URL;
//     alt: string;
//     width?: number | `${number}` | undefined;
//     height?: number | `${number}` | undefined;
//     fill?: boolean | undefined;
// } & React.RefAttributes<HTMLImageElement | null>;

export interface TImage {
    src?: string;
    alt?: string;
    width?: number | `${number}` | undefined;
    height?: number | `${number}` | undefined;
    fill?: boolean | undefined;
}
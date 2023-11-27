import React from 'react';

export declare const Image: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"> & {
    src: string;
    alt: string;
    width?: number | `${number}` | undefined;
    height?: number | `${number}` | undefined;
    fill?: boolean | undefined;
    loader?: string | undefined;
    quality?: number | `${number}` | undefined;
    priority?: boolean | undefined;
    loading?: "eager" | "lazy" | undefined;
    placeholder?: string | undefined;
    blurDataURL?: string | undefined;
    unoptimized?: boolean | undefined;
    onLoadingComplete?: string | undefined;
    layout?: string | undefined;
    objectFit?: string | undefined;
    objectPosition?: string | undefined;
    lazyBoundary?: string | undefined;
    lazyRoot?: string | undefined;
} & React.RefAttributes<HTMLImageElement | null>>;

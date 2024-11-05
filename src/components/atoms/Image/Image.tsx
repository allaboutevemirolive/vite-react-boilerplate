// plop-templates/component.tsx.hbs
import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
}

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width,
    height,
    priority,
    className,
    ...props
}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            className={className}
            {...props}
        />
    );
};

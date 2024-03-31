import { styled } from '@mui/material/styles';
import Image from 'next/image';

interface StyledImageProps {
  size?: number;
}

const StyledImage = styled(Image)<StyledImageProps>((props) => ({
  width: `${props.size || 100}%`,
  height: 'auto',
}));

interface ImageContentProps {
  src: string;
  alt: string;
  size?: number;
}

const ImageContent = ({ src, alt, size }: ImageContentProps) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes='100vw'
      size={size}
    />
  );
};

export default ImageContent;

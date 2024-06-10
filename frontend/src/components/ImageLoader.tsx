import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { ImageLoaderProps } from 'types';


const ImageLoader = ({ src, placeholder, alt, maxWidth = '500px', maxHeight = '300px' }: ImageLoaderProps) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
      setImageSrc(src);
    };
  }, [src]);

  return (
    <>
      {imageLoaded ? <img
        src={imageSrc}
        alt={alt}
        style={{
          width: '100%',
          borderRadius: '6%',
          padding: 6
        }}
      /> : <Grid item sx={{ height: { xs: '210px', md: '230px' } }}>
        <Skeleton animation="wave" variant="rectangular" style={{ width: '100%', height: '100%', maxWidth, maxHeight }} />
      </Grid>
      }
    </>
  );
};

export default ImageLoader;
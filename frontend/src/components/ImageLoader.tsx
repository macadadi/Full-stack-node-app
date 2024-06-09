import { Grid, Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';


const ImageLoader = ({ src, placeholder, alt }: { src: string, placeholder: string, alt: string }) => {
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
        style={{ width: '100%' }}
      /> : <Grid item sx={{ height: { xs: '210px', md: '230px' } }}>
         <Skeleton animation="wave" variant="rectangular" style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '300px' }} />
      </Grid>
      }
    </>
  );
};

export default ImageLoader;
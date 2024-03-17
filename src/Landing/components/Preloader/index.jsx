import { useEffect } from 'react';
import cat from '../../assets/story/cat2.png';

const Preloader = ({ loaded }) => {

  useEffect(() => {
  }, []);

  return (
    <div className={`preloader${loaded ? ' loaded' : ''}`}>
      <img src={cat} alt="Tim The Cat" />
    </div>
  );
};

export default Preloader;
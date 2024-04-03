import { useEffect } from 'react';
import cat from '../../assets/cat1.png';

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
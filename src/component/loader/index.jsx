import classNames from 'classnames';
import styles from './Loader.module.css';
import PropTypes from 'prop-types';

// Menggunakan classNames untuk menghindari konflik dengan CSS lain
// konse dari classNames adalah untuk memastikan bahwa nama kelas yang digunakan unik.

// Menggunakan prop-types untuk validasi properti. 
// konsep dari prop-types adalah untuk memastikan bahwa nilai yang diterima oleh komponen sesuai dengan yang diharapkan


const LoaderSkeleton = (props) => {
  // Props adalah nama variabel yang digunakan untuk mengirimkan data dari komponen ke komponen lain/parent
  const { width, height, shape, radius } = props;
  return (
    <div
      className={classNames(styles.skeleton, {
        [styles.rounded]: shape === 'circle',
      })}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`,
      }}
    />
  );
};
export default LoaderSkeleton;

LoaderSkeleton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  shape: PropTypes.oneOf(['square', 'circle']),
  radius: PropTypes.number,
};

LoaderSkeleton.defaultProps = {
  width: 300,
  height: 57,
  shape: 'square',
  radius: 0,
};

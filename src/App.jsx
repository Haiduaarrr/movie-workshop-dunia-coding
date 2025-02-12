import { useEffect, useState } from 'react';
import './App.css';
import api from './api.js';
import LoaderSkeleton from './component/loader';
import Card from './component/card';
import styles from './home.module.css';

function App() {
  const [movies, setMovies] = useState([]);
  // useState berfungsi untuk mengatur kondisi atau keadaan si aplikasi
  
  const [isLoading, setIsLoading] = useState(false);
  
  const [page, setpage] = useState(1);

  // function getMovies digunakan untuk mengambil data dari API
  const getMovies = async (page) => {
    console.log("Fetching page:", page); // Debugging
    setIsLoading(true);
    const response = await api.get(`/titles?page=${page}`);
    setMovies(response.data.results);
    setIsLoading(false);
  };

  // useEffect digunakan untuk menjalankan fungsi getMovies ketika page berubah
  // konsep dair useEffect adalah untuk menjalankan fungsi tertentu ketika kondisi tertentu terjadi
  useEffect(() => {
    getMovies(page);
  }, [page]);

  
  return (
    // style didapatkan dari variabel styles dan import dari home.module.css
    <div className={styles.home}>
      <div className={styles.navbar}>
        <div className={styles.navcontainer}>
          <h1>DU MOVIE</h1>
        </div>
      </div>
      <img className={styles.banner} src="/banner-dumovie.jpg" alt="banner" />
      {/* container berisi card */}
      <div className={styles.container}>
        {/* Di bawah ini menggunakan ternery operator. contoh: isLoadsing ? true : false */}
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              // loaderskeleton digunakan untuk menampilkan loading dan 
              // didapatkan dari variabel LoaderSkeleton di component loader
              <LoaderSkeleton
                key={index}
                radius={10}
                width={220}
                height={320}
              />
            ))
          : movies.map((movie, index) => {
              return (
                // card digunakan untuk menampilkan card dan didapatkan dari variabel Card di component card
                <Card
                  key={index}
                  text={movie.originalTitleText.text}
                  thumbnail={movie.primaryImage}
                  onClick={() => alert(movie.originalTitleText.text)}
                />
              );
            })}
      </div>
        {!isLoading && (
          // pagination untuk mengatur halaman dan membuat tombol prev dan next
          // menggunakan styles untuk mengatur tampilan
          <div className={styles.pagination}>
            {page > 1 && (
              <button onClick={() => setpage((prev) => prev - 1)}>
                Prev Page
              </button>
            )}
            {movies?.length > 0 && (
              <button onClick={() => setpage((prev) => prev + 1)}>
                Next Page
              </button>
            )}
          </div>
        )}
      <div style={{ textAlign: 'center' }}>
        <p>&copy; Dunia Coding {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
export default App;
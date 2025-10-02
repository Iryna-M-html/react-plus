// import React from "react";
// import { type Movie } from "../../types/movie";
// import css from "./MovieGrid.module.css";

// interface MovieGridProps {
//   movies: Movie[];
//   onSelect: (movie: Movie) => void;
// }

// const MovieGrid: React.FC<MovieGridProps> = ({ movies, onSelect }) => {
//   if (!movies || movies.length === 0) {
//     return null;
//   }

//   return (
//     <ul className={css.grid}>
//       {movies.map((movie) => (
//         <li key={movie.id}>
//           <div
//             className={css.card}
//             onClick={() => onSelect(movie)}
//             role="button"
//             tabIndex={0}
//           >
//             <img
//               className={css.image}
//               src={
//                 movie.poster_path
//                   ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//                   : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
//               }
//               alt={movie.title}
//               loading="lazy"
//             />
//             <h2 className={css.title}>{movie.title}</h2>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MovieGrid;

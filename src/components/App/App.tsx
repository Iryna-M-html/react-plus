//import css from "./App.module.css";
import Product from "../../components/Product/Product";
import Mailbox from "../Mailbox/Mailbox";

export default function App() {
  const username = "Alice";
  const messages = ["You have {messages.length} unread messages"];
  return (
    <>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />

      <Mailbox username={username} messages={messages} />
    </>
  );
}
// import { useEffect, useState } from "react";
// import { Toaster } from "react-hot-toast";
// import toast from "react-hot-toast";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";

// import fetchMovies from "../../services/movieService";
// import type { Movie } from "../../types/movie";

// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import Loader from "../Loader/Loader";
// import MovieGrid from "../MovieGrid/MovieGrid";
// import MovieModal from "../MovieModal/MovieModal";
// import SearchBar from "../SearchBar/SearchBar";
// import ReactPaginate from "react-paginate";

// function App() {
//   const [search, setSearch] = useState<string>("");
//   const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [page, setPage] = useState(0);

//   const { data, isLoading, isError, isSuccess } = useQuery({
//     queryKey: ["movies", search, page],
//     queryFn: () => fetchMovies(search, page + 1),
//     enabled: Boolean(search),
//     placeholderData: keepPreviousData,
//   });

//   const handleSearchBar = (query: string) => {
//     setSearch(query.trim());
//     setPage(0);
//   };

//   useEffect(() => {
//     if (data?.results.length === 0) {
//       toast.error("No movies found for your request.");
//     }
//   }, [data]);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedMovie(null);
//   };

//   const handleSelect = (movie: Movie) => {
//     setSelectedMovie(movie);
//     openModal();
//   };

//   return (
//     <div className={css.app}>
//       {isModalOpen && selectedMovie && (
//         <MovieModal movie={selectedMovie} onClose={closeModal} />
//       )}

//       <Toaster />
//       <SearchBar onSubmit={handleSearchBar} />

//       {isLoading && <Loader />}
//       {!isLoading && isError && <ErrorMessage />}

//       {isSuccess && data.total_pages > 1 && (
//         <ReactPaginate
//           pageCount={data?.total_pages ?? 0}
//           pageRangeDisplayed={5}
//           marginPagesDisplayed={1}
//           onPageChange={({ selected }) => setPage(selected)}
//           forcePage={page}
//           containerClassName={css.pagination}
//           activeClassName={css.active}
//           nextLabel="→"
//           previousLabel="←"
//         />
//       )}
//       {!isLoading && !isError && (data?.results?.length ?? 0) > 0 && (
//         <MovieGrid movies={data!.results} onSelect={handleSelect} />
//       )}
//     </div>
//   );
// }

// export default App;

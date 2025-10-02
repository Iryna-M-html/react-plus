import Alert from "../Alert/Alert";
import css from "./App.module.css";
interface KindFriends {
  name: string;
  email: string;
  eyeColor: string;
  friends: [string, string?, string?];
  isActive: boolean;
  balance: number;
  skills: [string, string?, string?, string?, string?];
  gender: string;
  age: number;
}
const kindFriends: KindFriends[] = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

console.log(kindFriends);

export default function App() {
  return (
    <>
      <h1>Friends</h1>
      <Alert />
      <ul className={css.app}>
        {kindFriends.map((kindFriend, index) => (
          <li style={{ padding: "12px 16px", color: "red" }} key={index}>
            {kindFriend.name}
            <button
              style={{ width: "20 px", height: "20 px", background: "blue" }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

//import css from "./App.module.css";
// import Product from "../../components/Product/Product";
// import Mailbox from "../Mailbox/Mailbox";

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

import TheStackBadge from "./TheStackBadge";

const TheProjectCard = () => {
  return (
    <div className="grid grid-cols-2 gap-x-20 mx-auto w-[90%]">
      <img
        src={"./Images/projects/aesthetic-movies-img.png"}
        alt="movie"
      />
      <div className="">
        <h3 className="text-4xl font-bold text-custom-green">
          Aesthetic Movies
        </h3>
        <p className="text-2xl text-gray-500 my-3 leading-relaxed">
          An Application like movies website .It's inspired and clone all movies
          , OTT platform (netflix , crunchyroll , plex ,more..) for learning
          purpose only.The movie data are fetched from{" "}
          <a
            href="https://www.themoviedb.org/"
            className="text-blue-700/50 underline">
            TMDB
          </a>
          -Database.
        </p>
        <div className="space-x-3 mt-6">
          <TheStackBadge />
          <TheStackBadge stack="Tailwindcss" />
          <TheStackBadge stack="TMDB-api" />
        </div>
        <div className="ml-1 mt-8 flex gap-5 content-center">
          <a
            href=""
            className="flex text-gray-500 hover:text-white transform transition-all duration-500">
            Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.2rem"
              height="1.5rem"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10.73 14.97c.27.11.36.41.24.66s-.41.37-.66.24h-.01c-.46-.21-.89-.51-1.27-.9a4.49 4.49 0 0 1 0-6.36l3.53-3.53a4.49 4.49 0 0 1 6.36 0a4.49 4.49 0 0 1 0 6.36l-1.63 1.63l-.15-1.26l1.08-1.08a3.513 3.513 0 0 0 0-4.95a3.513 3.513 0 0 0-4.95 0L9.73 9.32a3.513 3.513 0 0 0 0 4.95c.3.3.64.53 1 .7m-6.65 4.95a4.49 4.49 0 0 1 0-6.36l1.63-1.63l.15 1.26l-1.08 1.08a3.513 3.513 0 0 0 0 4.95a3.513 3.513 0 0 0 4.95 0l3.54-3.54a3.513 3.513 0 0 0 0-4.95c-.3-.3-.64-.53-1-.7v.01a.49.49 0 0 1-.24-.67c.12-.25.41-.37.66-.24h.01c.46.21.89.51 1.27.9a4.49 4.49 0 0 1 0 6.36l-3.53 3.53a4.49 4.49 0 0 1-6.36 0"
              />
            </svg>
          </a>
          <a
            href=""
            className="flex text-gray-500 hover:text-white hover:*:w-12 transform transition-all duration-500">
            Source code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="transform transition-all duration-500"
              width="2rem"
              height="1.7rem"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3q-.275-.275-.275-.7t.275-.7zm6.6 0L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3q-.275-.275-.275-.7t.275-.7z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TheProjectCard;

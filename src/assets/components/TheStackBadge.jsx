const TheStackBadge = ({stack = "Javascript"}) => {
    return (
      <span className={` inline-block my-1 px-3 py-1 rounded-full text-center text-custom-green border-2 border-custom-green ${`max-sm:text-sm max-sm:border`}`}>
        {stack}
      </span>
    );
}

export default TheStackBadge 
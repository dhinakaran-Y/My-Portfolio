const TheStackBadge = ({stack = "Javascript"}) => {
    return (
      <span className="px-3 py-1 rounded-full text-center text-custom-green border-2 border-custom-green">
        {stack}
      </span>
    );
}

export default TheStackBadge 
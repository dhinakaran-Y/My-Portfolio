const ContactSection = () => {
    return (
      <div className="mx-25 my-20">
        <div className="mx-auto justify-items-center text-center">
          <h2 className="text-5xl font-bold text-custom-green">Let's Talk</h2>
          <h4 className="text-2xl mt-5 text-gray-500 w-5xl">
            Let's Chat ! About your tech journey, collaborate with me , review
            my projects & portfolio, Are discus will happens in the future tech
            world. Feel free to chat with me 😊...
          </h4>
        </div>
        <div className="w-full flex justify-center my-8">
          <a href="mailto:dhinakaran.y.dhina@gmail.com">
            <span className="outline-btn flex items-center">
              Start mail
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="1.3rem"
                height="1.3rem"
                viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2">
                  <path d="M10.5 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                  <path d="m3 7l9 6l2.983-1.989L21 7m-3 15l3.35-3.284a2.143 2.143 0 0 0 .005-3.071a2.24 2.24 0 0 0-3.129-.006l-.224.22l-.223-.22a2.24 2.24 0 0 0-3.128-.006a2.143 2.143 0 0 0-.006 3.071z" />
                </g>
              </svg>
            </span>
          </a>
        </div>
      </div>
    );
}

export default ContactSection
const VideoTitle = ({title, overview}) => {
    return <div className=" w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-slate-400">
        <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
        <div className="my-2 md:m-0">
            <button className="bg-white text-black py-2 md:py-4 px-5 md:px-16 text-xl opacity-50 rounded-md hover:bg-opacity-80">
            &#9654; Play
            </button>
            <button className="hidden md:inline-block mx-2 bg-gray-500 text-white py-4 px-12 text-xl opacity-50 rounded-md hover:bg-opacity-80">&#9432; More Info</button>
        </div>
    </div>
}

export default VideoTitle;
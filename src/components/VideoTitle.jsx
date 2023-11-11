const VideoTitle = ({title, overview}) => {
    return <div className=" w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-slate-400">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="py-6 text-lg w-1/3">{overview}</p>
        <div className="">
            <button className="bg-white text-black py-4 px-16 text-xl opacity-50 rounded-md hover:bg-opacity-80">
            &#9654; Play
            </button>
            <button className="mx-2 bg-gray-500 text-white py-4 px-12 text-xl opacity-50 rounded-md hover:bg-opacity-80">&#9432; More Info</button>
        </div>
    </div>
}

export default VideoTitle;
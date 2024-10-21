import bannerImg from '../../../assets/banner.jpg'
const Banner = () => {
    return (

        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="lg:w-2/3 w-full">
                    <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                    <p className="mb-5">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                    </p>
                    <div className='space-x-4'>
                        <button className="btn bg-primary border-none rounded-full">Explore Now</button>
                        <button className="btn btn-outline border-white rounded-full text-white">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
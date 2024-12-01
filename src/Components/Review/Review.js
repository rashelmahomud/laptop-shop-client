
const Review = ({ review }) => {

    const { img, count, name } = review;
 

    return (
        <div className='grid justify-items-center' >
            <div className="card w-72 lg:w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-6xl font-bold">{count}+</h2>
                    <p className='text-2xl font-bold'>{name}</p>

                </div>
            </div>

        </div>
    );
};

export default Review;
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl text-center mt-10 font-bold'>This is a blogs page</h2>

           
                <div tabindex="0" class="collapse border lg:m-20 m-5 rounded-box ">
                    <div class="collapse-title text-xl font-medium">
                        How Will Your imporve The perfomance of a React Applications?
                    </div>
                    <div class="collapse-content">
                        <p>How Will Your imporve The perfomance of a React Applications.</p>
                    </div>
                </div>
           
                <div tabindex="0" class="collapse border lg:m-20 m-5 rounded-box ">
                    <div class="collapse-title text-xl font-medium">
                        What are the differant ways to manage a state in a React Applications?
                    </div>
                    <div class="collapse-content">
                        <p>What are the differant ways to manage a state in a React Applications.</p>
                    </div>
                </div>

                <div tabindex="0" class="collapse border lg:m-20 m-5 rounded-box ">
                    <div class="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div class="collapse-content">
                        <p>How does prototypical inheritance work.</p>
                    </div>
                </div>

                <div tabindex="0" class="collapse border lg:m-20 m-5 rounded-box ">
                    <div class="collapse-title text-xl font-medium">
                       Why use this system Const [product, setProduct] = useState([])?
                    </div>
                    <div class="collapse-content">
                        <p>Why use this system Const [product, setProduct] = useState([]).</p>
                    </div>
                </div>

                <div tabindex="0" class="collapse border lg:m-20 m-5 rounded-box ">
                    <div class="collapse-title text-xl font-medium">
                       What is a unite text why shoud write unit tests?
                    </div>
                    <div class="collapse-content">
                        <p>What is a unite text why shoud write unit tests.</p>
                    </div>
                </div>
           
        </div>
    );
};

export default Blogs;
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
                    a. Using Immutable Data Structures<br />
                    b. Function/Stateless Components and great and React.PureComponent<br />
                    <p>How Will Your imporve The perfomance of a React Applications.</p>
                    c. Multiple Chunk Files<br />
                    d. Using Production Mode Flag in Webpack<br />
                    f. Avoid Inline Function Definition in the Render Function.<br />
                    e. Dependency optimization<br />
                    h. Avoiding Props in Initial States<br />
                    g. Throttling and Debouncing Event Action in JavaScript Event trigger rate is the<br />
                    i. Spreading props on DOM elements<br />
                    k. Avoid Async Initialization in. etc<br />
                    j. Use Reselect in Redux to Avoid Frequent Re-render<br />

                </div>
            </div>

            <div tabindex="0" class="collapse border lg:m-20 m-5 rounded-box ">
                <div class="collapse-title text-xl font-medium">
                    What are the differant ways to manage a state in a React Applications?
                </div>
                <div class="collapse-content">
                    <p>What are the differant ways to manage a state in a React Applications.</p>
                    <p>
                        <h2 className='text-2xl'>*The four kinds of react state to manage</h2>

                        2.Global state
                        4.URL state
                        1.Local state
                        3.Server state

                        <h1 className='text-2xl'>Local state</h1>

                        Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

                        useState is the first tool you should reach for to manage state in your components.

                        It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).

                        <h3 className='text-3xl'>Global state</h3>

                        You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

                        What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.

                        To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.
                    </p>
                </div>
            </div>

            <div tabindex="0" class="collapse border lg:m-20 m-5 rounded-box ">
                <div class="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p>prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                </div>
            </div>

            <div tabindex="0" class="collapse border lg:m-20 m-5 rounded-box ">
                <div class="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React.?
                </div>
                <div class="collapse-content">
                    <p>In React, whenever a component is rendering either in theMounting phase or in Updating Phase, it always renders all the components that are in its tree.

                        Stateless functional component is a component that has no state or parents. They only render a react component.</p>
                </div>
            </div>

            <div tabindex="0" class="collapse border lg:m-20 m-5 rounded-box ">
                <div class="collapse-title text-xl font-medium">
                    What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology sometimes QA staff. The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                        Unit testing involves only those characteristics that are vital to the performance of the unit under test. This encourages developers to modify the source code without immediate concerns about how such  a whole. Once all of the units in a program have been found to be working in the most efficient and error-free manner possible, larger testing. Unit tests should be performed frequently, and can be done manually or can be automated..</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;
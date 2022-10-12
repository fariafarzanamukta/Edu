import React from 'react';

const Blogs = () => {
    return (
        <div className='font-serif bg-lime-50'>
            <div className='py-16' >
                <div className="card w-9/12 mx-auto mb-10 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-blue-600">What is the purpose of react routers?</h2>
                        <p>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                    </div>
                </div>

                <div className="card w-9/12 mx-auto mb-10 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-blue-600">How does context API works?</h2>
                        <p>The React Context API was been around as an experimental feature for a while now but finally became safe to use in production last year, solving one major problem React problem — prop drilling.React Context provides a way to pass data through the component tree without having to pass props down manually at every level. In some sense, it simulates “Global” data in React component Tree.</p>
                    </div>
                </div>

                <div className="card w-9/12 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-blue-600">What is the UesRef?</h2>
                        <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Blogs;
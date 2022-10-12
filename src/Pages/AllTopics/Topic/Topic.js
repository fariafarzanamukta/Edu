import React from 'react';
import { NavLink } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic
    return (
        <div>

            <div>
                <div className="card card-compact w-fit mx-auto bg-base-100 shadow-xl">
                    <figure><img className='bg-gray-600 w-[400px] h-[350px]' src={logo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div className="card-actions justify-center">
                            <NavLink to={`/quizDetails/${id}`}>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-2xl pr-4'><i className="fa-solid fa-clipboard-question pr-2"></i>{total}</h1>
                                    <button className="btn btn-primary">Go For Quiz</button>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;
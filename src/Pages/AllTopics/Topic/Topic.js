import React from 'react';
import { NavLink } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo } = topic
    return (
        <div>

            <div>
                <div className="card card-compact w-fit mx-auto bg-base-100 shadow-xl">
                    <figure><img className='bg-green-50 w-[350px] h-[350px]' src={logo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div className="card-actions justify-end">
                            <NavLink to={`/quizDetails/${id}`}>

                                <button className="btn btn-primary">Go For Quiz</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;
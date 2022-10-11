import React, { useEffect, useId, useState } from 'react';
import { useParams } from 'react-router-dom';


const QuizDetails = () => {
    const id = useId()
    const { topicId } = useParams();
    const [topicDetails, setTopicDetails] = useState({});
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${topicId}`)
            .then(res => res.json())
            .then(data => {
                setTopicDetails(data.data);
                setQuestions(data.data.questions);
            })
    }, [topicId])

    const [selected, setSelected] = useState();

    return (
        <div className='font-serif'>
            <h1 className='text-2xl text-center font-bold pt-10'>Quiz of {topicDetails?.name}</h1>
            <div>

                <h1 className='text-center mt-10'>{selected} </h1>
                <div className='w-11/12 grid grid-cols-3 gap-10 mx-auto pb-20'>
                    {
                        questions.map(ques =>
                            <div>
                                <div className="card h-[400px] bg-slate-600 text-primary-content">
                                    <div className="card-body">
                                        <h1>Quiz:{ques?.question}</h1>
                                        <div className='flex'>
                                        </div>

                                        {ques?.correctAnswer}


                                        <h1 className='py-2'>{ques?.options.map(op =>
                                            <p className='flex py-2'>
                                                <input type="radio" name='radio' value={op} className="radio mr-2 bg-white" onChange={e => setSelected(e.target.value)} />
                                                <p>{op}</p>
                                            </p>)
                                        }</h1>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default QuizDetails;
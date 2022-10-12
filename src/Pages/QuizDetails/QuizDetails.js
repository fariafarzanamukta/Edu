import React, { useEffect, useId, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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


    const [correct, setCorrect] = useState('');

    const compareResult = (e, data) => {
        if (e.target.value === data) {
            setCorrect(
                toast.success('Your Answer is Correct', {
                    position: toast.POSITION.TOP_CENTER
                })
            )

        }
        else {
            setCorrect(
                toast.error(`Your Ans Is wrong , The Correct Ans is: ${data}`, {
                    position: toast.POSITION.TOP_CENTER
                })
            )

        }

    }
    const [rightAnswer, setRightAnswer] = useState('')

    const correctResult = (e, rightvalue) => {
        setRightAnswer(rightvalue)
        console.log(rightvalue);
    }

    return (
        <div className='font-serif  bg-lime-50'>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-24 lg:px-8'>
                <h1 className='text-2xl text-center font-bold pt-8 pb-6 text-purple-700'>Quiz of {topicDetails?.name}</h1>
                <div>

                    {/* {
    correct !== '' ?
        <h1 className='text-center mt-10'>
            {correct}</h1>
        :
        null
} */}
                    <div className='w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto pb-20'>

                        {
                            questions.map(ques =>
                                <div key={ques.id}>
                                    <div className="card lg:h-[480px] bg-slate-600 text-primary-content">
                                        <div className="card-body">
                                            <div className='flex justify-center items-center'>
                                                <h1 className='bg-lime-100 py-2 px-3 rounded-lg text-gray-600'>Quiz <span >{questions.indexOf(ques) + 1}</span> :{ques?.question}</h1>

                                                <label htmlFor="my-modal-3" className=" ml-2" value={ques?.correctAnswer} onClick={(e) => {
                                                    correctResult(e, ques?.correctAnswer)
                                                }}><i className="fa-solid fa-eye text-xl"></i></label>
                                            </div>

                                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box bg-gray-600 relative">
                                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                    <h3 className="font-bold text-lg text-white text-center">{rightAnswer}</h3>
                                                </div>
                                            </div>

                                         

                                            <h1 className='py-2'>{ques?.options.map(op =>
                                                <p className='flex items-center py-2'>
                                                    <input type="radio" name='radio-1' value={op} className="radio mr-2 bg-white"
                                                        onClick={(e) => {
                                                            compareResult(e, ques?.correctAnswer)
                                                            // correct('')
                                                        }} />
                                                    <p className='bg-gray-100 text-black py-2 px-3 rounded-3xl'>{op}</p>


                                                </p>)
                                            }
                                            </h1>

                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>


            <ToastContainer />
        </div>
    );
};

export default QuizDetails;
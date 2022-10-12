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

    // const [selected, setSelected] = useState();
    const [correct, setCorrect] = useState('');
    // const [right, setRight] = useState(false)

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

    return (
        <div className='font-serif px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-24 lg:px-8'>
            <h1 className='text-2xl text-center font-bold pt-10'>Quiz of {topicDetails?.name}</h1>
            <div>

                {/* {
                    correct !== '' ?
                        <h1 className='text-center mt-10'>
                            {correct}</h1>
                        :
                        null


                } */}
                <div className='w-5/6 grid grid-cols-2 gap-10 mx-auto pb-20'>

                    {
                        questions.map(ques =>
                            <div key={ques.id}>
                                <div className="card h-[450px] bg-slate-600 text-primary-content">


                                    <div className="card-body">
                                        <h1>Quiz <span >{questions.indexOf(ques) + 1}</span> :{ques?.question}</h1>


                                        <div className='flex'>
                                        </div>
                                        {ques?.correctAnswer}


                                        <h1 className='py-2'>{ques?.options.map(op =>
                                            <p className='flex py-2'>
                                                <input type="radio" name='radio-1' value={op} className="radio mr-2 bg-white"
                                                    onClick={(e) => {
                                                        compareResult(e, ques?.correctAnswer)
                                                        correct('')
                                                    }} />
                                                <p>{op}</p>


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

            <ToastContainer />
        </div>
    );
};

export default QuizDetails;
import React, { useEffect, useState ,useId} from 'react';
import { useParams } from 'react-router-dom';

const Questions = () => {
    const id =useId()

    const { topicId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [options, setOptions] = useState('');
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${topicId}`)
            .then(res => res.json())
            .then(data => setQuestions(data.data.questions))
        // console.log(questions);
    }, [questions, topicId])



    const [selected, setSelected] = useState();
    // const [correct, setCorrect] = useState();
    // console.log(selected);

    return (
        <div>

            <h1 className='text-center mt-10'>{selected} </h1>
            
            <div className='w-11/12 grid grid-cols-3 gap-10 mx-auto py-20'>
                {
                    questions.map(ques =>
                        <div>

                            <div className="card h-[400px] bg-slate-600 text-primary-content">
                                <div className="card-body">
                                    <h1>{ques?.question}</h1>
                                    <div className='flex'>
                                    </div>
                                  

                             

                                    {/* <h1 className=''>{ques?.correctAnswer}</h1> */}


                                    <h1 className='py-2'>{ques?.options.map(op =>
                                        <p className='flex py-2'>
                                            <input type="radio" name={id+'radio'} value={op} className="radio mr-2 bg-white" onChange={e => setSelected(e.target.value)} />
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
    );
};

export default Questions;
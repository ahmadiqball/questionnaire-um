import { useState } from "react"
import { questions } from "../constants/question";
import { OptionSelector } from "../components/option-selector";
import { Button } from "../components/button";
import classNames from "classnames";
import { useStore } from "../store";
import { useNavigate, useParams } from "react-router-dom";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";

interface AnswerState {
  id: number;
  value: number;
}

export function PageAssessment() {
  const navigate = useNavigate();
  const { assessmentId } = useParams();
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(questions);
  const activeQuestion = questions[question as keyof typeof questions];
  const { userData, setStoreAnswers } = useStore();

  const changeQuestionHandler = async (type: string) => {
    try {
      if (type === 'next' && question === 46) {
          const arrayValue = Object.values(answer);
          const savedAnswer = arrayValue.map((item: any) => {
            return {
              id: item.id,
              value: item.value
            }
          })
    
          await setDoc(doc(firestore, 'assessment', doc(collection(firestore, 'assessment')).id), {
            name: userData!.name,
            age: userData!.age,
            school: userData!.school,
            gender: userData!.gender,
            answer: JSON.stringify(savedAnswer),
            sessionId: assessmentId,
            createdAt: Timestamp.now(),
          })
          setStoreAnswers(answer);
          navigate(`/assessment/${assessmentId}/result`);
      }

      if (type === 'next') {
        setQuestion(question+1)
      } else {
        setQuestion(question-1)
      }
    } catch (err) {
      console.error(err);
  }
  };

  const updateQuestionValue = (value: number) => {
    setAnswer({
      ...answer,
      [question]: {
        ...answer[question as keyof typeof questions],
        value
      }
    })

    changeQuestionHandler('next')
  };

  return (
    <main className="w-full min-h-screen pb-10 sm:pb-[98px] bg-[url(/assets/background-white.svg)] bg-center bg-cover bg-no-repeat px-10 sm:px-20">
      <div className="min-h-[calc(100vh-226px)] sm:min-h-[calc(100vh-216px)] xl:min-h-[calc(100vh-150px)] py-10 w-full flex flex-col gap-10 sm:gap-[96px] justify-center items-center">
        <p className="text-[#0A0A0A] font-bold text-3xl sm:text-5xl lg:text-[64px] text-center max-w-[1270px]">{activeQuestion.question}</p>

        <OptionSelector active={answer[question as keyof typeof questions].value} setActive={updateQuestionValue}/>
      </div>

      <div className="flex gap-4 justify-between flex-col xl:flex-row">
        <Button 
          disabled={question === 1}
          light 
          onClick={() => changeQuestionHandler('prev')} 
          className={classNames('hidden xl:block', {
          'opacity-0': question === 1
          })}
        >
          Kembali
        </Button>
        <div className="w-full xl:w-[60%]">
          <div className="h-[26px] w-[64px] bg-purple text-center text-white rounded-t-[999px] mx-auto text-xs flex justify-center items-end pb-1">
              {`${question}/${46}`}
            </div>
          <div className="w-full h-6 bg-[#C2C2C2] border border-purple rounded-lg overflow-hidden">
            <div className="h-full bg-purple rounded-lg" style={{ width: `${100*question/46}%`}}/>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Button 
            disabled={question === 1}
            light 
            onClick={() => changeQuestionHandler('prev')} 
            className={classNames('w-full block xl:hidden', {
            'opacity-0': question === 1
            })}
          >
            Kembali
          </Button>
          <Button
            disabled={answer[question as keyof typeof questions].value === 0} 
            onClick={() => changeQuestionHandler('next')} 
            className="w-full"
          >
              Lanjut
          </Button>
        </div>
      </div>
    </main>
  )
}
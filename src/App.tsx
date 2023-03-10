import { useMemo, useState } from "react";
import { IQuestion } from "@/types/types";
import { Game } from "@/Components/Game/Game";
import { Result } from "@/Components/Result/Result";
import { data } from "./data";
import "./App.css";
import { Wrapper } from "@/Components/Wrapper/Wrapper";

function App() {
  const [step, setStep] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const questions: IQuestion[] = useMemo(() => data, [data]);
  const question: IQuestion = questions[step];

  const handleClickVariant = (index: string) => {
    setStep(step + 1);
    index == question.correct && setCorrect(correct + 1);
  };

  return (
    <Wrapper>
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          handleClickVariant={handleClickVariant}
          data={data}
        />
      ) : (
        <Result correct={correct} data={data} />
      )}
    </Wrapper>
  );
}

export default App;

import React, { FC } from "react";
import { IQuestion } from "../../types/types";

interface question {
  question: IQuestion;
  handleClickVariant: (index: number | string) => void;
  step: number;
  data: IQuestion[];
}

const Game: FC<question> = ({ question, handleClickVariant, step, data }) => {
  const procenttage = Math.round((step / data.length) * 100);
  console.log(procenttage);
  return (
    <div className="bg-green-600 w-[300px] border-solid border-8 border-red-400">
      <div className="min-w-full">
        <div
          style={{ width: `${procenttage}%` }}
          className={
            "h-1 bg-blue-500 transition-all transition-duraction-300 ease-linear"
          }
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul
        onClick={(event: React.PointerEvent<HTMLUListElement>) =>
          handleClickVariant((event.target as HTMLLIElement).id)
        }
      >
        {question.variants.map((variant, index) => (
          <li id={index.toString()} key={variant}>
            {variant}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;

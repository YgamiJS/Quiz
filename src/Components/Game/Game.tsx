import React, { FC } from "react";
import { IQuestion } from "../../types/types";

interface question {
  question: IQuestion;
  handleClickVariant: (index: number | string) => void;
  step: number;
  data: IQuestion[];
}

const Game = ({ question, handleClickVariant, step, data }: question) => {
  const procenttage = Math.round((step / data.length) * 100);

  return (
    <div className="bg-gray-700 border-solid border-8 border-gray-300 p-[15px] rounded-[15px] w-full h-[80%]">
      <div className="min-w-full">
        <div
          style={{ width: `${procenttage}%` }}
          className={
            "h-1 bg-green-500 transition-all transition-duraction-300 ease-linear rounded-[15px]"
          }
        ></div>
      </div>
      <h1 className="text-white text-[28px] font-black">{question.title}</h1>
      <ul
        className="text-white cursor-pointer text-[18px] font-normal"
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

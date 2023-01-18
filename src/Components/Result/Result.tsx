import { FC } from "react";

interface result {
  correct: number;
  length: number;
}

const Result: FC<result> = ({ correct, length }) => {
  return (
    <div className="">
      <img src="" alt="" />
      <h2>
        Вы отгадали {correct} ответа из {length}.
      </h2>
    </div>
  );
};

export default Result;

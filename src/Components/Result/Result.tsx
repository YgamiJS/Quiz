import { IQuestion } from "../../types/types";

interface result {
  correct: number;
  data: IQuestion[];
}

const Result = ({ correct, data }: result) => {
  return (
    <div className="">
      <img src="" alt="" />
      <h2>
        Вы отгадали {correct} ответа из {data.length}.
      </h2>
    </div>
  );
};

export default Result;

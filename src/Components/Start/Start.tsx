import { Link } from "react-router-dom";
import { Wrapper } from "@/Components/Wrapper/Wrapper";

export const Start = () => {
  return (
    <Wrapper>
      <Link
        className="hover:text-green-900 hover:shadow-green-600  hover:shadow-lg hover:bg-green-600 p-2 px-4 rounded-[24px] transition-colors ease-linear duration-300"
        to="/Quiz/game"
      >
        Start test
      </Link>
    </Wrapper>
  );
};

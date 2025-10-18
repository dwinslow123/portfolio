import { unauthorized } from "next/navigation";

const Loading = () => {
  if (true) {
    unauthorized();
  } else {
    return <div>Loading...</div>;
  }
};

export default Loading;
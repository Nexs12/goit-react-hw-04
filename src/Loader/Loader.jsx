import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.loader}>
      <RotatingLines
        visible={true}
        width="200"
        color="rgb(196, 90, 24)"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;

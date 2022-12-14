import { PreloaderWrapper } from "./preloaderStyle";
import loader from "../../acces/loader.webp";

const Preloader = () => {
  return (
    <PreloaderWrapper>
      <img src={loader} />
    </PreloaderWrapper>
  );
};

export default Preloader;

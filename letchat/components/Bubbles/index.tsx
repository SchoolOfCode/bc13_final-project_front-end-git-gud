import styles from "../../styles/Container.module.css";

const Bubbles = () => {
  return (
    <div id="bubbles" className="static top-0 left-0">
      <div
        id="pink-bubble"
        className={`${styles.bubble} absolute right-[30%] bottom-[-200px] w-[100px] h-[100px] rounded-full opacity-[0.8] bg-light-secondary z-30`}
      ></div>
      <div
        id="orange-bubble"
        className={`${styles.bubble} absolute bottom-[-200px] w-[150px] h-[150px] rounded-full opacity-[0.8] bg-light-hot z-30`}
      ></div>
      <div
        id="yellow-bubble"
        className={`${styles.bubble} absolute right-[70%] bottom-[-200px] w-[200px] h-[200px] rounded-full opacity-[0.4] bg-light-primary z-30`}
      ></div>
      <div
        id="red-bubble"
        className={`${styles.bubble} absolute right-0 bottom-[-200px] w-[100px] h-[100px] rounded-full opacity-[0.8] bg-light-tertiary z-30`}
      ></div>
    </div>
  );
};

export default Bubbles;

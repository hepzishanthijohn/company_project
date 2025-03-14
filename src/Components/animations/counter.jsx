import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Counter = ({ value }) => {
  const { ref, inView } = useInView({ triggerOnce: true }); // Detects when visible

  return (
    <h4 ref={ref}>
      {inView ? <CountUp start={0} end={value} duration={2} /> : 0}
    </h4>
  );
};

export default Counter;

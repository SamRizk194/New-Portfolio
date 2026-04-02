import { motion } from "framer-motion";
import flower from "../../assets/my-stack/flower.svg";

function Flower({ size = 40 }) {
  return (
    <motion.img
      src={flower}
      alt="flower"
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "linear",
      }}
    />
  );
}

export default Flower;

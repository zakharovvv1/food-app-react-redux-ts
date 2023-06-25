import styles from "./Hero.module.css";
import banner from "./assets/banner.png";

const Hero = () => {
  return <img className={styles.hero} src={banner} />;
};

export default Hero;

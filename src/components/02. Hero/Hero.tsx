import styles from "./Hero.module.css";
import banner from "./assets/banner.png";
import heroMobileImg from "./mobile-hero/mobileImgHero.png";
const Hero = () => {
  return (
    <div>
      <img className={styles.hero} src={banner} />
      <img className={styles.mobileHero} src={heroMobileImg} />
    </div>
  );
};

export default Hero;

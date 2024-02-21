import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex justify-center items-center">
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
  
        <div className="flex flex-col justify-center"> {/* Adjusted for vertical centering of text */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Lufei Wang</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Transforming Artistic Vision into Digital Experiences <br className='sm:block hidden' />
          UI/UX Designer｜Graphic Designer | Master's in Oil Painting 
          </p>
        </div>
      </div>
    </section>
  );
  
  
};

export default Hero;

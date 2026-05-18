import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I'm a Computer Science student at Manipal Institute of Technology with a passion for
          building intelligent systems that bridge the gap between machine learning and
          real-world impact.
        </p>
        <p className="body-text max-w-2xl mt-6">
          My work spans full-stack development and AI/ML — from RAG-based medical chatbots
          to sustainability scanners and deep learning image analysis pipelines. I'm driven
          by the belief that great software should be both technically rigorous and
          meaningfully useful.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          Beyond code, I lead ArtPod at MIT Manipal, head marketing for a growing startup,
          and previously helped coordinate the Manipal Entrepreneurship Summit 2025. I
          believe the best builders sit at the intersection of technology, creativity,
          and leadership.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;

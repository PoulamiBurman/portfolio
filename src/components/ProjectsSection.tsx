import { motion } from 'framer-motion';
import { Github, ExternalLink, Plus } from 'lucide-react';
import SectionBlock from './SectionBlock';
import { Badge } from './ui/badge';
import { playHover, playClick } from '@/hooks/useSoundEffects';

const projects = [
  {
    title: 'PurePick',
    subtitle: 'AI-Powered Cosmetic Sustainability Scanner',
    isNew: true,
    description:
      'Full-stack web app enabling users to scan cosmetic barcodes and receive instant sustainability ratings, integrating Open Beauty Facts and EWG APIs to evaluate 50,000+ product entries in real-time. Serverless Next.js API layer on Vercel reduces analysis response time to under 1.2 seconds.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Vercel'],
    githubUrl: 'https://github.com/PoulamiBurman',
    liveUrl: '#',
    placeholder: false,
  },
  {
    title: 'MediBot',
    subtitle: 'Generative AI Medical Q&A Chatbot',
    isNew: true,
    description:
      'RAG-based chatbot using LangChain and Pinecone vector store, ingesting 500+ medical documents for semantically accurate patient health responses. Integrated Gemini-2.5 with a custom prompt-safety layer achieving 87% response relevance across 200 test prompts.',
    tags: ['Python', 'LangChain', 'Flask', 'Gemini API', 'Pinecone', 'RAG'],
    githubUrl: 'https://github.com/PoulamiBurman',
    liveUrl: '#',
    placeholder: false,
  },
  {
    title: 'Deep Learning Image Analysis',
    subtitle: 'CNN-based Face Recognition Pipeline',
    isNew: false,
    description:
      'CNN-based image processing pipeline using PyTorch for face recognition and extraction. Integrated OpenCV preprocessing with filtering and edge detection to improve input quality. Designed ROI-based processing to enhance efficiency and reduce computation.',
    tags: ['PyTorch', 'OpenCV', 'Python', 'CNN', 'Deep Learning'],
    githubUrl: 'https://github.com/PoulamiBurman',
    liveUrl: '#',
    placeholder: false,
  },
  { placeholder: true },
  { placeholder: true },
  { placeholder: true },
];

type Project = {
  title?: string;
  subtitle?: string;
  isNew?: boolean;
  description?: string;
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  placeholder: boolean;
};

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px' }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 pb-12"
    >
      {(projects as Project[]).map((project, index) => {
        if (project.placeholder) {
          return (
            <motion.div
              key={`placeholder-${index}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="w-full h-full"
            >
              <div className="w-full h-full group relative border-2 border-black/20 border-dashed px-6 py-10 flex flex-col items-center justify-center shadow-none bg-transparent rounded-none min-h-[480px] transition-all duration-500 hover:border-black/40">
                <Plus className="w-8 h-8 text-foreground/15 mb-4 group-hover:text-foreground/30 transition-colors" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/25 group-hover:text-foreground/40 transition-colors text-center">
                  // Coming Soon
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/20 group-hover:text-foreground/30 transition-colors text-center mt-1">
                  Next project loading...
                </p>
              </div>
            </motion.div>
          );
        }

        return (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            onMouseEnter={playHover}
            className="w-full h-full"
          >
            <div className="w-full h-full group relative border-2 border-black px-6 py-10 flex flex-col justify-between shadow-brutal-3d hover:shadow-brutal-3d-hover transition-all duration-500 bg-white rounded-none min-h-[480px]">
              {project.isNew && (
                <div className="absolute -top-3 -right-3 bg-black text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest border-2 border-black z-10 rotate-3 group-hover:rotate-0 transition-transform">
                  FEATURED
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-black text-foreground leading-tight text-xl">
                    {project.title}
                  </h3>
                </div>
                {project.subtitle && (
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-6">
                    {project.subtitle}
                  </p>
                )}

                <p className="body-text mb-8 font-normal leading-relaxed text-foreground/80 text-xs line-clamp-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags!.slice(0, 8).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-[9px] font-bold border border-black/5 bg-black/5 px-2 py-0.5 rounded-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border-2 border-black bg-white text-[9px] font-black uppercase tracking-widest transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-black hover:text-white"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border-2 border-black bg-black text-white text-[9px] font-black uppercase tracking-widest transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-white hover:text-black"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>

    <div className="mt-8">
      <a
        href="https://github.com/PoulamiBurman"
        target="_blank"
        rel="noopener noreferrer"
        onClick={playClick}
        className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:gap-5 transition-all w-fit"
      >
        <Github className="w-4 h-4" />
        Explore All Repositories
      </a>
    </div>
  </SectionBlock>
);

export default ProjectsSection;

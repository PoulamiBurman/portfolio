import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Server,
  Cpu,
  Wrench,
  Box,
} from 'lucide-react';
import SectionBlock from './SectionBlock';
import { playHover } from '@/hooks/useSoundEffects';

const skillCategories = [
  {
    title: 'Machine Learning & NLP',
    icon: <Brain className="w-5 h-5" />,
    color: 'bg-purple-50',
    skills: [
      'PyTorch',
      'Transformers (HuggingFace)',
      'LLMs',
      'NLP',
      'Deep Learning',
      'LangChain',
      'Pinecone',
      'RAG',
    ],
  },
  {
    title: 'Languages',
    icon: <Code2 className="w-5 h-5" />,
    color: 'bg-blue-50',
    skills: ['Python', 'C++', 'Java', 'C'],
  },
  {
    title: 'Core CS',
    icon: <Cpu className="w-5 h-5" />,
    color: 'bg-orange-50',
    skills: [
      'Data Structures & Algorithms',
      'OOP',
      'Operating Systems',
      'DBMS',
      'Computer Networks',
    ],
  },
  {
    title: 'Frontend',
    icon: <Code2 className="w-5 h-5" />,
    color: 'bg-green-50',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Databases',
    icon: <Server className="w-5 h-5" />,
    color: 'bg-yellow-50',
    skills: [
      'Node.js',
      'Express.js',
      'Flask',
      'Django',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'REST APIs',
    ],
  },
  {
    title: 'Tools & Ecosystem',
    icon: <Wrench className="w-5 h-5" />,
    color: 'bg-gray-50',
    skills: [
      'Git',
      'GitHub',
      'Linux',
      'Figma',
      'Hugging Face',
      'Kiro',
      'Windsurf',
      'Gemini API',
    ],
  },
];

const SkillsSection = () => {
  return (
    <SectionBlock id="skills" title="Technical Arsenal">
      <div className="flex flex-col gap-12">
        {/* Skill Modules */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div
                onMouseEnter={playHover}
                className="group border-2 border-black p-6 bg-white h-full relative rounded-none shadow-brutal-3d hover:shadow-brutal-3d-hover transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 border-2 border-black bg-black text-white group-hover:bg-white group-hover:text-black transition-colors rounded-none">
                    {category.icon}
                  </div>
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 border border-black/10 text-[11px] font-mono hover:border-black hover:bg-black/5 transition-all cursor-default rounded-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Always Learning Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div
              onMouseEnter={playHover}
              className="h-full border-2 border-black p-6 bg-black/5 flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-all rounded-none"
            >
              <Box className="w-8 h-8 mb-4 opacity-20" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] font-medium">
                // Always Learning...
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionBlock>
  );
};

export default SkillsSection;

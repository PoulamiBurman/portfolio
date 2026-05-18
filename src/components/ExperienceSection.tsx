import SectionBlock from './SectionBlock';

const experiences = [
  {
    role: 'President',
    company: 'ArtPod, MIT Manipal',
    period: '[AUG 2025 – PRESENT]',
    description:
      'Directed a team of 100+ members, overseeing 10+ events with 150+ student participants. Led digital outreach and brand campaigns to grow event visibility across platforms. Established structured workflows for event planning and execution, improving team efficiency and coordination.',
  },
  {
    role: 'Marketing Head',
    company: 'Yaanbarpe',
    period: '[2025 – PRESENT]',
    description:
      'Leading marketing strategy for a growing startup, driving user acquisition and brand visibility. Designed and executed digital campaigns, optimizing engagement and conversion metrics. Collaborating with cross-functional teams to align product positioning with customer needs.',
  },
  {
    role: 'Executive',
    company: 'E-Cell, MIT Manipal',
    period: '[SEPT 2024 – MAY 2025]',
    description:
      'Coordinated the Manipal Entrepreneurship Summit 2025 (speakers: Dr. Velumani, Raj Shamani, Ashneer Grover), managing partnerships, sponsorships, logistics, and end-to-end marketing strategy spanning content, social media, and brand positioning. Crafted targeted outreach communication and pitch decks, coordinating with external stakeholders and internal teams to align on deliverables and timelines.',
  },
];

const ExperienceSection = () => (
  <SectionBlock id="experience" title="Experience">
    <div className="space-y-12">
      {experiences.map((exp) => (
        <div
          key={exp.role}
          className="relative pl-8 md:pl-0 border-l md:border-l-0 border-black/20 md:grid md:grid-cols-[1fr_2fr] md:gap-8 pb-12 last:pb-0"
        >
          <div className="md:text-right md:pr-8 md:border-r border-black/20 relative">
            <div className="hidden md:block absolute top-1 -right-[5px] w-[9px] h-[9px] rounded-none bg-black"></div>
            <div className="md:hidden absolute top-1 -left-[5px] w-[9px] h-[9px] rounded-none bg-black"></div>

            <h4 className="font-mono text-xs tracking-widest text-foreground/60 uppercase mb-1">
              {exp.period}
            </h4>
            <h3 className="font-bold text-base md:text-lg">{exp.company}</h3>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="text-base font-bold text-foreground md:hidden mb-2">
              {exp.role}
            </h3>
            <h3 className="text-lg font-bold text-foreground hidden md:block mb-3">
              {exp.role}
            </h3>
            <p className="body-text text-sm">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ExperienceSection;

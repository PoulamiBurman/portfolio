import SectionBlock from './SectionBlock';

const education = [
  {
    degree: 'B.Tech – Computer Science, Minor – Entrepreneurship',
    school: 'Manipal Institute of Technology [MIT], Udupi, India',
    year: '2023 – 2027 (Expected)',
  },
  {
    degree: 'Class XII – 82%',
    school: 'Loyola High School, Patna (CBSE)',
    year: '2023',
  },
  {
    degree: 'Class X – 93%',
    school: 'Carmel High School, Patna (ICSE)',
    year: '2021',
  },
];

const EducationSection = () => (
  <SectionBlock id="education" title="Education">
    <div className="space-y-10">
      {education.map((item) => (
        <div
          key={item.degree}
          className="border-l-2 border-black/10 pl-6 py-2 hover:border-black transition-colors duration-300"
        >
          <h3 className="text-base md:text-lg font-bold text-foreground">
            {item.degree}
          </h3>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2">
            <span className="text-sm font-medium text-foreground">
              {item.school}
            </span>
            <span className="hidden md:inline text-foreground/20">•</span>
            <span className="font-mono text-xs text-foreground/60">
              {item.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default EducationSection;

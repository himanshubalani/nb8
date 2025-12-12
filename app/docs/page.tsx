'use client';
import React, { useState } from 'react';
import { 
  Button,
  Box,
  Container,
  Badge,
  ProjectCard,
  WorkExperienceCard
} from '../../components';
import { AppColors } from '../../constants';

const CodeBlock = ({ code, children }: { code: string; children?: React.ReactNode }) => (
  <div className="bg-[#2b2b2b] text-white p-4 rounded-lg border-2 border-black overflow-x-auto relative mt-4 shadow-neo-sm">
    <pre className="font-mono text-sm">{code}</pre>
  </div>
);

const Section = ({ id, title, description, children }: any) => (
  <section id={id} className="bg-white border-2 border-black shadow-neo rounded-2xl p-6 mb-12 scroll-mt-24">
    <h2 className="font-lexend text-3xl font-bold mb-4 border-b-4 border-[#40d39c] inline-block">{title}</h2>
    <p className="font-public text-gray-600 mb-8 text-lg">{description}</p>
    {children}
  </section>
);

const PreviewBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 flex flex-wrap gap-6 items-center justify-center min-h-[150px]">
    {children}
  </div>
);

export default function Docs() {
  const [activeSection, setActiveSection] = useState('buttons');

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto p-4 md:p-8">
      
      {/* Sidebar */}
      <aside className="lg:w-64 flex-shrink-0">
        <div className="sticky top-24 bg-white border-[3px] border-black rounded-xl p-4 overflow-y-auto max-h-[80vh]">
          <h4 className="font-geist font-bold text-lg mb-4 uppercase tracking-wider border-b-2 border-black pb-2">
            Components
          </h4>
          <ul className="space-y-2">
            {[
              { id: 'buttons', label: 'Buttons' },
              { id: 'containers', label: 'Containers' },
              { id: 'boxes', label: 'Box' },
              { id: 'badges', label: 'Badges' },
              { id: 'cards', label: 'Project Cards' },
              { id: 'timeline', label: 'Timeline' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg border-2 font-bold text-sm transition-all
                    ${activeSection === item.id 
                      ? 'bg-black text-[#ffe600] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[2px] translate-y-[2px]' 
                      : 'bg-gray-50 text-black border-transparent hover:bg-[#ffe600] hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    }
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        
        <Section id="buttons" title="Buttons" description="Interactive elements with click feedback.">
          <PreviewBox>
            <Button label="Default" onClick={() => {}} />
            <Button label="Download" color={AppColors.skyBlue} onClick={() => {}} />
            <Button label="Delete" color={AppColors.darkPurple} onClick={() => {}} />
          </PreviewBox>
          <CodeBlock code={`<NeoButton label="Default" onClick={handleClick} />
<NeoButton label="Download" color="#93D6F1" onClick={handleClick} />`} />
        </Section>

        <Section id="containers" title="Containers" description="Simple containers acting as buttons or display blocks.">
          <PreviewBox>
            <Container width="w-40" height="h-16" color={AppColors.lightPink}>
              Click Me
            </Container>
            <Container width="w-40" height="h-16" color={AppColors.lightPeach}>
              Projects
            </Container>
          </PreviewBox>
          <CodeBlock code={`<NeoContainer width="w-40" height="h-16" color={AppColors.lightPink}>
  Click Me
</NeoContainer>`} />
        </Section>

        <Section id="boxes" title="Neo Box" description="A window-like container with a header bar and circles.">
          <PreviewBox>
            <div className="w-full max-w-md">
              <Box headerText="about me" headerColor={AppColors.tomatoRed}>
                <p className="font-outfit text-sm">
                  I'm a Neo-Brutalist component living in a React world.
                  This box handles its own overflow and styling.
                </p>
              </Box>
            </div>
          </PreviewBox>
          <CodeBlock code={`<NeoBox headerText="about me" headerColor="#FFFF7A5C">
  <p>Content goes here...</p>
</NeoBox>`} />
        </Section>

        <Section id="badges" title="Badges" description="Small tags for skills, languages, or status.">
          <PreviewBox>
            <Badge text="React" />
            <Badge text="TypeScript" />
            <Badge text="Tailwind" />
            <Badge text="Design" size="sm" />
          </PreviewBox>
          <CodeBlock code={`<Badge text="React" />
<Badge text="Design" size="sm" />`} />
        </Section>

        <Section id="cards" title="Project Cards" description="Complex card component with image, description and action.">
          <PreviewBox>
            <ProjectCard 
              projectName="NeoBrutal"
              description="A design framework that embraces the aesthetics of neo-brutalism in web development."
              imagePath="https://picsum.photos/600/300"
              projectLink="#"
              languages={['React', 'Tailwind', 'TypeScript']}
              buttonText="View Source"
            />
          </PreviewBox>
          <CodeBlock code={`<ProjectCard 
  projectName="NeoBrutal"
  description="..."
  imagePath="..."
  projectLink="#"
  languages={['React', 'Tailwind']}
  buttonText="View Source"
/>`} />
        </Section>

        <Section id="timeline" title="Timeline Cards" description="Used for work experience or history.">
          <PreviewBox>
            <div className="w-full max-w-md">
              <WorkExperienceCard 
                company="Tech Corp"
                role="Senior Engineer"
                duration="2020 - Present"
                tech="React, Node, AWS"
                color={AppColors.lightTeal}
              />
              <WorkExperienceCard 
                company="Startup Inc"
                role="Frontend Dev"
                duration="2018 - 2020"
                tech="Vue, Firebase"
                color={AppColors.paleYellow}
              />
            </div>
          </PreviewBox>
        </Section>

      </main>
    </div>
  );
}
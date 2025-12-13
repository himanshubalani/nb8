'use client';
import React, { useState } from 'react';
import { 
  AnchorButton,
  Box,
  Button,
  Badge,
  ProjectCard,
  SimpleCard
} from '../../components';
import { AppColors } from '../../constants';
import CodeBlock from '../../components/CodeBlock';



const Section = ({ id, title, description, children }: any) => (
  <section id={id} className="bg-white border-2 border-black shadow-neo rounded-2xl p-6 mb-6 scroll-mt-24">
    <h2 className="font-quicksand text-3xl font-bold mb-4  inline-block">{title}</h2>
    <p className="font-public text-gray-600 mb-8 text-lg">{description}</p>
    {children}
  </section>
);

const PreviewBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-50 border-2 bg-gray/50 border-gray-200 rounded-xl p-8 flex flex-wrap gap-6 items-center justify-center min-h-[150px]">
    {children}
  </div>
);

export default function Docs() {
  const [activeSection, setActiveSection] = useState('anchorbuttons');

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
              { id: 'anchorbuttons', label: 'Anchor Buttons' },
              { id: 'buttons', label: 'Buttons' },
              { id: 'boxes', label: 'Box' },
              { id: 'badges', label: 'Badges' },
              { id: 'projectcards', label: 'Project Cards' },
              { id: 'simplecards', label: 'Simple Cards' },
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
        
        <Section id="anchorbuttons" title="Anchor Buttons" description="For buttons with external links">
          <PreviewBox>
            <AnchorButton label="Open in Github" color={AppColors.github} onClick={() => {}} />
            <AnchorButton label="Docs" color={AppColors.darkPurple} onClick={() => {}} />
            <AnchorButton label="Email me at hello@himanshubalani.com" color={AppColors.skyBlue} onClick={() => {}} />
          </PreviewBox>
                    <CodeBlock language='js' code={`<AnchorButton label="Open in Github" color={AppColors.github} onClick={handleClick} />
<AnchorButton label="Docs" color={AppColors.darkPurple} onClick={handleClick} />
<AnchorButton label="Email me at hello@himanshubalani.com" color={AppColors.skyBlue} onClick={handleClick} />`} />
        </Section>

        <Section id="buttons" title="Buttons" description="Simple buttons">
          <PreviewBox>
            <Button width="w-40" height="h-16" color={AppColors.lightPink}>
              Click Me
            </Button>
            <Button width="w-40" height="h-16" color={AppColors.lightPeach}>
              Projects
            </Button>
          </PreviewBox>
          <CodeBlock language='js' code={`<Button width="w-40" height="h-16" color={AppColors.lightPink}>
  Click Me
</Button>`} />
        </Section>

        <Section id="boxes" title="Box" description="A browser container with a header bar.">
          <PreviewBox>
            <div className="w-full max-w-md">
              <Box headerText="about me" headerColor={AppColors.coralRed}>
                <p className="font-outfit text-sm">
                  I'm a Neo-Brutalist component living in a React world.
                  This box handles its own overflow and styling. Images work too. 
                </p>
                </p>
                <img src="https://img3.stockfresh.com/files/n/nyul/m/16/623420_stock-photo-portrait-of-happy-old-man.jpg" alt="Example image" />
              </Box>
            </div>
          </PreviewBox>
          <CodeBlock language='js' code={`<Box headerText="about me" headerColor={AppColors.coralRed}>
  <p>Content goes here...</p>
</Box>`} />
        </Section>

        <Section id="badges" title="Badges" description="Small tags for skills, languages, or status.">
          <PreviewBox>
            <Badge text="React" size='lg' />
            <Badge text="TypeScript" />
            <Badge text="Tailwind" />
            <Badge text="Design" size="sm" />
          </PreviewBox>
          <CodeBlock language='js' code={`<Badge  text="React" size='lg' />
<Badge text="TypeScript" />
<Badge text="Tailwind" />
<Badge text="Design" size="sm" />`} />
        </Section>

        <Section id="projectcards" title="Project Cards" description="Complex card component with image, description and action.">
          <PreviewBox>
            <ProjectCard 
              projectName="NeoBrutal"
              description="A design framework that embraces the aesthetics of neo-brutalism in web development."
              imagePath="https://picsum.photos/600/300"
              imagealt='image'
              projectLink="#"
              languages={['React', 'Tailwind', 'TypeScript']}
              buttonText="View Source"
            />
          </PreviewBox>
          <CodeBlock language='js' code={`<ProjectCard 
  projectName="NeoBrutal"
  description="..."
  imagePath="..."
  projectLink="#"
  languages={['React', 'Tailwind']}
  buttonText="View Source"
/>`} />
        </Section>

        <Section id="simplecards" title="Simple Cards" description="Used for work experience or history.">
          <PreviewBox>
            <div className="w-full max-w-md">
              <SimpleCard 
                company="Tech Corp"
                role="Senior Engineer"
                duration="2020 - Present"
                tech="React, Node, AWS"
                color={AppColors.lightTeal}
              />
              <SimpleCard 
                company="Startup Inc"
                role="Frontend Dev"
                duration="2018 - 2020"
                tech="Vue, Firebase"
                color={AppColors.paleYellow}
              />
            </div>
          </PreviewBox>
          <CodeBlock language='js' code={`<SimpleCard 
company="Tech Corp"
role="Senior Engineer"
duration="2020 - Present"
tech="React, Node, AWS"
color={AppColors.lightTeal}
/>
<SimpleCard 
company="Startup Inc"
role="Frontend Dev"
duration="2018 - 2020"
tech="Vue, Firebase"
color={AppColors.paleYellow}
/>`} />
        </Section>

        <Section id='CodeBlocks' title='Code Blocks' description='Used for showing code snippets'>
            <CodeBlock language='html' code='<p>This is a Code Block. This is how your code would look. You can specify the language you are typing. No auto type right now. You can copy the code to clipboard.'/>
        </Section>

      </main>
    </div>
  );
}
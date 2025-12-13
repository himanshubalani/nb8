'use client';
import React, { useState } from 'react';
import { 
  AnchorButton,
  Box,
  Button,
  Badge,
  ProjectCard,
  SimpleCard,
  CodeBlock,
  Polaroid,
} from '../../components';
import { AppColors } from '../../constants';
import Sidebar from '../../components/Sidebar';



interface SectionProps {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}
const Section = ({ id, title, description, children }: SectionProps) => (
  <section id={id} className="border-2 border-black shadow-neo rounded-2xl p-6 mb-6 scroll-mt-24"
  style={{ backgroundColor: AppColors.lightTeal }}
  >
    <h2 className="font-quicksand text-3xl font-bold mb-4  inline-block">{title}</h2>
    <p className="font-public text-gray-600 mb-8 text-lg">{description}</p>
    {children}
  </section>
);

const PreviewBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-50 border-2 border-black rounded-xl p-8 flex flex-wrap gap-6 items-center justify-center min-h-[150px]">
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
          <h4 className="font-outfit font-bold text-lg mb-4 uppercase tracking-wider border-b-2 border-black pb-2">
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
              {id: 'codeblocks', label: 'Code Block'},
              {id: 'polaroid', label: 'Image Polaroid'},
              {id: 'sidebar', label: 'SideBar'},

            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg border-2 font-bold text-sm transition-all
                    ${activeSection === item.id 
                      ? 'bg-black text-white border-black  translate-x-[2px] translate-y-[2px]' 
                      : 'bg-gray-50 text-black border-transparent hover:bg-[#90a8ed] hover:border-black'
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
            <AnchorButton label="Open in Github" color={AppColors.github} url='https://github.com/himanshubalani/nb8' />
            <AnchorButton label="Docs" color={AppColors.darkPurple} onClick={() => {}} />
              <AnchorButton label="Do Something" onClick={() => console.log('clicked')} />
            <AnchorButton label="Email me at hello@himanshubalani.com" fullWidth={true} color={AppColors.skyBlue} onClick={() => {}} />
          </PreviewBox>
          <CodeBlock language='js' code={`<AnchorButton label="Open in Github" onClick={handleClick} url='https://github.com/himanshubalani/nb8' />
<AnchorButton label="Download" color="" onClick={handleClick} />
<AnchorButton label="Do Something" onClick={() => console.log('clicked')} />
<AnchorButton label="Email me at hello@himanshubalani.com" fullWidth={true} color={AppColors.skyBlue} onClick={() => {}} />
`} />
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
                <img src="https://img3.stockfresh.com/files/n/nyul/m/16/623420_stock-photo-portrait-of-happy-old-man.jpg" alt="Example image" />
              </Box>
            </div>
          </PreviewBox>
          <CodeBlock language='js' code={`<Box headerText="about me" headerColor="#FFFF7A5C">
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
                color={AppColors.lightPeach}
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

        <Section id='codeblocks' title='Code Blocks' description='Used for displaying code snippets. '>
            <CodeBlock language='html' code={`<p>
This is a CodeBlock. This is how your code will look. You can specify a language as well.
</p>`} />
        </Section>

        <Section id='polaroid' title='Image Polaroid' description='Show beautiful images in a polaoid'>
              <PreviewBox>
                <Polaroid src='https://img3.stockfresh.com/files/n/nyul/m/16/623420_stock-photo-portrait-of-happy-old-man.jpg' alt='Polaroid Example'/>
                </PreviewBox>
                <CodeBlock language='js' code={`<Polaroid src='https://img3.stockfresh.com/files/n/nyul/m/16/623420_stock-photo-portrait-of-happy-old-man.jpg' alt='Polaroid Example`} />
        </Section>
                <Section id='sidebar' title='Side Bar' description='A side menu bar made for simplicity'>
              <PreviewBox>
                <Sidebar
  title="Components"
  items={[
    { id: 'anchorbuttons', label: 'Anchor Buttons' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'boxes', label: 'Box' },
    { id: 'badges', label: 'Badges' },
    {id: 'sidebar', label: 'Side Bar'}
    ]}
  activeSection={activeSection}
  onItemClick={scrollTo}
/>
                </PreviewBox>
                <CodeBlock language='js' code={`<Sidebar
  title="Components"
  items={[
    { id: 'anchorbuttons', label: 'Anchor Buttons' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'boxes', label: 'Box' },
    { id: 'badges', label: 'Badges' },
    {id: 'sidebar', label: 'Side Bar'}
    ]}
  activeSection={activeSection}
  onItemClick={scrollTo}
/>`} />
        </Section>

      </main>
    </div>
  );
}

import email from '@/assets/at-sign.svg';
import folder from '@/assets/folder.svg';
import github from '@/assets/github.svg';
import linkedin from '@/assets/linkedin.svg';
import { ToggleBar } from '@/components/Toggle';
import { context } from '@/utils';

function App() {
  const { aboutMe, profileImg } = context;

  return (
    <section className="relative border-[8px] border-primary bg-foreground h-screen flex flex-col">
      <div className="w-full max-w-3xl mx-auto px-4 mt-5 mb-10 lg:mt-10 lg:mb-24 flex justify-end">
        <ToggleBar />
      </div>
      <section className="flex w-full max-w-3xl mx-auto px-4 justify-between">
        <article className="w-full md:w-6/12 flex flex-col gap-y-8">
          <div>
            <h1 className="text-[46px] font-bold leading-10 text-primary uppercase">{aboutMe.name}</h1>

            <span className="text-[20px] font-medium text-neutral">{aboutMe.role}</span>
          </div>

          <div className="text-neutral">
            Currently based in Lagos, Nigeria, I love building interactive digital experiences on the web.
          </div>

          <div className="flex flex-col gap-5 text-neutral">
            <span className="">
              {`I'm an experienced software developer with a passion for building robust and scalable applications. Proficient in
						multiple programming languages and frameworks, with a keen eye for detail and a drive for continuous
						learning.`}
            </span>

            <span>
              I build software solutions using <strong>TypeScript</strong>, <strong>React</strong> and{' '}
              <strong>NodeJS</strong>
            </span>
          </div>
          <div className="border-t border-primary border-dotted dashed pt-3 -mt-3 flex gap-x-4">
            <a
              href="https://www.linkedin.com/in/michael-obasi-808806140/"
              title="linkedin"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a href="https://github.com/kleva-j" title="github link" target="_blank" rel="noreferrer noopener">
              <img src={github} alt="github icon" title="github" />
            </a>
            <a href="mailto:kasmickleva@gmail.com" title="email" target="_blank" rel="noreferrer noopener">
              <img src={email} alt="at sign icon" />
            </a>
            <a
              href="https://michaelobasi.dev/portfolio_v3/"
              title="Link to projects"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={folder} alt="project folder" title="projects" />
            </a>
          </div>
        </article>
        <article className="hidden md:block w-4/12">
          <img
            src={profileImg}
            className="rounded-md img-responsive grayscale hover:grayscale-0 transition duration-1000"
            alt="My background profile picture"
          />
        </article>
      </section>
    </section>
  );
}

export default App;

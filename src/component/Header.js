import { LogoDocker, LogoGithub, LogoLinkedin, Mail } from 'react-ionicons'

export default function Header() {
    return (
        <header className="container mx-auto max-w-screen-md bg-gradient-to-b from-sky-950 to-teal-800 rounded-md h-60 md:mt-5 lg:mt-10 grid place-items-center">
            <h1 className="text-sky-900 font-black uppercase text-center text-6xl bg-stone-200 rounded-full py-4 px-5 w-22 h-22">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-sky-900 to-teal-900">
                    M
                </span>
            </h1>
            <div className="flex gap-4">
                <a
                    aria-label="Go to my LinkedIn profile"
                    href="https://www.linkedin.com/in/devmegan/" 
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <LogoLinkedin
                        color={'#fff'}
                        height="30px"
                        width="auto"
                        cssClasses={"social-link"}
                    />
                </a>
                <a 
                    aria-label="Check out my my GitHub account"
                    href="https://github.com/devmegan"
                    rel="noopener noreferrer"
                    target="_blank" 
                >
                    <LogoGithub
                        color={'#fff'}
                        height="30px"
                        width="auto"
                        cssClasses={"social-link"}
                    />
                </a>
                <a
                    aria-label="Find me on Docker Hub" 
                    href="https://hub.docker.com/u/devmegan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <LogoDocker
                        color={'#fff'}
                        height="34px"
                        width="auto"
                        cssClasses={"social-link"}
                    />
                </a>
                <a 
                    aria-label="Send me an email"
                    className="my-auto"
                    href="mailto:devmegan@protonmail.com" 
                >
                    <Mail
                        color={'#fff'}
                        height="32px"
                        width="auto"
                        cssClasses={"social-link"}
                    />
                </a>
            </div>
        </header>
    );
}

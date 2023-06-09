import { Img } from 'react-image';
import Topics from './card/Topics';
import Loading from '../Loading';
import ProjectDefault from '../../../assets/img/project-default.png';

export default function Card({ repo }) {
    return (
        <a 
            target="_blank"
            rel="noreferrer noopener"
            href={repo.html_url}
            className="hover:bg-stone-100 block p-4 mb-6 rounded-md focus:ring-4 ring-teal-800 ring-opacity-50"
        >
             <Img
                alt={`screenshot from a demo of the ${repo.name} repository`}
                className="w-full object-cover h-auto max-h-[320px] bg-stone-300"
                loader={<span className='grid place-items-center h-[200px] md:h-[300px] w-full bg-stone-300 rounded-md'><Loading /></span>}
                src={[`https://raw.githubusercontent.com/devmegan/${repo.name}/main/social.png`, ProjectDefault]}
            />
            {repo.topics && <Topics topics={repo.topics} />}
            <h3 className="font-semibold mb-2">{repo.name}</h3>
            <p>{repo.description}</p>
        </a>
    );
}

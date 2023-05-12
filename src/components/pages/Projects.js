import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";
// this is to export onto Portolio for mapping out all the projects
// all styling is included here
export default function Projects(props) {
    return (
        <div className='container'>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            {props.projects.map(projects => (
              <div className='col' key={projects.id}>
                <div className='card border-light h-100'>
                  <img src={projects.image} className='card-img-top' alt='Sample project screenshot' />
                  <div className='card-body'>
                    <h5 className='card-title'>{projects.title}</h5>
                    <p className='card-text'>{projects.description}</p>
                    <a href={projects.github} className="link-dark px-2">
                      <FontAwesomeIcon icon={faGithub} size='1x' />
                    </a>Repo
                    <a href={projects.live} className="link-dark px-2">
                      <FontAwesomeIcon icon={faChrome} size='1x' />
                    </a>Live Site
                  </div>
                </div>
              </div>
            ))}
            <div>
                <h5 className='text-center'>┬┴┤´❛ᴥ❛`ʔฅ</h5>
            </div>
          </div>
        </div>
      );
}

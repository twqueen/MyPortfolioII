import React from 'react';
import Projects from './Projects';

// array for list of projects
const projects = [
  {
    id: 1,
    title: 'Music Social Media',
    image: require('../images/Musical_Chairs_SocialMedia.png'),
    description: 'Ever had a song you absolutely want to share to the world? Look no further, our Muscal Chairs is a social media platform for musical lovers and all things music. Come by and discover what others are recommending or recommend a song to others!',
    github: 'https://github.com/TheRealGeneParmesan/Project-2',
    live: 'https://musical-chairs.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Developer Job Finder',
    image: require('../images/developerjobfinder.png'),
    description: 'Made for those who are new to web development and are looking for a job that fits their personality and interests most. Come check us out! Take a brief quiz and we will show you a list of current job openings from USAJobs!',
    github: 'https://github.com/MeyerTalon/Job_Finder',
    live: 'https://meyertalon.github.io/Job_Finder/',
  },
  {
    id: 3,
    title: 'Password Generator',
    image: require('../images/M3-BrowserScreenshot.png'),
    description: 'Use this to make a one of a kind password. Just remember to write it down somewhere you will not forget',
    github: 'https://github.com/twqueen/Module3-Challenge',
    live: 'https://twqueen.github.io/Module3-Challenge/',
  },
  {
    id: 4,
    title: 'Beginner Coding Quiz',
    image: require('../images/BasicQuiz.png'),
    description: 'Made by beginner for beginners to review basic concepts of web development coding',
    github: 'https://github.com/twqueen/Module4-CodeQuiz',
    live: 'https://twqueen.github.io/Module4-CodeQuiz/',
  },
  {
    id: 5,
    title: 'Fit n Run Exercise Tracker',
    image: require('../images/fitnrun-ss1.png'),
    description: 'A exercise tracking app for your convenience',
    github: 'https://github.com/TheRealGeneParmesan/Fit-N-Run',
    live: 'https://fit-n-run.herokuapp.com/',
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    image: require('../images/WeatherDashboardScreenshot.png'),
    description: 'My very own pastel colored weather dashboard app',
    github: 'https://github.com/twqueen/M6-Weather',
    live: 'https://twqueen.github.io/M6-Weather/',
  },
];

// rendering above array into template made in Projects
export default function Portfolio() {
  return (
    <div className=''>
      <Projects projects={projects} />
    </div>
  )
}

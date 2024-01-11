const projects = [
    {
      name: "Meal Generator",
      live: "https://mealgenerator-1ka2.onrender.com/",
      github: "https://github.com/ankitjhagithub21/meal-generator",
    },
    {
      name: "Tic Tac Toe",
      live: "https://ankitjhagithub21.github.io/tic-tac-toe/",
      github: "https://github.com/ankitjhagithub21/tic-tac-toe",
    },
    {
      name: "Guess Number",
      live: "https://github.com/ankitjhagithub21/guess-number",
      github: "https://ankitjhagithub21.github.io/guess-number/",
    },
    {
      name: "Rock Paper Scissors",
      live: "https://ankitjhagithub21.github.io/rock-paper-scissors/",
      github: "https://github.com/ankitjhagithub21/rock-paper-scissors",
    },
    {
      name: "Snake Water Gun",
      live: "https://ankitjhagithub21.github.io/snake-water-gun/",
      github: "https://github.com/ankitjhagithub21/snake-water-gun",
    },
    {
      name: "Quiz App",
      live: "https://ankitjhagithub21.github.io/quiz-app/",
      github: "https://github.com/ankitjhagithub21/quiz-app",
    },
    {
      name: "Random Joke",
      live: "https://ankitjhagithub21.github.io/random-joke/",
      github: "https://github.com/ankitjhagithub21/random-joke",
    },
    {
      name: "Weather App",
      live: "https://ankitjhagithub21.github.io/weather-app/",
      github: "https://github.com/ankitjhagithub21/weather-app",
    },
    {
      name: "GitHub User Search App",
      live: "https://ankitjhagithub21.github.io/github-user-search-app/",
      github: "https://github.com/ankitjhagithub21/github-user-search-app",
    },
    {
      name: "Music Player",
      live: "https://ankitjhagithub21.github.io/music-player/",
      github: "https://github.com/ankitjhagithub21/music-player",
    },
    {
      name: "Book Haven",
      live: "https://ankitjhagithub21.github.io/book-haven/",
      github: "https://github.com/ankitjhagithub21/book-haven",
    },
    {
      name: "Language Translator",
      live: "https://ankitjhagithub21.github.io/language-translator/",
      github: "https://github.com/ankitjhagithub21/language-translator",
    },
    {
      name: "Speech Recognition App",
      live: "https://ankitjhagithub21.github.io/language-translator/",
      github: "https://github.com/ankitjhagithub21/Speech-Recognition-App",
    },
    {
      name: "Student Management App",
      live: "https://github.com/ankitjhagithub21/student-management-app",
      github: "https://ankitjhagithub21.github.io/student-management-app/",
    },
  ];
  
const projectContainer = document.getElementById('projectContainer')
projects.map((project)=>{
    let div = document.createElement('div')
    div.classList.add('col-lg-3','col-md-4','col-sm-6')
    div.innerHTML = `
  <div class="project">  <h5>${project.name}</h5>
  <a href="${project.live}" target="_blank">Live</a>
  <a href=${project.github} target="_blank">Source Code</a></div>
    
    `
    projectContainer.appendChild(div)
})


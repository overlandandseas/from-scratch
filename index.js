// javascript
import parse from './lib/snarkdown.es.js'

const posts = [{
  title: 'Import Statements In Browsers',
  file: 'import_statements_in_browsers.md',
  text: 'Did you know you can use import statements in browsers and they work?',
  tags: ['web', 'code'],
  date: 'January 20th, 2018'
}, {
  title: '2017 in Music',
  file: '2017_in_music.md',
  text: 'It wasn\'t until the very beginning of 2017 when I found out about lil peep (the girls music video to be exact). This revival of music I listened to in High School like samples from Funeral for a Frie...',
  tags: ['sound', 'music', '2017'],
  date: 'January 19th, 2018'
}, {
  title: 'Lightbox From Scratch',
  file: 'lightbox_from_scractch.md',
  text: 'You don\'t need jquery or lightbox to create nice images you can click and see larger versions with nice backgrounds.',
  tags: ['web', 'code'],
  date: 'November 19th, 2017'
}]

const codeDiv = document.getElementById('code-side')
const soundDiv = document.getElementById('sound-side')

const codeblocks = posts.map( post => {
  if (post.tags.includes('code')) {
    
    return `<div class="flex items-center w-100 justify-end pr3">
      <div class="w6 bb b--dark-gray pt4 pb3">
        <a class="f4 raleway link pointer underline-hover white" href="#">${post.title}</a>
        <p class="white-60 merriweather f5 lh-copy">${post.text}</p>
        <div class="white-30 f6 raleway flex justify-start">
        <p>${post.date}</p> <p class="ml4 ttu">${post.tags.join(', ')}</p>
        </div>
      </div>
    </div>`
  } else {
    return `<div class="h4 o-0"></div>`
  }
})


const soundblocks = posts.map( post => {
  if (post.tags.includes('sound')) {
    
    return `<div class="flex items-center w-100 justify-start pl3">
      <div class="w6 bb b--black-20 pt4 pb3 ml3">
        <a href="#" class="f4 raleway link pointer underline-hover black">${post.title}</a>
        <p class="black-60 merriweather f5 lh-copy">${post.text}</p>
        <div class="black-30 f6 raleway flex justify-start">
        <p>${post.date}</p> <p class="ml4 ttu">${post.tags.join(', ')}</p>
        </div>
      </div>
    </div>`
  } else {
    return `<div class="h4 o-0"></div>`
  }
})

codeDiv.innerHTML += codeblocks.join('')
soundDiv.innerHTML += soundblocks.join('')
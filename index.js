// javascript
import parse from './lib/snarkdown.es.js'
import { makeCodePostDisplay, makeSoundPostDisplay } from './components/postdisplay.js'

const posts = [{
  title: 'Import Statements In Browsers',
  file: 'import-statements-in-browsers.md',
  text: 'Did you know you can use import statements in browsers and they work?',
  tags: ['web', 'code'],
  date: 'January 20th, 2018'
}, {
  title: '2017 in Music',
  file: '2017-in-music.md',
  text: 'It wasn\'t until the very beginning of 2017 when I found out about lil peep (the girls music video to be exact). This revival of music I listened to in High School like samples from Funeral for a Frie...',
  tags: ['sound', 'music', '2017'],
  date: 'January 19th, 2018'
}, {
  title: 'Lightbox From Scratch',
  file: 'lightbox-from-scractch.md',
  text: 'You don\'t need jquery or lightbox to create nice images you can click and see larger versions with nice backgrounds.',
  tags: ['web', 'code'],
  date: 'November 19th, 2017'
}]

const codeDiv = document.getElementById('code-side')
const soundDiv = document.getElementById('sound-side')

const codePosts = posts.map(makeCodePostDisplay)
const soundPosts = posts.map(makeSoundPostDisplay)

codePosts.forEach(elm => codeDiv.appendChild(elm))
soundPosts.forEach(elm => soundDiv.appendChild(elm))

setTimeout(() => codePosts.forEach(elm => elm.classList.remove('o-0')), 150)
setTimeout(() => soundPosts.forEach(elm => elm.classList.remove('o-0')), 150)

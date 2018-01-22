import ElementBuilder from './ElementBuilder.js'

export function loadPostPage (post) {
  const mainContent = document.getElementById('main-content')
  mainContent.appendChild(new ElementBuilder('div').html(post.title).toElement())
}
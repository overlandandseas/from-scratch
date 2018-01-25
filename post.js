import ElementBuilder from './ElementBuilder.js'
// import parse from './lib/snarkdown.es.js'

export function loadPostPage (post) {
  const mainContent = document.getElementById('main-content')


   const divThing = new ElementBuilder('div')
    .addClass('w-100', 'sans-serif', 'pt6', 'center', 'w-50-l', 'o-0')
    .with(elm => elm.style.transition = 'opacity .15s ease-in')
    .append(new ElementBuilder('nav')
      .addClass('raleway', 'f4', 'mt4', 'flex', 'justify-end', 'ml2',)
      .append(new ElementBuilder('a')
        .addClass('black', 'pointer', 'link', 'dim', 'mr3')
        .html('About'))).toElement()

    fetch(`/posts/${post.file}`)
      .then(data => data.text())
      .then(text => {
        const markdown = new ElementBuilder('article')
          .addClass('black-60', 'merriweather', 'f5', 'lh-copy')
          .html(marked(text))
          .toElement()

          divThing.appendChild(markdown)
          mainContent.appendChild(divThing)
          setTimeout(() => divThing.classList.remove('o-0'), 150)

      })




}

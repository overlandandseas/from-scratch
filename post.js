import ElementBuilder from './ElementBuilder.js'
import ded from './DocumentElementDecoder.js'

export function loadPostPage (post, whitebg) {
  const mainContent = document.getElementById('main-content')
        
  const divThing = ded(['div w-100 sans-serif pt6 center w-50-l o-0', 
    { style: 'transition: opacity .15s ease-in' }, 
    ['nav raleway f4 mt4 flex justify-end ml2', 
      [`a ${whitebg ? 'black' : 'white'} pointer link dim mr3`, 'About']
    ]
  ])

    fetch(`/posts/${post.file}`)
      .then(data => data.text())
      .then(text => {
          const markdown =  ded([`article ${whitebg ? 'near-black' : 'near-white'} merriweather f5 lh-copy`, marked(text)])

          divThing.appendChild(markdown)
          mainContent.appendChild(divThing)
          setTimeout(() => divThing.classList.remove('o-0'), 150)
      })
}

import ElementBuilder from '../ElementBuilder.js'
import ded from '../DocumentElementDecoder.js'


export function makeCodePostDisplay(post, onTitleClick) {
  if (post.tags.includes('code')) return dedPost(post, onTitleClick, false)
  else return ded(['div h4 o-0'])
}


export function makeSoundPostDisplay(post, onTitleClick) {
  if (post.tags.includes('sound')) return dedPost(post, onTitleClick, true)
  else return ded(['div h4 o-0'])
}

function dedPost(post, onTitleClick, whitebg) {
  return ded([`div flex items-center w-100 justify-start ${whitebg ? 'pl3' : 'pr3'} o-0`,
    { style: 'transition: opacity .15s ease-in' },
    [`div w6 bb ${whitebg ? 'b--black-20' : 'b--dark-gray'} pt4 pb3`,
      [`a f4 raleway link pointer underline-hover ${whitebg ? 'black' : 'white'}`,
        { 
          href: `/posts/${post.file.split('.md')[0]}/`, 
          listeners: { click: onTitleClick }
        },
        post.title
      ],
      [`p ${whitebg ? 'black-60' : 'white-30'} merriweather f5 lh-copy`, post.text],
      [`div ${whitebg ? 'black-30' : 'white-30'} f6 raleway flex justify-start`,
        ['p', post.date],
        ['p ml4 ttu', post.tags.join(', ')]
      ]
    ]
  ])
}
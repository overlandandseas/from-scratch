import ElementBuilder from '../ElementBuilder.js'


export function makeCodePostDisplay(post, onTitleClick) {
  if (post.tags.includes('code'))
    return new ElementBuilder('div')
      .addClass('flex', 'items-center', 'w-100', 'justify-end', 'pr3', 'o-0')
      // .with(elm => elm.style.transistion = 'opacity .15s ease-in')
      .attr('style', 'transition: opacity .15s ease-in')
      .append(new ElementBuilder('div')
        .addClass('w6', 'bb', 'b--dark-gray', 'pt4', 'pb3')
        .append(new ElementBuilder('a')
          .addClass('f4', 'raleway', 'link', 'pointer', 'underline-hover', 'white')
          .attr('href', `/posts/${post.file.split('.md')[0]}/`)
          .html(post.title))
        .append(new ElementBuilder('p')
          .addClass('white-60', 'merriweather', 'f5', 'lh-copy')
          .html(post.text))
        .append(new ElementBuilder('div')
          .addClass('white-30', 'f6', 'raleway', 'flex', 'justify-start')
          .append(new ElementBuilder('p').html(post.date))
          .append(new ElementBuilder('p')
            .addClass('ml4', 'ttu')
            .html(post.tags.join(', '))))).toElement()
  else return new ElementBuilder('div').addClass('h4', 'o-0').toElement()
}


export function makeSoundPostDisplay(post, onTitleClick) {
  if (post.tags.includes('sound')) {
    const outer = new ElementBuilder('div')
      .addClass('flex', 'items-center', 'w-100', 'justify-start', 'pl3', 'o-0')
      .attr('style', 'transition: opacity .15s ease-in')
      .append(new ElementBuilder('div')
        .addClass('w6', 'bb', 'b--black-20', 'pt4', 'pb3')
        .append(new ElementBuilder('a')
          .addClass('f4', 'raleway', 'link', 'pointer', 'underline-hover', 'black')
          .attr('href', `/posts/${post.file.split('.md')[0]}/`)
          .html(post.title)
          .click(onTitleClick))

        .append(new ElementBuilder('p')
          .addClass('black-', 'merriweather', 'f5', 'lh-copy')
          .html(post.text))
        .append(new ElementBuilder('div')
          .addClass('black-30', 'f6', 'raleway', 'flex', 'justify-start')
          .append(new ElementBuilder('p').html(post.date))
          .append(new ElementBuilder('p')
            .addClass('ml4', 'ttu')
            .html(post.tags.join(', '))))).toElement()
    return outer
  } else {
    return new ElementBuilder('div').addClass('h4', 'o-0').toElement()
  }
}

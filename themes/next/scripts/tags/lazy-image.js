/**
 * lazy-image.js | global hexo script.
 *
 * Usage:
 *
 * {% lazyimage /path/to/image, alt, title %}
 * {% li /path/to/image, alt, title %}
 */

'use strict';

function lazyImage(args) {
  args = args.join(' ').split(',');
  var src = args[0];
  var alt = args[1] || '';
  var title = args[2] || '';

  if (!src) {
    hexo.log.warn('Image src can NOT be empty');
  }
  alt = alt.trim();
  title = title.trim();

  var image = ['<span itemprop="image" itemscope itemtype="http://schema.org/ImageObject"><img itemprop="url image" src="/images/loading.gif" data-original="' + src + '" class="full-image"'];
  alt.length > 0 && image.push('alt="' + alt + '"');
  title.length > 0 && image.push('title="' + title + '"');
  image.push('/><meta itemprop="width" content="auto"><meta itemprop="height" content="auto"></span>');

  return image.join(' ');
}

hexo.extend.tag.register('lazyimage', lazyImage, { ends: false });
hexo.extend.tag.register('li', lazyImage, { ends: false });

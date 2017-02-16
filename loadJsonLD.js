window.onload = function () {
  langs = JSON.parse(document.getElementById('lang-ld').text);
  document.body.insertBefore(createLanguageTags(langs), document.body.firstChild);
  
};
function createLanguageTags(langs)
{
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < langs.length; i++)
  {      
  fragment.appendChild(createImageLinkTag(langs[i].image, langs[i].url, langs[i].description));
  }
  fragment.appendChild(document.createElement('br'));
  return fragment;
}
function createImageLinkTag(src, href, title)
{
  var a = document.createElement('a');
  a.appendChild(crateImageTag(src));
  a.setAttribute("href", href);
  a.setAttribute("title", title);
  return a;
}
function crateImageTag(src)
{
  var img = document.createElement('img');
  img.setAttribute("src", src);
  img.setAttribute("width", 64);
  img.setAttribute("width", 64);
  return img;
}


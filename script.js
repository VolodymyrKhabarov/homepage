var bigsize = "900"; //Размер большой картинки
var smallsize = "600"; //Размер маленькой картинки
function changeSizeImage(im) {
  if(im.width == bigsize) im.width = smallsize;
  else im.width = bigsize;
}
let switcher = document.querySelector('.btn ')

switcher.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme')
})

const classname = document.body.className;
if( classname == "light-theme"){
  this.TextContent = "dark";
}
else{
  this.TextContent = "light"
};

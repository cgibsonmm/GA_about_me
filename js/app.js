document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var sidenavInstance = M.Sidenav.init(sidenav, {
    edge: 'right',
  })

  var slider = document.querySelectorAll('.slider');
  var sliderInstance = M.Slider.init(slider, {
  });

  sidenavInstance[0].el.addEventListener('click', function(){
    sidenavInstance[0].close();
  });

  // Js Ideas

  var time = new Date();

  console.log(time.getDate());
});

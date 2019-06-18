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

  var materializeImages = document.querySelectorAll('.materialboxed');
  var materializeImageInstances = M.Materialbox.init(materializeImages, {
  })

  // Js Ideas

  var time = new Date();

  console.log(time.getDate());
});

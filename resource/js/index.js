$(function() {
  $(".form-control").change( function() {
       updateCode();
  });
});

function updateCode() {
  $('.code').text("export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'"
                  +"\n--color=fg:" + $('#fg').val() + ",bg:" + $('#bg').val() + ",hl:" + $('#hl').val()
                  +"fg+:" + $('#fgp').val() + ",bg+:" + $('#bgp').val() + ",hl+:" + $('#hlp').val()
                  +"\n--color=info:" + $('#info').val() + ",prompt:" + $('#prompt').val() + ",pointer:" + $('#pointer').val()
                  +"marker:" + $('#marker').val() + ",spinner:" + $('#spinner').val() + ",header:" + $('#header').val()
                  +"\n'");
  $('.code').html($('.code').html().replace(/\n/g,'<br/>'));
  
  //export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
  console.log($('.code').val());
}
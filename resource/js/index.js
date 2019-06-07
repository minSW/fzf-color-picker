$(function() {
  $(".form-control").change( function() {
       updateCode();
       updateView();
  });
});

function updateCode() {
  $('.code').text("export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'"
                  +"\n--color=fg:" + getColorText($('#fg')) + ",bg:" + getColorText($('#bg')) + ",hl:" + $('#hl').val()
                  +",fg+:" + $('#fgp').val() + ",bg+:" + $('#bgp').val() + ",hl+:" + $('#hlp').val()
                  +"\n--color=info:" + $('#info').val() + ",prompt:" + $('#prompt').val() + ",pointer:" + $('#pointer').val()
                  +",marker:" + $('#marker').val() + ",spinner:" + $('#spinner').val() + ",header:" + $('#header').val()
                  +"\n'");
  $('.code').html($('.code').html().replace(/\n/g,'<br/>'));
  
};

function updateView() {
  updateColorView($(".fg"), "color", $('#fg').val());
  updateColorView($(".bg"), "background-color", $('#bg').val());

  $(".fgp").css("color", $('#fgp').val());
  $(".bgp").css("background-color", $('#bgp').val());
  $(".hl").css("color", $('#hl').val());
  $(".hlp").css("color", $('#hlp').val());
  $(".inf").css("color", $('#info').val());
  $(".pro").css("color", $('#prompt').val());
  $(".poi").css("color", $('#pointer').val());
  $(".mar").css("color", $('#marker').val());
  $(".spi").css("color", $('#spinner').val());
  $(".hea").css("color", $('#header').val());
}

function getColorText(ele) {
  if (ele.val()) {
    return ele.val();
  }
  return -1;
}

function updateColorView(ele, styleType, val) {
  if (val) {
    ele.css(styleType, val);
  }
}
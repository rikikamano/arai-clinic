function changeTwitterWidgetDesign() {
    var $twitter_widget = jQuery("iframe.twitter-timeline");
    var $twitter_widget_contents = $twitter_widget.contents();
  
    if (
      $twitter_widget.length > 0 &&
      $twitter_widget[0].contentWindow.document.body.innerHTML !== ""
    ) {
      $twitter_widget_contents
        .find("head")
        .append(
          "<style>.twitter-timeline span{font-size:200px;line-height:200px}</style>>"
        );
    } else {
      setTimeout(function () {
        changeTwitterWidgetDesign();
      }, 350);
    }
  }
  
  changeTwitterWidgetDesign();
  
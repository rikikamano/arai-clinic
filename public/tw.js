function changeTwitterWidgetDesign() {
    var $twitter_widget = $("iframe.twitter-timeline");
    var $twitter_widget_contents = $twitter_widget.contents();
  
    if (
      $twitter_widget.length > 0 &&
      $twitter_widget[0].contentWindow.document.body.innerHTML !== ""
    ) {
      $twitter_widget_contents
        .find("head")
        .append(
          "<style>.SandboxRoot .timeline-Widget .twitter-widget-0  div#id__dnvfaso94b .timeline-timeline{font-size:200px; !important line-height:200px}</style>>"
        );
    } else {
      setTimeout(function () {
        changeTwitterWidgetDesign();
      }, 350);
    }
  }
  
  changeTwitterWidgetDesign();
  
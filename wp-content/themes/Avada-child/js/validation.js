var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function ()
{
    //////////// 
    jQuery(window).on('load resize orientationchange', function () {
        jQuery(window).scroll(function () {
            if (jQuery(window).scrollTop() >= 200) {
                jQuery('#main-header').addClass('et-fixed-header');
            } else {
                jQuery('#main-header').removeClass('et-fixed-header');
            }
        });
    });
});



}
/*
     FILE ARCHIVED ON 16:30:43 Jan 21, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:26:58 Aug 05, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 227.9
  exclusion.robots: 0.373
  exclusion.robots.policy: 0.365
  cdx.remote: 0.1
  esindex: 0.008
  LoadShardBlock: 171.647 (3)
  PetaboxLoader3.datanode: 217.317 (5)
  CDXLines.iter: 23.552 (3)
  load_resource: 549.393
  PetaboxLoader3.resolve: 411.216
  loaddict: 82.149
*/
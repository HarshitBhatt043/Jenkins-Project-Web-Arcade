﻿var canvas=document.getElementById("canvas"),gm4html5_div=document.getElementById("gm4html5_div_id"),canvas_parent_div=document.getElementById("canvas_parent"),game_width=canvas.width,game_height=canvas.height,is_mobile=isMobile(),is_app_focused=document.hasFocus(),show_rotate_device_screen=!0,show_loading_screen=!0,loadingProgress=0,preloader_bar_x=.5*game_width,preloader_bar_y=.8*game_height,preloader_bar_width=.5*game_width,preloader_bar_height=20;function dg_iframed(){return window.self!=window.top?1:0}function dg_initialize(){show_loading_screen?resizeLoadingImg():dg_hide_loading(),window.addEventListener("scroll",(function(){document.activeElement===document.body&&window.scrollY>3&&(document.body.scrollTop=0)}),!0),window.onfocus=function(){is_app_focused=!0},window.onblur=function(){is_app_focused=!1}}function isMobile(){if(1)return testExp=new RegExp("Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile","i"),!!testExp.test(navigator.userAgent)}function getDocWidth(){return self.innerHeight?self.innerWidth:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientWidth:document.body?document.body.clientWidth:void 0}function getDocHeight(){return self.innerHeight?self.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body?document.body.clientHeight:void 0}function resizeLoadingImg(){var e=document.getElementById("GM4HTML5_loadingscreen"),t=document.getElementById("GM4HTML5_loadingbar"),n=getDocWidth(),i=getDocHeight();if(show_loading_screen&&e&&t&&(game_width>game_height?(e.style.width=n+"px",e.style.height=n/game_width*game_height+"px",e.style.left="0px",e.style.top="0px"):(e.style.height=i+"px",e.style.width=i/game_height*game_width+"px",e.style.left=(n-i/game_height*game_width)/2+"px",e.style.top="0px",t.style.height=i/game_height*preloader_bar_height+"px",t.style.width=loadingProgress*preloader_bar_width*i/game_height+"px",t.style.left=(n-i/game_height*preloader_bar_width)/2+"px",t.style.top=i*preloader_bar_y/game_height+"px")),show_rotate_device_screen&&1==is_mobile){var o=document.getElementById("rotatescreen");o&&(game_width>game_height?i>n?(o.style.left="0px",o.style.top="0px",o.style.height=i+"px",o.style.width=n+"px",o.style.display="block",o.style.pointerEvents="auto"):(o.style.display="none",o.style.pointerEvents="none"):i<n?(o.style.left="0px",o.style.top="0px",o.style.height=i+"px",o.style.width=n+"px",o.style.display="block",o.style.pointerEvents="auto"):(o.style.display="none",o.style.pointerEvents="none"))}setTimeout(resizeLoadingImg,500)}function dg_loading_function(e,t,n,i,o,d){loadingProgress=1/i*o}function dg_hide_loading(){var e=document.getElementById("GM4HTML5_loadingscreen");e&&(e.style.display="none",e.style.visibility="hidden",e.style.pointerEvents="none",e.parentNode.removeChild(e)),(e=document.getElementById("GM4HTML5_loadingbar"))&&(e.style.display="none",e.style.visibility="hidden",e.style.pointerEvents="none",e.parentNode.removeChild(e)),canvas_parent_div&&(canvas_parent_div.style.display="block")}function dg_eval(code){eval(code)}function dg_set_document_body_color(e){document.body.style.backgroundColor=e}function dg_set_document_title(e){document.title=e}function dg_set_button_params(e,t,n,i,o){var d=document.getElementById(e);if(d){var l=getDocWidth(),s=getDocHeight(),a=s/game_height;d.style.left=(l-a*game_width)/2+t-.5*i+"px",d.style.top=(s-a*game_height)/2+n-.5*o+"px",d.style.width=i*a+"px",d.style.height=o*a+"px",d.style.pointerEvents="auto"}}function dg_disable_button(e){var t=document.getElementById(e);t&&(t.style.pointerEvents="none")}dg_initialize();
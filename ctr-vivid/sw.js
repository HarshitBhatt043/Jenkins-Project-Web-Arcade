const CACHE_NAME="ctr_v",urlsToCache=["./android-chrome-192x192.png","./android-chrome-512x512.png","./apple-touch-icon.png","./audio/bouncer.mp3","./audio/bubble_break.mp3","./audio/bubble.mp3","./audio/button.mp3","./audio/buzz.mp3","./audio/candy_break.mp3","./audio/candy_link.mp3","./audio/electric.mp3","./audio/game_music.mp3","./audio/game_music2.mp3","./audio/game_music3.mp3","./audio/gravity_off.mp3","./audio/gravity_on.mp3","./audio/menu_music.mp3","./audio/monster_chewing.mp3","./audio/monster_close.mp3","./audio/monster_open.mp3","./audio/monster_sad.mp3","./audio/pump_1.mp3","./audio/pump_2.mp3","./audio/pump_3.mp3","./audio/pump_4.mp3","./audio/ring.mp3","./audio/rope_bleak_1.mp3","./audio/rope_bleak_2.mp3","./audio/rope_bleak_3.mp3","./audio/rope_bleak_4.mp3","./audio/rope_get.mp3","./audio/scratch_in.mp3","./audio/scratch_out.mp3","./audio/spider_activate.mp3","./audio/spider_fall.mp3","./audio/spider_win.mp3","./audio/spike_rotate_in.mp3","./audio/spike_rotate_out.mp3","./audio/star_1.mp3","./audio/star_2.mp3","./audio/star_3.mp3","./audio/tap.mp3","./audio/teleport.mp3","./audio/wheel.mp3","./audio/win.mp3","./css/ctr.css","./css/nojavascript.css","./css/nosupport.css","./cursors/cursor.cur","./cursors/cursor.png","./cursors/cursorActive.cur","./cursors/cursorActive.png","./cursors/handcursor.cur","./cursors/handcursor.png","./favicon-16x16.png","./favicon-32x32.png","./favicon.ico","./fonts/gooddog-new/gooddog_new-webfont.eot","./fonts/gooddog-new/gooddog_new-webfont.svg","./fonts/gooddog-new/gooddog_new-webfont.ttf","./fonts/gooddog-new/gooddog_new-webfont.woff","./fonts/gooddog-new/gooddog_new-webfont2.woff","./fonts/gooddog-plain/GoodDog-webfont.eot","./fonts/gooddog-plain/GoodDog-webfont.svg","./fonts/gooddog-plain/GoodDog-webfont.ttf","./fonts/gooddog-plain/GoodDog-webfont.woff","./images/1024/game/bgr_01_p1.jpg","./images/1024/game/bgr_01_p2.jpg","./images/1024/game/bgr_02_p1.jpg","./images/1024/game/bgr_02_p2.jpg","./images/1024/game/bgr_03_p1.jpg","./images/1024/game/bgr_03_p2.jpg","./images/1024/game/bgr_04_p1.jpg","./images/1024/game/bgr_04_p2.jpg","./images/1024/game/bgr_05_p1.jpg","./images/1024/game/bgr_05_p2.jpg","./images/1024/game/bgr_06_p1.jpg","./images/1024/game/bgr_06_p2.jpg","./images/1024/game/bgr_07_p1.jpg","./images/1024/game/bgr_07_p2.jpg","./images/1024/game/bgr_08_p1.png","./images/1024/game/bgr_08_p2.png","./images/1024/game/bgr_09_p1.jpg","./images/1024/game/bgr_09_p2.jpg","./images/1024/game/bgr_10_p1.jpg","./images/1024/game/bgr_10_p2.jpg","./images/1024/game/bgr_11_p1.jpg","./images/1024/game/bgr_11_p2.jpg","./images/1024/game/big_font.png","./images/1024/game/char_animations.png","./images/1024/game/char_animations2.png","./images/1024/game/char_animations3.png","./images/1024/game/char_supports.png","./images/1024/game/font_numbers_big.png","./images/1024/game/hud_star.png","./images/1024/game/obj_bee_hd.png","./images/1024/game/obj_bouncer_01.png","./images/1024/game/obj_bouncer_02.png","./images/1024/game/obj_bubble_attached.png","./images/1024/game/obj_bubble_flight.png","./images/1024/game/obj_bubble_pop.png","./images/1024/game/obj_candy_01.png","./images/1024/game/obj_drawing_hidden.png","./images/1024/game/obj_electrodes.png","./images/1024/game/obj_hat.png","./images/1024/game/obj_hook_01.png","./images/1024/game/obj_hook_02.png","./images/1024/game/obj_hook_auto.png","./images/1024/game/obj_hook_movable.png","./images/1024/game/obj_hook_regulated.png","./images/1024/game/obj_pollen_hd.png","./images/1024/game/obj_pump.png","./images/1024/game/obj_rotatable_spikes_01.png","./images/1024/game/obj_rotatable_spikes_02.png","./images/1024/game/obj_rotatable_spikes_03.png","./images/1024/game/obj_rotatable_spikes_04.png","./images/1024/game/obj_rotatable_spikes_button.png","./images/1024/game/obj_spider.png","./images/1024/game/obj_spikes_01.png","./images/1024/game/obj_spikes_02.png","./images/1024/game/obj_spikes_03.png","./images/1024/game/obj_spikes_04.png","./images/1024/game/obj_star_disappear.png","./images/1024/game/obj_star_idle.png","./images/1024/game/obj_vinil.png","./images/1024/game/small_font.png","./images/1024/game/tutorial_signs.png","./images/1024/save.png","./images/1024/ui/bBtn_bgd.png","./images/1024/ui/box_lock.png","./images/1024/ui/box_nav_menu.png","./images/1024/ui/box_omnom.png","./images/1024/ui/box1_bgd.png","./images/1024/ui/box10_bgd.png","./images/1024/ui/box11_bgd.png","./images/1024/ui/box2_bgd.png","./images/1024/ui/box3_bgd.png","./images/1024/ui/box4_bgd.png","./images/1024/ui/box5_bgd.png","./images/1024/ui/box6_bgd.png","./images/1024/ui/box7_bgd.png","./images/1024/ui/box8_bgd.png","./images/1024/ui/box9_bgd.png","./images/1024/ui/boxcutter.png","./images/1024/ui/boxmore_bgd.png","./images/1024/ui/buttonsprite.png","./images/1024/ui/drawing_1.jpg","./images/1024/ui/drawing_10.jpg","./images/1024/ui/drawing_11.jpg","./images/1024/ui/drawing_12.jpg","./images/1024/ui/drawing_13.jpg","./images/1024/ui/drawing_14.jpg","./images/1024/ui/drawing_15.jpg","./images/1024/ui/drawing_16.jpg","./images/1024/ui/drawing_2.jpg","./images/1024/ui/drawing_3.jpg","./images/1024/ui/drawing_4.jpg","./images/1024/ui/drawing_5.jpg","./images/1024/ui/drawing_6.jpg","./images/1024/ui/drawing_7.jpg","./images/1024/ui/drawing_8.jpg","./images/1024/ui/drawing_9.jpg","./images/1024/ui/drawing-bg.png","./images/1024/ui/drawing1.jpg","./images/1024/ui/drawing10.jpg","./images/1024/ui/drawing11.jpg","./images/1024/ui/drawing12.jpg","./images/1024/ui/drawing13.jpg","./images/1024/ui/drawing14.jpg","./images/1024/ui/drawing15.jpg","./images/1024/ui/drawing16.jpg","./images/1024/ui/drawing2.jpg","./images/1024/ui/drawing3.jpg","./images/1024/ui/drawing4.jpg","./images/1024/ui/drawing5.jpg","./images/1024/ui/drawing6.jpg","./images/1024/ui/drawing7.jpg","./images/1024/ui/drawing8.jpg","./images/1024/ui/drawing9.jpg","./images/1024/ui/fb.png","./images/1024/ui/fBtn_bgd.png","./images/1024/ui/flags.png","./images/1024/ui/fun-omnom.png","./images/1024/ui/gamecomplete_border.png","./images/1024/ui/gamecomplete.jpg","./images/1024/ui/lBtn_bgd.png","./images/1024/ui/level_bgd_small.png","./images/1024/ui/level_bgd.png","./images/1024/ui/levelbg1.jpg","./images/1024/ui/levelbg10.jpg","./images/1024/ui/levelbg11.jpg","./images/1024/ui/levelbg2.jpg","./images/1024/ui/levelbg3.jpg","./images/1024/ui/levelbg4.jpg","./images/1024/ui/levelbg5.jpg","./images/1024/ui/levelbg6.jpg","./images/1024/ui/levelbg7.jpg","./images/1024/ui/levelbg8.jpg","./images/1024/ui/levelbg9.jpg","./images/1024/ui/leveltape_left.png","./images/1024/ui/leveltape_right.png","./images/1024/ui/leveltape.png","./images/1024/ui/mBtn_bgd.png","./images/1024/ui/menu_result_br.png","./images/1024/ui/menu_result_en.png","./images/1024/ui/menu_result_es.png","./images/1024/ui/menu_result_fr.png","./images/1024/ui/menu_result_gr.png","./images/1024/ui/menu_result_it.png","./images/1024/ui/menu_result_ja.png","./images/1024/ui/menu_result_ko.png","./images/1024/ui/menu_result_nl.png","./images/1024/ui/menu_result_ru.png","./images/1024/ui/menu_result_zh.png","./images/1024/ui/menu-options.png","./images/1024/ui/menubg.jpg","./images/1024/ui/options_stars_bgd_small.png","./images/1024/ui/options_stars_bgd.png","./images/1024/ui/perfect_mark.png","./images/1024/ui/ph_logo.png","./images/1024/ui/pin-omnom.png","./images/1024/ui/popupinner-slow.jpg","./images/1024/ui/popupinner.jpg","./images/1024/ui/popupouter.png","./images/1024/ui/result_line.png","./images/1024/ui/sBtn_bgd.png","./images/1024/ui/shadow.png","./images/1024/ui/star_result_small.png","./images/1024/ui/star_result.png","./images/1024/ui/startbg.jpg","./images/1024/ui/taperoll.png","./images/870/ui/bBtn_bgd.png","./images/870/ui/box_lock.png","./images/870/ui/box_nav_menu.png","./images/870/ui/box_omnom.png","./images/870/ui/box10_bgd.png","./images/870/ui/boxcutter.png","./images/870/ui/boxmore_bgd.png","./images/870/ui/buttonsprite.png","./images/870/ui/drawing-bg.png","./images/870/ui/fb.png","./images/870/ui/fBtn_bgd.png","./images/870/ui/flags.png","./images/870/ui/fun-omnom.png","./images/870/ui/gamecomplete_border.png","./images/870/ui/gamecomplete.jpg","./images/870/ui/lBtn_bgd.png","./images/870/ui/level_bgd_small.png","./images/870/ui/level_bgd.png","./images/870/ui/levelbg10.jpg","./images/870/ui/leveltape_left.png","./images/870/ui/leveltape_right.png","./images/870/ui/leveltape.png","./images/870/ui/mBtn_bgd.png","./images/870/ui/menu_result_en.png","./images/870/ui/menu_result_fr.png","./images/870/ui/menu_result_gr.png","./images/870/ui/menu_result_ru.png","./images/870/ui/menu-options.png","./images/870/ui/menubg.jpg","./images/870/ui/options_stars_bgd_small.png","./images/870/ui/options_stars_bgd.png","./images/870/ui/perfect_mark.png","./images/870/ui/ph_logo.png","./images/870/ui/popupinner-slow.jpg","./images/870/ui/popupinner.jpg","./images/870/ui/popupouter.png","./images/870/ui/result_line.png","./images/870/ui/sBtn_bgd.png","./images/870/ui/shadow.png","./images/870/ui/star_result_small.png","./images/870/ui/star_result.png","./images/870/ui/startbg.jpg","./images/870/ui/taperoll.png","./images/page/404.png","./images/page/error.png","./images/page/loader-bg.jpg","./images/page/loader-bubble.png","./images/page/loader-logo.png","./images/page/loader-numbers.png","./images/page/loader-smallbubble.png","./images/page/tilebg.jpg","./images/page/upgrade-js.png","./images/page/upgrade-mobile.png","./index.html","./scripts/ctr.js","./scripts/libraries.js","./scripts/sm2.js","./site.webmanifest","./sm2/soundmanager2_flash9.swf","./sm2/soundmanager2.swf","./video/intro_1024.mp4","./video/outro_1024.mp4"];self.addEventListener("install",(g=>{g.waitUntil(caches.open("ctr_v").then((g=>{const e=urlsToCache.map((e=>g.add(e).catch((g=>{}))));return Promise.all(e)})))})),self.addEventListener("fetch",(g=>{g.respondWith(caches.match(g.request).then((e=>{if(e)return e;const i=g.request.clone();return fetch(i).then((e=>{if(!e||200!==e.status||"basic"!==e.type)return e;const i=e.clone();return caches.open("ctr_v").then((e=>{e.put(g.request,i)})),e})).catch((e=>caches.match(g.request)))})))})),self.addEventListener("activate",(g=>{g.waitUntil(caches.keys().then((g=>Promise.all(g.map((g=>{if("ctr_v"!==g)return caches.delete(g)}))))))}));
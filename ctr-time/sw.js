const CACHE_NAME="ctr_t",urlsToCache=["./android-chrome-192x192.png","./android-chrome-512x512.png","./apple-touch-icon.png","./audio/bouncer.mp3","./audio/bubble_break.mp3","./audio/bubble.mp3","./audio/button.mp3","./audio/buzz.mp3","./audio/candy_break.mp3","./audio/candy_hit.mp3","./audio/candy_link.mp3","./audio/electric.mp3","./audio/game_music.mp3","./audio/gravity_off.mp3","./audio/gravity_on.mp3","./audio/monster_chewing.mp3","./audio/monster_close.mp3","./audio/monster_open.mp3","./audio/monster_sad.mp3","./audio/prehistoric_monster_chewing.mp3","./audio/prehistoric_monster_close.mp3","./audio/prehistoric_monster_open.mp3","./audio/prehistoric_monster_sad.mp3","./audio/pump_1.mp3","./audio/pump_2.mp3","./audio/pump_3.mp3","./audio/pump_4.mp3","./audio/ring.mp3","./audio/rope_bleak_1.mp3","./audio/rope_bleak_2.mp3","./audio/rope_bleak_3.mp3","./audio/rope_bleak_4.mp3","./audio/rope_get.mp3","./audio/scratch_in.mp3","./audio/scratch_out.mp3","./audio/spider_activate.mp3","./audio/spider_fall.mp3","./audio/spider_win.mp3","./audio/spike_rotate_in.mp3","./audio/spike_rotate_out.mp3","./audio/star_1.mp3","./audio/star_2.mp3","./audio/star_3.mp3","./audio/tap_01.mp3","./audio/tap_02.mp3","./audio/tap.mp3","./audio/teleport.mp3","./audio/time_menu.mp3","./audio/wheel.mp3","./audio/win.mp3","./css/ctr.css","./css/nojavascript.css","./css/nosupport.css","./cursors/cursor.cur","./cursors/cursor.png","./cursors/cursorActive.cur","./cursors/cursorActive.png","./cursors/handcursor.cur","./cursors/handcursor.png","./favicon-16x16.png","./favicon-32x32.png","./favicon.ico","./fb.png","./fonts/gooddog-new/gooddog_new-webfont.woff","./fonts/gooddog-plain/GoodDog-webfont.woff","./images/1024/game/bgr_time1.jpg","./images/1024/game/bgr_time2.jpg","./images/1024/game/bgr_time3.jpg","./images/1024/game/bgr_time4.jpg","./images/1024/game/bgr_time5.jpg","./images/1024/game/bgr_time6.jpg","./images/1024/game/big_font.png","./images/1024/game/Caesar_animations_1_hd.png","./images/1024/game/Caesar_animations_2_hd.png","./images/1024/game/Caesar_animations_3_hd.png","./images/1024/game/Caesar_animations_4_hd.png","./images/1024/game/char_animations.png","./images/1024/game/char_animations2.png","./images/1024/game/char_animations3.png","./images/1024/game/char_supports.png","./images/1024/game/font_numbers_big.png","./images/1024/game/hud_star.png","./images/1024/game/obj_bee_hd.png","./images/1024/game/obj_bouncer_01.png","./images/1024/game/obj_bouncer_02.png","./images/1024/game/obj_bubble_attached.png","./images/1024/game/obj_bubble_flight.png","./images/1024/game/obj_bubble_pop.png","./images/1024/game/obj_candy_01.png","./images/1024/game/obj_drawing_hidden.png","./images/1024/game/obj_electrodes.png","./images/1024/game/obj_hat.png","./images/1024/game/obj_hook_01.png","./images/1024/game/obj_hook_02.png","./images/1024/game/obj_hook_auto.png","./images/1024/game/obj_hook_movable.png","./images/1024/game/obj_hook_regulated.png","./images/1024/game/obj_pollen_hd.png","./images/1024/game/obj_pump.png","./images/1024/game/obj_rotatable_spikes_01.png","./images/1024/game/obj_rotatable_spikes_02.png","./images/1024/game/obj_rotatable_spikes_03.png","./images/1024/game/obj_rotatable_spikes_04.png","./images/1024/game/obj_rotatable_spikes_button.png","./images/1024/game/obj_spider.png","./images/1024/game/obj_spikes_01.png","./images/1024/game/obj_spikes_02.png","./images/1024/game/obj_spikes_03.png","./images/1024/game/obj_spikes_04.png","./images/1024/game/obj_star_disappear.png","./images/1024/game/obj_star_idle.png","./images/1024/game/obj_vinil.png","./images/1024/game/Painter_animations_1_hd.png","./images/1024/game/Painter_animations_2_hd.png","./images/1024/game/Painter_animations_3_hd.png","./images/1024/game/Painter_animations_4_hd.png","./images/1024/game/Pharaoh_animations_1_hd.png","./images/1024/game/Pharaoh_animations_2_hd.png","./images/1024/game/Pharaoh_animations_3_hd.png","./images/1024/game/Pharaoh_animations_4_hd.png","./images/1024/game/Pirate_animations_1_hd.png","./images/1024/game/Pirate_animations_2_hd.png","./images/1024/game/Pirate_animations_3_hd.png","./images/1024/game/Pirate_animations_4_hd.png","./images/1024/game/Prehistoric_animations_1_hd.png","./images/1024/game/Prehistoric_animations_2_hd.png","./images/1024/game/Prehistoric_animations_3_hd.png","./images/1024/game/Prehistoric_animations_4_hd.png","./images/1024/game/small_font.png","./images/1024/game/time-stands.png","./images/1024/game/tutorial_signs.png","./images/1024/game/Viking_animations_1_hd.png","./images/1024/game/Viking_animations_2_hd.png","./images/1024/game/Viking_animations_3_hd.png","./images/1024/game/Viking_animations_4_hd.png","./images/1024/time/boxes/dinosaurs_locked.png","./images/1024/time/boxes/dinosaurs.png","./images/1024/time/boxes/egypt_locked.png","./images/1024/time/boxes/egypt.png","./images/1024/time/boxes/greece_locked.png","./images/1024/time/boxes/greece.png","./images/1024/time/boxes/painter_locked.png","./images/1024/time/boxes/painter.png","./images/1024/time/boxes/pirate_locked.png","./images/1024/time/boxes/pirate.png","./images/1024/time/boxes/viking_locked.png","./images/1024/time/boxes/viking.png","./images/1024/time/code-bg.png","./images/1024/time/code-ok.png","./images/1024/time/door-gradient.png","./images/1024/time/left_door.png","./images/1024/time/menu_bgr.jpg","./images/1024/time/menu_logo.png","./images/1024/time/right_door.png","./images/1024/ui/bBtn_bgd.png","./images/1024/ui/box_lock.png","./images/1024/ui/box_nav_menu.png","./images/1024/ui/box_omnom.png","./images/1024/ui/boxcutter.png","./images/1024/ui/boxmore_bgd.png","./images/1024/ui/buttonsprite.png","./images/1024/ui/drawing-bg.png","./images/1024/ui/fb.png","./images/1024/ui/fBtn_bgd.png","./images/1024/ui/flags.png","./images/1024/ui/fun-omnom.png","./images/1024/ui/gamecomplete_border.png","./images/1024/ui/gamecomplete.jpg","./images/1024/ui/lBtn_bgd.png","./images/1024/ui/level_bgd_small.png","./images/1024/ui/level_bgd.png","./images/1024/ui/leveltape_left.png","./images/1024/ui/leveltape_right.png","./images/1024/ui/leveltape.png","./images/1024/ui/mBtn_bgd.png","./images/1024/ui/menu_result_en.png","./images/1024/ui/menu_result_fr.png","./images/1024/ui/menu_result_gr.png","./images/1024/ui/menu_result_ru.png","./images/1024/ui/menu-options.png","./images/1024/ui/menubg.jpg","./images/1024/ui/options_stars_bgd_small.png","./images/1024/ui/options_stars_bgd.png","./images/1024/ui/perfect_mark.png","./images/1024/ui/ph_logo.png","./images/1024/ui/popupinner-slow.jpg","./images/1024/ui/popupinner.jpg","./images/1024/ui/popupouter.png","./images/1024/ui/result_line.png","./images/1024/ui/sBtn_bgd.png","./images/1024/ui/shadow.png","./images/1024/ui/star_result_small.png","./images/1024/ui/star_result.png","./images/1024/ui/startbg.jpg","./images/1024/ui/taperoll.png","./images/930/game/bgr_time1.jpg","./images/930/game/bgr_time2.jpg","./images/930/game/bgr_time3.jpg","./images/930/game/bgr_time4.jpg","./images/930/game/bgr_time5.jpg","./images/930/game/bgr_time6.jpg","./images/930/game/big_font.png","./images/930/game/Caesar_animations_1_hd.png","./images/930/game/Caesar_animations_2_hd.png","./images/930/game/Caesar_animations_3_hd.png","./images/930/game/Caesar_animations_4_hd.png","./images/930/game/char_animations.png","./images/930/game/char_animations2.png","./images/930/game/char_animations3.png","./images/930/game/char_supports.png","./images/930/game/font_numbers_big.png","./images/930/game/hud_star.png","./images/930/game/obj_bee_hd.png","./images/930/game/obj_bouncer_01.png","./images/930/game/obj_bouncer_02.png","./images/930/game/obj_bubble_attached.png","./images/930/game/obj_bubble_flight.png","./images/930/game/obj_bubble_pop.png","./images/930/game/obj_candy_01.png","./images/930/game/obj_drawing_hidden.png","./images/930/game/obj_electrodes.png","./images/930/game/obj_hat.png","./images/930/game/obj_hook_01.png","./images/930/game/obj_hook_02.png","./images/930/game/obj_hook_auto.png","./images/930/game/obj_hook_movable.png","./images/930/game/obj_hook_regulated.png","./images/930/game/obj_pollen_hd.png","./images/930/game/obj_pump.png","./images/930/game/obj_rotatable_spikes_01.png","./images/930/game/obj_rotatable_spikes_02.png","./images/930/game/obj_rotatable_spikes_03.png","./images/930/game/obj_rotatable_spikes_04.png","./images/930/game/obj_rotatable_spikes_button.png","./images/930/game/obj_spider.png","./images/930/game/obj_spikes_01.png","./images/930/game/obj_spikes_02.png","./images/930/game/obj_spikes_03.png","./images/930/game/obj_spikes_04.png","./images/930/game/obj_star_disappear.png","./images/930/game/obj_star_idle.png","./images/930/game/obj_vinil.png","./images/930/game/Painter_animations_1_hd.png","./images/930/game/Painter_animations_2_hd.png","./images/930/game/Painter_animations_3_hd.png","./images/930/game/Painter_animations_4_hd.png","./images/930/game/Pharaoh_animations_1_hd.png","./images/930/game/Pharaoh_animations_2_hd.png","./images/930/game/Pharaoh_animations_3_hd.png","./images/930/game/Pharaoh_animations_4_hd.png","./images/930/game/Pirate_animations_1_hd.png","./images/930/game/Pirate_animations_2_hd.png","./images/930/game/Pirate_animations_3_hd.png","./images/930/game/Pirate_animations_4_hd.png","./images/930/game/Prehistoric_animations_1_hd.png","./images/930/game/Prehistoric_animations_2_hd.png","./images/930/game/Prehistoric_animations_3_hd.png","./images/930/game/Prehistoric_animations_4_hd.png","./images/930/game/small_font.png","./images/930/game/time-stands.png","./images/930/game/tutorial_signs.png","./images/930/game/Viking_animations_1_hd.png","./images/930/game/Viking_animations_2_hd.png","./images/930/game/Viking_animations_3_hd.png","./images/930/game/Viking_animations_4_hd.png","./images/930/time/boxes/dinosaurs_locked.png","./images/930/time/boxes/dinosaurs.png","./images/930/time/boxes/egypt_locked.png","./images/930/time/boxes/egypt.png","./images/930/time/boxes/greece_locked.png","./images/930/time/boxes/greece.png","./images/930/time/boxes/painter_locked.png","./images/930/time/boxes/painter.png","./images/930/time/boxes/pirate_locked.png","./images/930/time/boxes/pirate.png","./images/930/time/boxes/viking_locked.png","./images/930/time/boxes/viking.png","./images/930/time/code-bg.png","./images/930/time/code-ok.png","./images/930/time/door-gradient.png","./images/930/time/left_door.png","./images/930/time/menu_bgr.jpg","./images/930/time/menu_logo.png","./images/930/time/right_door.png","./images/930/ui/bBtn_bgd.png","./images/930/ui/box_lock.png","./images/930/ui/box_nav_menu.png","./images/930/ui/box_omnom.png","./images/930/ui/buttonsprite.png","./images/930/ui/drawing-bg.png","./images/930/ui/fb.png","./images/930/ui/fBtn_bgd.png","./images/930/ui/flags.png","./images/930/ui/fun-omnom.png","./images/930/ui/gamecomplete_border.png","./images/930/ui/gamecomplete.jpg","./images/930/ui/lBtn_bgd.png","./images/930/ui/level_bgd_small.png","./images/930/ui/level_bgd.png","./images/930/ui/leveltape_left.png","./images/930/ui/leveltape_right.png","./images/930/ui/leveltape.png","./images/930/ui/mBtn_bgd.png","./images/930/ui/menu_result_en.png","./images/930/ui/menu_result_fr.png","./images/930/ui/menu_result_gr.png","./images/930/ui/menu_result_ru.png","./images/930/ui/menu-options.png","./images/930/ui/options_stars_bgd_small.png","./images/930/ui/options_stars_bgd.png","./images/930/ui/perfect_mark.png","./images/930/ui/ph_logo.png","./images/930/ui/popupinner-slow.jpg","./images/930/ui/popupinner.jpg","./images/930/ui/popupouter.png","./images/930/ui/result_line.png","./images/930/ui/sBtn_bgd.png","./images/930/ui/shadow.png","./images/930/ui/star_result_small.png","./images/930/ui/star_result.png","./images/930/ui/startbg.jpg","./images/930/ui/taperoll.png","./images/page/404.png","./images/page/game_bg.png","./images/page/loader-bg.jpg","./images/page/loader-bubble.png","./images/page/loader-logo.png","./images/page/loader-numbers.png","./images/page/loader-smallbubble.png","./images/page/tilebg.jpg","./images/page/upgrade-js.png","./images/page/upgrade-mobile.png","./index.html","./scripts/ctr-time.js","./scripts/libraries.js","./scripts/sm2.js","./site.webmanifest","./sm2/soundmanager2_flash9.swf","./sm2/soundmanager2.swf","./video/intro_1024.mp4","./video/outro_1024.mp4"];self.addEventListener("install",(e=>{e.waitUntil(caches.open("ctr_t").then((e=>{const a=urlsToCache.map((a=>e.add(a).catch((e=>{}))));return Promise.all(a)})))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((a=>{if(a)return a;const g=e.request.clone();return fetch(g).then((a=>{if(!a||200!==a.status||"basic"!==a.type)return a;const g=a.clone();return caches.open("ctr_t").then((a=>{a.put(e.request,g)})),a})).catch((a=>caches.match(e.request)))})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>{if("ctr_t"!==e)return caches.delete(e)}))))))}));
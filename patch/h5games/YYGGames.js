console.l0g=console.log,l0cation=new Proxy(location,{get:function(t,n,e){let o=t[n];return"function"==typeof o?(...e)=>t[n].apply(t,e):"host"==n||"hostname"==n?"www.yad.com":"href"==n||"origin"==n||"location"==n?"https://www.yad.com/":o},set:function(t,n,e){return!0}}),t0p=l0cation,wind0w=new Proxy(window,{get:function(t,n,e){return"function"==typeof t[n]?(...e)=>t[n].apply(t,e):"location"==n?t.l0cation:t[n]}}),op3n=function(t,n){window.open("https://ads.games235.com/",n)};var originalEval=eval;evalx=function(){return arguments[0]=arguments[0].replace("var _0x5c03af=YYGGames","console.l0g('--fx--0x87c--',_0x8fd371(0x87c));var _0x5c03af=YYGGames"),originalEval.apply(this,arguments)},YYG={TYPE:{INTERSTITIAL:0,REWARD:1},Event:{YYGSDK_INITIALIZED:1},EventHandler:{create:function(t,n){n()}}},YYGamesList=[{id:"3814",name:"Princess Glitter Coloring",thumb:"patch/images/null.png",appName:"Princess-Glitter-Coloring"},{id:"3509",name:"Princess Salon Frozen Party",thumb:"patch/images/null.png",appName:"Princess-Salon-Frozen-Party"}],YYGGames=function(){function t(t,n){let e=document.createElement("script");e.setAttribute("src",t),e.setAttribute("type","text/javascript"),e.setAttribute("async",!0),document.body.appendChild(e),e.addEventListener("load",(()=>{n(!0)})),e.addEventListener("error",(()=>{n(!1)}))}this.forgames=YYGamesList,this.init=function(t,n){return this.appName=t,setTimeout(n,1e3),!0},this.__init__=function(){},this.icon={},this.audio={pause:!1,playMusic:function(){audioBG=new Audio(arguments[0]),audioBG.loop=!0,setInterval((()=>{this.pause?audioBG.pause():audioBG.play()}),100)},playSound:function(){this.pause||(audioSound=new Audio(arguments[0]),audioSound.loop=!1,audioSound.play())},stopMusic:function(){},stopSound:function(){},muted:function(){}},this.gameBox={game1:{},game2:{}},this.gameBanner={setBannerSize:function(){},games:{}},this.startupByYad=function(t){},this.startup=function(t){t.complete()},this.getForgames=function(){return new Promise(((t,n)=>{t(this.forgames)}))},this.getAdPlatformType=function(){return!0},this.canShowReward=function(){return!0},this.showSplash=function(){},this.showInterstitial=function(n){return t("https://www.ubg235.com/ads/commercial.js",(t=>{"function"==typeof n&&n(),"function"==typeof arguments[0].beforeShowAd&&arguments[0].beforeShowAd(),"function"==typeof arguments[0].afterShowAd&&arguments[0].afterShowAd()})),!0},this.showReward=function(n){t("https://www.ubg235.com/ads/rewarded.js",(t=>{t?("function"==typeof n&&n(),"function"==typeof arguments[0].rewardComplete&&arguments[0].rewardComplete()):"function"==typeof arguments[0].rewardDismissed&&arguments[0].rewardDismissed()}))},this.onAfterShowAd=function(t){return"function"==typeof t&&t(),!0},this.on=function(t,n){return!0},this.adsManager={request:function(arguments){}},this.navigate=function(t,n,e){}},YYGGames=new YYGGames;
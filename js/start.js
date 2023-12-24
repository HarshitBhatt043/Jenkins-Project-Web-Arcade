/*<script>*/
window.famobi_env = window.famobi_env || "gp";

var _fgq = [];

(function (d, url, fgJS, firstJS) {
  fgJS = d.createElement("script");
  firstJS = d.getElementsByTagName("script")[0];
  fgJS.src = url;
  fgJS.onload = function () {
    if (
      typeof fg_api == "function" &&
      typeof famobi != "undefined" &&
      famobi instanceof fg_api
    ) {
      return;
    }

    famobi = new fg_api(
      {
        features: {
          highscores: 1,
          rewarded: 1,
          menu: 1,
          standalone: false,
          rotation: 1,
          tracking: 1,
          skip_title: false,
          skip_tutorial: false,
          credits: 1,
          login: 1,
          auto_quality: false,
          external_start: false,
          external_pause: false,
          external_mute: false,
          external_leaderboard: false,
          external_achievements: false,
          multiplayer_local: true,
          firebase: true,
          trackstats: false,
          leaderboard: 1,
          multiplayer: 1,
          fullscreen: 1,
          screenshot: 0,
          payment: 0,
          ads: 0,
        },
        game_i18n: {
          default: {
            "filename.png": "fg_i18n/en/images/filename.png",
            "api.back": "&laquo; Back",
            "api.more": "&raquo; More Games",
            "api.fullscreen": "[+] Fullscreen mode",
            "api.continue": "Continue",
            "api.play_now": "Play now",
            "api.ad_modal_header": "Advertisement closes in&hellip;",
            "api.ad_modal_header2": "Advertisement&hellip;",
            "api.ad_modal_header3": "Loading&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header": "Continue with the next episode&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text_2":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Low signal?",
            "api.install_app_cta_2": "Install Full Game Now",
            "api.install_app_text_3":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Long journeys?",
            "api.install_app_cta_3": "Install Full Game Now",
            "api.install_app_text": "Free full version",
            "api.install_app_cta": "Get the App",
            "api.privacy_info":
              "<p><strong>Data Privacy Information:</strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Ad Vendors</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Privacy Policy</a></p>',
            "api.people_also_like_headline": "People also like:",
            more_games_image_prefix: "",
            more_games_image: "assets/more-games-button.png",
            more_games_url: "http://html5games.com",
            preload_image: "/html5games/gameapi/v1/invisPreloadImage.png",
            test_preload_image: "/html5games/gameapi/v1/testPreloadImage.png",
          },
          en: {
            "api.back": "&laquo; Back",
            "api.more": "&raquo; More Games",
            "api.fullscreen": "[+] Fullscreen mode",
            "api.continue": "Continue",
            "api.play_now": "Play now",
            "api.ad_modal_header": "Advertisement closes in&hellip;",
            "api.ad_modal_header2": "Advertisement&hellip;",
            "api.ad_modal_header3": "Loading&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header": "Continue with the next episode&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text_2":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Low signal?",
            "api.install_app_cta_2": "Install Full Game Now",
            "api.install_app_text_3":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Long journeys?",
            "api.install_app_cta_3": "Install Full Game Now",
            "api.install_app_text": "Free full version",
            "api.install_app_cta": "Get the App",
            "api.privacy_info":
              "<p><strong>Data Privacy Information:</strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Ad Vendors</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Privacy Policy</a></p>',
            "api.people_also_like_headline": "People also like:",
          },
          de: {
            "api.back": "&laquo; zur&uuml;ck",
            "api.more": "&raquo; mehr Spiele",
            "api.fullscreen": "[+] Vollbildmodus",
            "api.continue": "Weiter",
            "api.play_now": "Jetzt spielen",
            "api.ad_modal_header":
              "Werbung schlie\u00dft automatisch in&hellip;",
            "api.ad_modal_header2": "Werbung&hellip;",
            "api.ad_modal_header3": "L\u00e4dt&hellip;",
            "api.teaser_modal_header":
              "Spiele jetzt den n\u00e4chsten Teil&hellip;",
            "api.no_abo": "Kein Abo!",
            "api.secure_payment": "Sicheres Bezahlen!",
            "api.paymentmethod_cc": "Kreditkarte",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Weiter",
            "api.install_app_text_2":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Kein Netz?",
            "api.install_app_cta_2": "Spiel als App installieren",
            "api.install_app_text_3":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;L\u00e4ngere Reise?",
            "api.install_app_cta_3": "Spiel als App installieren",
            "api.install_app_text": "Kostenlose Vollversion",
            "api.install_app_cta": "App installieren",
            "api.privacy_info":
              "<p><strong>Information zum Datenschutz:</strong> Unsere Spiele speichern deine Highscores und den Spielfortschritt, tracken dein Spielverhalten und zeigen Werbung basierend auf deinen Interessen. Wir speichern einen anonymen Cookie, damit wir dich wiedererkennen k\u00f6nnen. Klicke auf den Play-Button, wenn du zustimmst und mindestens 16 Jahre alt bist.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Anzeigenanbieter</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Datenschutz-Bestimmungen</a></p>',
            "api.people_also_like_headline": "Andere m\u00f6gen auch:",
          },
          es: {
            "api.back": "&laquo; Regresar",
            "api.more": "&raquo; M\u00e1s juegos",
            "api.fullscreen": "[+] Modo pantalla completa",
            "api.continue": "Continuar",
            "api.play_now": "Reproducir ahora",
            "api.ad_modal_header": "La publicidad se cerrar\u00e1 en&hellip;",
            "api.ad_modal_header2": "Anuncio&hellip;",
            "api.ad_modal_header3": "Anuncio&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header":
              "Continuar con el siguiente episodio&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text": "Versi\u00f3n completa gratis!",
            "api.install_app_cta": "Instalar ahora",
            "api.privacy_info":
              "<p><strong>Informaci\u00f3n de privacidad de datos:</strong> Nuestros juegos almacenan tus puntajes m\u00e1s altos y el progreso del juego, rastrean tu comportamiento de juego y muestran anuncios en funci\u00f3n de tus intereses. Guardamos una cookie an\u00f3nima para que podamos reconocerte. Haga clic en el bot\u00f3n de reproducci\u00f3n si acepta y tiene al menos 16 a\u00f1os de edad.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Vendedores de anuncios</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Pol\u00edtica de privacidad</a></p>',
            "api.people_also_like_headline":
              "A la gente tambi\u00e9n le gusta:",
          },
          fr: {
            "api.back": "&laquo; Retour",
            "api.more": "&raquo; Plus de jeux",
            "api.fullscreen": "[+] Mode plein \u00e9cran",
            "api.continue": "Continuer",
            "api.play_now": "Jouer maintenant",
            "api.ad_modal_header": "Advertisement closes in&hellip;",
            "api.ad_modal_header2": "R\u00e9clame&hellip;",
            "api.ad_modal_header3": "Loading&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header": "Continue with the next episode&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text": "Version compl\u00e8te gratuite!",
            "api.install_app_cta": "Installer maintenant",
            "api.privacy_info":
              "<p><strong>Informations sur la confidentialit\u00e9 des donn\u00e9es:</strong> Nos jeux stockent vos scores \u00e9lev\u00e9s et la progression du jeu, suivent votre comportement de jeu et affichent des publicit\u00e9s en fonction de vos int\u00e9r\u00eats. Nous sauvegardons un cookie anonyme afin que nous puissions vous reconna\u00eetre. Cliquez sur le bouton de lecture si vous \u00eates d'accord et avez au moins 16 ans.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Fournisseurs d\'annonces</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Politique de confidentialit\u00e9</a></p>',
            "api.people_also_like_headline": "Les gens aiment aussi:",
          },
          it: {
            "api.back": "&laquo; Indietro",
            "api.more": "&raquo; More Games",
            "api.fullscreen": "A tutto schermo",
            "api.ad_modal_header": "Advertisement closes in&hellip;",
            "api.ad_modal_header2": "Collegamento sponsorizzato&hellip;",
            "api.ad_modal_header3": "L\u00e4dt&hellip;",
            "api.teaser_modal_header": "Continue with the next episode&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.continue": "Continua",
            "api.play_now": "Gioca subito",
            "api.install_app_text": "La versione completa!",
            "api.install_app_cta": "Installa ora",
            "api.privacy_info":
              "<p><strong>Informazioni sulla privacy dei dati:</strong> I nostri giochi memorizzano i tuoi punteggi migliori e il progresso del gioco, monitorano il comportamento dei tuoi giochi e visualizzano annunci in base ai tuoi interessi. Salviamo un cookie anonimo in modo che possiamo riconoscerti. Clicca sul pulsante play se sei d'accordo e hai almeno 16 anni.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Fornitori di pubblicitaria</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Politica sulla riservatezza</a></p>',
            "api.people_also_like_headline": "La gente piace anche:",
          },
          nl: {
            "api.back": "&laquo; Vorige",
            "api.more": "&raquo; Meer games",
            "api.fullscreen": "[+] Volledig scherm",
            "api.continue": "Doorgaan",
            "api.play_now": "Nu spelen",
            "api.ad_modal_header": "De publiciteit eindigt in&hellip;",
            "api.ad_modal_header2": "Publiciteit&hellip;",
            "api.ad_modal_header3": "Publiciteit&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header":
              "Doorgaan met de volgende aflevering&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text": "Gratis volledige versie!",
            "api.install_app_cta": "Installeer nu",
            "api.privacy_info":
              "<p><strong>Gegevens Privacy Gegevens:</strong> Onze spellen slaan je hoogste scores en voortgang van het spel op, volgen je speelgedrag en geven advertenties weer op basis van je interesses. We slaan een anoniem cookie op zodat we u kunnen herkennen. Klik op de knop Afspelen als u hiermee instemt en ten minste 16 jaar oud bent.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Advertentieleveranciers</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Privacybeleid</a></p>',
            "api.people_also_like_headline": "Mensen houden ook van:",
          },
          pl: {
            "api.back": "&laquo; Wr\u00f3\u0107",
            "api.more": "&raquo; Wi\u0119cej gier",
            "api.fullscreen": "[+] Tryb pe\u0142noekranowy",
            "api.continue": "Kontynuuj",
            "api.play_now": "Graj teraz",
            "api.ad_modal_header": "Reklama zamknie si\u0119 za&hellip;",
            "api.ad_modal_header2": "Reklama&hellip;",
            "api.ad_modal_header3": "Reklama&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header":
              "Przejd\u017a do kolejnego odcinka&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text": "Bezp\u0142atna pe\u0142na wersja!",
            "api.install_app_cta": "Zainstaluj teraz",
            "api.privacy_info":
              "<p><strong>Informacje dotycz\u0105ce prywatno\u015bci danych:</strong> Nasze gry przechowuj\u0105 Twoje najlepsze wyniki i post\u0119py w grze, \u015bledz\u0105 zachowanie graczy i wy\u015bwietlaj\u0105 reklamy w oparciu o Twoje zainteresowania. Zapisujemy anonimowy plik cookie, aby\u015bmy mogli Ci\u0119 rozpozna\u0107. Kliknij przycisk odtwarzania, je\u015bli si\u0119 zgadzasz i masz co najmniej 16 lat.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Dostawcy reklam</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Polityka prywatno\u015bci</a></p>',
            "api.people_also_like_headline": "Ludzie te\u017c lubi\u0105:",
          },
          pt: {
            "api.back": "&laquo; Voltar",
            "api.more": "&raquo; Mais jogos",
            "api.fullscreen": "[+] Tela cheia",
            "api.continue": "Continuar",
            "api.play_now": "Jogar agora",
            "api.ad_modal_header": "Publicidade fecha em &hellip;",
            "api.ad_modal_header2": "Publicidade &hellip;",
            "api.ad_modal_header3": "Publicidade &hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header":
              "Continua com o pr\u00f3ximo epis\u00f3dio&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text": "Gr\u00e1tis Full Version!",
            "api.install_app_cta": "Instale agora",
            "api.privacy_info":
              "<p><strong>Informa\u00e7\u00f5es de privacidade de dados:</strong> Nossos jogos armazenam suas pontua\u00e7\u00f5es mais altas e o progresso do jogo, rastreiam seu comportamento de jogo e exibem an\u00fancios com base em seus interesses. N\u00f3s salvamos um cookie an\u00f4nimo para que possamos reconhec\u00ea-lo. Clique no bot\u00e3o play se voc\u00ea concordar e tiver pelo menos 16 anos de idade.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Fornecedores de an\u00fancios</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Pol\u00edtica de Privacidade</a></p>',
            "api.people_also_like_headline": "As pessoas tamb\u00e9m gostam:",
          },
          ru: {
            "api.back": "&laquo; \u041d\u0430\u0437\u0430\u0434",
            "api.more":
              "&raquo; \u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u0433\u0440",
            "api.fullscreen":
              "[+] \u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c",
            "api.continue":
              "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",
            "api.play_now": "\u0418\u0433\u0440\u0430\u0442\u044c",
            "api.ad_modal_header":
              "\u0420\u0435\u043a\u043b\u0430\u043c\u0430 &ndash; \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437&hellip;",
            "api.ad_modal_header2":
              "\u0420\u0435\u043a\u043b\u0430\u043c\u0430&hellip;",
            "api.ad_modal_header3":
              "\u0420\u0435\u043a\u043b\u0430\u043c\u0430&hellip;",
            "api.teaser_modal_header":
              "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u044d\u043f\u0438\u0437\u043e\u0434\u0443&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text":
              "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u041f\u043e\u043b\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f!",
            "api.install_app_cta":
              "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441",
            "api.privacy_info":
              "<p><strong>\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0445:</strong> \u041d\u0430\u0448\u0438 \u0438\u0433\u0440\u044b \u0445\u0440\u0430\u043d\u044f\u0442 \u0432\u0430\u0448\u0438 \u0432\u044b\u0441\u043e\u043a\u0438\u0435 \u043e\u0446\u0435\u043d\u043a\u0438 \u0438 \u0445\u043e\u0434 \u0438\u0433\u0440\u044b, \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0439 \u0438\u0433\u0440\u044b \u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u0430\u0448\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432. \u041c\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b cookie, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u0443\u0437\u043d\u0430\u0442\u044c \u0432\u0430\u0441.\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0442\u0435\u0441\u044c \u0438 \u043d\u0435 \u043c\u043e\u043b\u043e\u0436\u0435 16 \u043b\u0435\u0442.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u044b</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</a></p>',
            "api.people_also_like_headline":
              "\u041b\u044e\u0434\u0438 \u0442\u0430\u043a\u0436\u0435 \u043b\u044e\u0431\u044f\u0442:",
          },
          tr: {
            "api.back": "&laquo; Geri",
            "api.more": "&raquo; Daha Fazla Oyun",
            "api.fullscreen": "Tam ekran",
            "api.continue": "Devam",
            "api.play_now": "Oyna",
            "api.ad_modal_header":
              "Reklam &ndash; otomatik kapanacakt\u0131r&hellip;",
            "api.ad_modal_header2": "Reklam&hellip;",
            "api.ad_modal_header3": "Reklam&hellip;",
            "api.teaser_modal_header": "Sonraki B\u00f6l\u00fcm&hellip;",
            "api.no_abo": "Abonelik Yoktur!",
            "api.secure_payment": "G\u00fcvenli \u00d6deme!",
            "api.paymentmethod_cc": "Kredi Kart\u0131",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Sonraki",
            "api.install_app_text": "Bedava Tam S\u00fcr\u00fcm!",
            "api.install_app_cta": "\u015eimdi kur",
            "api.privacy_info":
              "<p><strong>Veri Gizlili\u011fi Bilgileri:</strong> Oyunlar\u0131m\u0131z y\u00fcksek puanlar\u0131n\u0131z\u0131 ve oyun ilerlemenizi depolar, oyun davran\u0131\u015f\u0131n\u0131z\u0131 izler ve ilgi alanlar\u0131n\u0131za g\u00f6re reklamlar\u0131 g\u00f6sterir. Anonim bir \u00e7erez kaydediyoruz, b\u00f6ylece sizi tan\u0131yabiliriz. Kabul ediyorsan\u0131z ve en az 16 ya\u015f\u0131ndaysan\u0131z oyun butonuna t\u0131klay\u0131n.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Reklam sa\u011flay\u0131c\u0131lar\u0131</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Gizlilik Politikas\u0131</a></p>',
            "api.people_also_like_headline": "Insanlar da gibi:",
          },
        },
        game_info: {
          client_version: "1.6.0",
          api_version: "2.0",
          forced_mode: {
            state: {
              level: {
                description:
                  "The current level. Keep the level number between 1 and 20 (incusive)",
                type: "number",
                min: 1,
                max: 20,
              },
              coins: {
                description: "The amount of coins available to player",
                type: "number",
                min: 0,
              },
              initial_bricks: {
                description:
                  "The amount of bricks that player gets in his backpack at the start of the level",
                type: "number",
                min: 0,
              },
            },
            override: {
              hide_ui: {
                description: "What UI elements should be hidden?",
                type: "array",
                values: ["coins"],
              },
              num_enemies: {
                description: "How many enemies will be present on the level",
                type: "number",
                min: 0,
                max: 5,
              },
              player_color: {
                description: "What color should the player be",
                type: "string",
                values: [
                  "blue",
                  "green",
                  "yellow",
                  "red",
                  "aqua",
                  "pink",
                  "orange",
                  "marron",
                  "purple",
                ],
              },
              player_skin: {
                description: "The skin (accessory) of the players' stickman",
                type: "string",
                values: [
                  "characterBasic",
                  "characterHat",
                  "characterChristmas",
                  "characterPumpkin",
                  "characterSunglasses",
                  "characterHelmet",
                  "characterMedmask",
                  "characterPlaguemask",
                  "characterHair",
                ],
              },
              brick_skin: {
                description: "The skin of all bricks on the level",
                type: "string",
                values: [
                  "brickBasic",
                  "brickChocolate",
                  "brickBone",
                  "brickApple",
                  "brickHotdog",
                  "brickCone",
                  "brickShoe",
                  "brickDumbbell",
                  "brickBanana",
                ],
              },
            },
          },
          track_stats: {
            brick_collected: {
              description: "Someone has collected a brick",
              params: {
                color: {
                  description:
                    "The color that the brick that has just been picked up",
                  type: "string",
                  values: [
                    "blue",
                    "green",
                    "yellow",
                    "red",
                    "aqua",
                    "pink",
                    "orange",
                    "marron",
                    "purple",
                  ],
                },
                by_player: {
                  description:
                    "Whether the brick was collected by player (true) or enemy (false)?",
                  type: "boolean",
                },
              },
            },
            stair_painted: {
              description: "Someone has painted a single stair",
              params: {
                color: {
                  description: "The color that the stair has been painted to",
                  type: "string",
                  values: [
                    "blue",
                    "green",
                    "yellow",
                    "red",
                    "aqua",
                    "pink",
                    "orange",
                    "marron",
                    "purple",
                  ],
                },
                by_player: {
                  description:
                    "Whether the stair was painted by player (true) or enemy (false)?",
                  type: "boolean",
                },
              },
            },
            enemy_kicked: {
              description: "Player has kicked an enemy of color",
              params: {
                color: {
                  type: "string",
                  values: [
                    "blue",
                    "green",
                    "yellow",
                    "red",
                    "aqua",
                    "pink",
                    "orange",
                    "marron",
                    "purple",
                  ],
                },
                dropped_bricks: {
                  description: "How many bricks fell off the enemy's backpack",
                  type: "number",
                },
              },
            },
            jumper_used: {
              description: "Player has jumped using a jumper platform",
              type: "number",
            },
            elevator_used: {
              description: "Player has jumped using an elevator",
              type: "number",
            },
          },
          orientation: {
            phone: { portrait: "green", landscape: "green" },
            tablet: { portrait: "green", landscape: "green" },
          },
        },
        gameParams: {
          languages_available: ["de", "tr", "en"],
          flags: { exclusive: 1 },
          fullscreen_enabled: 1,
          aspectRatio: 1,
          highscores_enabled: 1,
          header_image: "StairRace3dTeaser.jpg",
        },
        urlRoot: "https://play.famobi.com",
        assetsPath: "assets",
        ts: 1634529563000,
        short_url: "https://play.famobi.com/stair-race-3d",
        uuid: "5b50bf65-b7c1-4f18-b149-d4e3bb0e78d3",
        pid: "4638e320-4444-4514-81c4-d80a8c662371",
        aid: "A1000-1",
        name: '"Stair Race 3D"',
        package_id: '"stair-race-3d"',
        languages: ["de", "en", "es", "fr", "it", "nl", "pl", "pt", "ru", "tr"],
        cmp: "default",
        ads: {
          min_s_between: 90,
          min_s_before: 10,
          show_initial: true,
          show_video: true,
          npa: false,
          description_url:
            "https://play.famobi.com/sda/description/stair-race-3d?hl=en",
          provider: "dfp",
          dfp_available: false,
          domains: ["http://html5games.com", "html5games.com"],
          vast_url: "",
        },
        i18n: {
          default: {
            "api.back": "&laquo; Back",
            "api.more": "&raquo; More Games",
            "api.fullscreen": "[+] Fullscreen mode",
            "api.continue": "Continue",
            "api.play_now": "Play now",
            "api.ad_modal_header": "Advertisement closes in&hellip;",
            "api.ad_modal_header2": "Advertisement&hellip;",
            "api.ad_modal_header3": "Loading&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header": "Continue with the next episode&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text_2":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Low signal?",
            "api.install_app_cta_2": "Install Full Game Now",
            "api.install_app_text_3":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Long journeys?",
            "api.install_app_cta_3": "Install Full Game Now",
            "api.install_app_text": "Free full version",
            "api.install_app_cta": "Get the App",
            "api.privacy_info":
              "<p><strong>Data Privacy Information:</strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Ad Vendors</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Privacy Policy</a></p>',
            "api.people_also_like_headline": "People also like:",
          },
          en: {
            "api.back": "&laquo; Back",
            "api.more": "&raquo; More Games",
            "api.fullscreen": "[+] Fullscreen mode",
            "api.continue": "Continue",
            "api.play_now": "Play now",
            "api.ad_modal_header": "Advertisement closes in&hellip;",
            "api.ad_modal_header2": "Advertisement&hellip;",
            "api.ad_modal_header3": "Loading&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header": "Continue with the next episode&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text_2":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Low signal?",
            "api.install_app_cta_2": "Install Full Game Now",
            "api.install_app_text_3":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Long journeys?",
            "api.install_app_cta_3": "Install Full Game Now",
            "api.install_app_text": "Free full version",
            "api.install_app_cta": "Get the App",
            "api.privacy_info":
              "<p><strong>Data Privacy Information:</strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Ad Vendors</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Privacy Policy</a></p>',
            "api.people_also_like_headline": "People also like:",
          },
          de: {
            "api.back": "&laquo; zur&uuml;ck",
            "api.more": "&raquo; mehr Spiele",
            "api.fullscreen": "[+] Vollbildmodus",
            "api.continue": "Weiter",
            "api.play_now": "Jetzt spielen",
            "api.ad_modal_header":
              "Werbung schlie\u00dft automatisch in&hellip;",
            "api.ad_modal_header2": "Werbung&hellip;",
            "api.ad_modal_header3": "L\u00e4dt&hellip;",
            "api.teaser_modal_header":
              "Spiele jetzt den n\u00e4chsten Teil&hellip;",
            "api.no_abo": "Kein Abo!",
            "api.secure_payment": "Sicheres Bezahlen!",
            "api.paymentmethod_cc": "Kreditkarte",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Weiter",
            "api.install_app_text_2":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Kein Netz?",
            "api.install_app_cta_2": "Spiel als App installieren",
            "api.install_app_text_3":
              "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;L\u00e4ngere Reise?",
            "api.install_app_cta_3": "Spiel als App installieren",
            "api.install_app_text": "Kostenlose Vollversion",
            "api.install_app_cta": "App installieren",
            "api.privacy_info":
              "<p><strong>Information zum Datenschutz:</strong> Unsere Spiele speichern deine Highscores und den Spielfortschritt, tracken dein Spielverhalten und zeigen Werbung basierend auf deinen Interessen. Wir speichern einen anonymen Cookie, damit wir dich wiedererkennen k\u00f6nnen. Klicke auf den Play-Button, wenn du zustimmst und mindestens 16 Jahre alt bist.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Anzeigenanbieter</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Datenschutz-Bestimmungen</a></p>',
            "api.people_also_like_headline": "Andere m\u00f6gen auch:",
          },
          es: {
            "api.back": "&laquo; Regresar",
            "api.more": "&raquo; M\u00e1s juegos",
            "api.fullscreen": "[+] Modo pantalla completa",
            "api.continue": "Continuar",
            "api.play_now": "Reproducir ahora",
            "api.ad_modal_header": "La publicidad se cerrar\u00e1 en&hellip;",
            "api.ad_modal_header2": "Anuncio&hellip;",
            "api.ad_modal_header3": "Anuncio&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header":
              "Continuar con el siguiente episodio&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text": "Versi\u00f3n completa gratis!",
            "api.install_app_cta": "Instalar ahora",
            "api.privacy_info":
              "<p><strong>Informaci\u00f3n de privacidad de datos:</strong> Nuestros juegos almacenan tus puntajes m\u00e1s altos y el progreso del juego, rastrean tu comportamiento de juego y muestran anuncios en funci\u00f3n de tus intereses. Guardamos una cookie an\u00f3nima para que podamos reconocerte. Haga clic en el bot\u00f3n de reproducci\u00f3n si acepta y tiene al menos 16 a\u00f1os de edad.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Vendedores de anuncios</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Pol\u00edtica de privacidad</a></p>',
            "api.people_also_like_headline":
              "A la gente tambi\u00e9n le gusta:",
          },
          fr: {
            "api.back": "&laquo; Retour",
            "api.more": "&raquo; Plus de jeux",
            "api.fullscreen": "[+] Mode plein \u00e9cran",
            "api.continue": "Continuer",
            "api.play_now": "Jouer maintenant",
            "api.ad_modal_header": "Advertisement closes in&hellip;",
            "api.ad_modal_header2": "R\u00e9clame&hellip;",
            "api.ad_modal_header3": "Loading&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header": "Continue with the next episode&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text": "Version compl\u00e8te gratuite!",
            "api.install_app_cta": "Installer maintenant",
            "api.privacy_info":
              "<p><strong>Informations sur la confidentialit\u00e9 des donn\u00e9es:</strong> Nos jeux stockent vos scores \u00e9lev\u00e9s et la progression du jeu, suivent votre comportement de jeu et affichent des publicit\u00e9s en fonction de vos int\u00e9r\u00eats. Nous sauvegardons un cookie anonyme afin que nous puissions vous reconna\u00eetre. Cliquez sur le bouton de lecture si vous \u00eates d'accord et avez au moins 16 ans.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Fournisseurs d\'annonces</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Politique de confidentialit\u00e9</a></p>',
            "api.people_also_like_headline": "Les gens aiment aussi:",
          },
          it: {
            "api.back": "&laquo; Indietro",
            "api.more": "&raquo; More Games",
            "api.fullscreen": "A tutto schermo",
            "api.ad_modal_header": "Advertisement closes in&hellip;",
            "api.ad_modal_header2": "Collegamento sponsorizzato&hellip;",
            "api.ad_modal_header3": "L\u00e4dt&hellip;",
            "api.teaser_modal_header": "Continue with the next episode&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.continue": "Continua",
            "api.play_now": "Gioca subito",
            "api.install_app_text": "La versione completa!",
            "api.install_app_cta": "Installa ora",
            "api.privacy_info":
              "<p><strong>Informazioni sulla privacy dei dati:</strong> I nostri giochi memorizzano i tuoi punteggi migliori e il progresso del gioco, monitorano il comportamento dei tuoi giochi e visualizzano annunci in base ai tuoi interessi. Salviamo un cookie anonimo in modo che possiamo riconoscerti. Clicca sul pulsante play se sei d'accordo e hai almeno 16 anni.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Fornitori di pubblicitaria</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Politica sulla riservatezza</a></p>',
            "api.people_also_like_headline": "La gente piace anche:",
          },
          nl: {
            "api.back": "&laquo; Vorige",
            "api.more": "&raquo; Meer games",
            "api.fullscreen": "[+] Volledig scherm",
            "api.continue": "Doorgaan",
            "api.play_now": "Nu spelen",
            "api.ad_modal_header": "De publiciteit eindigt in&hellip;",
            "api.ad_modal_header2": "Publiciteit&hellip;",
            "api.ad_modal_header3": "Publiciteit&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header":
              "Doorgaan met de volgende aflevering&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text": "Gratis volledige versie!",
            "api.install_app_cta": "Installeer nu",
            "api.privacy_info":
              "<p><strong>Gegevens Privacy Gegevens:</strong> Onze spellen slaan je hoogste scores en voortgang van het spel op, volgen je speelgedrag en geven advertenties weer op basis van je interesses. We slaan een anoniem cookie op zodat we u kunnen herkennen. Klik op de knop Afspelen als u hiermee instemt en ten minste 16 jaar oud bent.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Advertentieleveranciers</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Privacybeleid</a></p>',
            "api.people_also_like_headline": "Mensen houden ook van:",
          },
          pl: {
            "api.back": "&laquo; Wr\u00f3\u0107",
            "api.more": "&raquo; Wi\u0119cej gier",
            "api.fullscreen": "[+] Tryb pe\u0142noekranowy",
            "api.continue": "Kontynuuj",
            "api.play_now": "Graj teraz",
            "api.ad_modal_header": "Reklama zamknie si\u0119 za&hellip;",
            "api.ad_modal_header2": "Reklama&hellip;",
            "api.ad_modal_header3": "Reklama&hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header":
              "Przejd\u017a do kolejnego odcinka&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text": "Bezp\u0142atna pe\u0142na wersja!",
            "api.install_app_cta": "Zainstaluj teraz",
            "api.privacy_info":
              "<p><strong>Informacje dotycz\u0105ce prywatno\u015bci danych:</strong> Nasze gry przechowuj\u0105 Twoje najlepsze wyniki i post\u0119py w grze, \u015bledz\u0105 zachowanie graczy i wy\u015bwietlaj\u0105 reklamy w oparciu o Twoje zainteresowania. Zapisujemy anonimowy plik cookie, aby\u015bmy mogli Ci\u0119 rozpozna\u0107. Kliknij przycisk odtwarzania, je\u015bli si\u0119 zgadzasz i masz co najmniej 16 lat.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Dostawcy reklam</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Polityka prywatno\u015bci</a></p>',
            "api.people_also_like_headline": "Ludzie te\u017c lubi\u0105:",
          },
          pt: {
            "api.back": "&laquo; Voltar",
            "api.more": "&raquo; Mais jogos",
            "api.fullscreen": "[+] Tela cheia",
            "api.continue": "Continuar",
            "api.play_now": "Jogar agora",
            "api.ad_modal_header": "Publicidade fecha em &hellip;",
            "api.ad_modal_header2": "Publicidade &hellip;",
            "api.ad_modal_header3": "Publicidade &hellip;",
            "api.ad_modal_header_blocked":
              "Not available due to policy reasons",
            "api.teaser_modal_header":
              "Continua com o pr\u00f3ximo epis\u00f3dio&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text": "Gr\u00e1tis Full Version!",
            "api.install_app_cta": "Instale agora",
            "api.privacy_info":
              "<p><strong>Informa\u00e7\u00f5es de privacidade de dados:</strong> Nossos jogos armazenam suas pontua\u00e7\u00f5es mais altas e o progresso do jogo, rastreiam seu comportamento de jogo e exibem an\u00fancios com base em seus interesses. N\u00f3s salvamos um cookie an\u00f4nimo para que possamos reconhec\u00ea-lo. Clique no bot\u00e3o play se voc\u00ea concordar e tiver pelo menos 16 anos de idade.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Fornecedores de an\u00fancios</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Pol\u00edtica de Privacidade</a></p>',
            "api.people_also_like_headline": "As pessoas tamb\u00e9m gostam:",
          },
          ru: {
            "api.back": "&laquo; \u041d\u0430\u0437\u0430\u0434",
            "api.more":
              "&raquo; \u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u0433\u0440",
            "api.fullscreen":
              "[+] \u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c",
            "api.continue":
              "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",
            "api.play_now": "\u0418\u0433\u0440\u0430\u0442\u044c",
            "api.ad_modal_header":
              "\u0420\u0435\u043a\u043b\u0430\u043c\u0430 &ndash; \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437&hellip;",
            "api.ad_modal_header2":
              "\u0420\u0435\u043a\u043b\u0430\u043c\u0430&hellip;",
            "api.ad_modal_header3":
              "\u0420\u0435\u043a\u043b\u0430\u043c\u0430&hellip;",
            "api.teaser_modal_header":
              "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u044d\u043f\u0438\u0437\u043e\u0434\u0443&hellip;",
            "api.no_abo": "No Subscription!",
            "api.secure_payment": "Secure Payment!",
            "api.paymentmethod_cc": "Credit Card",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Next",
            "api.install_app_text":
              "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u041f\u043e\u043b\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f!",
            "api.install_app_cta":
              "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441",
            "api.privacy_info":
              "<p><strong>\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0445:</strong> \u041d\u0430\u0448\u0438 \u0438\u0433\u0440\u044b \u0445\u0440\u0430\u043d\u044f\u0442 \u0432\u0430\u0448\u0438 \u0432\u044b\u0441\u043e\u043a\u0438\u0435 \u043e\u0446\u0435\u043d\u043a\u0438 \u0438 \u0445\u043e\u0434 \u0438\u0433\u0440\u044b, \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0439 \u0438\u0433\u0440\u044b \u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u0430\u0448\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432. \u041c\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b cookie, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u0443\u0437\u043d\u0430\u0442\u044c \u0432\u0430\u0441.\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0442\u0435\u0441\u044c \u0438 \u043d\u0435 \u043c\u043e\u043b\u043e\u0436\u0435 16 \u043b\u0435\u0442.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u044b</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</a></p>',
            "api.people_also_like_headline":
              "\u041b\u044e\u0434\u0438 \u0442\u0430\u043a\u0436\u0435 \u043b\u044e\u0431\u044f\u0442:",
          },
          tr: {
            "api.back": "&laquo; Geri",
            "api.more": "&raquo; Daha Fazla Oyun",
            "api.fullscreen": "Tam ekran",
            "api.continue": "Devam",
            "api.play_now": "Oyna",
            "api.ad_modal_header":
              "Reklam &ndash; otomatik kapanacakt\u0131r&hellip;",
            "api.ad_modal_header2": "Reklam&hellip;",
            "api.ad_modal_header3": "Reklam&hellip;",
            "api.teaser_modal_header": "Sonraki B\u00f6l\u00fcm&hellip;",
            "api.no_abo": "Abonelik Yoktur!",
            "api.secure_payment": "G\u00fcvenli \u00d6deme!",
            "api.paymentmethod_cc": "Kredi Kart\u0131",
            "api.paymentmethod_paypal": "PayPal",
            "api.paymentmethod_sms": "SMS",
            "api.payment_cta": "Sonraki",
            "api.install_app_text": "Bedava Tam S\u00fcr\u00fcm!",
            "api.install_app_cta": "\u015eimdi kur",
            "api.privacy_info":
              "<p><strong>Veri Gizlili\u011fi Bilgileri:</strong> Oyunlar\u0131m\u0131z y\u00fcksek puanlar\u0131n\u0131z\u0131 ve oyun ilerlemenizi depolar, oyun davran\u0131\u015f\u0131n\u0131z\u0131 izler ve ilgi alanlar\u0131n\u0131za g\u00f6re reklamlar\u0131 g\u00f6sterir. Anonim bir \u00e7erez kaydediyoruz, b\u00f6ylece sizi tan\u0131yabiliriz. Kabul ediyorsan\u0131z ve en az 16 ya\u015f\u0131ndaysan\u0131z oyun butonuna t\u0131klay\u0131n.</p>",
            "api.privacy_link":
              '<p><a href="https://famobi.com/vendors/" target="_blank" data-famobi-href>Reklam sa\u011flay\u0131c\u0131lar\u0131</a>&nbsp;<span>&</span>&nbsp;<a href="https://famobi.com/privacy/" target="_blank" data-famobi-href>Gizlilik Politikas\u0131</a></p>',
            "api.people_also_like_headline": "Insanlar da gibi:",
          },
        },
        branding: {
          more_games_image_prefix: "",
          more_games_image: "assets/more-games-button.png",
          more_games_url: "http://html5games.com",
          preload_image: "/html5games/gameapi/v1/invisPreloadImage.png",
          test_preload_image: "/html5games/gameapi/v1/testPreloadImage.png",
        },
        thumb: "tmp/StairRace3dTeaser.jpg",
        blurred_thumb: "tmp/blurred/StairRace3dTeaser.jpg",
        favicon_32: "tmp/32/StairRace3dTeaser.jpg",
        favicon_64: "tmp/64/StairRace3dTeaser.jpg",
        favicon_96: "tmp/96/StairRace3dTeaser.jpg",
        favicon_192: "tmp/192/StairRace3dTeaser.jpg",
        type: "html5",
        tracking_date: "2021-10-16",
        video: { sources: [] },
        style:
          '\t<style type="text/css">\n\t\t#fg-root #fg-overlay { display: none; }\n\t</style>',
        headerHtml:
          '<header id="fg-header"><div class="fg-clip" id="fg-clip"><div class="fg-clip-btn"><span></span></div></div></header>',
        menuHtml:
          '<ul class="fa-menu-buttons"><li data-famobi-href="back"><a href="javascript:void(0);" class="fa-menu-button-back" tabindex="-1"><svg style="display: none;" version="1.1" xmlns:svg="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve"><g transform="translate(0,-952.36218)"><path d="M49.9,963.6c-0.5,0-1,0.2-1.5,0.5l-47.5,37.5c-1.1,0.9-1.2,2.5-0.4,3.6c0.8,1,2.5,1.2,3.6,0.4L50,969.3l45.9,36.2 c1,0.8,2.7,0.6,3.5-0.4c0.8-1,0.7-2.7-0.4-3.6l-20.3-16.1v-22h-10v14.1l-17.2-13.6C51,963.8,50.5,963.6,49.9,963.6z M50,973.6 l-33.8,26.2v41.3H40v-15c0-5.5,4.5-10,10-10s10,4.5,10,10v15h23.8v-41.3C83.8,999.9,50,973.6,50,973.6z"/></g></svg></a></li><li data-famobi-fullscreen><a href="javascript:void(0);" class="fa-menu-button-fullscreen fa-fullscreen-disabled" tabindex="-1"><svg style="display: none;" class="fa-fullscreen-icon-disabled" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 90 90" xml:space="preserve"><g><path d="M64.1,34.4l10.6-10.6l-8.5-8.5L55.6,25.9L64.1,34.4L64.1,34.4z M34.4,25.9L23.8,15.3l-8.5,8.5l10.6,10.6L34.4,25.9 L34.4,25.9z M25.9,55.6L15.3,66.2l8.5,8.5l10.6-10.6L25.9,55.6L25.9,55.6z M55.6,64.1l10.6,10.6l8.5-8.5L64.1,55.6L55.6,64.1 L55.6,64.1z M30.1,9H9v21.1L30.1,9L30.1,9z M59.9,9H81v21.1L59.9,9L59.9,9z M81,59.9V81H59.9L81,59.9L81,59.9z M30.1,81H9V59.9 L30.1,81L30.1,81z"/></g></svg><svg style="display: none;" class="fa-fullscreen-icon-enabled" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 90 90"><g><path d="M72.5,9L61.9,19.6l8.5,8.5L81,17.5L72.5,9L72.5,9z M9,17.5l10.6,10.6l8.5-8.5L17.5,9L9,17.5L9,17.5z M17.5,81l10.6-10.6 l-8.5-8.5L9,72.5L17.5,81L17.5,81z M81,72.5L70.4,61.9l-8.5,8.5L72.5,81L81,72.5L81,72.5z M13.3,34.4h21.1V13.3L13.3,34.4 L13.3,34.4z M76.7,34.4H55.6V13.3L76.7,34.4L76.7,34.4z M55.6,76.7V55.6h21.1L55.6,76.7L55.6,76.7z M13.3,55.6h21.1v21.1L13.3,55.6 L13.3,55.6z"/></g></svg></a></li></ul><ul class="fg-related-games"><li>    <a href="https://famobi.com" target="_blank" tabindex="-1"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgOSAxNzkuOCA3MiI+PHN0eWxlPi5he2ZpbGw6IzAwOTJDMzt9LmJ7ZmlsbDojRjA4MTE5O30uY3tmaWxsOiMzMzM7fTwvc3R5bGU+PHJlY3QgeD0iMjUuOCIgeT0iMTIuOSIgd2lkdGg9IjIwLjUiIGhlaWdodD0iMjAuNSIgY2xhc3M9ImEiLz48cmVjdCB4PSIzLjciIHk9IjEyLjkiIHdpZHRoPSIyMC41IiBoZWlnaHQ9IjIwLjUiIGNsYXNzPSJhIi8+PHJlY3QgeD0iMy43IiB5PSIzNSIgd2lkdGg9IjIwLjUiIGhlaWdodD0iMjAuNSIgY2xhc3M9ImIiLz48cmVjdCB4PSIzLjciIHk9IjU3LjEiIHdpZHRoPSIyMC41IiBoZWlnaHQ9IjIwLjUiIGNsYXNzPSJjIi8+PHBvbHlnb24gcG9pbnRzPSIyNS44IDM1LjEgMjUuOCA1NS41IDM4LjcgNDUuMyAiIGNsYXNzPSJiIi8+PHBhdGggZD0iTTY1LjcgNjUuNEg1OHYxMi4yaC00Ljd2LTI3aDE1LjR2NC4xSDU4djYuNWg3LjdWNjUuNHoiIGNsYXNzPSJjIi8+PHBhdGggZD0iTTgyIDc3LjZMODEuNyA3NWgtMC4yYy0wLjcgMC45LTEuNyAxLjctMyAyLjIgLTEuMyAwLjYtMi42IDAuOC0zLjkgMC44IC0xLjcgMC0zLjEtMC41LTQtMS41IC0xLTEtMS41LTIuMy0xLjUtMy45IDAtMS4xIDAuMi0yLjEgMC43LTMgMC41LTAuOSAxLjItMS42IDIuMS0yLjIgMC45LTAuNiAyLTEuMSAzLjItMS40IDEuMy0wLjMgMi43LTAuNSA0LjItMC41aDEuOHYtMC42YzAtMS4xLTAuMy0xLjgtMS0yLjMgLTAuNy0wLjUtMS44LTAuNy0zLjMtMC43IC0yIDAtMy44IDAuNC01LjQgMS4zbC0wLjktMy40YzEuOC0xLjEgNC0xLjYgNi42LTEuNiAyLjcgMCA0LjggMC42IDYuMiAxLjcgMC43IDAuNSAxLjIgMS4yIDEuNiAyIDAuNCAwLjggMC42IDEuOCAwLjYgMi45djEyLjhIODJ6TTc2LjQgNzQuNWMwLjkgMCAxLjctMC4yIDIuNi0wLjYgMC45LTAuNCAxLjYtMSAyLjEtMS43di0zLjdoLTAuOGMtMi4yIDAtMy45IDAuMy00LjkgMC45IC0xIDAuNi0xLjUgMS41LTEuNSAyLjdDNzQgNzMuNyA3NC44IDc0LjUgNzYuNCA3NC41eiIgY2xhc3M9ImMiLz48cGF0aCBkPSJNMTAzLjIgNzcuNlY2NS4yYzAtMi4yLTAuOS0zLjMtMi43LTMuMyAtMC40IDAtMC45IDAuMS0xLjQgMC4yIC0wLjUgMC4yLTEgMC40LTEuNSAwLjcgLTAuNSAwLjMtMC45IDAuNy0xLjMgMS4yIC0wLjQgMC41LTAuNyAxLTAuOCAxLjZ2MTJoLTQuNVY1OC44aDMuNWwwLjIgMi44aDAuMmMwLjUtMS4xIDEuNC0yIDIuNi0yLjYgMS4yLTAuNiAyLjQtMC44IDMuOC0wLjggMS4zIDAgMi40IDAuMyAzLjUgMC44IDEgMC41IDEuOCAxLjQgMi4zIDIuNiAwLjUtMS4xIDEuNC0yIDIuNi0yLjUgMS4yLTAuNiAyLjQtMC44IDMuOC0wLjggMC45IDAgMS43IDAuMSAyLjUgMC4zIDAuOCAwLjIgMS41IDAuNiAyIDEuMSAwLjYgMC41IDEgMS4yIDEuNCAyIDAuMyAwLjggMC41IDEuOSAwLjUgMy4xdjEyLjhoLTQuNVY2NS4yYzAtMi4yLTAuOS0zLjMtMi43LTMuMyAtMC40IDAtMC45IDAuMS0xLjQgMC4yIC0wLjUgMC4yLTEgMC40LTEuNSAwLjcgLTAuNSAwLjMtMC45IDAuNy0xLjMgMS4yIC0wLjQgMC41LTAuNyAxLTAuOCAxLjZ2MTJIMTAzLjJ6IiBjbGFzcz0iYyIvPjxwYXRoIGQ9Ik0xMzMuNSA1OC4yYzEuNyAwIDMuMSAwLjMgNC4zIDAuOCAxLjIgMC42IDIuMiAxLjMgMyAyLjIgMC44IDAuOSAxLjMgMiAxLjcgMy4yIDAuNCAxLjIgMC42IDIuNSAwLjYgMy44IDAgMS4zLTAuMiAyLjYtMC42IDMuOCAtMC40IDEuMi0wLjkgMi4yLTEuNyAzLjEgLTAuOCAwLjktMS44IDEuNi0yLjkgMi4xIC0xLjIgMC41LTIuNiAwLjgtNC4yIDAuOCAtMS43IDAtMy4xLTAuMy00LjMtMC44IC0xLjItMC41LTIuMi0xLjMtMy0yLjIgLTAuOC0wLjktMS40LTItMS44LTMuMiAtMC40LTEuMi0wLjYtMi41LTAuNi0zLjggMC0xLjMgMC4yLTIuNiAwLjYtMy44IDAuNC0xLjIgMS0yLjIgMS43LTMuMiAwLjgtMC45IDEuOC0xLjYgMy0yLjJDMTMwLjUgNTguNSAxMzEuOSA1OC4yIDEzMy41IDU4LjJ6TTEzMy42IDc0LjdjMC44IDAgMS41LTAuMiAyLjEtMC41IDAuNi0wLjMgMS4xLTAuOCAxLjUtMS40IDAuNC0wLjYgMC43LTEuMyAwLjgtMiAwLjItMC44IDAuMy0xLjYgMC4zLTIuNCAwLTAuOS0wLjEtMS43LTAuMy0yLjUgLTAuMi0wLjgtMC41LTEuNS0wLjktMi4xIC0wLjQtMC42LTAuOS0xLjEtMS41LTEuNSAtMC42LTAuNC0xLjMtMC42LTIuMi0wLjYgLTAuOCAwLTEuNSAwLjItMiAwLjUgLTAuNiAwLjMtMSAwLjgtMS40IDEuNCAtMC40IDAuNi0wLjYgMS4yLTAuOCAyIC0wLjIgMC44LTAuMyAxLjYtMC4zIDIuNCAwIDAuOSAwLjEgMS43IDAuMyAyLjUgMC4yIDAuOCAwLjUgMS41IDAuOSAyLjEgMC40IDAuNiAwLjkgMS4xIDEuNSAxLjVDMTMyLjEgNzQuNSAxMzIuOCA3NC43IDEzMy42IDc0Ljd6IiBjbGFzcz0iYyIvPjxwYXRoIGQ9Ik0xNTcuOSA3OC4xYy0xLjUgMC0yLjctMC4zLTMuNy0wLjkgLTEtMC42LTEuOC0xLjMtMi42LTIuMmgtMC4ybC0wLjMgMi42aC0zLjZWNDcuNGg0LjV2MTMuM2MwLjYtMC44IDEuNS0xLjQgMi41LTEuOCAxLTAuNCAyLjItMC43IDMuNS0wLjcgMS40IDAgMi43IDAuMyAzLjcgMC44IDEuMSAwLjUgMS45IDEuMyAyLjcgMi4yIDAuNyAwLjkgMS4yIDEuOSAxLjYgMy4xIDAuMyAxLjIgMC41IDIuNCAwLjUgMy43IDAgMS40LTAuMiAyLjgtMC42IDQgLTAuNCAxLjItMSAyLjMtMS43IDMuMiAtMC43IDAuOS0xLjcgMS42LTIuNyAyLjFDMTYwLjQgNzcuOCAxNTkuMiA3OC4xIDE1Ny45IDc4LjF6TTE1Ny4zIDc0LjdjMC44IDAgMS41LTAuMiAyLjEtMC42IDAuNi0wLjQgMS4xLTAuOSAxLjUtMS41IDAuNC0wLjYgMC43LTEuMyAwLjktMi4xIDAuMi0wLjggMC4zLTEuNiAwLjMtMi40IDAtMC44LTAuMS0xLjctMC4zLTIuNCAtMC4yLTAuOC0wLjUtMS41LTAuOS0yLjEgLTAuNC0wLjYtMS0xLjEtMS42LTEuNCAtMC42LTAuMy0xLjQtMC41LTIuMi0wLjUgLTAuOCAwLTEuNiAwLjItMi40IDAuNiAtMC44IDAuNC0xLjcgMS4xLTIuNSAyLjF2Ny44YzAuMyAwLjQgMC43IDAuOCAxLjEgMS4xczAuOSAwLjYgMS40IDAuOGMwLjUgMC4yIDEgMC40IDEuNSAwLjVTMTU2LjkgNzQuNyAxNTcuMyA3NC43eiIgY2xhc3M9ImMiLz48cGF0aCBkPSJNMTcwLjQgNTIuOGMwLTAuNCAwLjEtMC43IDAuMi0xLjEgMC4xLTAuNCAwLjQtMC43IDAuNi0xIDAuMy0wLjMgMC42LTAuNSAwLjktMC43IDAuMy0wLjIgMC43LTAuMiAxLjEtMC4yIDAuNCAwIDAuNyAwLjEgMS4xIDAuMiAwLjQgMC4yIDAuNyAwLjQgMSAwLjcgMC4zIDAuMyAwLjUgMC42IDAuNyAxIDAuMiAwLjQgMC4yIDAuNyAwLjIgMS4xIDAgMC40LTAuMSAwLjgtMC4yIDEuMSAtMC4yIDAuMy0wLjQgMC42LTAuNyAwLjkgLTAuMyAwLjMtMC42IDAuNS0xIDAuNiAtMC40IDAuMS0wLjcgMC4yLTEuMSAwLjIgLTAuOCAwLTEuNS0wLjMtMi0wLjlDMTcwLjYgNTQuMyAxNzAuNCA1My42IDE3MC40IDUyLjh6TTE3NS41IDc3LjZIMTcxVjU4LjhoNC41Vjc3LjZ6IiBjbGFzcz0iYyIvPjwvc3ZnPg==" alt="Famobi" style="padding-top: 16px;"></a></li></ul><ul class="fg-langs"><li class="fg-lang" data-switch-lang="de"><a href="javascript:void(0);" tabindex="-1"><img class="fg-flag" src="flags/flag_de.png" alt="de"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="en"><a href="javascript:void(0);" tabindex="-1"><img class="fg-flag" src="flags/flag_en.png" alt="en"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="es"><a href="javascript:void(0);" tabindex="-1"><img class="fg-flag" src="flags/flag_es.png" alt="es"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="fr"><a href="javascript:void(0);" tabindex="-1"><img class="fg-flag" src="flags/flag_fr.png" alt="fr"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="it"><a href="javascript:void(0);" tabindex="-1"><img class="fg-flag" src="flags/flag_it.png" alt="it"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="nl"><a href="javascript:void(0);" tabindex="-1"><img class="fg-flag" src="flags/flag_nl.png" alt="nl"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="pl"><a href="javascript:void(0);" tabindex="-1"><img class="fg-flag" src="flags/flag_pl.png" alt="pl"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="pt"><a href="javascript:void(0);" tabindex="-1"><img class="fg-flag" src="flags/flag_pt.png" alt="pt"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="ru"><a href="javascript:void(0);" tabindex="-1"><img class="fg-flag" src="flags/flag_ru.png" alt="ru"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li><li class="fg-lang" data-switch-lang="tr"><a href="javascript:void(0);" tabindex="-1"><img class="fg-flag" src="flags/flag_tr.png" alt="tr"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 459" xml:space="preserve"><path d="M630.7,227.3"/><path d="M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z"/></svg></a></li></ul>',
        adsVastXML:
          '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd" version="3.0">\n',
        adTagXML:
          '\t<Ad id="[index]">\n\t\t<Wrapper>\n\t\t\t<AdSystem>AdSense/AdX</AdSystem>\n\t\t\t<VASTAdTagURI>\n\t\t\t\t<![CDATA[\n\t\t\t\t\t[vast_ad_tag_url]\n\t\t\t\t]]>\n\t\t\t</VASTAdTagURI>\n\t\t\t<Creatives/>\n\t\t\t<Extensions>\n\t\t\t\t<Extension fallback_index="[fallback_index]" type="waterfall"/>\n\t\t\t</Extensions>\n\t\t</Wrapper>\n\t</Ad>',
        appOverlayHtml:
          '<div class="fg-app-overlay">\n\t<div class="fg-app-teaser">\n\t\t<div class="fg-app-teaser-inner">\n\t\t\t<a href="https://play.famobi.com/stair-race-3d.app/A1000-1" target="_blank" class="fg-app-link fg-app-teaser-icon" tabindex="-1"><img src="tmp/StairRace3dTeaser.jpg" alt=""></a>\n\t\t\t<div class="fg-app-teaser-meta">\n\t\t\t\t<div class="titleHolder">\n\t\t\t\t\t<p><a href="https://play.famobi.com/stair-race-3d.app/A1000-1" target="_blank" class="fg-app-link" data-i18n="api.install_app_text" tabindex="-1"></a></p>\n\n\t\t\t\t\t<ul class="fg-app-teaser-rating"><li></li><li></li><li></li><li></li></ul>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="ctaHolder">\n\t\t\t\t\t<div class="cta">\n\t\t\t\t\t\t<a href="https://play.famobi.com/stair-race-3d.app/A1000-1" class="fg-app-link" target="_blank" tabindex="-1"><em class="fg-app-teaser-storeIcon"></em><span data-i18n="api.install_app_cta"></span></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href="javascript:void(0);" class="fg-app-teaser-close" tabindex="-1"></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>',
      },
      _fgq,
      ""
    );

    if (famobi.hasOwnProperty("adapters")) {
      famobi.adapters.run("api", "created", famobi);
    }
  };
  firstJS.parentNode.insertBefore(fgJS, firstJS);
})(document, "js/gameapi.js");

window.famobi_ts = 1634529563000;
if (new Date().getTime() > famobi_ts) {
  window.famobi_gameJS.push(function () {
    // window.location = '//play.famobi.com/';
  });
}
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "js/null.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "famobi_dataLayer", "GTM-PLWFGFS");

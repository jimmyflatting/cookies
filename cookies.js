const policy = '/integritetspolicy';
const kontakt = '/kundservice';

window.addEventListener('load', function(){

    // obtain plugin
    var cc = initCookieConsent();

    // run plugin with your configuration
    cc.run({
        current_lang: 'se',
        autoclear_cookies: true,                   // default: false
        page_scripts: true,                        // default: false

        // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
        // delay: 0,                               // default: 0
        // auto_language: '',                      // default: null; could also be 'browser' or 'document'
        // autorun: true,                          // default: true
        // force_consent: false,                   // default: false
        // hide_from_bots: true,                   // default: true
        // remove_cookie_tables: false             // default: false
        // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
        // cookie_expiration: 182,                 // default: 182 (days)
        // cookie_necessary_only_expiration: 182   // default: disabled
        // cookie_domain: location.hostname,       // default: current domain
        // cookie_path: '/',                       // default: root
        // cookie_same_site: 'Lax',                // default: 'Lax'
        // use_rfc_cookie: false,                  // default: false
        // revision: 0,                            // default: 0

        onFirstAction: function(user_preferences, cookie){
            // callback triggered only once on the first accept/reject action
        },

        onAccept: function (cookie) {
            // callback triggered on the first accept/reject action, and after each page load
        },

        onChange: function (cookie, changed_categories) {
            // callback triggered when user changes preferences after consent has already been given
        },

        languages: {
            'en': {
                consent_modal: {
                    title: 'Cookies',
                    description: 'Vi anv??nder kakor f??r att s??kerst??lla att vi ger dig den b??sta upplevelsen p?? v??r webbplats. <button type="button" data-cc="c-settings" class="cc-link">L??t mig v??lja</button>',
                    primary_btn: {
                        text: 'Acceptera',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Nej tack',
                        role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'Cookie inst??llningar',
                    save_settings_btn: 'Spara inst??llningar',
                    accept_all_btn: 'Acceptera alla',
                    reject_all_btn: 'Avvisa alla',
                    close_btn_label: 'St??ng',
                    cookie_table_headers: [
                        {col1: 'Name'},
                        {col2: 'Domain'},
                        {col3: 'Expiration'},
                        {col4: 'Description'}
                    ],
                    blocks: [
                        {
                            title: 'Cookie anv??ndning',
                            description: 'Vi anv??nder kakor f??r att s??kerst??lla grundl??ggande funktioner p?? webbplatsen och f??r att f??rb??ttra din online-upplevelse. Du kan v??lja att v??lja in/ut f??r varje kategori n??r du vill. F??r mer information om kakor och annan k??nslig data, v??nligen l??s v??r fullst??ndiga <a href="'+ policy +'" class="cc-link">integritets policy</a>.'
                        }, {
                            title: 'Obligatoriska kakor',
                            description: 'Dessa cookies ??r n??dv??ndiga f??r sidans funktionallitet.',
                            toggle: {
                                value: 'necessary',
                                enabled: false,
                                readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                            }
                        }, {
                            title: 'Prestanda- och analyscookies',
                            description: 'Dessa cookies l??ter oss komma ih??g val som du tidigare har gjort p?? hemsidan.',
                            toggle: {
                                value: 'analytics',     // your cookie category
                                enabled: false,
                                readonly: false
                            },
                        }, {
                            title: 'Reklam cookies',
                            description: 'Dessa cookies samlar information om hur du anv??nder webbplatsen, vilka sidor du har bes??kt och vilka l??nkar du har klickat p??. All data ??r anonym och kan inte anv??ndas f??r att identifiera dig.',
                            toggle: {
                                value: 'targeting',
                                enabled: false,
                                readonly: false
                            }
                        }, {
                            title: 'Mer information',
                            description: 'Om du har n??gra fr??gor ang??ende v??r policy f??r cookies och dina valm??jligheter, v??nligen <a class="cc-link" href="'+ kontakt +'">kontakta oss</a>.',
                        }
                    ]
                }
            }
        }
    });
});
# Cookies popup

Lägg filen i 'assets/js'

Paste i header
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.9/dist/cookieconsent.css">
```

Paste i footer
```
<script src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.9/dist/cookieconsent.js"></script>
<script src="<?php echo get_theme_file_uri() . '/assets/js/cookies.js'; ?>"></script>
```

Knapp för att få upp inställningar
```
<a aria-label="View cookie settings" data-cc="c-settings">Cookie Inställningar</a>
```

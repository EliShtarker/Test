var countries = [
    { "text": "Israel", "value": "IL" },
    { "text": "France", "value": "FR" },
    { "text": "Russian Federation", "value": "RU" }
];
 
for (var i = 0; i < countries.length; i++) {
    countries[i].image = 'https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/' + countries[i].value.toLowerCase() + '.svg';
}
 
jSuites.dropdown(document.getElementById('dropdown'), {
    data: countries,
    autocomplete: true,
    multiple: false,
    width: '280px',
});
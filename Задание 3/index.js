const obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
}

for (const capital in obj) {
    alert(capital + '-это ' +  obj[capital])
}

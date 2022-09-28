const obj = {
    '200': 'Коля',
    '300': 'Вася',
    '400': 'Петя'
}

for (const capital in obj) {
    alert(obj[capital] + ' - зарплата ' + capital + ' долларов')
}

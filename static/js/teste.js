

const app = document.getElementById('raiz');
app.textContent = "";

const caixa = document.createElement('div');
//caixa.textContent = "Foi cirada";
caixa.setAttribute('class','caixa');
app.appendChild(caixa);

for (var i = 1; i <= 10; i++) {
    var c = document.createElement('div');
    c.setAttribute('class', 'artigos');
    caixa.appendChild(c);

    var t = document.createElement('h3');
    t.textContent = 'titulo ' + i;
    c.appendChild(t);

    var p = document.createElement('p');
    p.textContent = 'blá blá blá blá blá blá blá blá blá blá blá blá';
    c.appendChild(p);
}

// segundo filho


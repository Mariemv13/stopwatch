// Les variables dont on a besoin
var sp, btn_start, btn_stop, t, ms=0, s=0, mn=0, h=0;

// Fonction pour initialiser les variables quand la page se charge
window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementsById('start');
    btn_stop = document.getElementsById('stop');

    ms = 0, s = 0, mn = 0, h = 0;
}

// Mettre en place le compteur

function update_chrono(){
    ms+=1;
    if (ms == 10){
        ms=1;
        s+=1;
    }
    if (s==60){
        s=0;
        mn+=1;

    }
    if (mn==60){
        mn=0;
        h+=1;
    }
    // Insertion des valeurs dans les spans
    // [0] permet de selectionner le premier span
    // [1]                        le deuxieme span
    // [2]                        le troisieme span etc..

    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

// Mettre en place la fonction du bouton start

function start(){
    // Cette ligne de code execute la function update_chrono toutes les 100ms

    t = setInterval(update_chrono,100);
    btn_start.disabled = true;

}

// Stopper le choronometre

function stop(){
    clearInterval(t);//suppression de l'interval que nous avons crée
    btn_start.disabled = false; 
}

//  Initialiser les valeurs du compteur

function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    //ms = 0, s = 0, mn = 0, h = 0;
    // Inserer ces nouvelles valeurs dans les spans
    sp[0].innerHTML = 0 + "h";
    sp[1].innerHTML = 0 + "min";
    sp[2].innerHTML = 0 + "s";
    sp[3].innerHTML = 0 + "ms";
}
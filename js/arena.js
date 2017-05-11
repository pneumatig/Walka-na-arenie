// @ts-nocheck
$(document).ready(function () {
    // @ts-ignore
    // Welcome Msg

    log('Witaj na arenie Dragon Slayer!');
    log('Dzisiaj bedziesz napierdalal sie z ' + npc1.name + 'em' + ' oraz ' + npc2.name + 'em');
    log('Powodzenia ' + user.name + '!');

    // Jezeli Player nacisnie Atak

    $('#attack').click(function () {
        var npcBlock = 0;
        var npcAction = npc.action();

        if (npcAction == 'block') {  // Sprawdza czy npcAction() zwrocil 'blok'
            npcBlock = Math.floor(Math.random() * 2);
            log(npc.name + ' blok');
        }

        if (user.hit() == true) {                         // Sprawdza czy player trafil

            var dmgToNpc = (user.damage() * npcBlock);   // To jest dmg usera
            npc.hp = npc.hp - dmgToNpc;                  // Tutaj odejmuje dmg playera od hp npc'a
            log('Trafiles ' + npc.name + 'a' + ' za ' + dmgToNpc + ' hp');
            if (npcAction == 'block') {
                log(npc.name + ' zablokowal ' + npcBlock);
            }
        } else {

            log(npc.name + ' dodge');   //Wpisuje w konsoli Miss 
        }


        if (npcAction == 'attack') {

            if (npc.hit() == true) {
                var dmgToUser = npc.damage();
                user.hp -= dmgToUser;
                log(npc.name + ' trafil cie ' + ' za ' + dmgToUser);

            } else {

                log(user.name + ' dodge');
            }

        };
        
        log(user.name + ' ' + user.hp + 'hp left');
        log(npc.name + ' ' + npc.hp + 'hp left');
        
        // Liczy ile razy bylo klikniete i pozniej zwraca 0
        
        licznik += 1;
        if (licznik == 4) {
            clearLog();
            return licznik = 0;
        };
    });

    // Jezeli Player nacisnie Defend

    $('#defend').click(function () {



        // Liczy ile razy bylo klikniete i pozniej zwraca 0   
        licznik += 1;
        if (licznik == 6) {
            clearLog();
            return licznik = 0;
        };
    })
});

var clearLog = function () { // Czysci napisy w okienku
    $('#okienko').html('');
}

var log = function (log) { // Wyswietla napis w okienku
    $('#okienko').append('<p>' + log + '</p>')
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

var player = function (name, hp, armor, stamina) {   //Obiekt Player

    this.name = name;
    this.hp = 100;
    this.armor = 3;
    this.stamina = 100;

    this.hit = function () { // Odpowiada czy player trafil
        return Math.floor(Math.random() * 2) == 1; //Zwraca 0 lub 1
    }
    this.damage = function () {  // Odpowiada za DMG
        return Math.floor(Math.random() * 25);  //Zwraca od 0 do 15
    }
};

var npc = function (name, hp, armor, stamina) {   //Obiekt NPC
    this.name = name;
    this.hp = hp;
    this.armor = armor;
    this.stamina = stamina;

    this.hit = function () { // Odpowiada czy npc trafil
        return Math.floor(Math.random() * 2) == 1; // Zwraca 0 lub 1
    },

        this.damage = function () {  //Odpowiada za dmg npc
            return Math.floor(Math.random() * 25);  //Zwraca dmg od 0 do 15
        }

    this.action = function () {
        if (Math.floor(Math.random() * 2) == 0) {
            return 'attack';
        } return 'block';
    }
};



/////////////////////////////////////////////////////////////////////
// TWORZENIE OBIEKTOW ORAZ VAR//

var licznik = 0;
var npc1 = new npc('Gladiator', 100, 0, 80); // Nowy obiekt npc1
var npc2 = new npc('Gerald', 100, 2, 100);  // Nowy obiekt npc2
var user = new player('Ajzak Niuton');
var npc = npc1;

/////////////////////////////////////////////////////////////////////



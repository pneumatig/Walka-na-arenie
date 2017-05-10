// @ts-nocheck


$(document).ready(function () {
    log('Fight is ' + fight);
    // @ts-ignore
    $('#attack').click(function () {
        //duel();
        playerAttack();
        npcAttack();
        licznik += 1;  
        if(licznik == 5)    {
        clearLog();
        return licznik = 0;
        };
    });
    $('#defend').click(function (){
        playerDefend();
        licznik += 1;  
        if(licznik == 5)    {
        clearLog();
        return licznik = 0;
        };        
    })
});

var licznik = 0;
var clearLog = function()   {
        $('#okienko').html('');
}

var log = function(log) {
    $('#okienko').append('<p>' + log + '</p>').fadeIn('slow', 1000);
}

var player = new Object(); {
    player.name = 'Bruce Willis',
    player.hp = 100;
    player.armor = 2;
    player.stamina = 100;
    
    player.hit = function() {
        var ifHit = Math.floor(Math.random() * 2) == 1;
        if(ifHit == true) {
            player.stamina -= 10;
        }   else    {
            player.stamina -= 5;
        } 
        return ifHit;
    };

    player.damage = function() {
        return Math.floor(Math.random() * 33);
    }
};

var npc = function(name, hp, armor, stamina){
    this.name = name;
    this.hp = hp;
    this.armor = armor;
    this.stamina = stamina;
    
    this.hit = function() {
        return Math.floor(Math.random() * 2) == 1;
    }

    this.damage = function() {
        return Math.floor(Math.random() * 33);
    }
};

var npc1 = new npc('Gladiator', 100, 0, 80);
var npc2 = new npc('Gerald', 100, 2, 100);

var playerAttack = function() {
    if(player.hit() == true) {
        var ileDmg = player.damage();
        npc1.hp -= ileDmg; 
        log('Zadales ' + ileDmg + ' ' + 'dmg')
        log('Przeciwnikowi zostalo ' + npc1.hp + ' hp');
        return npc1.hp;
}   else    {
        return log('Player miss');
    }
}

//var npcPick = function() {

//}

var npcAttack = function() {
    if(npc1.hit() == true) {
        var ileDmg = npc1.damage();
        if(playerDefend() == true) {
            ileDmg -= 15;
            log('Zablokowales ' + ileDmg); // to nie dziala
            player.hp -= ileDmg;
        }   else    {
            player.hp -= ileDmg;
        }
        log(npc1.name + ' zadal tobie ' + ileDmg + ' dmg');
        log('Zostalo tobie ' + player.hp + ' hp');
        return player.hp;
    } else {
        return log(npc1.name + ' ' + 'miss');
    }
};

var playerDefend = function(){
    npcAttack();
    if(npc1.hit() == true) {
        //npc1.damage = 0; // Usunac to czy nie?
        log('Zablokowales Atak');
    }  
}

var npcDefend = function(){
    playerAttack();
    if(player.hit() == true) { // Nie skonczylem tutaj tego robic

    }
}

/*var exhaustPlayer = function(){
    if(hit == true) {
        player.stamina -= -10; 
    }
}

var exhaustNpc = function() { 
    if(hitNPC == true) {
        npc.stamina -= -10; // Zabiera stamine obydwu npc ?
    }
}*/

var fight = true;

/*var duel = function(){
    do{
        playerAttack();
        npcAttack();
    }   while(fight == true)    {
        if(player.hp <= 0)   {
            fight = false;
        } else if(npc1.hp <= 0) {
            fight = false;
        }    
    }
};
*/
'use strict';

let cards = new Array();

cards[0] = './Cards/archangels.png';
cards[1] = './Cards/AvgRed.png';
cards[2] = './Cards/Banshees.png';
cards[3] = './Cards/ForbiddenForest.png';
cards[4] = './Cards/JaqkRose.png';
cards[5] = './Cards/jetsetters.png';
cards[6] = './Cards/Mando.png';
cards[7] = './Cards/MartinWhite.png';
cards[8] = './Cards/MonarchsBlue.png';
cards[9] = './Cards/MoriBlack.png';
cards[10] = './Cards/MoriWhite.png';
cards[11] = './Cards/NationalReds.png';
cards[12] = './Cards/peanuts.png';
cards[13] = './Cards/SWBlue.png';
cards[14] = './Cards/SWRed.png';
cards[15] = './Cards/SWWhite.png';
cards[16] = './Cards/VictorianGreen.png';


let step = 0;

function next(){
    if(!document.images){
        return;
    }
    step >= 16 ? step = 0 : step++;
    document.images['card'].src = cards[step];
}

function last(){
    if(!document.images){
        return;
    }
    step <= 0 ? step = 16 : step--;
    document.images['card'].src = cards[step];
}

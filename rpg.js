
/*variables--------------------------------------------------------------------*/
/*variables---Inventory--------------------------------------------------------*/
var x;
var y;
var w;
var z;
var potionHp = 5;
var potionMp = 5;
var bomb = 5;
/*variables---triggers?--------------------------------------------------------*/
var action;
var target;
var retTarget;

/*variables---Characters-------------------------------------------------------*/
/*ChosenWarrior----------------------------------------------------------------*/
var warChosen = false;
var warCurrentHp;
var warMaxHp;
var warCurrentMp;
var warMaxMp;
var warCurrentStagger = 0;

var warStr;
var warDex;
var warInt;
/*ChosenWizard-----------------------------------------------------------------*/
var wizChosen = false;
var wizCurrentHp;
var wizMaxHp;
var wizCurrentMp;
var wizMaxMp;
var wizCurrentStagger = 0;

var wizStr;
var wizDex;
var wizInt;
/*ChosenRogue------------------------------------------------------------------*/
var rogChosen = false;
var rogCurrentHp;
var rogMaxHp;
var rogCurrentMp;
var rogMaxMp;
var rogCurrentStagger = 0 ;

var rogStr;
var rogDex;
var rogInt;


/*variables---Enemies----------------------------------------------------------*/
var enemies = ["assets/images/bandit.jpg", "assets/images/banditLeader.jpg", "assets/images/wolf.jpg"];
/*en0--------------------------------------------------------------------------*/
var en0CurrentHp = 0;
var en0MaxHp;
var en0CurrentMp;
var en0MaxMp;
var en0 = true;
/*en1--------------------------------------------------------------------------*/
var en1CurrentHp;
var en1MaxHp;
var en1CurrentMp;
var en1MaxMp;
var en1 = true;
/*en2--------------------------------------------------------------------------*/
var en2CurrentHp;
var en2MaxHp;
var en2CurrentMp;
var en2MaxMp;
var en2 = true;

/*variables---Misc-------------------------------------------------------------*/
enStagger = 0;


document.getElementById("potionHpRemaining").innerHTML = "X " + potionHp;
document.getElementById("potionMpRemaining").innerHTML = "X " + potionMp;
document.getElementById("bombRemaining").innerHTML = "X " + bomb;


/*Party creation --------------------------------------------------------------*/
/*modalWarriorSelector---------------------------------------------------------*/
// Get the modal
var modalWar = document.getElementById("myModalWarrior");
// Get the button that opens the modal
var btnWar = document.getElementById("BtnWarrior");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeWar")[0];
// When the user clicks the button, open the modal
btnWar.onclick = function() {
    modalWar.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalWar.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modalWar.style.display = "none";
    }
};
/*WarriorSelect----------------------------------------------------------------*/
document.getElementById("barbarianChoice").onclick =function(){
  document.getElementById("charImage1").src ="assets/images/barbarian.jpg";
  warMaxHp = 200;
  warCurrentHp = 200;
  warMaxMp = 25;
  warCurrentMp = 25;
  document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
  document.getElementById("warMaxHp").innerHTML = warMaxHp;
  document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
  document.getElementById("warMaxMp").innerHTML = warMaxMp;
  document.getElementById("rage").style.display = "flex";
  document.getElementById("BtnWarrior").style.display = "none";
  modalWar.style.display = "none";
  $("#mainText").prepend("A barbarian has joined your cause!<br><br>");
  warChosen = true;
};
document.getElementById("crusaderChoice").onclick =function(){
  document.getElementById("charImage1").src ="assets/images/crusader.jpg";
  warMaxHp = 175;
  warCurrentHp = 175;
  warMaxMp = 40;
  warCurrentMp = 40;
  document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
  document.getElementById("warMaxHp").innerHTML = warMaxHp;
  document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
  document.getElementById("warMaxMp").innerHTML = warMaxMp;
  document.getElementById("inspire").style.display = "flex";
  document.getElementById("BtnWarrior").style.display = "none";
  modalWar.style.display = "none";
  $("#mainText").prepend("A crusader pledges themself to your cause!<br><br>");
  warChosen = true;
};
document.getElementById("hellKnightChoice").onclick =function(){
  document.getElementById("charImage1").src ="assets/images/hellKnight.jpg";
  warMaxHp = 250;
  warCurrentHp = 250;
  warMaxMp = 50;
  warCurrentMp = 50;
  document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
  document.getElementById("warMaxHp").innerHTML = warMaxHp;
  document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
  document.getElementById("warMaxMp").innerHTML = warMaxMp;
  document.getElementById("darkStrike").style.display = "flex";
  document.getElementById("BtnWarrior").style.display = "none";
  modalWar.style.display = "none";
  $("#mainText").prepend("A Hell Knight will aid you... for now.<br><br>");
  warChosen = true;
};


/*modalWizardSelector----------------------------------------------------------*/
var modalWiz = document.getElementById("myModalWizard");
var btnWiz = document.getElementById("BtnWizard");
var spanWiz = document.getElementsByClassName("closeWiz")[0];
btnWiz.onclick = function(){
  modalWiz.style.display = "block";
};
spanWiz.onclick = function() {
    modalWiz.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modalWiz.style.display = "none";
    }
};
/*WizardSelect----------------------------------------------------------------*/
document.getElementById("clericChoice").onclick =function(){
  document.getElementById("charImage2").src ="assets/images/cleric.jpg";
  wizMaxHp = 125;
  wizCurrentHp = 125;
  wizMaxMp = 80;
  wizCurrentMp = 80;
  document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
  document.getElementById("wizMaxHp").innerHTML = wizMaxHp;
  document.getElementById("wizCurrentMp").innerHTML = wizCurrentMp;
  document.getElementById("wizMaxMp").innerHTML = wizMaxMp;
  document.getElementById("heal").style.display = "flex";
  document.getElementById("BtnWizard").style.display = "none";
  modalWiz.style.display = "none";
  $("#mainText").prepend("The Gods have sent a holy man to aid you.<br><br>");
  wizChosen = true;
};
document.getElementById("blackMageChoice").onclick =function(){
  document.getElementById("charImage2").src ="assets/images/blackMage.jpg";
  wizMaxHp = 100;
  wizCurrentHp = 100;
  wizMaxMp = 100;
  wizCurrentMp = 100;
  document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
  document.getElementById("wizMaxHp").innerHTML = wizMaxHp;
  document.getElementById("wizCurrentMp").innerHTML = wizCurrentMp;
  document.getElementById("wizMaxMp").innerHTML = wizMaxMp;
  document.getElementById("fire").style.display = "flex";
  document.getElementById("BtnWizard").style.display = "none";
  modalWiz.style.display = "none";
  $("#mainText").prepend("Energy crackles around you as a black mage nods in agreement.<br><br>");
  wizChosen = true;
};
document.getElementById("alchemistChoice").onclick =function(){
  document.getElementById("charImage2").src ="assets/images/alchemist.png";
  wizMaxHp = 150;
  wizCurrentHp = 150;
  wizMaxMp = 60;
  wizCurrentMp = 60;
  document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
  document.getElementById("wizMaxHp").innerHTML = wizMaxHp;
  document.getElementById("wizCurrentMp").innerHTML = wizCurrentMp;
  document.getElementById("wizMaxMp").innerHTML = wizMaxMp;
  document.getElementById("cocktail").style.display = "flex";
  document.getElementById("BtnWizard").style.display = "none";
  modalWiz.style.display = "none";
  $("#mainText").prepend("Nevermind the scorch marks on the front lawn... or the missing fingers... this alchemist clearly knows what they're doing!<br><br>");
  wizChosen = true;
};


/*modalRogueSelector----------------------------------------------------------*/
var modalRog = document.getElementById("myModalRogue");
var btnRog = document.getElementById("BtnRogue");
var spanRog = document.getElementsByClassName("closeRog")[0];
btnRog.onclick = function(){
  modalRog.style.display = "block";
};
spanRog.onclick = function() {
    modalRog.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modalRog) {
        modalRog.style.display = "none";
    }
};
/*RogueSelect----------------------------------------------------------------*/
document.getElementById("assassinChoice").onclick =function(){
  document.getElementById("charImage3").src ="assets/images/assassin.jpg";
  rogMaxHp = 110;
  rogCurrentHp = 110;
  rogMaxMp = 50;
  rogCurrentMp = 50;
  document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
  document.getElementById("rogMaxHp").innerHTML = rogMaxHp;
  document.getElementById("rogCurrentMp").innerHTML = rogCurrentMp;
  document.getElementById("rogMaxMp").innerHTML = rogMaxMp;
  document.getElementById("eviscerate").style.display ="flex";
  document.getElementById("BtnRogue").style.display = "none";
  modalRog.style.display = "none";
  $("#mainText").prepend("So he didn't say anything to you... but you aren't dead! so there's that.<br><br>");
  rogChosen = true;
};
document.getElementById("rangerChoice").onclick =function(){
  document.getElementById("charImage3").src ="assets/images/ranger.jpg";
  rogMaxHp = 140;
  rogCurrentHp = 140;
  rogMaxMp = 40;
  rogCurrentMp = 40;
  document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
  document.getElementById("rogMaxHp").innerHTML = rogMaxHp;
  document.getElementById("rogCurrentMp").innerHTML = rogCurrentMp;
  document.getElementById("rogMaxMp").innerHTML = rogMaxMp;
  document.getElementById("headShot").style.display = "flex";
  document.getElementById("BtnRogue").style.display = "none";
  modalRog.style.display = "none";
  $("#mainText").prepend("He made you ask his wolf for approval, but that one wolf means he still has more friends than you.<br><br>");
  rogChosen = true;
};
document.getElementById("thiefChoice").onclick = function(){
  document.getElementById("charImage3").src ="assets/images/thief.jpg";
  rogMaxHp = 125;
  rogCurrentHp = 125;
  rogMaxMp = 45;
  rogCurrentMp = 45;
  document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
  document.getElementById("rogMaxHp").innerHTML = rogMaxHp;
  document.getElementById("rogCurrentMp").innerHTML = rogCurrentMp;
  document.getElementById("rogMaxMp").innerHTML = rogMaxMp;
  document.getElementById("mug").style.display = "flex";
  document.getElementById("BtnRogue").style.display = "none";
  modalRog.style.display = "none";
  $("#mainText").prepend("Dear Diary, I'm not so sure about this thief. He didn't even once try to go for my coinpurse. He fumbled his daggers a few times. Shoddy work. One moment, I need to get my second ink vial to finish this mes.......*damnit*<br><br>");
  rogChosen =true;
};

//ITEM FUNCTIONS---------------------------------------------------------------*/
$("#potionHp").click(function(){

  if(potionHp>0){
  action = "healthPotion";
  potionHp--;
  document.getElementById("potionHpRemaining").innerHTML = "X " + potionHp;
  modalInv.style.display = "none";
  document.getElementById("allies").style.display ="inline-block";
  document.getElementById("enemies").style.display ="inline-block";
}});

$("#potionMp").click(function(){
  if(potionMp>0){
    action = "manaPotion";
    potionMp--;
    document.getElementById("potionMpRemaining").innerHTML = "X " + potionMp;
    modalInv.style.display = "none";
    document.getElementById("allies").style.display ="inline-block";
    document.getElementById("enemies").style.display ="inline-block";
}});

$("#bomb").click(function(){
  if(bomb>0){
  action = "bomb";
  bomb--;
  document.getElementById("bombRemaining").innerHTML = "X " + bomb;
  modalInv.style.display = "none";
  document.getElementById("allies").style.display ="inline-block";
  document.getElementById("enemies").style.display ="inline-block";
}});
/*GENERIC ACTIONS--------------------------------------------------------------*/
$(".normalAtk").click(function(){
 action = "normalAttack";
 document.getElementById("allies").style.display ="inline-block";
 document.getElementById("enemies").style.display ="inline-block";
});
$(".heavyAtk").click(function(){
 action = "heavyAttack";
 document.getElementById("allies").style.display ="inline-block";
 document.getElementById("enemies").style.display ="inline-block";
});
$(".fastAtk").click(function(){
 action = "fastAttack";
 document.getElementById("allies").style.display ="inline-block";
 document.getElementById("enemies").style.display ="inline-block";
});

/*WARRIOR SPECIALS-------------------------------------------------------------*/
$("#inspire").click(function(){
  action = inspire;
  if(warCurrentMp < 6){
  do$("#mainText").prepend("Your crusader does not have enough mana!<br><br>");
}else{
  warChosen=false;
  warCurrentMp -= 6;
  document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
  warCurrentHp += 10;
  document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
  wizCurrentHp += 10;
  document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
  rogCurrentHp += 10;
  document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
  warCurrentStagger -= 2;
  wizCurrentStagger -= 2;
  rogCurrentStagger -= 2;
  $("#mainText").prepend("Your party's resolve has increased! 10 hp restored. Stagger reduced.<br><br>");
  retaliation();
}});
$("#rage").click(function(){
  if(warCurrentMp<5){
$("#mainText").prepend("your barbarian does not have enough mana...<br><br>");
  }else{
    warChosen=false;
    warCurrentMp -=5;
    document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
    action = "rage";
    document.getElementById("allies").style.display ="inline-block";
    document.getElementById("enemies").style.display ="inline-block";
}});
$("#darkStrike").click(function(){
  if(warCurrentMp<5){
    ("#mainText").prepend("your Hell Knight lacks the mana for that!<br><br>");
  }else{
    warChosen=false;
    warCurrentMp -=5;
    document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
    action = "darkStrike";
    document.getElementById("allies").style.display ="block";
    document.getElementById("enemies").style.display ="block";
}});
/*WIZARD SPECIALS--------------------------------------------------------------*/
//health not sticking
$("#heal").click(function(){
  if(wizCurrentMp<7){
    $("#mainText").prepend("Your Cleric cannot muster the energy...<br><br>");
  }else{
    wizChosen=false;
    wizCurrentMp -=7;
    document.getElementById("wizCurrentMp").innerHTML = wizCurrentMp;
  action = "heal";
  document.getElementById("allies").style.display ="block";
  document.getElementById("enemies").style.display ="block";
}});
$("#fire").click(function(){
if(wizCurrentMp<10){
  $("#mainText").prepend("Your party Black Mage lacks the mana...<br><br>");
}else{
  action = "fire";
  wizCurrentMp -= 10;
  document.getElementById("wizCurrentMp").innerHTML = wizCurrentMp;
  en0CurrentHp -= 10;
  document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
  en1CurrentHp -= 10;
  document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
  en2CurrentHp -= 10;
  document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
  $("#mainText").prepend("Fire erupts around your foes dealing 10 damage!<br><br>");
  retaliation();
  enStagger++;
  wizChosen=false;
}
});
$("#cocktail").click(function(){
  if(wizCurrentMp<10){
    $("#mainText").prepend("Your alchemist needs more mana to do that.<br><br>");
  }else{
    wizChosen=false;
    wizCurrentMp-=10;
    document.getElementById("wizCurrentMp").innerHTML = wizCurrentMp;
    action = cocktail;
  var mystery =Math.floor(Math.random()*100);
  if(mystery<=10){
    document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
    warCurrentHp -= 10;
    warCurrentStagger++;
    document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
    wizCurrentHp -= 10;
    wizCurrentStagger++;
    document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
    rogCurrentHp -= 10;
    rogCurrentStagger++;
    document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
    $("#mainText").prepend("The chemical concoction erupts early!<br><br>");
  }else if(mystery<=20){
    warCurrentHp += 10;
    document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
    wizCurrentHp += 10;
    document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
    rogCurrentHp += 10;
    document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
    $("#mainText").prepend("A soothing mist heals your parties wounds.<br><br>");
  }else if(mystery<=30){
    enemyStagger +=21;
    $("#mainText").prepend("Your opponents are caught in paralyzing fumes.<br><br>");
  }else if(mystery<=40){
    warCurrentMp += 10;
    document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
    wizCurrentMp += 10;
    document.getElementById("wizCurrentHp").innerHTML = wizCurrentMp;
    rogCurrentMp += 10;
    document.getElementById("rogCurrentHp").innerHTML = rogCurrentMp;
    $("#mainText").prepend("Strange energies restore your parties mana.<br><br>");
  }else{
    document.getElementById("wizCurrentMp").innerHTML = wizCurrentMp;
    en0CurrentHp -= 10;
    document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
    en1CurrentHp -= 10;
    document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
    en2CurrentHp -= 10;
    document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
    enStagger++;
    $("#mainText").prepend("Alchemical fire consumes your foes dealing 10 damage!<br><br>");
  }
  retaliation();
  }});
/*ROGUE SPECIALS---------------------------------------------------------------*/
$("#eviscerate").click(function(){
  if(rogCurrentMp<4){
    $("#mainText").prepend("Your assassin needs more mana to do that.<br><br>");
  }else{
    rogChosen=false;
    rogCurrentMp -=4;
    document.getElementById("rogCurrentMp").innerHTML = rogCurrentMp;
  action = "eviscerate";
  document.getElementById("allies").style.display ="block";
  document.getElementById("enemies").style.display ="block";

}});
$("#headShot").click(function(){
  if(rogCurrentMp<4){
    $("#mainText").prepend("Your ranger needs more mana to do that.<br><br>");
  }else{
    rogChosen = false;
    rogCurrentMp -=4;
    document.getElementById("rogCurrentMp").innerHTML = rogCurrentMp;
  action = "headShot";
  document.getElementById("allies").style.display ="inline-block";
  document.getElementById("enemies").style.display ="inline-block";

}});
$("#mug").click(function(){
  if(rogCurrentMp<4){
    $("#mainText").prepend("Your thief needs more mana to do that.<br><br>");
  }else{
    rogChosen=false;
    rogCurrentMp -=4;
    document.getElementById("rogCurrentMp").innerHTML = rogCurrentMp;
  action = "mug";
  document.getElementById("allies").style.display ="inline-block";
  document.getElementById("enemies").style.display ="inline-block";

}});

/*PRIMARY TARGETS--------------------------------------------------------------*/
$("#allies").click(function(){
  document.getElementById("allies").style.display ="none";
  document.getElementById("enemies").style.display ="none";
  document.getElementById("allyTop").style.display = "inline-block";
  document.getElementById("allyMid").style.display = "inline-block";
  document.getElementById("allyBot").style.display = "inline-block";
});

$("#enemies").click(function(){
  document.getElementById("allies").style.display ="none";
  document.getElementById("enemies").style.display ="none";
  document.getElementById("enTop").style.display = "inline-block";
  document.getElementById("enMid").style.display = "inline-block";
  document.getElementById("enBot").style.display = "inline-block";
});

/*SECONDARYTARGETS-------------------------------------------------------------*/
$("#allyTop").click(function(){
  target = 0;
  closeTargets();
  actions(warCurrentHp, "warCurrentHp", warCurrentMp, "warCurrentMp");
  retaliation();
  targetChoice();
});
$("#allyMid").click(function(){
  target = 1;
  closeTargets();
  actions(wizCurrentHp, "wizCurrentHp", wizCurrentMp, "wizCurrentMp");
  retaliation();
  targetChoice();

});
$("#allyBot").click(function(){
  target =2;
  closeTargets();
  actions(rogCurrentHp, "rogCurrentHp", rogCurrentMp, "rogCurrentMp");
  retaliation();
  targetChoice();
});
$("#enTop").click(function(){
    target = 3;
  closeTargets();
  actions(en0CurrentHp, "en0CurrentHp", en0CurrentMp, "en0CurrentMp");
  targetChoice();
  retaliation();

});
$("#enMid").click(function(){
  target = 4;
  closeTargets();
  actions(en1CurrentHp, "en1CurrentHp", en1CurrentMp, "en0CurrentMp");
  retaliation();
  targetChoice();
});
$("#enBot").click(function(){
  target = 5;
  closeTargets();
  actions(en2CurrentHp, "en2CurrentHp", en2CurrentMp, "en2CurrentMp");
  retaliation();
  targetChoice();
});

/*POST COMBAT------------------------------------------------------------------*/
$("#allClear").click(function(){
if(en0CurrentHp<=0 && en1CurrentHp<=0 && en2CurrentHp<=0){
  $("#mainText").prepend("The area is secure. What next?<br><br>");
  document.getElementById("allClear").style.display = "none";
  document.getElementById("ventureForth").style.display = "none";
  document.getElementById("rest").style.display = "block";
  document.getElementById("search").style.display = "block";
}else{
  $("#mainText").prepend("There are still enemies nearby!<br><br>");
}
});

$("#rest").click(function(){
  $("#mainText").prepend("your party earns some much needed respite.<br><br>");
  warCurrentHp += 20;
  document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
  warCurrentMp += 20;
  document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
  wizCurrentHp += 20;
  document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
  wizCurrentMp += 20;
  document.getElementById("wizCurrentMp").innerHTML = wizCurrentMp;
  rogCurrentHp += 20;
  document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
  rogCurrentMp += 20;
  document.getElementById("rogCurrentMp").innerHTML = rogCurrentMp;
  document.getElementById("rest").style.display = "none";
  document.getElementById("search").style.display = "none";
  document.getElementById("ventureForth").style.display = "block";
});

$("#search").click(function(){
  var events = Math.floor(Math.random()*100);
  if (events<= 3){
    $("#mainText").prepend("your warrior stepped on a bear trap!<br><br>");
    warCurrentHp -= 20;
    warCurrentStagger +=5;
    document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if (events <= 6){
    $("#mainText").prepend("your wizard misread an incantation!<br><br>");
    wizCurrentHp -=5;
    document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
    wizCurrentMP -=10;
    wizCurrentStagger +=5;
    document.getElementById("wizCurrentMP").innerHTML = wizCurrentMP;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if (events <= 10){
    $("#mainText").prepend("your rogue was caught stealing!<br><br>");
    potionHp -=2;
    document.getElementById("potionHpRemaining").innerHTML = potionHp;
    potionMp -=2;
    document.getElementById("potionMpRemaining").innerHTML = potionMp;
    bomb -=2;
    rogCurrentStagger +=5;
    document.getElementById("bombRemaining").innerHTML = bomb;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if (events <= 25){
    $("#mainText").prepend("you find an abandoned pouch!<br><br>");
    potionHp +=1;
    document.getElementById("potionHpRemaining").innerHTML = potionHp;
    potionMp +=1;
    document.getElementById("potionMpRemaining").innerHTML = potionMp;
    bomb +=1;
    document.getElementById("bombRemaining").innerHTML = bomb;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if(events <= 50){
    $("#mainText").prepend("a friendly villager offers aid and gives you health potions!<br><br>");
    potionHp +=5;
    document.getElementById("potionHpRemaining").innerHTML = potionHp;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if(events <=50){
    $("#mainText").prepend("your rogue finds an explosives caches!<br><br>");
    bomb +=5;
    document.getElementById("bombRemaining").innerHTML = bomb;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if(events <=75){
    $("#mainText").prepend("your wizard conjures more mana potions!<br><br>");
    potionMp +=5;
    document.getElementById("potionMpRemaining").innerHTML = potionMp;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if (events <= 95){
    $("#mainText").prepend("An unseen force guides you!<br><br>");
    potionHp +=5;
    document.getElementById("potionHpRemaining").innerHTML = potionHp;
    potionMp +=5;
    document.getElementById("potionMpRemaining").innerHTML = potionMp;
    bomb +=5;
    document.getElementById("bombRemaining").innerHTML = bomb;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else{
    $("#mainText").prepend("after searching, you find... nothing...!<br><br>");
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }
});



$("#ventureForth").click(function enemyGen(){
  document.getElementById("ventureForth").style.display = "none";
  document.getElementById("allClear").style.display = "block";
  var selector0 = Math.floor(Math.random()*(enemies.length));
  document.getElementById("enemyImage0").src = enemies[selector0];
  if(enemies[selector0] === enemies[0]){
    en0MaxHp = 30;
    en0CurrentHp = 30;
    en0MaxMp = 10;
    en0CurrentMp = 10;
    document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
    document.getElementById("en0MaxHp").innerHTML = en0MaxHp;
    document.getElementById("en0CurrentMp").innerHTML = en0CurrentMp;
    document.getElementById("en0MaxMp").innerHTML = en0MaxMp;
  }else if(enemies[selector0] === enemies[1]){
     en0MaxHp = 50;
     en0CurrentHp = 50;
     en0MaxMp = 10;
     en0CurrentMp = 10;
    document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
    document.getElementById("en0MaxHp").innerHTML = en0MaxHp;
    document.getElementById("en0CurrentMp").innerHTML = en0CurrentMp;
    document.getElementById("en0MaxMp").innerHTML = en0MaxMp;
  }else if(enemies[selector0] === enemies[2]){
    en0MaxHp = 20;
    en0CurrentHp = 20;
    en0MaxMp = 5;
    en0CurrentMp = 5;
    document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
    document.getElementById("en0MaxHp").innerHTML = en0MaxHp;
    document.getElementById("en0CurrentMp").innerHTML = en0CurrentMp;
    document.getElementById("en0MaxMp").innerHTML = en0MaxMp;
  }
  /*secondEnemy*/
  var selector1 = Math.floor(Math.random()*(enemies.length));
  document.getElementById("enemyImage1").src =enemies[selector1];
  if(enemies[selector1] === enemies[0]){
    en1MaxHp = 30;
    en1CurrentHp = 30;
    en1MaxMp = 10;
    en1CurrentMp = 10;
    document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
    document.getElementById("en1MaxHp").innerHTML = en1MaxHp;
    document.getElementById("en1CurrentMp").innerHTML = en1CurrentMp;
    document.getElementById("en1MaxMp").innerHTML = en1MaxMp;
  }else if(enemies[selector1] === enemies[1]){
    en1MaxHp = 50;
    en1CurrentHp = 50;
    en1MaxMp = 10;
    en1CurrentMp = 10;
    document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
    document.getElementById("en1MaxHp").innerHTML = en1MaxHp;
    document.getElementById("en1CurrentMp").innerHTML = en1CurrentMp;
    document.getElementById("en1MaxMp").innerHTML = en1MaxMp;
  }else if( enemies[selector1] === enemies[2]){
    en1MaxHp = 20;
    en1CurrentHp = 20;
    en1MaxMp = 5;
    en1CurrentMp = 5;
    document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
    document.getElementById("en1MaxHp").innerHTML = en1MaxHp;
    document.getElementById("en1CurrentMp").innerHTML = en1CurrentMp;
    document.getElementById("en1MaxMp").innerHTML = en1MaxMp;
  }
/*thirdEnemy*/
  var selector2 = Math.floor(Math.random()*(enemies.length));
  document.getElementById("enemyImage2").src =enemies[selector2];
  if(enemies[selector2] === enemies[0]){
    en2MaxHp = 30;
    en2CurrentHp = 30;
    en2MaxMp = 10;
    en2CurrentMp = 10;
    document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
    document.getElementById("en2MaxHp").innerHTML = en2MaxHp;
    document.getElementById("en2CurrentMp").innerHTML = en2CurrentMp;
    document.getElementById("en2MaxMp").innerHTML = en2MaxMp;
  }else if(enemies[selector2] === enemies[1]){
    en2MaxHp = 50;
    en2CurrentHp = 50;
    en2MaxMp = 10;
    en2CurrentMp = 10;
    document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
    document.getElementById("en2MaxHp").innerHTML = en2MaxHp;
    document.getElementById("en2CurrentMp").innerHTML = en2CurrentMp;
    document.getElementById("en2MaxMp").innerHTML = en2MaxMp;
  }else if(enemies[selector2] === enemies[2]){
    en2MaxHp = 20;
    en2CurrentHp = 20;
    en2MaxMp = 5;
    en2CurrentMp = 5;
    document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
    document.getElementById("en2MaxHp").innerHTML = en2MaxHp;
    document.getElementById("en2CurrentMp").innerHTML = en2CurrentMp;
    document.getElementById("en2MaxMp").innerHTML = en2MaxMp;
  }
});

/*Modalinventory---------------------------------------------------------------------------------------*/
var modalInv = document.getElementById("myInventory");
var btnInv = document.getElementById("warItems");
var spanInv = document.getElementsByClassName("closeInv")[0];
warItems.onclick = function(){
  modalInv.style.display = "block";
};
rogItems.onclick = function(){
  modalInv.style.display = "block";
};
wizItems.onclick = function(){
  modalInv.style.display = "block";
};
spanInv.onclick = function() {
    modalInv.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modalInv) {
        modalInv.style.display = "none";
    }
};

/*function declaration---------------------------------------------------------*/
function actions(x,y,w,z){
  console.log("739:start actions function x = " + x);
  if(action === "healthPotion"){
    healthPotion(x,y,w,z);
  }else if(action === "manaPotion"){
    manaPotion(x,y,w,z);
  }else if(action === "bomb"){
    bombFunc(x,y,w,z);
  }else if(action === "normalAttack"){
    normalAttack(x,y,w,z);
  }else if(action === "heavyAttack"){
    heavyAttack(x,y,w,z);
  }else if(action === "fastAttack"){
    fastAttack(x,y,w,z);
  }else if(action === "inspire"){
    inspire(x,y,w,z);
  }else if(action === "rage"){
    rage(x,y,w,z);
  }else if(action === "darkStrike"){
    darkStrike(x,y,w,z);
  }else if(action === "heal"){
    heal(x,y,w,z);
  }else if(action === "fire"){
    fire(x,y,w,z);
  }else if(action === "cocktail"){
    cocktail(x,y,w,z);
  }else if(action === "mug"){
    mug(x,y,w,z);
  }else if(action === "eviscerate"){
    eviscerate(x,y,w,z);
  }else if(action === "headShot"){
    headShot(x,y,w,z);
  }
}
function targetChoice(){
  console.log("target = "+target);
  if(target === 0){
    warCurrentHp = window.x;
  }else if(target === 1){
    wizCurrentHp = window.x;
  }else if(target === 2){
    rogCurrentHp = window.x;
  }else if(target === 3){
    en0CurrentHp = window.x;
  }else if(target === 4){
    en1CurrentHp = window.x;
  }else if(target === 5){
    en2CurrentHp = window.x;
  }else{
    alert("targetChoice Error");
  }
}

function healthPotion(x,y,w,z){
  x += 25;
  window.x = x;
  document.getElementById(y).innerHTML = x;
}

function manaPotion(x,y,w,z){
  w += 15;
  window.w = w;
  document.getElementById(z).innerHTML = window.w;
}

function bombFunc(x,y,w,z){
  x -= 20;
  window.x = x;
  document.getElementById(y).innerHTML = x;
  enStagger++;
}

function normalAttack(x,y,w,z){
  var atkConfirm = Math.floor(Math.random()*(100)+1);
  if(atkConfirm <= 15){
    window.x = x;
    $("#mainText").prepend("your hero missed!<br><br>");
  }else{
    var normalAtk = Math.floor(Math.random()*(10)+1);
    x -= normalAtk;
    window.x = x;
    document.getElementById(y).innerHTML = x;
    enStagger++;
    $("#mainText").prepend("your hero did " +normalAtk+" damage!<br><br>");
  }
}

function heavyAttack(x,y,w,z){
  var atkConfirm = Math.floor(Math.random()*(100)+1);
  if(atkConfirm <= 30){
    window.x = x;
    $("#mainText").prepend("your hero missed!<br><br>");
  }else{
    var heavyAtk = Math.floor(Math.random()*(20)+1);
    x -= heavyAtk;
    window.x = x;
    enStagger +=3;
    $("#mainText").prepend("your hero slammed the target for "+heavyAtk+" damage.<br><br>");
    document.getElementById(y).innerHTML = x;
  }
}

function fastAttack(x,y,w,z){
  var flurry= Math.floor(Math.random*5+1);
  for( i=0; i<flurry; i++){
  var atkConfirm = Math.floor(Math.random()*(100)+1);
  if(atkConfirm <= 20){
      window.x = x;
      $("#mainText").prepend("your hero missed!<br><br>");
    }else{
      var fastAtk = Math.floor(Math.random()*(3)+1);
    x -= fastAtk;
    window.x = x;
    enStagger++;
      $("#mainText").prepend("your hero lashed out for "+fastAtk+" damage.<br><br>");
    document.getElementById(y).innerHTML = x;
    }
}}

function rage(x,y,w,z){
  var rageAtk = Math.floor(Math.random()*5 + ((warMaxHp/warCurrentHp)*(Math.random()*7)));
  x -= rageAtk;
  window.x = x;
  enStagger++;
  document.getElementById(y).innerHTML = x;
  $("#mainText").prepend("Your Barbarian rages for "+rageAtk+" damage!<br><br>");
}

function darkStrike(x,y,w,z){
  var dSAtk = Math.floor(Math.random()*30+5);
  x -= dSAtk;
  window.x = x;
  enStagger++;
  document. getElementById(y).innerHTML = x;
  warCurrentHp -= (dSAtk/4);
  document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
  $("#mainText").prepend("The Hell Knight deals "+dSAtk+" damage, but is wracked with dark energies!<br><br>");
}

function heal(x,y,w,z){
  var heal = Math.floor(Math.random()*10+30);
  x += heal;
  window.x = x;
  document.getElementById(y).innerHTML = x;
  $("#mainText").prepend("A divine force invigorates the Clerics target for "+heal+" health!<br><br>");
}

function mug(x,y,w,z){
  var steal = Math.floor(Math.random()*100+1);
  var mAtk = Math.floor(Math.random()*5+3);
  enStagger++;
  if( steal <=25){
    $("#mainText").prepend("Your thief failed to steal anything.<br><br>");
  }else if(steal <=50){
    potionHp++;
    document.getElementById("potionHpRemaining").innerHTML = potionHp;
    $("#mainText").prepend("your thief stole a health potion!<br><br>");
  }else if(steal <= 75){
    potionMp++;
    document.getElementById("potionMpRemaining").innerHTML = potionMp;
    $("#mainText").prepend("your thief stole a mana potion!<br><br>");
  }else{
    bomb++;
    document.getElementById("bombRemaining").innerHTML = bomb;
    $("#mainText").prepend("your thief stole a bomb!<br><br>");
  }
  x -= mAtk;
  window.x = x;
  document. getElementById(y).innerHTML = x;
  enStagger ++;
  console.log(enStagger);
  document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
  $("#mainText").prepend("Your ranger stikes a devastating blow for "+mAtk+" damage!<br><br>");
}

function headShot(x,y,w,z){
  var hSAtk = Math.floor(Math.random()*15);
  x -= hSAtk;
  window.x = x;
  document. getElementById(y).innerHTML = x;
  enStagger +=8;
  console.log(enStagger);
  document.getElementById("warCurrentHp").innerHTML = x;
  $("#mainText").prepend("Your ranger stikes a devastating blow for "+hSAtk+" damage!<br><br>");
}
function eviscerate(x,y,w,z){
  var eAtk = Math.floor(Math.random()*18);
  if(eAtk>=17){
    x = 0;
    window.x = x;
    document.getElementById(y).innerHTML = x;
    $("#mainText").prepend("Your assassin strikes a vital point!");
  }else{
      x-= eAtk;
      window.x = x;
      document.getElementById(y).innerHTML = x;
      $("#mainText").prepend("Your assassin deals "+eAtk+" damage<br><br>");
  }

}
/*-----------------------------------------------------------------------------*/
function retaliation(){
  console.log("en0= "+en0);
  console.log("en1= "+en1);
  console.log("en2= "+en2);
  console.log("retaliation triggers");
  var retTarget = Math.floor(Math.random()*4);
  var staggerCheck = Math.floor(Math.random()*8+1);
  var attack = Math.floor(Math.random()*5+7);
  if(en0 === true){
    console.log("en0triggers");
    if(staggerCheck < enStagger){
      console.log("enemyStaggered");
      enStagger -=8;
      en0 = false;
      console.log(en0);
      $("#mainText").prepend("your foe is staggered!<br><br>");
    }else{
      console.log("enemynotstaggered");
      if(retTarget === 0){
        warCurrentHp -=attack;
        document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
        warCurrentStagger++;
        $("#mainText").prepend("your warrior was struck for " +attack+ " damage!<br><br>");
        en0 = false;
        console.log(en0);
      }else if(retTarget ===1){
        wizCurrentHp -=attack;
        document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
        wizCurrentStagger++;
        $("#mainText").prepend("your wizard was struck for " +attack+ " damage!<br><br>");
        en0 = false;
        console.log(en0);
      }else if(retTarget ===3){
        rogCurrentHp -=attack;
        document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
        rogCurrentStagger++;
        $("#mainText").prepend("your rogue was struck for " +attack+ " damage!<br><br>");
        en0 = false;
        console.log(en0);
      }
    }

  }else if (en1 ===true){
    console.log("en1triggers");
    if(staggerCheck < enStagger){
      enStagger -=8;
      en1 = false;
      $("#mainText").prepend("your foe is staggered!<br><br>");
    }else{
      if(retTarget === 0){
        warCurrentHp -=attack;
        document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
        warCurrentStagger++;
        $("#mainText").prepend("your warrior was struck for " +attack+ " damage!<br><br>");
        en1 = false;
      }else if(retTarget ===1){
        wizCurrentHp -=attack;
        document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
        wizCurrentStagger++;
        $("#mainText").prepend("your wizard was struck for " +attack+ " damage!<br><br>");
        en1 = false;
      }else if(retTarget ===3){
        rogCurrentHp -=attack;
        document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
        rogCurrentStagger++;
        $("#mainText").prepend("your rogue was struck for " +attack+ " damage!<br><br>");
        en1 = false;
      }


  }}else if (en2 === true){
    console.log("en1triggers");
    if(staggerCheck < enStagger){
      enStagger -=8;
      en2 = false;
    }else{
      if(retTarget === 0){
        warCurrentHp -=attack;
        document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
        warCurrentStagger++;
        $("#mainText").prepend("your warrior was struck for " +attack+ " damage!<br><br>");
        en2 = false;

      }else if(retTarget ===1){
        wizCurrentHp -=attack;
        document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
        wizCurrentStagger++;
        $("#mainText").prepend("your wizard was struck for " +attack+ " damage!<br><br>");
        en2 = false;

      }else if(retTarget ===3){
        rogCurrentHp -=attack;
        document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
        rogCurrentStagger++;
        $("#mainText").prepend("your rogue was struck for " +attack+ " damage!<br><br>");
        en2 = false;
}}}
  if(en0 === false && en1 === false && en2 === false){
    if(en0CurrentHp > 0){
      en0 = true;
    }
    if(en1CurrentHp > 0){
      en1 = true;
    }
    if(en2CurrentHp > 0){
      en2 = true;
    }
  $("#mainText").prepend("Your foes are rallying!<br><br>");
  }



  // if(warChosen===false&&wizChosen===false&&rogChosen===false){
  //   if(warCurrentHp>0){
  //     warChosen=true;
  //   }
  //   if(wizChosen>0){
  //     wizChosen=true;
  //   }
  //   if(rogChosen>0){
  //     rogChosen=true;
  //   }
  //
  //   if(warChosen===false){
  //     $(".war").hide(".war");
  //   }else{
  //     $(".war").show(".war");
  //   }
  //
  //   if(wizChosen===false){
  //     $(".wiz").hide(".wiz");
  //   }else{
  //     $(".wiz").show(".wiz");
  //   }
  //
  //   if(rogChosen===false){
  //     $(".rog").hide(".rog");
  //   }else{
  //     $(".rog").show(".rog");
  //   }
  // }
}

function closeTargets(){
  document.getElementById("enTop").style.display = "none";
  document.getElementById("enMid").style.display = "none";
  document.getElementById("enBot").style.display = "none";
  document.getElementById("allyTop").style.display = "none";
  document.getElementById("allyMid").style.display = "none";
  document.getElementById("allyBot").style.display = "none";
}

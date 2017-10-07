/*ChosenWarrior----------------------------------------------------------------*/
var warCurrentHp;
var warMaxHp;
var warCurrentMp;
var warMaxMp;

var warStr;
var warDex;
var warInt;
/*ChosenWizard-----------------------------------------------------------------*/
var wizCurrentHp;
var wizMaxHp;
var wizCurrentMp;
var wizMaxMp;

var wizStr;
var wizDex;
var warInt;
/*ChosenRogue------------------------------------------------------------------*/
var rogCurrentHp;
var rogMaxHp;
var rogCurrentMp;
var rogMaxMp;

var rogStr;
var rogDex;
var rogInt;




/*en3--------------------------------------------------------------------------*/
var en0CurrentHp;
console.log(en0CurrentHp);
var en0MaxHp;
var en0CurrentMp;
var en0MaxMp;

var Str;
var Dex;
var Int;


/*en1--------------------------------------------------------------------------*/
var en1CurrentHp;
var en1MaxHp;
var en1CurrentMp;
var en1MaxMp;

var Str;
var Dex;
var Int;
/*en2--------------------------------------------------------------------------*/
var en2CurrentHp;
var en2MaxHp;
var en2CurrentMp;
var en2MaxMp;

var Str;
var Dex;
var Int;

/*combat-----------------------------------------------------------------------*/

var enemies = ["assets/images/bandit.jpg", "assets/images/banditLeader.jpg", "assets/images/wolf.jpg"];
document.getElementById("ventureForth").onclick = function enemyGen(){
/*EnemyGenerator---------------------------------------------------------------*/
/*firstEnemy*/
  var selector0 = Math.floor(Math.random()*(enemies.length));
  document.getElementById("enemyImage0").src = enemies[selector0];
  console.log(enemies[selector0]);
  console.log(enemies[0]);
  if(enemies[selector0] === enemies[0]){
    var en0MaxHp = 30;
    var en0CurrentHp = 30;
    var en0MaxMp = 10;
    var en0CurrentMp = en0MaxMp;
    document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
    document.getElementById("en0MaxHp").innerHTML = en0MaxHp;
    document.getElementById("en0CurrentMp").innerHTML = en0CurrentMp;
    document.getElementById("en0MaxMp").innerHTML = en0MaxMp;
  }else if(enemies[selector0] === enemies[1]){
     var en0MaxHp = 50;
     var en0CurrentHp = 50;
     var en0MaxMp = 10;
     var en0CurrentMp = en0MaxMp;
    document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
    document.getElementById("en0MaxHp").innerHTML = en0MaxHp;
    document.getElementById("en0CurrentMp").innerHTML = en0CurrentMp;
    document.getElementById("en0MaxMp").innerHTML = en0MaxMp;
  }else if(enemies[selector0] === enemies[2]){
    var en0MaxHp = 20;
    var en0CurrentHp = 20;
    var en0MaxMp = 5;
    var en0CurrentMp = en0MaxMp;
    document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
    document.getElementById("en0MaxHp").innerHTML = en0MaxHp;
    document.getElementById("en0CurrentMp").innerHTML = en0CurrentMp;
    document.getElementById("en0MaxMp").innerHTML = en0MaxMp;
  }

  /*secondEnemy*/
  var selector1 = Math.floor(Math.random()*(enemies.length));
  document.getElementById("enemyImage1").src =enemies[selector1];
  if(enemies[selector1] === enemies[0]){
    var en1MaxHp = 30;
    var en1CurrentHp = en1MaxHp;
    var en1MaxMp = 10;
    var en1CurrentMp = en1MaxMp;
    document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
    document.getElementById("en1MaxHp").innerHTML = en1MaxHp;
    document.getElementById("en1CurrentMp").innerHTML = en1CurrentMp;
    document.getElementById("en1MaxMp").innerHTML = en1MaxMp;
  }else if(enemies[selector1] === enemies[1]){
    var en1MaxHp = 50;
    var en1CurrentHp = en1MaxHp;
    var en1MaxMp = 10;
    var en1CurrentMp = en1MaxMp;
    document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
    document.getElementById("en1MaxHp").innerHTML = en1MaxHp;
    document.getElementById("en1CurrentMp").innerHTML = en1CurrentMp;
    document.getElementById("en1MaxMp").innerHTML = en1MaxMp;
  }else if( enemies[selector1] === enemies[2]){
    var en1MaxHp = 20;
    var en1CurrentHp = en1MaxHp;
    var en1MaxMp = 5;
    var en1CurrentMp = en1MaxMp;
    document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
    document.getElementById("en1MaxHp").innerHTML = en1MaxHp;
    document.getElementById("en1CurrentMp").innerHTML = en1CurrentMp;
    document.getElementById("en1MaxMp").innerHTML = en1MaxMp;
  }

/*thirdEnemy*/
  var selector2 = Math.floor(Math.random()*(enemies.length));
  document.getElementById("enemyImage2").src =enemies[selector2];
  if(enemies[selector2] === enemies[0]){
    var en2MaxHp = 30;
    var en2CurrentHp = en2MaxHp;
    var en2MaxMp = 10;
    var en2CurrentMp = en2MaxMp;
    document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
    document.getElementById("en2MaxHp").innerHTML = en2MaxHp;
    document.getElementById("en2CurrentMp").innerHTML = en2CurrentMp;
    document.getElementById("en2MaxMp").innerHTML = en2MaxMp;
  }else if(enemies[selector2] === enemies[1]){
    var en2MaxHp = 50;
    var en2CurrentHp = en2MaxHp;
    var en2MaxMp = 10;
    var en2CurrentMp = en2MaxMp;
    document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
    document.getElementById("en2MaxHp").innerHTML = en2MaxHp;
    document.getElementById("en2CurrentMp").innerHTML = en2CurrentMp;
    document.getElementById("en2MaxMp").innerHTML = en2MaxMp;
  }else if(enemies[selector2]=== enemies[2]){
    var en2MaxHp = 20;
    var en2CurrentHp = en2MaxHp;
    var en2MaxMp = 5;
    var en2CurrentMp = en2MaxMp;
    document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
    document.getElementById("en2MaxHp").innerHTML = en2MaxHp;
    document.getElementById("en2CurrentMp").innerHTML = en2CurrentMp;
    document.getElementById("en2MaxMp").innerHTML = en2MaxMp;
  }

/*normal Attack----------------------------------------------------------------*/
var normal = "normalAtk";
var fast = "fastAtk";
var heavy = "heavyAtk";
  document.getElementById("normalAtk").onclick = function(){
    var atkConfirm = Math.floor(Math.random()*(100)+1);
    console.log(atkConfirm);
    if(atkConfirm <= 15){
      console.log("miss");
    }else if(atkConfirm >= 95){
      console.log("critical!");
      var normalAtkCrit = Math.floor(Math.random()*(15)+1);
      var newHp = (en0CurrentHp - normalAtkCrit);
      en0CurrentHp = newHp;
      document.getElementById("en0CurrentHp").innerHTML = newHp;
    }else{
      console.log("normalDamage");
      var normalAtk = Math.floor(Math.random()*(10)+1);
      var newHp = (en0CurrentHp - normalAtk);
      en0CurrentHp = newHp;
      console.log("modified health " + newHp);
      document.getElementById("en0CurrentHp").innerHTML = newHp;

  }};

  document.getElementById("heavyAtk").onclick = function(){
    var atkConfirm = Math.floor(Math.random()*(100)+1);
    console.log(atkConfirm);
    if(atkConfirm <= 25){
      console.log("miss");
    }else if(atkConfirm >= 85){
      console.log("critical!");
      var normalAtkCrit = Math.floor(Math.random()*(25)+1);
      var newHp = (en0CurrentHp - normalAtkCrit);
      en0CurrentHp = newHp;
      document.getElementById("en0CurrentHp").innerHTML = newHp;
    }else{
      console.log("normalDamage");
      var normalAtk = Math.floor(Math.random()*(15)+1);
      var newHp = (en0CurrentHp - normalAtk);
      en0CurrentHp = newHp;
      console.log("modified health " + newHp);
      document.getElementById("en0CurrentHp").innerHTML = newHp;

  }};

  document.getElementById("fastAtk").onclick = function(){
    var atks = Math.floor((Math.random()*5)+1);
    console.log(atks);
    for (i=0; i<atks; i++){
    var atkConfirm = Math.floor(Math.random()*(100)+1);
    console.log(atkConfirm);
    if(atkConfirm <= 20){
      console.log("miss");
    }else if(atkConfirm >= 95){
      console.log("critical!");
      var normalAtkCrit = Math.floor(Math.random()*(7)+1);
      var newHp = (en0CurrentHp - normalAtkCrit);
      en0CurrentHp = newHp;
      document.getElementById("en0CurrentHp").innerHTML = newHp;
    }else{
      console.log("normalDamage");
      var normalAtk = Math.floor(Math.random()*(5)+1);
      var newHp = (en0CurrentHp - normalAtk);
      en0CurrentHp = newHp;
      console.log("modified health " + newHp);
      document.getElementById("en0CurrentHp").innerHTML = newHp;

  }}};
};/*enemyGenerator*/
//DevNote: can't make it out of a loop: targeting appropriate ids
// document.getElementById("ventureForth").onclick = function(){
//   for(var i = 0; i<3; i++){
//     var selector = Math.floor(Math.random()*(enemies.length));
//     var imgI = "enemyImage"+i;
//     console.log(imgI);
//     document.getElementById(imgI).src=enemies[selector];
//     console.log(selector);
//     console.log(enemies[selector]);
//   }

  // document.getElementById("enemyImage2").src="assets/images/banditLeader.jpg";
  // document.getElementById("enemyImage3").src="assets/images/bandit.jpg";

/*combat-----------------------------------------------------------------------*/

/*BaseStats------------------------------------*/
var str = 0;
var dex = 0;
var int = 0;

/*resourcePool---------------------------------*/
var hp = str*15;
var armor = dex*0.5;
var mp = int*8;

/*attackTypes----------------------------------*/
var normalAttack = (str*1) + (dex*1);
var fastAttack = (str*0.5) + (dex* 1);
var heavyAttack = (str*1.2) + (dex*0.5);

/*magicAttacks---------------------------------*/
var fireball = (int*3);
var lightning = (int*1.5);
var lightning2 = (int*1);
var lightning3 = (int*0.5);

/*undefined character slots ---------------------------------------------------*/
var char1;
var char2;
var char3;





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
  var warMaxHp = 200;
  var warCurrentHp = warMaxHp;
  var warMaxMp = 25;
  var warCurrentMp = warMaxMp;
  document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
  document.getElementById("warMaxHp").innerHTML = warMaxHp;
  document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
  document.getElementById("warMaxMp").innerHTML = warMaxMp;
};
document.getElementById("crusaderChoice").onclick =function(){
  document.getElementById("charImage1").src ="assets/images/crusader.jpg";
  var warMaxHp = 175;
  var warCurrentHp = warMaxHp;
  var warMaxMp = 40;
  var warCurrentMp = warMaxMp;
  document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
  document.getElementById("warMaxHp").innerHTML = warMaxHp;
  document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
  document.getElementById("warMaxMp").innerHTML = warMaxMp;
};
document.getElementById("hellKnightChoice").onclick =function(){
  document.getElementById("charImage1").src ="assets/images/hellKnight.jpg";
  var warMaxHp = 250;
  var warCurrentHp = warMaxHp;
  var warMaxMp = 50;
  var warCurrentMp = warMaxMp;
  document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
  document.getElementById("warMaxHp").innerHTML = warMaxHp;
  document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
  document.getElementById("warMaxMp").innerHTML = warMaxMp;
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
  var wizMaxHp = 125;
  var wizCurrentHp = wizMaxHp;
  var wizMaxMp = 80;
  var wizCurrentMp = wizMaxMp;
  document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
  document.getElementById("wizMaxHp").innerHTML = wizMaxHp;
  document.getElementById("wizCurrentMp").innerHTML = wizCurrentMp;
  document.getElementById("wizMaxMp").innerHTML = wizMaxMp;
};
document.getElementById("blackMageChoice").onclick =function(){
  document.getElementById("charImage2").src ="assets/images/blackMage.jpg";
  var wizMaxHp = 100;
  var wizCurrentHp = wizMaxHp;
  var wizMaxMp = 100;
  var wizCurrentMp = wizMaxMp;
  document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
  document.getElementById("wizMaxHp").innerHTML = wizMaxHp;
  document.getElementById("wizCurrentMp").innerHTML = wizCurrentMp;
  document.getElementById("wizMaxMp").innerHTML = wizMaxMp;
};
document.getElementById("alchemistChoice").onclick =function(){
  document.getElementById("charImage2").src ="assets/images/alchemist.png";
  var wizMaxHp = 150;
  var wizCurrentHp = wizMaxHp;
  var wizMaxMp = 60;
  var wizCurrentMp = wizMaxMp;
  document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
  document.getElementById("wizMaxHp").innerHTML = wizMaxHp;
  document.getElementById("wizCurrentMp").innerHTML = wizCurrentMp;
  document.getElementById("wizMaxMp").innerHTML = wizMaxMp;
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
  var rogMaxHp = 110;
  var rogCurrentHp = rogMaxHp;
  var rogMaxMp = 50;
  var rogCurrentMp = rogMaxMp;
  document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
  document.getElementById("rogMaxHp").innerHTML = rogMaxHp;
  document.getElementById("rogCurrentMp").innerHTML = rogCurrentMp;
  document.getElementById("rogMaxMp").innerHTML = rogMaxMp;
};
document.getElementById("rangerChoice").onclick =function(){
  document.getElementById("charImage3").src ="assets/images/ranger.jpg";
  var rogMaxHp = 140;
  var rogCurrentHp = rogMaxHp;
  var rogMaxMp = 40;
  var rogCurrentMp = rogMaxMp;
  document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
  document.getElementById("rogMaxHp").innerHTML = rogMaxHp;
  document.getElementById("rogCurrentMp").innerHTML = rogCurrentMp;
  document.getElementById("rogMaxMp").innerHTML = rogMaxMp;
};
document.getElementById("thiefChoice").onclick = function(){
  document.getElementById("charImage3").src ="assets/images/thief.jpg";
  var rogMaxHp = 125;
  var rogCurrentHp = rogMaxHp;
  var rogMaxMp = 45;
  var rogCurrentMp = rogMaxMp;
  document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
  document.getElementById("rogMaxHp").innerHTML = rogMaxHp;
  document.getElementById("rogCurrentMp").innerHTML = rogCurrentMp;
  document.getElementById("rogMaxMp").innerHTML = rogMaxMp;
};

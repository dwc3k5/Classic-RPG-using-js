// $("#test").click(function(){
//   console.log("test");
// document.getElementById("enTop").style.display = "block";
// document.getElementById("enMid").style.display = "block";
// document.getElementById("enBot").style.display = "block";
// document.getElementById("allyTop").style.display = "block";
// document.getElementById("allyMid").style.display = "block";
// document.getElementById("allyBot").style.display = "block";
// });
// document.getElementById("test2").onclick = function(){
//   console.log(test);
// };
/*variables--------------------------------------------------------------------*/
/*variables---Inventory--------------------------------------------------------*/
var potionHp = 5;
var potionMp = 5;
var bomb = 5;


/*variables---Characters-------------------------------------------------------*/
/*ChosenWarrior----------------------------------------------------------------*/
var warChosen = false;
var warCurrentHp;
var warMaxHp;
var warCurrentMp;
var warMaxMp;

var warStr;
var warDex;
var warInt;
/*ChosenWizard-----------------------------------------------------------------*/
var wizChosen = false;
var wizCurrentHp;
var wizMaxHp;
var wizCurrentMp;
var wizMaxMp;

var wizStr;
var wizDex;
var warInt;
/*ChosenRogue------------------------------------------------------------------*/
var rogChosen = false;
var rogCurrentHp;
var rogMaxHp;
var rogCurrentMp;
var rogMaxMp;

var rogStr;
var rogDex;
var rogInt;


/*variables---Enemies----------------------------------------------------------*/
/*en0--------------------------------------------------------------------------*/
var en0CurrentHp;
var en0MaxHp;
var en0CurrentMp;
var en0MaxMp;
// var Str;
// var Dex;
// var Int;
/*en1--------------------------------------------------------------------------*/
var en1CurrentHp;
var en1MaxHp;
var en1CurrentMp;
var en1MaxMp;
// var Str;
// var Dex;
// var Int;
/*en2--------------------------------------------------------------------------*/
var en2CurrentHp;
var en2MaxHp;
var en2CurrentMp;
var en2MaxMp;
// var Str;
// var Dex;
// var Int;


/*variables---Misc-------------------------------------------------------------*/
var stagger = 3;
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
  $("#mainText").text("A barbarian has joined your cause!");
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
  $("#mainText").text("A crusader pledges themself to your cause!");
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
  $("#mainText").text("A Hell Knight will aid you... for now.");
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
  $("#mainText").text("The Gods have sent a holy man to aid you.");
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
  $("#mainText").text("Energy crackles around you as a black mage nods in agreement.");
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
  $("#mainText").text("Nevermind the scorch marks on the front lawn... or the missing fingers... this alchemist clearly knows what they're doing!");
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
  $("#mainText").text("So he didn't say anything to you... but you aren't dead! so there's that.");
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
  $("#mainText").text("He made you ask his wolf for approval, but that one wolf means he still has more friends than you.");
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
  $("#mainText").text("Dear Diary, I'm not so sure about this thief. He didn't even once try to go for my coinpurse. He fumbled his daggers a few times. Shoddy work. One moment, I need to get my second ink vial to finish this mes.......*damnit*");
  rogChosen =true;
};

//ITEM FUNCTIONS---------------------------------------------------------------------------------------*/
$("#potionHp").click(function(){
  console.log("test");
  if(potionHp>0){
  potionHp--;
  document.getElementById("potionHpRemaining").innerHTML = "X " + potionHp;
  modalInv.style.display = "none";
  document.getElementById("allies").style.display ="block";
  document.getElementById("enemies").style.display ="block";

//the second time you click this... it runs 2 times
//the third time you click this... it runs 3 times
    $("#allies").click(function(){
      console.log("testTwo");
      document.getElementById("allies").style.display ="none";
      document.getElementById("enemies").style.display ="none";
      document.getElementById("allyTop").style.display = "block";
      document.getElementById("allyMid").style.display = "block";
      document.getElementById("allyBot").style.display = "block";

//the second time you click this... it runs 3 times
//the third time you click this... it runs 6 times
      $("#allyTop").click(function(){

        console.log(warCurrentHp);
        warCurrentHp += 25;
        console.log(warCurrentHp);
        document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
        document.getElementById("allyTop").style.display = "none";
        document.getElementById("allyMid").style.display = "none";
        document.getElementById("allyBot").style.display = "none";
        console.log(warCurrentHp);
        console.log("----------------");
      });

      $("#allyMid").click(function(){
        wizCurrentHp += 25;
        document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
        document.getElementById("allyTop").style.display = "none";
        document.getElementById("allyMid").style.display = "none";
        document.getElementById("allyBot").style.display = "none";
      });

      $("#allyBot").click(function(){
        rogCurrentHp += 25;
        document.getElementById("rogCurrentHp").innerHTML = rogCurrentHp;
        document.getElementById("allyTop").style.display = "none";
        document.getElementById("allyMid").style.display = "none";
        document.getElementById("allyBot").style.display = "none";
      });
    });
    $("#enemies").click(function(){
      document.getElementById("allies").style.display ="none";
      document.getElementById("enemies").style.display ="none";
      document.getElementById("enTop").style.display = "block";
      document.getElementById("enMid").style.display = "block";
      document.getElementById("enBot").style.display = "block";

      $("#enTop").click(function(){

        document.getElementById("enTop").style.display = "none";
        document.getElementById("enMid").style.display = "none";
        document.getElementById("enBot").style.display = "none";
      });
      $("#enMid").click(function(){

        document.getElementById("enTop").style.display = "none";
        document.getElementById("enMid").style.display = "none";
        document.getElementById("enBot").style.display = "none";
      });
      $("#enBot").click(function(){

        document.getElementById("enTop").style.display = "none";
        document.getElementById("enMid").style.display = "none";
        document.getElementById("enBot").style.display = "none";
      });

    });/*end hp potions*/


}else{
  alert("HEY LISTEN!");
}});


$("#potionMp").click(function(){
  if(potionMp>0){
    potionMp--;
    document.getElementById("potionMpRemaining").innerHTML = "X " + potionMp;
    modalInv.style.display = "none";
    document.getElementById("allies").style.display ="block";
    document.getElementById("enemies").style.display ="block";

    $("#allies").click(function(){
      document.getElementById("allies").style.display ="none";
      document.getElementById("enemies").style.display ="none";
      document.getElementById("allyTop").style.display = "block";
      document.getElementById("allyMid").style.display = "block";
      document.getElementById("allyBot").style.display = "block";

      $("#allyTop").click(function(){
        warCurrentMp += 15;
        document.getElementById("warCurrentMp").innerHTML = warCurrentMp;
        document.getElementById("allyTop").style.display = "none";
        document.getElementById("allyMid").style.display = "none";
        document.getElementById("allyBot").style.display = "none";
      });
      $("#allyMid").click(function(){
        wizCurrentMp +=15;
        document.getElementById("wizgCurrentMp").innerHTML = wizCurrentMp;
        document.getElementById("allyTop").style.display = "none";
        document.getElementById("allyMid").style.display = "none";
        document.getElementById("allyBot").style.display = "none";
      });
      $("#allyBot").click(function(){
        rogCurrentMp +=15;
        document.getElementById("rogCurrentHp").innerHTML = rogCurrentMp;
        document.getElementById("allyTop").style.display = "none";
        document.getElementById("allyMid").style.display = "none";
        document.getElementById("allyBot").style.display = "none";
      });
    });

    $("#enemies").click(function(){
      document.getElementById("allies").style.display ="none";
      document.getElementById("enemies").style.display ="none";
      document.getElementById("enTop").style.display = "block";
      document.getElementById("enMid").style.display = "block";
      document.getElementById("enBot").style.display = "block";

      $("#enTop").click(function(){

        document.getElementById("enTop").style.display = "none";
        document.getElementById("enMid").style.display = "none";
        document.getElementById("enBot").style.display = "none";
      });
      $("#enMid").click(function(){

        document.getElementById("enTop").style.display = "none";
        document.getElementById("enMid").style.display = "none";
        document.getElementById("enBot").style.display = "none";
      });
      $("#enBot").click(function(){

        document.getElementById("enTop").style.display = "none";
        document.getElementById("enMid").style.display = "none";
        document.getElementById("enBot").style.display = "none";
      });
    });

}else{
  alert("You Must Construct Additonal Pylons");
}});
$("#bomb").click(function(){
  if(bomb>0){
  bomb--;
  document.getElementById("bombRemaining").innerHTML = "X " + bomb;
  modalInv.style.display = "none";
  document.getElementById("allies").style.display ="block";
  document.getElementById("enemies").style.display ="block";

  $("#allies").click(function(){
    document.getElementById("allies").style.display ="none";
    document.getElementById("enemies").style.display ="none";
    document.getElementById("allyTop").style.display = "block";
    document.getElementById("allyMid").style.display = "block";
    document.getElementById("allyBot").style.display = "block";

    $("#allyTop").click(function(){
      document.getElementById("allyTop").style.display = "none";
      document.getElementById("allyMid").style.display = "none";
      document.getElementById("allyBot").style.display = "none";
    });
    $("#allyMid").click(function(){
      document.getElementById("allyTop").style.display = "none";
      document.getElementById("allyMid").style.display = "none";
      document.getElementById("allyBot").style.display = "none";
    });
    $("#allyMid").click(function(){
      document.getElementById("allyTop").style.display = "none";
      document.getElementById("allyMid").style.display = "none";
      document.getElementById("allyBot").style.display = "none";
    });
  });

  $("#enemies").click(function(){
    document.getElementById("allies").style.display ="none";
    document.getElementById("enemies").style.display ="none";
    document.getElementById("enTop").style.display = "block";
    document.getElementById("enMid").style.display = "block";
    document.getElementById("enBot").style.display = "block";

    $("#enTop").click(function(){
      en0CurrentHp -= 20;
      document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
      document.getElementById("enTop").style.display = "none";
      document.getElementById("enMid").style.display = "none";
      document.getElementById("enBot").style.display = "none";
    });
    $("#enMid").click(function(){
      en1CurrentHp -= 20;
      document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
      document.getElementById("enTop").style.display = "none";
      document.getElementById("enMid").style.display = "none";
      document.getElementById("enBot").style.display = "none";
    });
    $("#enBot").click(function(){
      en2CurrentHp -= 20;
      document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
      document.getElementById("enTop").style.display = "none";
      document.getElementById("enMid").style.display = "none";
      document.getElementById("enBot").style.display = "none";
    });
  });
}else{
  alert("Prof Oak: Now is not the time.");
}});






/*combat-----------------------------------------------------------------------*/





// document.getElementById("ventureForth").onclick =
var enemies = ["assets/images/bandit.jpg", "assets/images/banditLeader.jpg", "assets/images/wolf.jpg"];
document.getElementById("ventureForth").onclick = function enemyGen(){
  document.getElementById("allClear").style.display = "block";
  var selector0 = Math.floor(Math.random()*(enemies.length));
  document.getElementById("enemyImage0").src = enemies[selector0];
  if(enemies[selector0] === enemies[0]){
    en0MaxHp = 30;
    en0CurrentHp = 30;
    en0MaxMp = 10;
    en0CurrentMp = en0MaxMp;
    document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
    document.getElementById("en0MaxHp").innerHTML = en0MaxHp;
    document.getElementById("en0CurrentMp").innerHTML = en0CurrentMp;
    document.getElementById("en0MaxMp").innerHTML = en0MaxMp;
  }else if(enemies[selector0] === enemies[1]){
     en0MaxHp = 50;
     en0CurrentHp = 50;
     en0MaxMp = 10;
     en0CurrentMp = en0MaxMp;
    document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
    document.getElementById("en0MaxHp").innerHTML = en0MaxHp;
    document.getElementById("en0CurrentMp").innerHTML = en0CurrentMp;
    document.getElementById("en0MaxMp").innerHTML = en0MaxMp;
  }else if(enemies[selector0] === enemies[2]){
    en0MaxHp = 20;
    en0CurrentHp = 20;
    en0MaxMp = 5;
    en0CurrentMp = en0MaxMp;
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
    en1CurrentHp = en1MaxHp;
    en1MaxMp = 10;
    en1CurrentMp = en1MaxMp;
    document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
    document.getElementById("en1MaxHp").innerHTML = en1MaxHp;
    document.getElementById("en1CurrentMp").innerHTML = en1CurrentMp;
    document.getElementById("en1MaxMp").innerHTML = en1MaxMp;
  }else if(enemies[selector1] === enemies[1]){
    en1MaxHp = 50;
    en1CurrentHp = en1MaxHp;
    en1MaxMp = 10;
    en1CurrentMp = en1MaxMp;
    document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
    document.getElementById("en1MaxHp").innerHTML = en1MaxHp;
    document.getElementById("en1CurrentMp").innerHTML = en1CurrentMp;
    document.getElementById("en1MaxMp").innerHTML = en1MaxMp;
  }else if( enemies[selector1] === enemies[2]){
    en1MaxHp = 20;
    en1CurrentHp = en1MaxHp;
    en1MaxMp = 5;
    en1CurrentMp = en1MaxMp;
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
    en2CurrentHp = en2MaxHp;
    en2MaxMp = 10;
    en2CurrentMp = en2MaxMp;
    document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
    document.getElementById("en2MaxHp").innerHTML = en2MaxHp;
    document.getElementById("en2CurrentMp").innerHTML = en2CurrentMp;
    document.getElementById("en2MaxMp").innerHTML = en2MaxMp;
  }else if(enemies[selector2] === enemies[1]){
    en2MaxHp = 50;
    en2CurrentHp = en2MaxHp;
    en2MaxMp = 10;
    en2CurrentMp = en2MaxMp;
    document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
    document.getElementById("en2MaxHp").innerHTML = en2MaxHp;
    document.getElementById("en2CurrentMp").innerHTML = en2CurrentMp;
    document.getElementById("en2MaxMp").innerHTML = en2MaxMp;
  }else if(enemies[selector2] === enemies[2]){
    en2MaxHp = 20;
    en2CurrentHp = en2MaxHp;
    en2MaxMp = 5;
    en2CurrentMp = en2MaxMp;
    document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
    document.getElementById("en2MaxHp").innerHTML = en2MaxHp;
    document.getElementById("en2CurrentMp").innerHTML = en2CurrentMp;
    document.getElementById("en2MaxMp").innerHTML = en2MaxMp;
  }
/*normal Attack----------------------------------------------------------------*/
$(".actions").click(function(){

  /*check if staggered*/
  // var stagger =3;
  // var staggerCheck = Math.floor(Math.random()*15+3);
  // if( stagger>= staggerCheck){
  //   console.log("staggertrigger!");
  //   document.getElementById("staggeredTop").style.display = "block";
  //   document.getElementById("staggeredMid").style.display = "block";
  //   document.getElementById("staggeredBot").style.display = "block";
  //   stagger = 0;
  //   // acted = true;
  // }else{
    //these all have the same class way to simplify?
    document.getElementById("allies").style.display ="block";
    document.getElementById("enemies").style.display ="block";
  // }
    $("#allies").click(function(){
      document.getElementById("allies").style.display ="none";
      document.getElementById("enemies").style.display ="none";
      document.getElementById("allyTop").style.display = "block";
      document.getElementById("allyMid").style.display = "block";
      document.getElementById("allyBot").style.display = "block";

      $("#allyTop").click(function(){
        var atkConfirm = Math.floor(Math.random()*(100)+1);
        console.log("-------------------");
        if(atkConfirm <= 15){
          console.log("miss!");
        }else{
          console.log("hit!");
          var normalAtk = Math.floor(Math.random()*(10)+1);
          newHp0 = (en0CurrentHp - normalAtk);
          en0CurrentHp = newHp0;
          document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
          console.log("newhealth" + en0CurrentHp);
        }
        document.getElementById("allyTop").style.display = "none";
        document.getElementById("allyMid").style.display = "none";
        document.getElementById("allyBot").style.display = "none";
      });
      $("#allyMid").click(function(){
        var atkConfirm = Math.floor(Math.random()*(100)+1);
        console.log("-------------------");
        if(atkConfirm <= 15){
          console.log("miss!");
        }else{
          console.log("hit!");
          var normalAtk = Math.floor(Math.random()*(10)+1);
          newHp1 = (en1CurrentHp - normalAtk);
          en1CurrentHp = newHp1;
          document.getElementById("en1CurrentHp").innerHTML = en1CurrentHp;
          console.log("newhealth" + en1CurrentHp);
        }
        document.getElementById("allyTop").style.display = "none";
        document.getElementById("allyMid").style.display = "none";
        document.getElementById("allyBot").style.display = "none";
      });
      $("#allyBot").click(function(){
        var atkConfirm = Math.floor(Math.random()*(100)+1);
        console.log("-------------------");
        if(atkConfirm <= 15){
          console.log("miss!");
        }else{
          console.log("hit!");
          var normalAtk = Math.floor(Math.random()*(10)+1);
          newHp0 = (en2CurrentHp - normalAtk);
          en2CurrentHp = newHp0;
          document.getElementById("en2CurrentHp").innerHTML = en2CurrentHp;
          console.log("newhealth" + en2CurrentHp);
        }
        document.getElementById("allyTop").style.display = "none";
        document.getElementById("allyMid").style.display = "none";
        document.getElementById("allyBot").style.display = "none";
      });
    });
    $("#enemies").click(function(){
      console.log("working");
      document.getElementById("allies").style.display ="none";
      document.getElementById("enemies").style.display ="none";
      //these three are not working
      document.getElementById("enTop").style.display = "block";
      document.getElementById("enMid").style.display = "block";
      document.getElementById("enBot").style.display = "block";

      $("#enTop").click(function(){
        var atkConfirm = Math.floor(Math.random()*(100)+1);
        if(atkConfirm <= 15){
          console.log("miss!");
        }else{
          console.log("hit!");
          var normalAtk = Math.floor(Math.random()*(10)+1);
          newHp0 = (en0CurrentHp - normalAtk);
          en0CurrentHp = newHp0;
          document.getElementById("en0CurrentHp").innerHTML = en0CurrentHp;
          console.log("newhealth" + en0CurrentHp);
        }
        });
        document.getElementById("enTop").style.display = "none";
        document.getElementById("enMid").style.display = "none";
        document.getElementById("enBot").style.display = "none";
      });
      $("#enMid").click(function(){
        document.getElementById("enTop").style.display = "none";
        document.getElementById("enMid").style.display = "none";
        document.getElementById("enBot").style.display = "none";
      });
      $("#enBot").click(function(){
        document.getElementById("enTop").style.display = "none";
        document.getElementById("enMid").style.display = "none";
        document.getElementById("enBot").style.display = "none";
      });



});
$("#allClear").click(function(){
  console.log("working");
if(en0CurrentHp<=0 && en1CurrentHp<=0 && en2CurrentHp<=0){
  alert("Area Secured! Moving Forward");
  document.getElementById("allClear").style.display = "none";
  document.getElementById("ventureForth").style.display = "none";
  document.getElementById("rest").style.display = "block";
  document.getElementById("search").style.display = "block";
}else{
  alert("it's too Dangerous!");
}
});
$("#rest").click(function(){
  alert("your party earns some much needed respit");
  warCurrentHp += 50;
  warCurrentMp += 10;
  wizCurrentHp += 20;
  wizCurrentMp += 50;
  rogCurrentHp += 25;
  rogCurrentMp += 25;
  document.getElementById("rest").style.display = "none";
  document.getElementById("search").style.display = "none";
  document.getElementById("ventureForth").style.display = "block";
});
$("#search").click(function(){
  var events = Math.floor(Math.random()*100);
  if (events<= 3){
    alert("your warrior stepped on a bear trap!");
    warCurrentHp -= 20;
    document.getElementById("warCurrentHp").innerHTML = warCurrentHp;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if (events <= 6){
    alert("your wizard misread an incantation!");
    wizCurrentHp -=5;
    document.getElementById("wizCurrentHp").innerHTML = wizCurrentHp;
    wizCurrentMP -=10;
    document.getElementById("wizCurrentMP").innerHTML = wizCurrentMP;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if (events <= 10){
    alert("your rogue was caught Stealing!");
    potionHp -=2;
    document.getElementById("potionHpRemaining").innerHTML = potionHp;
    potionMp -=2;
    document.getElementById("potionMpRemaining").innerHTML = potionMp;
    bomb -=2;
    document.getElementById("bombRemaining").innerHTML = bomb;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if (events <= 25){
    alert("you find an abandoned pouch");
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
    alert("a friendly villager offers aid");
    potionHp +=5;
    document.getElementById("potionHpRemaining").innerHTML = potionHp;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if(events <=50){
    alert("your rogue finds a weapons cache");
    bomb +=5;
    document.getElementById("bombRemaining").innerHTML = bomb;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if(events <=75){
    alert("your mages successfully conjures potions");
    potionMp +=5;
    document.getElementById("potionMpRemaining").innerHTML = potionMp;
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }else if (events <= 95){
    alert("an unseen force guides you");
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
    alert("after searching, you find nothing...");
    document.getElementById("rest").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("ventureForth").style.display = "block";
  }
});

};


/*END COMBAT----------------------------------------------------------------*/
      // var atkConfirm = Math.floor(Math.random()*(100)+1);
      // if(atkConfirm <= 15){
      //   console.log("miss!");
      // }else{
      //   console.log("hit!");
      //   var normalAtk = Math.floor(Math.random()*(10)+1);
      //   newHp0 = (enemySelect[enemyTarget] - normalAtk);
      //   enemySelect[enemyTarget] = newHp0;
      //   document.getElementById("en"+enemyTarget+"CurrentHp").innerHTML = newHp0;
      //   console.log("from array "+ enemySelect[enemyTarget]);
      //   console.log("newhealth" + en0CurrentHp);
      // }
      // });


      /*enemy fights back*/
      /*enemy targets a character*/
      // var charSelect = [warCurrentHp, wizCurrentHp, rogCurrentHp];
      // var charTarget = 0;


        // console.log(charSelect[charTarget]);
      // }else if(atkConfirm >= 95){
      //   console.log("critical!");
      //   var normalAtkCrit = Math.floor(Math.random()*(15)+1);
      //   newHp = (enemySelect[enemyTarget]-normalAtkCrit);
      //   enemySelect[enemyTarget] = newHp;
      //   document.getElementById("en"+enemyTarget+"CurrentHp").innerHTML = enemySelect[enemyTarget];
      //   console.log("newHp =" + newHp);
      //   console.log("enemySelect[] " + enemySelect[enemyTarget]);


//     stagger ++;
//     console.log(stagger);
//
//
// /*make attack*/
// /*targets random enemy*/
//     var enemySelect = [en0CurrentHp, en1CurrentHp, en2CurrentHp];
//     var enemyTarget = 0;
//   // var enemyTarget = Math.floor(Math.random()*3);
//     var newHp0;
//     var newHp1;
//     var newHp2;
//
//     console.log(en0CurrentHp);
//     console.log(enemySelect[enemyTarget]);





// $(".normalAtk").click(function test(){
//
// }
//   $(".actions").click(function(button){
//     console.log("heyo");
//     var atk = document.getElementsByClassName("atks");
//     var buff = document.getElementsByClassName("buff");
// //aggressive
//     if( == atks){
//
// //helpful
//     }else if (helpful){
//
// //random
//     }else{
//
//     }
//   });
//   $(".heavyAtk").click(function test(){
//     var enemySelect = ["en0CurrentHp", "en1CurrentHp", "en2CurrentHp"];
//     var enemyTarget = Math.floor(Math.random()*3);
//     var atkConfirm = Math.floor(Math.random()*(100)+1);
//     console.log(atkConfirm);
//     if(atkConfirm <= 25){
//       console.log("miss");
//     }else if(atkConfirm >= 85){
//       console.log("critical!");
//       var normalAtkCrit = Math.floor(Math.random()*(25)+1);
//       var newHp = (en0CurrentHp - normalAtkCrit);
//       en0CurrentHp = newHp;
//       document.getElementById("en0CurrentHp").innerHTML = newHp;
//     }else{
//       console.log("normalDamage");
//       var normalAtk = Math.floor(Math.random()*(15)+1);
//       newHp = (en0CurrentHp - normalAtk);
//       en0CurrentHp = newHp;
//       console.log("modified health " + newHp);
//       document.getElementById("en0CurrentHp").innerHTML = newHp;
//     }
// });
  //
  // document.getElementById("fastAtk").onclick = function fastAtk(){
  //   var enemySelect = ["en0CurrentHp", "en1CurrentHp", "en2CurrentHp"];
  //   var enemyTarget = Math.floor(Math.random()*3);
  //   var atks = Math.floor((Math.random()*5)+1);
  //   console.log(atks);
  //   for (i=0; i<atks; i++){
  //   var atkConfirm = Math.floor(Math.random()*(100)+1);
  //   console.log(atkConfirm);
  //   if(atkConfirm <= 20){
  //     console.log("miss");
  //   }else if(atkConfirm >= 95){
  //     console.log("critical!");
  //     var normalAtkCrit = Math.floor(Math.random()*(7)+1);
  //     var newHp = (en0CurrentHp - normalAtkCrit);
  //     en0CurrentHp = newHp;
  //     document.getElementById("en0CurrentHp").innerHTML = newHp;
  //   }else{
  //     console.log("normalDamage");
  //     var normalAtk = Math.floor(Math.random()*(5)+1);
  //     var newHp = (en0CurrentHp - normalAtk);
  //     en0CurrentHp = newHp;
  //     console.log("modified health " + newHp);
  //     document.getElementById("en0CurrentHp").innerHTML = newHp;
  //
  // }}};
/*enemyGenerator*/
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

/*specialMoves-----------------------------------------------------------------*/
/*MUG*/
$("#mug").click(function(){
    var steal = Math.floor(Math.random()*100+1);
    var damage = Math.floor(Math.random()*5+3);
    if( steal <=25){
      // nothing happened
    }else if(steal <=50){
      potionHp++;
      document.getElementById("potionHpRemaining").innerHTML = potionHp;
      alert("you stole a health potion");
    }else if(steal <= 75){
      potionMp++;
      document.getElementById("potionMpRemaining").innerHTML = potionMp;
      alert("you stole a mana potion");
    }else{
      bomb++;
      document.getElementById("bombRemaining").innerHTML = bomb;
      alert("you stole a bomb");
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

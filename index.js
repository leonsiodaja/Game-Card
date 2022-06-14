let cards = [
    "cards/a-display-of-my-dark-power.jpg",
    "cards/all-in-good-time.jpg",
    "cards/all-shall-smolder-in-my-wake.jpg",
    "cards/approach-my-molten-realm.jpg",
    "cards/behold-the-power-of-destruction.jpg",
    "cards/choose-your-champion.jpg",
    "cards/dance-pathetic-marionette.jpg",
    "cards/drench-the-soil-in-their-blood.jpg",
    "cards/embrace-my-diabolical-vision.jpg",
    "cards/every-hope-shall-vanish.jpg",
    "cards/every-last-vestige-shall-rot.jpg",
    "cards/evil-comes-to-fruition.jpg",
    "cards/feed-the-machine.jpg",
    "cards/i-call-on-the-ancient-magics.jpg",
    "cards/i-delight-in-your-convulsions.jpg",
    "cards/ignite-the-cloneforge.jpg",
    "cards/into-the-earthen-maw.jpg",
    "cards/introductions-are-in-order.jpg",
    "cards/know-naught-but-fire.jpg",
    "cards/look-skyward-and-despair.jpg",
    "cards/may-civilization-collapse.jpg",
    "cards/mortal-flesh-is-weak.jpg",
    "cards/my-crushing-masterstroke.jpg",
    "cards/my-genius-knows-no-bounds.jpg",
    "cards/my-wish-is-your-command.jpg",
    "cards/nature-demands-an-offering.jpg",
    "cards/only-blood-ends-your-nightmares.jpg",
    "cards/perhaps-youve-met-my-cohort.jpg",
    "cards/plots-that-span-centuries.jpg",
    "cards/realms-befitting-my-majesty.jpg",
    "cards/roots-of-all-evil.jpg",
    "cards/rotted-ones-lay-siege.jpg",
    "cards/surrender-your-thoughts.jpg",
    "cards/the-dead-shall-serve.jpg",
    "cards/the-fate-of-the-flammable.jpg",
    "cards/the-iron-guardian-stirs.jpg",
    "cards/the-pieces-are-coming-together.jpg",
    "cards/tooth-claw-and-tail.jpg",
    "cards/which-of-you-burns-brightest.jpg",
    "cards/your-fate-is-thrice-sealed.jpg",
    "cards/your-puny-minds-cannot-fathom.jpg",
    "cards/your-will-is-not-your-own.jpg"
  ];
  let cardsOngoing = [
    "cards/ONGOING-bask-in-your-silent-awe.jpg",
    "cards/ONGOING-i-know-all-i-see-all.jpg",
    "cards/ONGOING-imprison-this-insolent-wretch.jpg",
    "cards/ONGOING-my-undead-horde-awakens.jpg",
    "cards/ONGOING-nature-shields-its-own.jpg",
    "cards/ONGOING-nothing-can-stop-me-now.jpg",
    "cards/ONGOING-the-very-soil-shall-shake.jpg",
    "cards/ONGOING-your-inescapable-doom.jpg"
  ];

let LeonsioDeck = [
	"cards/know-naught-but-fire.jpg",
    "cards/look-skyward-and-despair.jpg",
    "cards/may-civilization-collapse.jpg",
    "cards/mortal-flesh-is-weak.jpg",
    "cards/my-crushing-masterstroke.jpg",
    "cards/my-genius-knows-no-bounds.jpg",
    "cards/my-wish-is-your-command.jpg",
    "cards/nature-demands-an-offering.jpg",
    "cards/only-blood-ends-your-nightmares.jpg",
    "cards/perhaps-youve-met-my-cohort.jpg",
    "cards/plots-that-span-centuries.jpg",
    "cards/realms-befitting-my-majesty.jpg",
	"cards/ONGOING-your-inescapable-doom.jpg",
	"cards/evil-comes-to-fruition.jpg",
    "cards/feed-the-machine.jpg",
    "cards/i-call-on-the-ancient-magics.jpg",
    "cards/i-delight-in-your-convulsions.jpg",
    "cards/ignite-the-cloneforge.jpg",
    "cards/into-the-earthen-maw.jpg",
    "cards/introductions-are-in-order.jpg"
]

let Leonsio1Deck = [
	"cards/a-display-of-my-dark-power.jpg",
    "cards/all-in-good-time.jpg",
    "cards/all-shall-smolder-in-my-wake.jpg",
    "cards/approach-my-molten-realm.jpg",
    "cards/behold-the-power-of-destruction.jpg",
    "cards/choose-your-champion.jpg",
    "cards/dance-pathetic-marionette.jpg",
    "cards/drench-the-soil-in-their-blood.jpg",
    "cards/embrace-my-diabolical-vision.jpg",
    "cards/every-hope-shall-vanish.jpg",
    "cards/every-last-vestige-shall-rot.jpg",
    "cards/evil-comes-to-fruition.jpg",
    "cards/feed-the-machine.jpg",
    "cards/i-call-on-the-ancient-magics.jpg",
    "cards/i-delight-in-your-convulsions.jpg",
    "cards/ignite-the-cloneforge.jpg",
    "cards/into-the-earthen-maw.jpg",
    "cards/introductions-are-in-order.jpg",
	"cards/ONGOING-my-undead-horde-awakens.jpg",
    "cards/the-dead-shall-serve.jpg"
]
//deklarimi i butonave dhe fshehja e tyre
var num = 0;
const randomBTN = document.getElementById('buttonRandom');
const Leonsiobtn = document.getElementById('buttonLeonsio');
const Leonsio1btn = document.getElementById('buttonLeonsio1');
Leonsiobtn.style.display = 'none';
Leonsio1btn.style.display = 'none';

//bashkimi i 2 vektoreve
const allCards = cards.concat(cardsOngoing);
const RandCards =[];
for (i = 0; i < 20; i++) {
      var letrat = Math.floor(Math.random() * allCards.length);
      RandCards.push(allCards[letrat])
      

    }  
//Kodi i vjeter i butonave
 /* randomBTN.addEventListener("click", () => {

   num += 1;
   outPut.textContent = num;
    var random = Math.floor(Math.random() * RandCards.length);
    document.getElementById('buttonPic').src = RandCards[random];
    document.getElementById('myPicture').src = RandCards[random];
});
  Leonsiobtn.addEventListener("click", () => {
	num += 1;
	outPut.textContent = num;
  var random = Math.floor(Math.random() * LeonsioDeck.length);
  document.getElementById('buttonPic1').src = LeonsioDeck[random];
  document.getElementById('myPicture').src = LeonsioDeck[random];
});
  Leonsio1btn.addEventListener("click", () => {
    num += 1;
    outPut.textContent = num;
    var random = Math.floor(Math.random() * Leonsio1Deck.length);
    document.getElementById('buttonPic2').src = Leonsio1Deck[random];
    document.getElementById('myPicture').src = Leonsio1Deck[random];
  });*/
  //funksionet per butonat per random shuffle dhe terheqjen e kartave random
  function clickRandomDeck(){
    num += 1;
    outPut.textContent = num;
    var random = Math.floor(Math.random() * RandCards.length);
    document.getElementById('buttonPic').src = RandCards[random];
    document.getElementById('myPicture').src = RandCards[random];
  }
  function clickLeonsioDeck(){
  num += 1;
	outPut.textContent = num;
  var random = Math.floor(Math.random() * LeonsioDeck.length);
  document.getElementById('buttonPic1').src = LeonsioDeck[random];
    document.getElementById('myPicture').src = LeonsioDeck[random];
  }
  function clickLeonsio1Deck(){
  num += 1;
  outPut.textContent = num;
    var random = Math.floor(Math.random() * Leonsio1Deck.length);
    document.getElementById('buttonPic2').src = Leonsio1Deck[random];
    document.getElementById('myPicture').src = Leonsio1Deck[random];
  }
  
  clickRandomDeck();
 //selektimi nga lista
  function selectFromList(){
    if(document.getElementById('myList').value == 'random'){
      num = 0;
      randomBTN.style.display = "block";
      Leonsiobtn.style.display = "none";
      Leonsio1btn.style.display = "none";
      clickRandomDeck();
    }
    else if(document.getElementById('myList').value == 'Leonsio'){
      num = 0;
        randomBTN.style.display = "none";
        Leonsiobtn.style.display = "block";
        Leonsio1btn.style.display = "none";
        clickLeonsioDeck();
      }
      else if(document.getElementById('myList').value == 'Leonsio1'){
        num = 0;
        randomBTN.style.display = "none";
        Leonsiobtn.style.display = "none";
        Leonsio1btn.style.display = "block";
        clickLeonsio1Deck();
      }
    }
//funksionet e importuara ne buton
  randomBTN.addEventListener("click", () => {
    clickRandomDeck();
  });
  Leonsiobtn.addEventListener("click", () => {
    clickLeonsioDeck();
	});
  Leonsio1btn.addEventListener("click", () => {
    clickLeonsio1Deck();
     });
  
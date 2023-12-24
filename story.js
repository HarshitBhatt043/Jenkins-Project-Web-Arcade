/*
SEAN MADE THIS.
https://plus.google.com/u/0/101749103627562194088/

This is the actual story. SPOILER ALERT :P 
*/
var story = {
  init: [
    "You wake up and find yourself trapped in a hotel room. You must escape.",
    0,
    "initi",
  ],
  initi: [
    "The lights are off. You can hear moans from somewhere.",
    1,
    [
      "Objective: turn on the lights.",
      "lights",
      "Objective: investigate the moans.",
      "moan",
      "Objective: find the exit.",
      "exit",
    ],
  ],
  lights: [
    "You feel around the wall for the light switch and find out the wall is covered in spikes. Your hand falls off.",
    1,
    [
      "Use the other hand.",
      "otherHand",
      "Continue feeling the wall.",
      "wallFeel",
    ],
  ],
  otherHand: [
    "Your other hand falls off.",
    1,
    [
      "Continue feeling the wall with your face.",
      "facewall",
      "Eat your hand.",
      "whichOne",
    ],
  ],
  facewall: [
    "The spikes stab an important internal organ and you can't live anymore.",
    0,
    "END",
  ],
  whichOne: [
    "You are faced with a very difficult decision: which hand to eat.",
    1,
    ["Left", "whatever", "Right", "whatever"],
  ],
  whatever: [
    "You grow 2 times larger and are now crouching. Your hands regenerate and the other hand disappears. You here some large objects moving around before the lights magically turn on. There is nothing in the room except for the spikes on the wall and the lights on the ceiling. What to do now?",
    1,
    ["Yodel.", "yodelly", "Stand up.", "oucch", "Break the light.", "break"],
  ],
  yodelly: [
    "The excess fat escaped through your mouth and you returned to your normal size. You see two differently colored trapdoors beneath where your feet where.",
    1,
    [
      "Go through the green trapdoor.",
      "gredoor",
      "Go through the magenta trapdoor.",
      "magdoor",
    ],
  ],
  gredoor: [
    'You find yourself in front of two doors and two guards. A sign says "One guard always lies, one guard always tells the truth.',
    1,
    [
      "Ask what the other one would say if he asked them which door he would want to go to.",
      "nope",
      "Go through the left door.",
      "hell",
      "Go through the right door.",
      "heaven",
    ],
  ],
  nope: [
    'The guards both say, "What?" You give up.',
    1,
    [
      "Go through the left door.",
      "hell",
      "Go through the right door.",
      "heaven",
    ],
  ],
  hell: ["You find yourself in hell. At least you escaped.", 0, "WIN"],
  heaven: [
    "You find yourself falling to your death from the sky onto the roof of the hotel.",
    0,
    "END",
  ],
  magdoor: [
    "You find yourself in a kitchen.",
    1,
    [
      "Investigate the refridgerator.",
      "fridge",
      "Investigate the microwave.",
      "microwave",
      "Investigate the stove.",
      "stove",
    ],
  ],
  stove: [
    "You bend over the stove and find out it had been on the entire time and you get burned to death.",
    0,
    "END",
  ],
  fridge: [
    "There are only two foods in the refridgerator. You are hungry.",
    1,
    ["Eat the sushi.", "sushi", "Eat the McDonald's hamburger.", "burger"],
  ],
  sushi: ["You die of food poisoning.", 0, "END"],
  burger: [
    'You hear a murderous voice say, "Yes, yes, continue eating. And do not turn around."',
    1,
    ["Continue eating.", "goodjob", "Turn around.", "badjob"],
  ],
  badjob: ["You die of asphyxiation. evaworcim666", 0, "END"],
  goodjob: [
    'You finish the hamburger and grow fatter. The voice says, "Good job. For getting rid of that monstrosity. You can turn around now."',
    0,
    "teleport",
  ],
  teleport: [
    "You become face-to-face with a man with a knife and a magic lamp. The man asks you which one you want. You are too fat to move your body and so you just point.",
    1,
    ["Point at the knife.", "magic", "Point at the magic lamp.", "notmagic"],
  ],
  nomagic: [
    "The magic lamp apparently had a virus and you got deleted.",
    0,
    "END",
  ],
  magic: [
    "The magic knife telepathically asks you what you would like to do.",
    1,
    ["To make everything a dream.", "shame", "To escape.", "yay"],
  ],
  shame: [
    "Shame. You could've won but instead you just fall asleep.",
    0,
    "init",
  ],
  yay: [
    "Congrats. You find yourself partially lodged in a tree outside of the hotel. At least you escaped.",
    0,
    "WIN",
  ],
  microwave: [
    "The microwave is locked with a padlock that has a number input on it.",
    2,
    666,
    "unlock",
    "wellno",
  ],
  wellno: ["Turn around.", 0, "explosion"],
  explosion: ["The microwave exploded.", 0, "END"],
  unlock: [
    'The microwave opens and you find a marshmellow in the microwave. It is labeled, "Wait 5 minutes without eating this marshmellow for a second marshmellow!"',
    1,
    [
      "Wait 5 minutes.",
      "magicellow",
      "Eat the marshmellow.",
      "foodpoison",
      "Microwave the marshmellows.",
      "entrenum",
    ],
  ],
  entrenum: ["Enter into microwave:", 2, 0, "explosion", "explosion"],
  magicellow: [
    "5 minutes later, another marshmellow appears.",
    1,
    ["Eat a marshmellow.", "foodpoison", "Inspect the marshmellows.", "read"],
  ],
  read: [
    "One of the marshmellows have the digits 4, 3, 5, and 6 with a little doodle of a sheep in between each digit. The other marshmellow has a tiny red button.",
    1,
    ["Press the button.", "catkilled", "Eat a marshmellow.", "foodpoison"],
  ],
  catkilled: ["You see a cat fall from the ceiling to its death.", 0, "cat1"],
  cat1: [
    "The cat's carcass is in front of you.",
    1,
    ["Inspect the cat.", "inspectcatament", "Drink the cat's blood.", "whoa"],
  ],
  inspectcatament: ["The cat squirts blood at you.", 0, "END"],
  whoa: [
    'As you drink the blood, you see the numbers "8002" on the floor. Then someone shoots you and you die.',
    0,
    "END",
  ],
  foodpoison: [
    "The marshmellow contained a high number of cyanide. You died.",
    0,
    "END",
  ],
  oucch: [
    "You break through the walls and ceiling and get hit by the splinters. You died.",
    0,
    "END",
  ],
  break: [
    "You find a smartphone inside the light bulb. It looks like an iPhone without a home button, but when you turn it on, the classic Windows startup tune blares.",
    0,
    "phonie",
  ],
  phonie: [
    "The phone requires a passcode. The lock screen background has sheep doodles on it.",
    2,
    4356,
    "deniedaccess",
    "overheat",
  ],
  overheat: ["Inspect marshmellows.", 0, "overheat1"],
  overheat1: [
    "The phone starts shaking then overheats and burns you to death.",
    0,
    "END",
  ],
  deniedaccess: [
    "The phone opens up to Google Chrome. The top UI bar thing isn't displaying for some reason. There is no internet connection, so it is showing that fun page with the dinosaur. There is no spacebar, though, so you can't play that fun game to pass the time.",
    0,
    "aww",
  ],
  aww: [
    "You need to tap on something.",
    1,
    [
      "Shake the phone.",
      "undo",
      'Say, "Hey, Siri."',
      "hi",
      "Swipe up.",
      "up",
      "Swipe down.",
      "down",
    ],
  ],
  hi: ["Siri awakens.", 0, "hi1"],
  hi1: ["Siri opens its eyes.", 0, "hi2"],
  hi2: ["Siri shoots laser beams out of her eyes and kills you.", 0, "END"],
  down: [
    "Suddenly the internet starts working and the notification center starts exploding with new notifications. You die of Internet.",
    0,
    "END",
  ],
  undo: [
    "The undo dialogue appears and you undo whatever had been done last. The phone connects to the Internet.",
    0,
    "memes",
  ],
  up: ["The control center opens and you disable airplane mode.", 0, "memes"],
  memes: [
    "The page automatically reloads and presents you with links to what look like IP addresses.",
    1,
    [
      "Tap on the link that starts with a 9.",
      "nine",
      "Tap on the link that starts with a 3.",
      "three",
    ],
  ],
  nine: ["You got memed.", 0, "END"],
  three: [
    'The page reloads and presents you with two new IP address-link-whatevers and also has a little message at the bottom saying, "One will lead to death. One will lead to escape."',
    0,
    "three1",
  ],
  three1: [
    "What to do?",
    1,
    [
      "Click on the left one that has the 2008 in it.",
      "nooo",
      "Click on the right one that has the 8002 in it.",
      "nooo",
      "Do the hokey pokey.",
      "shrink",
    ],
  ],
  nooo: [
    "You forgot that you are 2 times larger than normal and so your oversized finger mishits and you die.",
    0,
    "END",
  ],
  shrink: [
    "You magically shrink back to your normal size, but now the phone is too heavy for you to carry. You drop it and it cracks. You can't read what it says, but the IP-link things are still there.",
    1,
    ["Tap the left one.", "blablano", "Tap the right one.", "blablaok"],
  ],
  blablano: ["Drinking blood.", 0, "blabla"],
  blabla: ["You died.", 0, "END"],
  blablaok: [
    "You hear a moan again. The lights flicker off and you hear heavy objects being moved around.",
    0,
    "SPECIAL CASE",
  ],
  blablaok0: [
    "Suddenly you get knocked off of your balance by an invisible force out of a hole outside of the hotel that magically appeared. You escaped.",
    0,
    "WIN",
  ],
  blablaok1: ["You decide to investigate it.", 0, "moan"],
  wallFeel: ["You soon die of blood loss.", 0, "END"],
  moan: [
    "You see a set of glowing red eyes.",
    1,
    [
      "Offer to dance.",
      "bailar",
      "Offer to have a conversation.",
      "conversar",
      "Offer to shake hands.",
      "shakar",
    ],
  ],
  conversar: [
    '"I will kill you," a voice said. Well, that escalated quickly. Oh, and he killed you, of course.',
    0,
    "END",
  ],
  bailar: [
    "He asks which dance to dance. You then realize that you only know two dances.",
    1,
    ["The hokey pokey.", "inout", "The tango", "tango"],
  ],
  inout: [
    '"You put your knifie in,<br>You put your knifie out,<br>You put your knifie in,<br>And you shake it all about,<br><br>You do the hokey pokey<br>and you turn yourself around<br>That what it\'s all about."',
    0,
    "END",
  ],
  tango: [
    "The man doesn't know how to do the tango and so he just stabs you isntead.",
    0,
    "END",
  ],
  shakar: [
    "The eyes just stay there. It turns out that the eyes are just a curtain design. There are more moans inside the curtains. A light turns on inside. You here someone scream and a knife being stabbed into someone.",
    0,
    "so",
  ],
  so: [
    "How should you peek inside?",
    1,
    [
      "Take a quick peek.",
      "quickly",
      'Ask, "Who\'s there?"',
      "ask",
      "Wait until morning instead.",
      "wait",
    ],
  ],
  wait: ["You wait and wait and wait. Morning never comes. You die.", 0, "END"],
  quickly: [
    "You take a quick peek inside and then quickly pull your head out before anyone notices. You saw a man holding a knife repeatingly stabbing the heart of another man. There is blood everywhere. He likes trucks.",
    0,
    "andthen",
  ],
  andthen: [
    "You find a knife on the floor and use it to make a hole in your stomach. You need to quickly throw an internal organ before you die of blood loss.",
    1,
    [
      "The heart.",
      "heart",
      "The liver.",
      "organ",
      "The stomach.",
      "organ",
      "The lungs.",
      "lung",
      "The kidneys.",
      "organ",
      "The intestines.",
      "organ",
    ],
  ],
  heart: ["You had a heart attack and died.", 0, "END"],
  lung: ["You die of asphyxiation.", 0, "END"],
  organ: [
    "The organ magically replaces itself as the hole closes. You hurl the organ at the man and he falls over and dies. You step in to investigate and find a keycard. The dead man is still alive.",
    0,
    "oksonowwhat",
  ],
  oksonowwhat: [
    "What to do, what to do?",
    1,
    ["Take the keycard.", "passcode", "Help the man.", "manhelp"],
  ],
  passcode: [
    "As you pick up the keycard, the man dies. The smell of death overcomes you and you only have a short glance of the numbers on the keycard before you die: 19 21. There is also a picture of a truck.",
    0,
    "END",
  ],
  manhelp: [
    "The keycard disappears as you help the man up. It turns out he's just a dummy. You hear footsteps outside a door.",
    1,
    ["Go through the door.", "collide", "Open the door.", "nocoll"],
  ],
  collide: ["You run into the door and die.", 0, "END"],
  nocoll: [
    "You open the door and walk out into a hallway. Suddenly the door closes and locks. You see a man with a gun coming.",
    1,
    [
      "Run back.",
      "collide",
      "Stand there like an idiot.",
      "shot",
      "Run forwards.",
      "oof",
    ],
  ],
  shot: ["The man shoots you.", 0, "END"],
  oof: [
    "The man falls over and sings Let it go as he looses his gun. Then he dies.",
    1,
    ["Take the gun.", "poisoned", "Explore the hallway.", "diffhall"],
  ],
  poisoned: ["The gun was coated with poison and you died.", 0, "END"],
  diffhall: [
    "You come across a fork in the hall.",
    1,
    [
      "Go left.",
      "lefto",
      "Go forward.",
      "forwardo",
      "Go right.",
      "righto",
      "Go back.",
      "whoops",
    ],
  ],
  lefto: [
    "You come across another fork.",
    1,
    ["Go left.", "lefti", "Go right.", "whoops"],
  ],
  lefti: [
    "You are presented with three buttons.",
    1,
    [
      "Press the blue button.",
      "bloo",
      "Press the red button.",
      "redd",
      "Press the green button.",
      "grin",
    ],
  ],
  bloo: [
    'A dialogue appears: "Press again to confirm."',
    1,
    [
      "Press the blue button.",
      "redo",
      "Press the red button.",
      "redd",
      "Press the green button.",
      "grin",
    ],
  ],
  redo: ["Someone pressed ctrl+Z.", 0, "init"],
  redd: ["Would you like to die?", 1, ["OK", "umok", "Cancel", "cancel"]],
  umok: ["Wish granted.", 0, "END"],
  cancel: [
    "A would you rather dialogue appears. If Trump eats grease, no red for you.",
    0,
    "wyr",
  ],
  wyr: [
    '"2016 Elections:"',
    1,
    ["Donald Trump", "red1", "Hillary Clinton", "blu1"],
  ],
  red1: ["You suffocated in a wall.", 0, "END"],
  blu1: [
    '"Would you rather be stuck on an island in:"',
    1,
    ["Turkey", "red2", "Grease", "blu2"],
  ],
  blu2: ["You accidentally fall into the river Styx and die.", 0, "END"],
  red2: ['"Preferred color:"', 1, ["Red", "red3", "Blue", "blu3"]],
  blu3: ["No red for you.<br><br>(you die of blood loss)", 0, "END"],
  red3: ["Would you like to win?", 1, ["OK", "yeah", "Cancel", "umok"]],
  yeah: ["Wish granted.", 0, "WIN"],
  grin: [
    "Which statement is true?",
    1,
    ["I am dead.", "falsee", "I am a heartless dog.", "truee"],
  ],
  falsee: ["And so your wish came true.", 0, "END"],
  truee: [
    "You turn into a dog without a heart. Your vision is blurry. You see three blurry objects. The one on the left looks like a cucumber, the middle one looks like a potato, and the right one looks like a heart. There is a hole where your heart is.",
    0,
    "organtime",
  ],
  organtime: [
    "Which one to put in your heart-hole?",
    1,
    [
      "The left one.",
      "pickle",
      "The middle one.",
      "pumper",
      "The right one.",
      "valentine",
      "End my life please.",
      "umok",
    ],
  ],
  pickle: [
    "Cucumbers clearly do not go well with your body. You died.",
    0,
    "END",
  ],
  valentine: [
    "You shoved the valentine card inside your body and died of blood loss.",
    0,
    "END",
  ],
  pumper: [
    "You are in great pain but you can see clearly again. There is a dog-shaped hole on the wall. Above it is the number 40 and a picture of food.",
    1,
    [
      "Jump through.",
      "jumpscape",
      "Right now might be a good time to die.",
      "umok",
    ],
  ],
  jumpscape: ["You jumped through the hole and escaped.", 0, "WIN"],
  forwardo: [
    "You come across another fork.",
    1,
    ["Go left.", "whoops", "Go right.", "whoops"],
  ],
  righto: [
    "You come across another fork.",
    1,
    ["Go left.", "whoops", "Go right.", "righti"],
  ],
  righti: [
    "There is a sheep.",
    1,
    [
      "Kill the sheep.",
      "revenge",
      "Pat the sheep.",
      "patpat",
      "Reach inside the sheep's wool.",
      "trespassing",
    ],
  ],
  trespassing: ["You have been killed for trespassing.", 0, "END"],
  revenge: ["The sheep was hungry and ate you instead.", 0, "END"],
  patpat: [
    "You are faced with a very difficult decision: where to pat.",
    1,
    [
      "The sheep's head.",
      "zpat",
      "The sheep's belly.",
      "zpat",
      "The sheep's back.",
      "zpat",
      "The sheep's mouth.",
      "revenge",
    ],
  ],
  zpat: [
    "The sheep is happy but hungry. You need to give it food. But how much?",
    2,
    40,
    "yummie",
    "ohnoes",
  ],
  ohnoes: [
    "The sheep starts shaking and then suddenly a bunch more hungry sheep appear and eat you.",
    0,
    "END",
  ],
  yummie: [
    "The sheep offers to help you escape.",
    1,
    ["Accept the offer.", "acc", "Decline the offer.", "dec"],
  ],
  dec: ["The sheep leaves you to die as it flies away.", 0, "END"],
  acc: ["You ride the sheep out of the hotel. Glory to the sheep!", 0, "WIN"],
  whoops: ["You walk into a wall and die.", 0, "END"],
  ask: [
    "You here the stabbing stop and hurried footsteps fading away.",
    1,
    ["Investigate.", "diei", "Turn around.", "diei"],
  ],
  diei: ["A knife landed in your forehead. You died.", 0, "END"],
  exit: [
    "You find a door.",
    1,
    [
      "Go through the door.",
      "collide",
      "Open the door.",
      "lighterpls",
      "Unlock the door.",
      "unlockDoor",
    ],
  ],
  lighterpls: [
    "You yank off your hand by pulling on the locked doorknob a bit too hard. You die of blood loss.",
    0,
    "END",
  ],
  unlockDoor: [
    "The door requires a key.",
    1,
    [
      "Break down the door.",
      "splinter",
      "Eat the door.",
      "nutrition",
      "Go through the door as if it doesn't exist.",
      "collide",
    ],
  ],
  splinter: ["The wood splinters hurt you and you died.", 0, "END"],
  nutrition: [
    "You obtain night vision but it doesn't work very well. There are four doors.",
    1,
    [
      "Go through the door.",
      "door1",
      "Go through the door.",
      "door2",
      "Go through the door.",
      "door3",
      "Go through the door.",
      "door4",
    ],
  ],
  door1: [
    'A sphinx is waiting for you. She asks, "Billy\'s mom has 3 children. The first one is named Bob. The second one is named Joe. What is the name of the third one?"',
    1,
    ["Bob", "joe", "Joe", "joe"],
  ],
  joe: ["It's actually Billy. The sphinx kills you.", 0, "END"],
  door2: [
    "You quickly hide as you hear someone being dragged into the room.",
    1,
    [
      "Take a peek.",
      "peeking",
      "Listen.",
      "listening",
      "Throw a rock.",
      "throwing",
    ],
  ],
  listening: [
    "As you continue listening, you wonder where the flying sound of a blade was coming from. Then it hit you.",
    0,
    "END",
  ],
  peeking: [
    "Two knifes appear in your eyes. Fortunately one of them can still see and so you pull out your knifes. It turns out they are gift boxes.",
    1,
    ["Open them.", "opening", "Throw them.", "throwing"],
  ],
  opening: [
    "Two knifes fly out from the gift boxes and hit a very important organ in your body and you died.",
    0,
    "END",
  ],
  throwing: [
    "A person walks over to inspect the objects. You throw a knife at him. He falls over and appears to die. Across the room there is a supposedly dead person.",
    1,
    [
      "Inspect the man you killed.",
      "tukill",
      "Inspect the person he killed.",
      "hekill",
    ],
  ],
  tukill: [
    "The man wakes up, and with glowing white eyes, stabs you.",
    0,
    "END",
  ],
  hekill: [
    "You take a selfie with the dead person and see glowing yellow eyes.",
    1,
    ["Stab him.", "story0", "Help him.", "novel0"],
  ],
  story0: ["Suddenly the man with white eyes comes over.", 0, "story1"],
  story1: [
    "He stabs you, but you still live, and then drags you outside the the room towards another room.",
    0,
    "story2",
  ],
  story2: [
    "You pass by a mirror and see your own eyes. They are glowing yellow.",
    0,
    "story3",
  ],
  story3: [
    "The man pushes you over to a corner. You hear an object being thrown and the white-eyed man walks away to inspect it.",
    0,
    "story4",
  ],
  story4: [
    "Suddenly you hear the man being stabbed, but you know he's still alive.",
    0,
    "story5",
  ],
  story5: [
    "A person&mdash;you&mdash;with glowing yellow eyes comes over to you, takes a selfie, then stabs you.",
    0,
    "END",
  ],
  novel0: ["Suddenly the man with white eyes comes over.", 0, "novel1"],
  novel1: [
    "He stabs you, but you still live, and then drags you outside the the room towards another room.",
    0,
    "novel2",
  ],
  novel2: [
    "You pass by a mirror and see your own eyes. They are glowing yellow.",
    0,
    "novel3",
  ],
  novel3: [
    "The man pushes you over to a corner. You hear an object being thrown and the white-eyed man walks away to inspect it.",
    0,
    "novel4",
  ],
  novel4: [
    "Suddenly you hear the man being stabbed, but you know he's still alive.",
    0,
    "novel5",
  ],
  novel5: [
    "A person&mdash;you&mdash;with glowing yellow eyes comes over to you, takes a selfie, then helps you up. He leads you outside of the hotel. You have escaped with yourself.",
    0,
    "WIN",
  ],
  door3: [
    "The room is large. Which side of the room to check out first?",
    2,
    ["The left side.", "recu", "The right side.", "otta"],
  ],
  recu: [
    "You see a machine. It requires you to enter in 20 numbers. Enter in a number:",
    2,
    0,
    "recur",
    "recur",
  ],
  recur: ["Enter in another:", 2, 0, "recur", "recur"],
  otta: [
    "You come across an emergency exit but it requires a passcode.",
    1,
    ["Attempt the passcode.", "binary", "Open the door.", "careful"],
  ],
  careful: ["The door is overheating. You burn to death.", 0, "END"],
  binary: [
    "The keypad only has two keys. There seems to be no other methods of user interaction.",
    1,
    ["0", "10", "1", "10"],
  ],
  10: [
    "The number flashes up on the screen but nothing else seems to happen.",
    1,
    ["0", "10", "1", "10"],
    "SPECIAL CASE",
  ],
  freedom: [
    "A happy face appears on the screen as the door clicks and opens. You walk out of the hotel. You have escaped.",
    0,
    "WIN",
  ],
  door4: [
    "You walk into an interminable hole. I guess this counts as a death.",
    1,
    ["Die like this.", "interminable", "Die normally.", "oksureynot"],
  ],
  interminable: [
    "And so you keep falling and falling and falling and falling...",
    0,
    "recursion",
  ],
  recursion: [
    "...and falling and falling and falling and falling and falling...",
    0,
    "recursion",
  ],
  oksureynot: ["You hit the side of the hole and died.", 0, "END"],

  example0: ["MESSAGE", 0, "NEXTSCENEID"],
  example1: ["MESSAGE", 1, ["CHOICEDESC", "SCENEID"]],
  example2: ["MESSAGE", 2, "CORRECTNUM", "RIGHTCHOICEID", "WRONGCHOICEID"],
};

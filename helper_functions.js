var emotions = {
  angry: {
    exercises: [
      { 
        intro: ["Taking deep breaths has been shown to help..."],
        exercise: ["Let’s do it now, it’s easy!  Breathe deep into your belly for a slow count of 6.", "Inhale slowly for a count of 4.", "Place one hand on your belly and repeat above exhale and inhale 5 more times. Easy peasy."],
        followup: ["Doctors say it best: slowing your breathing calms your emotions."]
      },
      {
        intro: ["Think of one of your role models. Ask yourself: 'What would they do right now?'"],
        exercise: ["Let their wisdom be your wisdom."],
        followup: ["Changing your perspective can shift your energy!"]
      },
      {
        intro: ["Where’s your favorite place to be?"],
        exercise: ["Imagine you’re there right now...", "Think of all the things you love about it, and how that makes you feel.", "See it. Feel it. Live it."],
        followup: ["When you really imagine yourself somewhere else, your body will respond as if you’re there."]
      }
    ],
    quotes: [
      ["'Do not let your anger lead to hatred, as you will hurt yourself more than you would the other.' - Stephen Richards"],
      ["'Impatience is the breeding ground of anger.' - Ketan R Shah"],
      ["'The greatest remedy for anger is delay.' - Thomas Paine"],
      ["'Speak when you are angry – and you’ll make the best speech you’ll ever regret.' - Laurence J. Peter"],
      ["'Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.' - Buddha"],
      ["'For every minute you are angry you lose sixty seconds of happiness.' - Ralph Waldo Emerson"]
    ],
    stories: [
      ["'I’m just trying to make people’s lives a little bit weirder...'"],
      ["imageplaceholder", "'During the week I’m a supervisor at an insurance company.'", "'I’ve got to hide my identity because I have four people working under me. I think it would be hard to hold the team together if they saw me like this.'"],
      ["'followup'"]
    ]
  },
  happy: {
    exercises: ["happy exercise 1", "happy exercise 2"],
    quotes: ["happy quote 1", "happy quote 2"],
    stories: ["happy story 1", "happy story 2"]},
  sad: {
    exercises: ["sad exercise 1", "sad exercise 2"],
    quotes: ["sad quote 1", "sad quote 2"],
    stories: ["sad story 1", "sad story 2"]
  }
};

var remedies = ['exercises', 'quotes', 'stories'];

// return a random type of remedy
var randomRemedy = function() {
  return remedies[Math.floor(Math.random()*remedies.length)]
};

// return a random card from the specified emotion and remedy
var getCard = function(emotion, remedy) {
  var total_options = emotions[emotion][remedy].length;
  return emotions[emotion][remedy][Math.floor(Math.random()*total_options)]
};


// send the input message collection with dots and a 2 second interval between messages
    // I don't know how to test it online but it will console.log(message) the correct messages
    // senderID may need to be changed to recipientID
function sendMessages(collection, index) {
  getDots(senderID)
  if(index <= collection.length) {
    setTimeout(function(){
      message = collection[index]
      sendTextMessage(senderID, message)
      sendMessages(collection, ++index)
    }, 2000);
  }
}

// send messages associated to the exercise-intro
function displayExerciseIntro(card) {
  sendMessages(card.intro, 0)
};

// send messages associated with the exercise-content
function displayExercise(card) {
  sendMessages(card.exercise, 0)
};

// sends messages associated with the exercise-followup
function displayExerciseFollowup(card) {
  sendMessages(card.followup, 0)
}

var card = getCard('angry', 'exercises');
console.log(card)
// displayExercise(card)

//TODO make displayStory and displayQuote functions to display random quotes or stories

module.exports = {
  emotions: emotions,
  randomRemedy: randomRemedy,
  getCard: getCard,
  getIntro: getIntro,
  getRemedy: getRemedy,
  getMoreInfo: getMoreInfo,
  getQuote: getQuote
};

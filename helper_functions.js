var emotions = {
  angry: {
    exercises: [
      [
        ["Taking deep breaths has been shown to help..."],
        ["Let’s do it now, it’s easy!  Breathe deep into your belly for a slow count of 6.", "Inhale slowly for a count of 4.", "Place one hand on your belly and repeat above exhale and inhale 5 more times. Easy peasy."],
        ["Doctors say it best: slowing your breathing calms your emotions."]
      ],
      [
        ["Think of one of your role models. Ask yourself: 'What would they do right now?'"],
        ["Let their wisdom be your wisdom."],
        ["Changing your perspective can shift your energy!"]
      ],
      [
        ["Where’s your favorite place to be?"],
        ["Imagine you’re there right now...", "Think of all the things you love about it, and how that makes you feel.", "See it. Feel it. Live it."],
        ["When you really imagine yourself somewhere else, your body will respond as if you’re there."]
      ]
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

var seen = {
  angry: {
    exercises: [],
    quotes: [],
    stories: []
  },
  happy: {
    exercises: [],
    quotes: [],
    stories: []},
  sad: {
    exercises: [],
    quotes: [],
    stories: []
  }
};

var accessEmotion = function(emotion) {
  return emotions[emotion]
};

// return a random type of remedies for the input emotion
var chooseRemedy = function(emotion) {
  var result;
  var count = 0;
  for (var remedy in emotion)
      if (Math.random() < 1/++count)
         result = emotion[remedy];
  return result;
};

// return a random card from the chosen emotion and remedy categories unless all the cards have been viewed
var accessCard = function(emotion, remedy) {
  var random;
  var total_options = emotions[emotion][remedy].length;
  var record = seen[emotion][remedy];
  if(record.length < total_options) {
    if (record.length == 0) {
      random = Math.floor(Math.random()*total_options)
    }
    while (record.indexOf(random) != -1) {
      random = Math.floor(Math.random()*total_options)
    }
    seen[emotion][remedy].push(random)
    // returns the whole array [remedy, more info about it]
    // wait for the user to ask for more info or moveing on before dumping this info
    return accessEmotion(emotion)[remedy][random]
  }
};

// get the remedy from the chosen categories
var getRemedy = function(emotion, remedy) {
  return accessCard(emotion, remedy)[0]
};

// get additional info about the remedy in the chosen categories
var getMoreInfo = function(emotion, remedy) {
  var data = accessCard(emotion, remedy);
  if (data.length > 1) {
    return data[1]
  } else {
    return "sorry, I don't know more about this topic"
  }
};


module.exports = {
  emotions: emotions,
  seen: seen,
  accessEmotion: accessEmotion,
  chooseRemedy: chooseRemedy,
  accessCard: accessCard,
  getRemedy: getRemedy,
  getMoreInfo: getMoreInfo
};

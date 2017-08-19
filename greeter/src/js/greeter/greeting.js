goog.provide('rf.greeter.greeting');

rf.greeter.greeting = function() {
  var greetings = [
    'Hi',
    'Yo!',
    'How are you?',
    'Hey'
  ];

  return greetings[Math.floor(Math.random() * greetings.length)];
};

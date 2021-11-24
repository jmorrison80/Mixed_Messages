const showerThought = ['Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod.', 
'\"Go to bed, you\'ll feel better in the morning\" is the human version of \"Did you turn it off and turn it back on again?\"',
'Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume',
'Theme parks can snap a crystal clear picture of you on a roller coaster at 70 mph, but bank cameras can\'t get a clear shot of a robber standing still.',
'If my calculator had a history, it would be more embarrassing than my browser history.',
'Lawyers hope you get sued, doctors hope you get sick, cops hope you\'re criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you.'];

const funnyJoke = ['My wife told me to stop impersonating a flamingo. I had to put my foot down.',
'I went to buy some camo pants but couldn’t find any.', 
'I failed math so many times at school, I can’t even count.',
'I used to have a handle on life, but then it broke.',
'I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.', 
'I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels.',
'I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.'];

const journalTopic = ['What is the most beautiful thing you’ve ever seen?', 'What is the hardest truth you’ve ever learned?',
'Does history repeat itself?  Why or why not?',
'Who is your hero?  What do you admire about him or her?',
'What is the greatest lesson you’ve ever learned?',
'What is the best day of the year?  Why is it so special to you?',
'What does your dream house look like?  Describe it in detail.',
'What does it mean to be a good friend?  What type of friend are you?',
'What is your greatest fear?  Do you think it is realistic or not?  Why?'];

let randShowerThought = Math.floor(Math.random() * showerThought.length);
console.log(showerThought[randShowerThought]);
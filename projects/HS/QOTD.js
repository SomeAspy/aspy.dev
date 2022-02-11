// Copyright (c) 2021-2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

//Edited from original to be embedded into site
try{
    let quotes = [
        "When Life gives you lemons, make lemonade",
        "When life gives you lemons, don't make lemonade. Make life take the lemons back! Get mad! I don't want your Damn lemons, what the hell am I supposed to do with these? Demand to see life's manager! Make life rue the day it thought it could give Cave Johnson lemons! Do you know who I am? I'm the man who's gonna burn your house down! With the lemons! I'm gonna get my engineers to invent a combustible lemon that burns your house down!",
        "Bad ideas are more fun than good ones",
        "Medical Malpractice is generally frowned upon",
        "listening to sad music when your sad won't help. ever.",
        "this sentence is false",
        "remember to blink, it makes it easier to see",
        "when you are embarrassed, remember that people don't care enough to notice whatever you did",
        "100% of humans that have come in contact with air have died",
        "Inconsistent premises always make an argument valid.",
        "If this sentence is true, then santa claus exists",
        "Does the set of all those sets that do not contain themselves contain itself?"
    ];
    let RArray = function(list) {
            return list[Math.floor(Math.random()*list.length)];
    }
    function run(){
        alert(RArray(quotes));
    };
}catch{
    console.log("lol this is fucked but it works");
};
run();
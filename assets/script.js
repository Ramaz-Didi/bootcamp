var topics = ["HTML","CSS","Git","JavaScript"];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
   }
function selectTopic() {
 
        if (randomTopic === "HTML") {
            console.log("Let's study HTML!");
        } else if (randomTopic === 'CSS') {
            console.log("Let's study CSS!");
        } else if (randomTopic === 'Git') {
            console.log("Let's study Git!");
        } else if (randomTopic === 'JavaScript') {
            console.log("Let's study JavaScript!");
        } else {
            console.log('Please try again!');
        }
  
   }
   var randomTopic = topics[Math.floor(Math.random() * topics.length)];
   console.log('Here are the topics we learned through Prework:');
        listTopics();
    console.log('Which topic should we study first?');
        selectTopic();


//console.log(topics);
//var topic = "HTML";

//for (var x = 0; x < topics.length; x++) {
//    console.log(topics[x]);
//   }
/*   
if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
*/
//var shapes = ["triangle", "square", "pentagon", "circle"];
//for(var x = 0; x < shapes.length; x++) {
  //  console.log(shapes[x]);
    // code block
  // }
//console.log(shapes[0]);
//console.log(shapes[1]);
//console.log(shapes[2]);
//console.log(shapes[3]);
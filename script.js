// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint
    Mouse = Matter.Mouse
    Bodies = Matter.Bodies;
    
// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create game background
var groundA = Bodies.rectangle(400, 620, 810, 50, { 
  isStatic: true 
});
var wallL = Bodies.rectangle(-20, 300, 50, 900, {
    isStatic: true
});
var wallR = Bodies.rectangle(820, 300, 50, 900, {
    isStatic: true
});

// function separators(){
//     var posX = 180
//     for (var i=4; i == 0; i--){
//       var separator = Bodies.rectangle(posX, 580, 10, 100, {
//         isStatic: true
//         });     
//         console.log(posX)
//         posX += 160;
//         World.add(engine.world,[separator])
//     };
// };

//seperators
// var separator1 = Bodies.rectangle(180, 580, 10, 100, {
//     isStatic: true
// });
// var separator2 = Bodies.rectangle(340, 580, 10, 100, {
//     isStatic: true
// });
// var separator3 = Bodies.rectangle(500, 580, 10, 100, {
//     isStatic: true
// });
// var separator4 = Bodies.rectangle(660, 580, 10, 100, {
//     isStatic: true
// });

var separator1 = Bodies.rectangle(150, 580, 10, 100, {
    isStatic: true
});
var separator2 = Bodies.rectangle(275, 580, 10, 100, {
    isStatic: true
});
var separator3 = Bodies.rectangle(370, 580, 10, 100, {
    isStatic: true
});
var separator4 = Bodies.rectangle(430, 580, 10, 100, {
    isStatic: true
});
var separator5 = Bodies.rectangle(525, 580, 10, 100, {
    isStatic: true
});
var separator6 = Bodies.rectangle(650, 580, 10, 100, {
    isStatic: true
});

//plinko dots
//row1
var plinko1_1 = Bodies.circle(100, 100, 4, {
    isStatic: true
});
var plinko1_2 = Bodies.circle(200, 100, 4, {
    isStatic: true
});
var plinko1_3 = Bodies.circle(300, 100, 4, {
    isStatic: true
});
var plinko1_4 = Bodies.circle(400, 100, 4, {
    isStatic: true
});
var plinko1_5 = Bodies.circle(500, 100, 4, {
    isStatic: true
});
var plinko1_6 = Bodies.circle(600, 100, 4, {
    isStatic: true
});
var plinko1_7 = Bodies.circle(700, 100, 4, {
    isStatic: true
});
var plinko1_8 = Bodies.circle(10, 100, 4, {
    isStatic: true
});
var plinko1_9 = Bodies.circle(790, 100, 4, {
    isStatic: true
});

//row2 
var plinko2_1 = Bodies.circle(50, 200, 4, {
    isStatic: true
});
var plinko2_2 = Bodies.circle(150, 200, 4, {
    isStatic: true
});
var plinko2_3 = Bodies.circle(250, 200, 4, {
    isStatic: true
});
var plinko2_4 = Bodies.circle(350, 200, 4, {
    isStatic: true
});
var plinko2_5 = Bodies.circle(450, 200, 4, {
    isStatic: true
});
var plinko2_6 = Bodies.circle(550, 200, 4, {
    isStatic: true
});
var plinko2_7 = Bodies.circle(650, 200, 4, {
    isStatic: true
});
var plinko2_8 = Bodies.circle(750, 200, 4, {
    isStatic: true
});

//row3
var plinko3_1 = Bodies.circle(100, 300, 4, {
    isStatic: true
});
var plinko3_2 = Bodies.circle(200, 300, 4, {
    isStatic: true
});
var plinko3_3 = Bodies.circle(300, 300, 4, {
    isStatic: true
})
var plinko3_4 = Bodies.circle(400, 300, 4, {
    isStatic: true
});
var plinko3_5 = Bodies.circle(500, 300, 4, {
    isStatic: true
});
var plinko3_6 = Bodies.circle(600, 300, 4, {
    isStatic: true
});
var plinko3_7 = Bodies.circle(700, 300, 4, {
    isStatic: true
});
var plinko3_8 = Bodies.circle(10, 300, 4, {
    isStatic: true
});
var plinko3_9 = Bodies.circle(790, 300, 4, {
    isStatic: true
});

//row4 
var plinko4_1 = Bodies.circle(50, 400, 4, {
    isStatic: true
});
var plinko4_2 = Bodies.circle(150, 400, 4, {
    isStatic: true
});
var plinko4_3 = Bodies.circle(250, 400, 4, {
    isStatic: true
});
var plinko4_4 = Bodies.circle(350, 400, 4, {
    isStatic: true
});
var plinko4_5 = Bodies.circle(450, 400, 4, {
    isStatic: true
});
var plinko4_6 = Bodies.circle(550, 400, 4, {
    isStatic: true
});
var plinko4_7 = Bodies.circle(650, 400, 4, {
    isStatic: true
});
var plinko4_8 = Bodies.circle(750, 400, 4, {
    isStatic: true
});

//Creating ball 
var score = 0
document.addEventListener("click",function(){
    var circles = (Bodies.circle(event.clientX, -300, 21,));
    World.add(engine.world, circles,);
    console.log(event)
    //Determining the # of points earned
    setTimeout(function(){
        if(circles.position.y > 400){
            if(circles.position.x > -20 && circles.position.x < 150 || circles.position.x > 650 && circles.position.x < 820){
                score++
            } else if(circles.position.x > 150 && circles.position.x < 275 || circles.position.x > 525 && circles.position.x < 650){
                score += 2
            } else if(circles.position.x > 275 && circles.position.x < 370 || circles.position.x > 430 && circles.position.x < 525){
                score += 3
            } else if(circles.position.x > 370 && circles.position.x < 430){
                score += 5
            }
            console.log(score)
            console.log(circles.position.x)
            console.log(circles.position.y)
            document.querySelector('h1').innerHTML = "Your Score: " + score;
            World.remove(engine.world, circles) 
        }
    }, 4000)

})

//Tried to stop from spaming the click
// document.addEventListener("click",function(){
//     var circles = (Bodies.circle(event.clientX, -300, 21,));
//     setTimeout(function(){
//         World.add(engine.world, circles,);
//         console.log(event)
//         setTimeout(function(){
//         World.remove(engine.world, circles)
//         }, 4000)
//     }, 5000)
// })

// function addBlock() {
//   var block = Bodies.circle(Math.floor(Math.random() * 800), -300, 20.5,);
//   World.add(engine.world, [block],);
// };

//create a mouse input
// var mouse = Mouse.create(render.engine);
// var mConstraint = MouseConstraint.create(engine, {
//     mouse: mouse
// });

// add all of the bodies to the world
World.add(engine.world, [groundA, wallL, wallR, separator1, separator2, separator3, separator4, separator5, separator6, plinko1_1, plinko1_2, plinko1_3, plinko1_4, plinko1_5, plinko1_6, plinko1_7, plinko2_1, plinko2_2, plinko2_3, plinko2_4, plinko2_4, plinko2_5, plinko2_6, plinko2_7, plinko2_8, plinko3_1, plinko3_2, plinko3_3, plinko3_4, plinko3_5, plinko3_6, plinko3_7, plinko4_1, plinko4_2, plinko4_3, plinko4_4, plinko4_5, plinko4_6, plinko4_7, plinko4_8, plinko1_8, plinko1_9, plinko3_8, plinko3_9])

// run the Stuff
Engine.run(engine);
Render.run(render);
//separators()

//wgdgaoisfg
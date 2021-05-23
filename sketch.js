const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;

function preload(){
    backgroundImg = loadImage("gamingbackground1.jpg");
    
}

function setup(){
    var canvas = createCanvas(1515, 725);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,530,70,70);
    box2 = new Box(800,460,70,70);
    box3 = new Box(800,390,70,70);
    box4 = new Box(800,320,70,70);
    box5 = new Box(800,250,70,70);
   

    box7= new Box(700, 530, 70, 70);
    box8= new Box(700, 460, 70, 70);
    box9= new Box(700, 390, 70, 70);
    box10= new Box(700, 320, 70, 70);
    box11= new Box(700, 250, 70, 70);
    box12= new Box(700, 180, 70, 70);

    box13 = new Box(600, 530, 70, 70);
    box14 = new Box(600, 460, 70, 70);
    box15 = new Box(600, 390, 70, 70);
    box16 = new Box(600, 320, 70, 70);
    box17 = new Box(600, 250, 70, 70);
    box18 = new Box(600, 180, 70, 70);
    box19 = new Box(600, 110, 70, 70);
    box20 = new Box(600, 40, 70, 70);

    box21 = new Box(900, 530, 70, 70);
    box22 = new Box(900, 460, 70, 70);
    box23 = new Box(900, 390, 70, 70);
    box24 = new Box(900, 320, 70, 70);
    box25 = new Box(900, 250, 70, 70);
    box26 = new Box(900, 180, 70, 70);
    box27 = new Box(900, 110, 70, 70);
   
    

    

    ground = new Ground(0, 600, width+width/2+90, 25);

    monster = new Monster(1100, 500, 200)

    hero = new Hero(200, 200, 80);

    rope = new Rope(hero.body, {x:340, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
   
    hero.display();

    monster.display();

    ground.display();

    fill("#f11722");
    stroke("black")
    strokeWeight(2);
    textSize(50)
    text("𝕶𝖎𝖑𝖑 𝖙𝖍𝖊 𝕸𝖔𝖓𝖘𝖙𝖊𝖗", 500, 700);
    
    textSize(25);
    fill("#46f1f3");
    text("Dɾαɠ Tԋҽ Mσυʂҽ Tσ Mσʋҽ Sυρҽɾɱαɳ Aɳԃ Kιʅʅ Tԋҽ Bαԃ Mσɳʂƚҽɾ!!",10,30);

    if(monster.body.position.y>1515){
        fill("#69b00b");
       textSize(45);
     text("𝕸𝖔𝖓𝖘𝖙𝖊𝖗 𝖎𝖘 𝖇𝖊𝖊𝖓 𝕶𝖎𝖑𝖑𝖊𝖉 !!",470,325);
    World.remove(hero,world);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY})
}
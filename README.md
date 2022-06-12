PLAN

Using HTML and JavaScript 
    - Canvas element used to make game in HTML file
    - JavaScript used to draw, write, imgs, functions etc.

MVP: create 2 circle objects that represent player and teacher 
******************
IGNORE FOR NOW
STEP : Creating a canvas
    - HTML 'canvas' element is displayed as a rectangular object on a web page 
    - canvas has a built-in object called getContext("2d") object that has methods and properties for drawing 
    - must have id attribute so it can be referred to by JavaScript
    - width & height define size of canvas
    - you can have multiple <canvas> elements on one HTML page
*****************************

STEP 1: Creating a gaming area and making it ready for drawing
    - function 'startGame()' invokes 'start()' method of the gaming area


        1.1: add style tag below meta head  ✓
        1.2: in <body> tag call game function by adding 'onLoad="startGame()" ✓
        1.2: add <script> tag under body tag ✓
        1.3: in between <script> tag create startGame function ✓
            - function startGame() {
                myGameArea.start();
            }
    
STEP 2: make gaming area ready for drawing 

        2.1: create object 'myGameArea' ✓
        2.2: the start() method creates a <canvas> element and inserts it as the first childnode of the <body> element ✓
        2.3: create canvas using document.createElement ✓
        2.4: set width and height for canvas element ✓
        2.5: .getContext("2d") is a built in object of the <canvas> element which has properties and methods for drawing ✓

            var myGameArea = {
                canvas : document.createElement("canvas"),
                start : function() {
                this.canvas.width = 480; **changed width to fit screen**
                this.canvas.height = 270; **changed**
                this.context = this.canvas.getContext("2d");
                document.body.insertBefore(this.canvas, document.body.childNodes[0]);
                }
            }

STEP 3: create green square Game Component
    - component constructor lets you add compnenets onto gameArea
    - object constructor is called component 

        3.1: in startGame() function create new component called myGamePiece ✓
        3.2: set size and colour of square ✓
              myGamePiece = new component(30, 30, "green", 10, 120);
        3.3: create function componenet that sets the width, height, colour of square
            - ctx is a variable name (could be anything but this is best practice)
            - the context is an a

            function component(width, height, color, x, y) {
                this.width = width;
                this.height = height;
                this.x = x;
                this.y = y;
                this.update = function(){
                    ctx = myGameArea.context;
                    ctx.fillStyle = color;
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                }
            }

STEP 4: Adding a Component Object
    - components have properties and methods that control style and movement 
    - to make square move the display will update 50 times per second (frames)

        4.1: create component() function ✓
            function component(width, height, color, x, y) {
                this.width = width;
                this.height = height;
                this.x = x;
                this.y = y;
                this.update = function(){
                    ctx = myGameArea.context;
                    ctx.fillStyle = color;
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                }
            }


STEP 5: Adding updateGame() function 

         5.1: create updateGameArea() function    
            function updateGameArea() {
                myGameArea.clear();
                myGamePiece.update();
            }

         5.2: in myGameArea object add interval that runs updateGameArea() function 50 times per second (20thmillisecond) ✓
                this.interval = setInterval(updateGameArea, 20);
        5.3: add clear() function underneath  (this will clear entire canvas everytime it updates otherwise the square would make a line drawing and not appear to be moving) ✓
                clear : function() {
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                }

STEP 6: Adding new component for teacher 

        6.1: update var ✓
        6.2: add new game piece into startGame function ✓
            - teacherGamePiece = new component(width, height, colour, x, y)
        6.3: update updateGameArea function ✓
            - teacherGamePiece.update();

STEP 7: test functions are working by making game pieces move
    - changing x position for playerGamePiece by 1 seconds everytime it updates 
    
        7.1: in updateGameArea function add ✓ - piece moves 
            - myGamePiece.x += 1;

STEP 8: Game controllers 
    - addEventListener and set a key property in myGameArea object that calls function to move when arrow key pressed and calls another function to stop moving when arrow key released

        8.1: in myGameArea object ✓
             window.addEventListener('keydown', function (e) {
                myGameArea.key = e.keyCode;
            })
            window.addEventListener('keyup', function (e) {
                myGameArea.key = false;
            })

        8.2: write if statements in updateGameArea function to control movements and speed
            

        






************************************************
Tips for later: 
- create intro scene in canvas                    <canvas id="myCanvas" width="200" height="100"></canvas>

- can add border to canvas element using style attribute
    - <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

-

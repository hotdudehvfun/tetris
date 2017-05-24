const RUNNING=1,STOP=2,PAUSED=3,OVER=4;
const SHAPE_L=40,
      SHAPE_J=50,
      SHAPE_O=60,
      SHAPE_I=70,
      SHAPE_S=80,
      SHAPE_Z=90,
      SHAPE_T=100;
      
const UP=11,
      RIGHT=12,
      DOWN=13,
      LEFT=14;
      
const KEY_LEFT=37,
      KEY_UP=38,
      KEY_RIGHT=39,
      KEY_DOWN=40,
      KEY_SPACE=32,
      KEY_ENTER=13;

      
const EMPTY=0,
      FILLED=1;

var materialColors=[];
materialColors.push("rgba(244, 67, 54,0.6)");
materialColors.push("rgba(233, 30, 99,0.6)");
materialColors.push("rgba(156, 39, 176,0.6)");
materialColors.push("rgba(103, 58, 183,0.6)");
materialColors.push("rgba(33, 150, 243,0.6)");
materialColors.push("rgba(3, 169, 244,0.6)");
materialColors.push("rgba(0, 188, 212,0.6)");
materialColors.push("rgba(0, 150, 136,0.6)");
materialColors.push("rgba(255, 235, 59,0.6)");
materialColors.push("rgba(255, 87, 34,0.6)");


var SHAPE_O_ARRAY_UP=
                [
                  [1,1],
                  [1,1]
                ];
                
//----------------------
var SHAPE_L_ARRAY_UP=
              [
                  [1,0],
                  [1,0],
                  [1,1]
              ];
              
var SHAPE_L_ARRAY_RIGHT=
              [
                  [1,1,1],
                  [1,0,0]
                  
              ];
              
var SHAPE_L_ARRAY_DOWN=
              [
                  [1,1],
                  [0,1],
                  [0,1]
              ];
              
var SHAPE_L_ARRAY_LEFT=
              [
                  
                  [0,0,1],
                  [1,1,1]
              ];
//----------------------
//----------------------
var SHAPE_J_ARRAY_UP=
              [
                  [0,1],
                  [0,1],
                  [1,1]
              ];
              
var SHAPE_J_ARRAY_RIGHT=
              [
                  
                  [1,0,0],
                  [1,1,1]
              ];
              
var SHAPE_J_ARRAY_DOWN=
              [
                  [1,1],
                  [1,0],
                  [1,0]
              ];
              
var SHAPE_J_ARRAY_LEFT=
              [
                  [1,1,1],
                  [0,0,1]
              ];
//----------------------
//----------------------
var SHAPE_I_ARRAY_UP=
              [
                  [1],
                  [1],
                  [1],
                  [1]
              ];
              
var SHAPE_I_ARRAY_RIGHT=
              [
                  [1,1,1,1]
              ];
//----------------------
//----------------------
var SHAPE_S_ARRAY_UP=
              [
                  [0,1,1],
                  [1,1,0]
              ];
              
var SHAPE_S_ARRAY_RIGHT=
              [
                  [1,0],
                  [1,1],
                  [0,1]
              ];
//----------------------
//----------------------
var SHAPE_Z_ARRAY_UP=
              [
                  [1,1,0],
                  [0,1,1]
              ];
              
var SHAPE_Z_ARRAY_RIGHT=
              [
                  [0,1],
                  [1,1],
                  [1,0]
              ];
//----------------------
var SHAPE_T_ARRAY_UP=
              [
                  [0,1,0],
                  [1,1,1]
              ];
              
var SHAPE_T_ARRAY_RIGHT=
              [
                  [1,0],
                  [1,1],
                  [1,0]
              ];
              
var SHAPE_T_ARRAY_DOWN=
              [
                  [1,1,1],
                  [0,1,0]
              ];
              
var SHAPE_T_ARRAY_LEFT=
              [
                  [0,1],
                  [1,1],
                  [0,1]
              ];



var PEICE_TO_USE=[];
//shape l array refernce
PEICE_TO_USE[SHAPE_L+UP]=SHAPE_L_ARRAY_UP;
PEICE_TO_USE[SHAPE_L+RIGHT]=SHAPE_L_ARRAY_RIGHT;
PEICE_TO_USE[SHAPE_L+DOWN]=SHAPE_L_ARRAY_DOWN;
PEICE_TO_USE[SHAPE_L+LEFT]=SHAPE_L_ARRAY_LEFT;

//shape j array refernce
PEICE_TO_USE[SHAPE_J+UP]=SHAPE_J_ARRAY_UP;
PEICE_TO_USE[SHAPE_J+RIGHT]=SHAPE_J_ARRAY_RIGHT;
PEICE_TO_USE[SHAPE_J+DOWN]=SHAPE_J_ARRAY_DOWN;
PEICE_TO_USE[SHAPE_J+LEFT]=SHAPE_J_ARRAY_LEFT;

//shape o array refernce
PEICE_TO_USE[SHAPE_O+UP]=SHAPE_O_ARRAY_UP;
PEICE_TO_USE[SHAPE_O+RIGHT]=SHAPE_O_ARRAY_UP;
PEICE_TO_USE[SHAPE_O+DOWN]=SHAPE_O_ARRAY_UP;
PEICE_TO_USE[SHAPE_O+LEFT]=SHAPE_O_ARRAY_UP;

//shape I array refernce
PEICE_TO_USE[SHAPE_I+UP]=SHAPE_I_ARRAY_UP;
PEICE_TO_USE[SHAPE_I+RIGHT]=SHAPE_I_ARRAY_RIGHT;
PEICE_TO_USE[SHAPE_I+DOWN]=SHAPE_I_ARRAY_UP;
PEICE_TO_USE[SHAPE_I+LEFT]=SHAPE_I_ARRAY_RIGHT;

//shape s array refernce
PEICE_TO_USE[SHAPE_S+UP]=SHAPE_S_ARRAY_UP;
PEICE_TO_USE[SHAPE_S+RIGHT]=SHAPE_S_ARRAY_RIGHT;
PEICE_TO_USE[SHAPE_S+DOWN]=SHAPE_S_ARRAY_UP;
PEICE_TO_USE[SHAPE_S+LEFT]=SHAPE_S_ARRAY_RIGHT;

//shape z array refernce
PEICE_TO_USE[SHAPE_Z+UP]=SHAPE_Z_ARRAY_UP;
PEICE_TO_USE[SHAPE_Z+RIGHT]=SHAPE_Z_ARRAY_RIGHT;
PEICE_TO_USE[SHAPE_Z+DOWN]=SHAPE_Z_ARRAY_UP;
PEICE_TO_USE[SHAPE_Z+LEFT]=SHAPE_Z_ARRAY_RIGHT;

//shape t array refernce
PEICE_TO_USE[SHAPE_T+UP]=SHAPE_T_ARRAY_UP;
PEICE_TO_USE[SHAPE_T+RIGHT]=SHAPE_T_ARRAY_RIGHT;
PEICE_TO_USE[SHAPE_T+DOWN]=SHAPE_T_ARRAY_DOWN;
PEICE_TO_USE[SHAPE_T+LEFT]=SHAPE_T_ARRAY_LEFT;






var game;
var player;

function intiGame()
{
  
  game=
{
  state:RUNNING,
  level:1,
  score:0,
  row:20,
  col:10,
  board:null, //2d array 10*32
  cellSize:10,
  intervalId:null
  
};
player=
{
  //defaults
  piece:null,
  nextPiece:null,
  nextPieceRotation:null,
  nextPieceColor:null,
  row:0,
  col:5,
  rotation:UP,
  color:materialColors[0]
};
clearInterval(game.intervalId);
  //first piece
      player.nextPieceColor=materialColors[getRandomInt(0,materialColors.length-1)];
      player.nextPiece=getRandomInt(4,10)*10;
      player.nextPieceRotation=getRandomInt(UP,LEFT);
  //clear board
  game.board=[];
  for(var i=0;i<game.row;i++)
  {
    game.board[i]=[];
    for(var j=0;j<game.col;j++)
    {
      game.board[i][j]=EMPTY;
    }
  }
  
}
var tempRotation;
document.addEventListener('keyup',function(event)
{
  var key=event.keyCode;
  //console.log(key);
  switch(key)
  {
    
    case KEY_ENTER:
      playSound('game-start');
            startGame();
            break;
    case KEY_UP:
          player.rotation++;
          if(player.rotation>LEFT)
              player.rotation=UP;
          movePieceAndCheck(UP);
                break;
    case KEY_LEFT:
      player.col--;
      movePieceAndCheck(LEFT);
      playSound('move-lr');
                break;
    case KEY_RIGHT:
      player.col++;
      movePieceAndCheck(RIGHT);
      playSound('move-lr');
                break;
    case KEY_DOWN:
      player.row++;
      movePieceAndCheck(DOWN);
                break;
    case KEY_SPACE:
        //hard drop
        hardDrop();
          break;
                
  }
  
});
var timing;
function startGame()
{
  intiGame();
  timing=null;
  spawnPiece();
  timing=function()
  {
    clearInterval(game.intervalId);
    game.intervalId=setInterval(function()
    {
      player.row++;
      movePieceAndCheck(DOWN);
    },1050-(game.level*100)); //
  };
  
  timing();
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spawnPiece()
{
  
  player.row=0;
  player.col=5;
  player.piece=player.nextPiece;
  player.rotation=player.nextPieceRotation;
  player.color=player.nextPieceColor;
  
      //generate next piece
      player.nextPieceColor=materialColors[getRandomInt(0,materialColors.length-1)];
      player.nextPiece=getRandomInt(4,10)*10;
      player.nextPieceRotation=getRandomInt(UP,LEFT);
  
  console.log("new piece="+player.piece+"| dir="+player.rotation);
  
  //draw next piece
  drawNextPiece();
}

function movePieceAndCheck(dir)
{
  
  if(game.state===RUNNING){
  var currentPieceArray=PEICE_TO_USE[player.piece+player.rotation];
  var startRow=player.row , endRow=startRow+currentPieceArray.length;
  var startCol=player.col , endCol=startCol+currentPieceArray[0].length;
  var count=0;
  if(endRow>game.row)
  {
    player.row--;
    dropPiece();
  }
  
  if(endCol>game.col)
  {
    console.log('right wall hit');
    if(dir==RIGHT)
    {
      player.col=game.col-currentPieceArray[0].length;
    }
    if(dir==UP)
    {
            playSound('rotate-fail');
            player.rotation--;
            if(player.rotation<UP)
                player.rotation=LEFT;
    }
    return;
  }
  if(dir==UP)
  {
    playSound('rotate');
  }
  if(startCol<0)
  {
    player.col=0;
    return;
  }
  
        for(var i=startRow,tempRow=0;i<endRow,tempRow<currentPieceArray.length;i++,tempRow++)
        {
          for(var j=startCol,tempCol=0;j<endCol,tempCol<currentPieceArray[0].length;j++,tempCol++)
          {
            // console.log("i="+i+" | j="+j+" | tempRow="+tempRow+" | tempCol=" + tempCol);
            // console.log("currentPieceArray data="+currentPieceArray[tempRow][tempCol]);
            // console.log("board data="+game.board[i][j]);
            
              if(currentPieceArray[tempRow][tempCol]==FILLED)
              {
                  if(game.board[i][j]==EMPTY)
                  {
                    count++;
                    console.log("count="+count);
                  }
              }
          }
        }
        if(count==4)
        {
          //place piece
          console.log('can move player.row='+player.row);
          
        }else
        {
          console.log("hit player.row="+player.row);
          if(player.row===1)
          {
            //game over
            game.state=OVER;
            playSound('game-over')
            clearInterval(game.intervalId);
            drawMatrix("both");
            return;
            
          }
          if(dir==DOWN)
          {
            player.row--;
            dropPiece();
            playSound('soft-drop')
          }
          else if(dir==RIGHT)
          {
            console.log('hit something on right');
            player.col--;
            return;
          }
          else if(dir==LEFT)
          {
            console.log('hit something on left');
            player.col++;;
            return;
          }
          if(dir==UP)
          {
            playSound('rotate-fail');
            player.rotation--;
            if(player.rotation<UP)
                player.rotation=LEFT;
                
                return;
            }
          
        }
  drawMatrix('both');
  }
}

function hardDrop()
{
  
  for(var i=0;i<4;i++)
  {
    player.row++;
    movePieceAndCheck();
  }
  
}

function dropPiece()
{
    var currentPieceArray=PEICE_TO_USE[player.piece+player.rotation];
    var startRow=player.row , endRow=startRow+currentPieceArray.length;
    var startCol=player.col , endCol=startCol+currentPieceArray[0].length;
    for(var i=startRow,tempRow=0;i<endRow,tempRow<currentPieceArray.length;i++,tempRow++)
      {
        for(var j=startCol,tempCol=0;j<endCol,tempCol<currentPieceArray[0].length;j++,tempCol++)
        {
            if(game.board[i][j]!=1)
              game.board[i][j]=currentPieceArray[tempRow][tempCol];
        }
      }
      //check if lines are completed
      var lines=0; var bottomLineRow=null;
      for(var i=0;i<game.row;i++)
      {
        var cellCount=0;
        
        for(var j=0;j<game.col;j++)
        {
          if(game.board[i][j]==1)
            cellCount++;
        }
        
        if(cellCount==game.col)
        {
          lines++;
          console.log('line formed!!');
          //shift cells down from line row
          for(var tempi=i;tempi>0;--tempi)
          {
            for(var tempj=game.col-1;tempj>=0;--tempj)
            {
                game.board[tempi][tempj]=game.board[tempi-1][tempj];
            }
          }
          //clear top row
          for(var j=0;j<game.col;j++)
          {
            game.board[0][j]=0;
          }
        }
      }
      
      if(lines==0)
      {
        //streak break
        game.streak=0;
      }else
      {
        game.streak++;
        playSound('streak-'+game.streak);
      }
      
      if(lines===1)
      {
        playSound('line-1');
        game.score=game.score+(100)+game.streak*100;
      }
      if(lines===2)
      {
        playSound('line-2');
        game.score=game.score+(200)+game.streak*100;
      }
      if(lines===3)
      {
        playSound('line-3');
        game.score=game.score+(600)+game.streak*100;
      }
      if(lines===4)
      {
        playSound('line-4');
        game.score=game.score+(800)+game.streak*100;
      }
      
      if(game.score%1000==0 && game.score>0 && lines>0)
      {
            game.level++;
            if(game.level>10)
            {
              game.level=1;
            }
            //increase speed
            clearInterval(game.intervalId);
            timing();
            playSound('level-up');
      }
      //update score and level
          document.getElementById('score').innerHTML="Score: "+game.score+" pts";
          document.getElementById('level').innerHTML="Level: "+game.level+"";
          document.getElementById('streak').innerHTML="Streak: "+game.streak+"";
          
      spawnPiece();
      drawMatrix('board');
      
}
function drawMatrix(args)
{
  var canvas=document.getElementById('tetris-canvas');
  var ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if(ctx!=null)
  {
    
    
    //draw background
    //draw board
    var size=25,spacing=1;
    for(var i=0;i<game.row;i++)
      {
        for(var j=0;j<game.col;j++)
        {
            if(game.board[i][j]==1)
            {
              ctx.fillStyle="rgba(0, 150, 136, 0.7)";
              ctx.fillRect((j*(size+spacing)),(i*(size+spacing)),size,size);
            }else
            {
              // ctx.fillStyle="rgba(255,255,255,0.31)";
              // ctx.fillRect((j*(size+spacing)),(i*(size+spacing)),size,size);
            }
            
            
        }
      }
    //
    //draw current piece
    if(args=="both")
    {
    var currentPieceArray=PEICE_TO_USE[player.piece+player.rotation];
    var startRow=player.row , endRow=startRow+currentPieceArray.length;
    var startCol=player.col , endCol=startCol+currentPieceArray[0].length;
    for(var i=startRow,tempRow=0;i<endRow,tempRow<currentPieceArray.length;i++,tempRow++)
      {
        for(var j=startCol,tempCol=0;j<endCol,tempCol<currentPieceArray[0].length;j++,tempCol++)
        {
            // if(game.board[i][j]!=1)
            //   game.board[i][j]=currentPieceArray[tempRow][tempCol];
            if(currentPieceArray[tempRow][tempCol]==1)
            {
              ctx.fillStyle=player.color;
              ctx.fillRect((j*(size+spacing)),(i*(size+spacing)),size,size);
            }
              
        }
      }
    }
    
    //check state
    if(game.state==OVER)
    {
      ctx.font="20px sans-serif";
      ctx.fillText("GAME OVER!!!",100,200);
    }
    
    
  }
}

document.getElementById('close-tetris').addEventListener('click',function()
{
  var div=document.getElementById('tetris-window');
  clearInterval(game.intervalId);
  game.state=OVER;
  div.style.display="none";
  
});

function playSound(id)
{
  document.getElementById(id).play();
}

function drawNextPiece()
{
  var canvas=document.getElementById('next');
  var ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if(ctx!=null)
  {
    //draw background
    //draw board
    var size=25,spacing=1;
  
    var currentPieceArray=PEICE_TO_USE[player.nextPiece+player.nextPieceRotation];
    for(var i=tempRow=0;tempRow<currentPieceArray.length;tempRow++)
      {
        for(var tempCol=0;tempCol<currentPieceArray[0].length;tempCol++)
        {
            if(currentPieceArray[tempRow][tempCol]==1)
            {
              ctx.fillStyle=player.nextPieceColor;
              ctx.fillRect((tempCol*(size+spacing)),(tempRow*(size+spacing)),size,size);
            }
              
        }
      }
    }
  }
---
layout: post
title: Quatro Games - The Rules
custom_css: quatro
custom_js: quatro
needs_react: 1
excerpt_separator: <!--more-->
tags: [Test]
---
Quatro is game for two players on 4x4 board and 16 pieces.

<!--more-->
## Pieces

The game has 16 pieces, each with 4 characteristics : color (light, dark) , size (big, small), shape (square, round) , look (solid, hollow).



Characteristic | A | B
--- | --- | ---
Color | \<div class="qcells" data-pieces="1,2,3,4,5,6,7,8"\>\</div\> | <div class="qcells" data-pieces="9,10,11,12,13,14,15,16"></div> 
Size | <div class="qcells" data-pieces="1,2,3,4,9,10,11,12"></div> | <div class="qcells" data-pieces="5,6,7,8,13,14,15,16"></div>
Shape |  <div class="qcells" data-pieces="1,2,5,6,9,10,13,14"></div> | <div class="qcells" data-pieces="3,4,7,8,11,12,15,16"></div>
Look | <div class="qcells" data-pieces="1,3,5,7,9,11,13,15"></div> | <div class="qcells" data-pieces="2,4,6,8,10,12,14,16"></div>

## Board

The board is a 4x4 board with 16 fields and the pieces are placed next to the empty board.
<div class="reactboard" data-pieces="0,0,0,0,  0,0,0,0,  0,0,0,0,  0,0,0,0"></div>

The game is played by two persons. Each taking a turn. 



hier een game
<div class="reactgame"></div>

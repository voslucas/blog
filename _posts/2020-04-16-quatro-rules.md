---
layout: post
title: Quatro Games - The Rules
custom_css: quatro
custom_js: quatro
needs_react: 1
excerpt_separator: <!--more-->
color: rgb(241,89,42)
tags: [Quatro, Games]
---
*Quatro* is game for two players on 4x4 board and 16 pieces.
<!--more-->
The game is inventend by [Blaise Muller](https://en.wikipedia.org/wiki/Quarto_(board_game)), a Swiss mathematician and game designer. It is currently published by [Gigamic](https://en.gigamic.com/game/quarto-classic), a French company. <sup>[1](#fn1)</sup>

## Pieces

[p1]: ../../../assets/img/quatro/1.png "p1"
[p2]: ../../../assets/img/quatro/2.png "p2"
[p3]: ../../../assets/img/quatro/3.png "p3"
[p4]: ../../../assets/img/quatro/4.png "p4"
[p5]: ../../../assets/img/quatro/5.png "p5"
[p6]: ../../../assets/img/quatro/6.png "p6"
[p7]: ../../../assets/img/quatro/7.png "p7"
[p8]: ../../../assets/img/quatro/8.png "p8"
[p9]: ../../../assets/img/quatro/9.png "p9"
[p10]: ../../../assets/img/quatro/10.png "p10"
[p11]: ../../../assets/img/quatro/11.png "p11"
[p12]: ../../../assets/img/quatro/12.png "p12"
[p13]: ../../../assets/img/quatro/13.png "p13"
[p14]: ../../../assets/img/quatro/14.png "p14"
[p15]: ../../../assets/img/quatro/15.png "p15"
[p16]: ../../../assets/img/quatro/16.png "p16"

The game has 16 pieces, each with 4 characteristics : `Color` (light ![][p5], dark ![][p13]) , `Size` (big ![][p1], small ![][p5]), `Shape` (square ![][p5], round ![][p7]) , `Filling` (solid ![][p15], hollow ![][p16]).

## Board

The board is a 4×4 board with 16 fields. At the beginning of the game, the pieces are placed next to the empty board.
<div class="qboard" data-pieces="0,0,0,0,  0,0,0,0,  0,0,0,0,  0,0,0,0"></div>

## Goal

The goal is to get a line of 4 pieces where each piece has a characteristic in common, for example: all light, all small, all round, etc. Hence the name *Quatro*. The line can be horizontal, vertical or diagonal, as shown here:
<div class="qexplain"></div>

Examples of a winning board: 
<div class="qboard" data-pieces="4,12,9,16, 13,11,5,2, 15,7,0,6, 10,1,3,14"></div>
(The four pieces are all hollow.)

> There is an additional rule/variant for advanced players. In this variant you can also win (get *quatro*) if you place four machting pieces in a square (2×2).

## Play

The game is played in turns. In the first round, the starting player picks a piece and hand it over to the other player. After this initial round, the receiver place the piece on a free spot and picks one of the unplayed pieces, next to the boardgame, to handover to his opponent. And so on.. Until one achieves the *Quatro* state. If no more pieces are left, before a *Quatro*, the game is a draw.

<div class="reactgame"></div>



<a name="fn1">1</a>: 
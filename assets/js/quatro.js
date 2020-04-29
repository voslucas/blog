!function(e){var t={};function A(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,A),a.l=!0,a.exports}A.m=e,A.c=t,A.d=function(e,t,l){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(A.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)A.d(l,a,function(t){return e[t]}.bind(null,a));return l},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="",A(A.s=1)}([function(e,t){e.exports=React},function(e,t,A){"use strict";var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)Object.hasOwnProperty.call(e,A)&&(t[A]=e[A]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const a=l(A(0)),i=l(A(2)),n=A(3);document.querySelectorAll(".reactboard").forEach((function(e){let t=e.getAttribute("data-pieces");if(t){let A=t.split(",").map(Number);i.render(a.createElement(n.Board,{pieces:A,highlightLocation:[]}),e)}}));const r=document.querySelector(".reactgame");r&&i.render(a.createElement(n.BoardWithGame,null),r);const c=document.querySelector(".reactgameexplain");c&&i.render(a.createElement(n.BoardExplainWinStates,null),c)},function(e,t){e.exports=ReactDOM},function(e,t,A){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(A(0));a.default.createElement;class i{getSafePieces(e,t){let A=e.getAvailablePieces().filter(e=>0!=e).filter(t=>t!=e.nextPiece);var l=[];for(let i=0;i<A.length;i++){const n=A[i];var a=new r(e.pieces,!1);a.executeMove({location:t,nextPiece:n}),-1!=a.hasDirectWinLocation()||l.push(n)}return l}getMove(e){let t=e.hasDirectWinLocation();if(-1!=t)return{location:t,nextPiece:-1};var A=e.getAvailableLocations(),l=e.getAvailablePieces().filter(e=>0!=e).filter(t=>t!=e.nextPiece),a=[];for(let t=0;t<A.length;t++){const l=A[t];this.getSafePieces(e,l).length>0&&a.push(l)}let i=0;i=a.length>0?a[Math.floor(Math.random()*a.length)]:A[Math.floor(Math.random()*A.length)];var n=this.getSafePieces(e,i);return{location:i,nextPiece:n.length>0?n[Math.floor(Math.random()*n.length)]:l[Math.floor(Math.random()*l.length)]}}}class n{constructor(){this.player1=new i,this.player2=new i,this.currentPlayer=1}reset(){this.currentPlayer=1}DoMove(e){let t;1==this.currentPlayer?(t=this.player1.getMove(e),this.currentPlayer=2):(t=this.player2.getMove(e),this.currentPlayer=1),t.location,e.executeMove(t)}}class r{constructor(e,t=!0){this.winCellIndex=-1,this.nextPiece=4,this.ID=0,this.ID=r.IDGen,r.IDGen++,this.pieces=null==e?[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]:e.slice(),t&&this.checkWinner()}reset(){this.winCellIndex=-1,this.nextPiece=4,this.pieces=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}playOut(e){let t=0;for(;-1==this.winCellIndex;){let A=e.getMove(this);this.executeMove(A),t=0==t?1:0}return-2==this.winCellIndex?2:t}getAvailablePieces(){let e=Array.from(Array(16)).map((e,t)=>t+1);return this.pieces.forEach((t,A)=>{0!=t&&(e[t-1]=0)}),e}getAvailableLocations(){let e=Array(16);return this.pieces.forEach((t,A)=>{0==t&&(e[A]=A+1)}),e.filter(e=>0!=e).map(e=>e-1)}hasDirectWinLocation(){let e=-1,t=this.getAvailableLocations();for(let l=0;l<t.length;l++){var A=t[l];this.simulateMove({location:A,nextPiece:-1}).winCellIndex>=0&&(e=A)}return e}simulateMove(e){var t=new r(this.pieces);return t.pieces[e.location]=this.nextPiece,t.nextPiece=e.nextPiece,t.checkWinner(),t}executeMove(e){this.pieces[e.location]=this.nextPiece,this.nextPiece=e.nextPiece,this.checkWinner()}checkWinner(){r.winCells.forEach((e,t)=>{let A=this.pieces[e[0]],l=this.pieces[e[1]],a=this.pieces[e[2]],i=this.pieces[e[3]];if(0!=A&&0!=l&&0!=a&&0!=i)for(let e=0;e<4;e++)r.PieceBitValue[A-1][e]==r.PieceBitValue[l-1][e]&&r.PieceBitValue[l-1][e]==r.PieceBitValue[a-1][e]&&r.PieceBitValue[a-1][e]==r.PieceBitValue[i-1][e]&&(this.winCellIndex=t)}),-1==this.winCellIndex&&0==this.getAvailableLocations().length&&(this.winCellIndex=-2),-1==this.winCellIndex&&null==this.nextPiece&&(console.log("Illegal move."),this.winCellIndex=-3)}}r.winCells=[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15],[0,5,10,15],[3,6,9,12]],r.PieceBitValue=[[1,1,0,1],[1,1,1,1],[0,1,0,1],[0,1,1,1],[1,1,0,0],[1,1,1,0],[0,1,0,0],[0,1,1,0],[1,0,0,1],[1,0,1,1],[0,0,0,1],[0,0,1,1],[1,0,0,0],[1,0,1,0],[0,0,0,0],[0,0,1,0]],r.IDGen=0;class c{}t.CellImages=c,c.data=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAFFSURBVEhLxZY7TsNAFEXfeICURkJQIgqUig0g0cAyaGhZEi0Ny4AGKRugQhTUIBaAE89wr+3xj1FE0DznRkean3P84ic5RkTsy8P5yXfhd714TNPH4DPbM8uz68U7hfur56tXa81hva2TsvSfOxeP8wzjvHSFFSkw1KN2SE6h9VKg0iWGetQOsRSqyzrEUIhwEv8p0lEJpSecglYYuyMNgtDD7rGgyq8K+6VrQEcrXIHYoZTQsb0Kw4ImdAyEU9AIvXeT0Aodxg5vJlVqXyOMHVCA6YSsMjA6uHZvA5hKWGIyAF88YN3eX8G1TNM08TtKCR1M2zRc0IQOJv4MNYCD6YQTwGxP2O/EMA8Hx3v/haHQjzf60rEkrG0Kr6WLf92On+7kHg/2CN1UVZw6xojLMvm4vJUbCnNwCg6AihBBn8qXiLz9AGee+AKxV8XEAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAJJSURBVEhLxZbNa9RAGMbfSZqkpci2LC2iUvw+9dqD4Ad6kJ707sWr6M1/w1tPXr149CAI4kHxAxT21vakBT1IpZa6IMhukk3G583MZLPJuN3IRp/wYydv3nmfnY8MEUTkbj++cDKMpCdJ4nb6ErgCX8Srt95/YcOFwbtrH11XLKnHzShJ5P7MxZfnHbRbSRq5RBGazaE8qMWGrqQII43RbA7lQS4bNm42hAQbQnxjn4rpkRlSwfBfkE0nnem/OdUJPLGYRQrCqxJt7sSfHIcSHRqrVJKzeto7NxeIQIdyhbHszl7+vKYMX5+AIVUMf/xM99rru/fQ7ILDXlKutbD37NjG8qJzXIWGCmPqzl75uqan1MzxKN7MYIDGFvgwIZu+N0Dnai3lka8h160mCYp5VCHog94hcE4oBPep1lIeuaF9hIq6stVgRkZoAmU4Xlfja03wWtSVrYZBG0qZWuGrrmx1DKzMMEUb71AFnVNLf6rFcZYytCVo6kpaahhYQ0P+Z4ZSUh0lhb5lWJkhJ40A0wydVEdcOO9fRNfKjraDF9TxLUfbrx59u/uAbt64RLvzc+N3UK9PztO3dHTjPj05Mk8rOpwrwtHWvk7qLN1/Tp3ArxpiPSSIhZjsYwe5Arke4LojCiPqLq2TOkuzOcb/L8MF8NjHbzAJOlfYao2soVnUpmH9P8PiLjX3JrH87G9hsaEsPyialk1MrC7cl714U6y8ekiPsLDLWPBsxNMWdm2Kz5TvV+/QbTZsgbOgDRoxhLBP6YCIdn4DAEPf9GK6pagAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAOtSURBVEhLtZZrSBRRFMfPzOyzddV13XRTzFARLbSiyOibPSEIjDAiQvxYWX0oCLQ+9EQoSoiiUtNvRQ9ToQhpNZEokrREs0xbjbJCy9bcbXdnZ6ZzJtfabXxU44Efc++5j//cc+7MvQzMzKgfi3DVhxdGJsUZIsj5fsjn3nGk04VFARERifxT2XSCbP5qm/FUUeoaa7QuT69lV3IsY0e/HqGxXkGUPvp58fHnUb72eJWz4XLtBw/6SVzRJhNkEmx6/aPyrPx4q75Yq2HSx/1TWkCQej998Z1cu7fzanf/dx+6/lixkiB76WCyfft623mTkduE9emiEG6Sxyvcve4Y3lV43PkO6yGrDZ+MrTqUtGDbOmsNhi9r3PdPhmF+Wdcykpdf0t+D1QlRbvxJxhYX2OJ3b7HWGXRS9s998O9wnBibmqjL1WuhvumpewydcniDK6SncfheaoU1SrPtp0sdG/kWuBWzrrcAi7SZJNrqZFzLRfuGmChxKwYDq+phMYt5jyvm0V6Qo0mCjMXMmrJSmAOM5GdBwo7qwmYmM/vnWlj6dhkSZE8VmRZHmoQcAB6r6mOeE1h6dl/EcqxwJKhdlcVuxAbMo/IAFWCWZTCoAVoSNFjMgaUKnVTFYhZQAwyyoNEQmK+UcDWZo+eTsCAL6jQsjwlVfjO10HCkATp50wiiKEqSCLNJADVIiwRFtxe+ivgfmE08qEFaJOgf/gr9Sp3UBDUGSIsEvV1OaKcFTxA+YKq2GdI9AO2kJQueuQZNXh4PU2yQwYlDCPqV2maAjwf/uRvQGBTkn3SB8/lraFR6MzXo7IPmB23QS1rypkGGj1ZCFSZ2TMIOauL1gedENVxBjSFECJ6HgnMQPAk20GanwQo8uRilwX8Lrk667oDKsmtwEzVIUAwKYjP4HK3waVkG2OfbQb7DkPN/eNgBDYXHoAzz+Aar9MsJOfED+Ebumiboy06F2OR5kIY+Rmmi6aCVNbdBQ34JlPp5eIGuiRP/d0EyP3Z23W6GHo0GPBkLIF2nBQMlOTgZWbCsxKgHXOW1ULXnNFwICNCJLrq30hSyhQvSGD/Gf6TlGfTdeQgdsdHAxsVAnF4HhvDJf8c1Bq77reDYWQpnMUr1OMcrdI8iE2Jkk10Bya9DLEhihBFSNufCkpxFkIkbK95kBPnmjb9E9+AQfMTPqvumA9q+eeRcvUVGEMoZvUuITSYYNPpsSNiERCNRCInRzZuMJqX80H+SQkdl8oWs6pcB/ABkiZRtk+ZMxAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAVLSURBVEhLrVZpbFRVFP7mLbN0me7pVGqB0EqqhAZTgQajCWAr0UAw2oQAIUT/uGAihJhAcYMgiUQIitEiqWiCBLAWjGCQgqTBBSwYoA4QSgtCW9rSYdrO/hbPee2UmekbStAv82XuPffe89177nnnPQvuDzxPIIpfrXvMWZRvT2PjzZ6Qb+n7F7zUVIkaUWf7vTCWoFA9J8/x0RvFc3MyrQttslAhCpYCstuIvDaoanpXOKL9frs/0rChru1IbUOnn+wsbopkgpZxeTbbbzumVrtybGtkyTJ52H5PKKp+5VZfaOMzb1741t0eCJFp1InNBIUv3p5QsLgqb3uqQ5xP/bGikAjdH1QP7W3sfW35hrYb1I87baIzoa6maOKiypx6Ct/UYdsDgcJ88UCTZ2H12vbL1B0RFYf/GcKaZXmu11/MOWC36mVDefDgFEUtt7jQOtsm4+DxZt8gGY3wRk/I/47en4q/zMmQFg2Z/h94BpTvsiuvLKMmJ5MeFZSaPi+YP6vMsY8MnP6m6OvXPGcuhd1tHZEu3uIEl5w/7RFraW6mkD08xQzaHy3BJTNf6dhHbYUFLVnpgrO93nXYmSpUGFMSoKhQ9hwN/LBq252Gbo96jUwDQyNIz3YKD29ekblgSVXKAlmCPGyPw4Bfby5+qXNut0fz8h2Kn65Km14xRaqhzdAG+H7vUtU0ddM3A9tXfOyt9QX1P8l4ldhF7CZ2BkL6jQNNAbeqqgNPT5OmC4JGEYr3YZO1gnF5wrH6X0LXOHzyrKnCc0CExCLUjefx5sChdbWD31DnPLGHGBgZHGr3Els2fu3b/fMp/8HYtTG0lJdaSAMyC9qz0pXHTSZRakeC7+301VGnlegj8pYTwTYeu7puh39XKBym9mhfWekqacBuCDrsynh6cqgZT6oal06eU/+mzkhaJwGP+Zovqu7O22G3ma8UW6SIGoagVRIiVIxH72owqNykRrQ4jwWe0z8YiNCa0b4kkTVgZUGBEkPTdQ2JtFs1TiqFeL9QqGiIZr4U0qBxgQU1XxB3NApKIrPSMCkr3TzVzZBih5TtxCQzX37SoCmcwgj33kG72aQUByZuWwm+7NgSmAziJytRlpaCEjNfpMHPb5gFgy1tOMsHHuHwJPqJz85EzexyZNI8LhLJYHmiFM7nn0QNrZFihaJ0X8NZmhc0dn69G+qiSlRbBEg0RjG/S1lG4bwKFN3qw7HzrTB7xwkLnkLGrnexJSMN82PXRhlREH5rKz5s70QrC+o3e6CT01JXLkpo3PAYS7sVUypnoGpxFXrojrqa/jKePXH1Eji3r0bl0nnYSaGcZ7aWef4Kjr1TCy4efUYtJabPKUfl7vWoc9hgfK8kg6rhtqriH26LIgpFAbnGQBKEwvAv+wAvH/oVh6nbH00Gta0D/nF5kMtKMIO2ZTELDZN2l0K57WJy22xOlHR3+t5G7Ny6B/tJg8ui8ZwxaBihxtO4VV6KgvEFML5h2PhfePIcjixfj60UFS74XHLi0l2hHfnqj6O1rBi5Ex5CCdksZo7GIp/sxBkcqV6LTeEI4kpjrCAjTJO935/AZUmCv3QiJltl2DlDos4Y0bYZ+/3w7mhA3YrN+IzeoxfIxKWRXRhIFOQ1YYq/hzKx9ceTOJebCSE/G/k2K+yJzmPpHYT36Gk0vroJWyhKB8nHJTL3E0fEGMkeZrZbiVnEwjQHJr0wG9NmTsGjlFiuVMdQJlNJ9HX0oOtUC9z7G3FmwG/c1XWih8h3xnuJQzLBKIy3CTGVyNUmg8hi/OXNYKd8P1wnOXTcZlvcqe4C+BcNr9kjhUQdBQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAF1SURBVEhL7ZY7TsNAEIbH4ZECSIc4ATSRkEAgBIKKCokjUOUacA6QkGjpuQBdboJooENJcBJ7+SfYZu2ZBWe9dPmUL7vrfYxnlXhNC0ITZaVNK1PrmwcDk6wsqC7a6t8f7B91O4/lYV7Ey6fPxygHsFitGnDl4Xr7one59ZS1vUmNGS+d9HdQfYGc6QzeOpvoYxivEn2i2lATo6Q2f9lUA5IxE2TNg1me7Cr/6mMlIiDRFOYTXAtyWadPIgOaCRxZYuJMu563Na2xCo4M87vM75S163lb0+6T1AjYRIkSEFtayqSJEiVggn/pOIgaIqDBMyFNw6ghAqYImGBwCDXUgFMMbqzjWaxvqSYWUa+7xHiN+lvquv6LGmqG2mQfNf7vR4N1NGSG+KgLePi9XBlxAJ8f0u7ZHl0NRrSBttdrRhRR2lmj95s7ukXzFRYHsHjFgOtwE4rDcw44syF8gzg6fjLVMuBrHNgrOwsOwhsrtnVBQIi+AA4BEflOZcQTAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAIpSURBVEhL7ZU7SxxRFMfP7Mt10bAicYWkCEhCQkgjgihrFSwShIWkSG+nFlqENPkASZc+kCaFhZ2Fja9CXD9ACrGxs4m7sKurm3F2dib/MzvKfU3cjFv6g//e1zn33HMfs3RPr7HCUiQRyjT2P/hQOyxvUCdNlL9PjE++fLAqm8XiKlXcnUJ5Cd3MpgZM//j89M383Mh62I6N55OTnC4/Q/UE4kwDeOtErEbzKoPFoXpH+VxSH/+IqAHJ91vI2katF9LRAhK1INmxaf+xK/VmrRohjNWdlg1H2c+EeoaZb8v50sqHgbWwHbBxYG/Pfaz+RNWB1OvEc+QOV0c/vXiSet7pwhl6OMPiyStUj6HIMwQuJJ9HYcitoLIHbUJbBpUHc86F6meiqy3NpFuc2RlUj9B5MuEgC9nPRESGqmOw2uut5NIg1YelYwjY5psqK1jEv2Eb2Yd3SkcLiAdLbU8WLsCtqD4sE1pAnwMq4kXcRrBQUd0GNGXoesHVZ1tW0qAE26h+JrR3+HWJSovvSXqHtQYduS7tZ/uCd6jRaFJ/foDe5rJUCLuCb2n+NWnvUAv4ZZFKC+/kgHHAtjrDs3rA6C0VS5PEMdUO7aiLZg4oTsKlSeKYahe2TWgBLYs8yTmuEBR0fgXUM0w9ekhjj0doBt/+PMzV8a7Aotu4QKcHv2gHzd8QltBBnZDb/dAglOaOO8Dfw3NI+ocxZXDdFys7AQ6ibek9PYboL+GAr3KxFYzTAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAMGSURBVEhL7VVNSFRRFP7mvfl3phq1tKG0jNQ0Mn+jXARRgW6ilv1AixZtol20kzYDQhQFgdDCRRi5MaM0SGHKoEgoyBKJUjH8LwcdHR1n5r3XOTqDzrw3zjNr5wffu/eee9/57rk/52IT/xqGaKkHPJYpREslSjla6oIeQR5j/NpUWbY7y3bWYhIqBMHgIgVZkpTBwELE29E91Xq+rm+SxklLf6yBVIJiV0NxUXmB02O3ijXcXjbHQ5YVn88fvnvjwdC9xheTc2RKGrGmgyiMX5oO1JYV2FosJuUwTZ6WkgNQ02CQbHYrTpyqcpS7nGJnR/fsPHVoiiYTFDvv5x6rKrI+FQVpGxAhU2qajPK+Q/vNJd6PgWfDk5EQGVXgA5AIw+kjtvTqEmODIATTgCCZ9NNhC598fGv7NWqYiSpoRWhurU+/4s7ERa0o9NBpl0v8Abn5Q294hgxxS5sYIR8ie06WdAFYpOrf0SiGMi7VmM5Qw0iMg0qw9qiY5bCFDmot13q4wxWupoqFGIdEQeF4GXINQpDWX9uRXtrMoRyqsGDc1VNFKEmSBUoYygYpK2ET+Uu5pPj0Df6IRFmEEtZGSDdxmtyp7mKioNLyGhPTAUxINHQjHBhFH/kLL7tdQaIgZSn4e/rRpTVrvQxFEHnSgTfkjzeU5FegipDo9zSiORDEnJYzPez5ga7GNnwmX6pso3Xx5cExBPPcSCvOQyVPQVkHZwLwXa1H3c9x9JCvhWWXK9ASpN+w2P4Oo+WFyM7diXwyGNgYR/ok1umgzNQ9hOf5W7yi5hSR4o1HsuTNz0CgxYvvGVuh5OegUBRhWh0JC6yuD41h4PodeOifdmqOEFUHhrHWe8j76yDuJcGKm5dxrrQApelbkGk2Lokr84tYGJ7A0Mv38N5+hDbav14aP07kveN5qJDqAeZ+zhYu4i5RgHuPG9lOO9JIUB75Bd/vaYxR3zCRhWaJnMGTIpVgDBwtZw4rkSfAGYQj4Ej46HPJQppRrYZewRhi47mMOU8pson/COAPJ38RIOpnqakAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAQjSURBVEhL7VVbbFRVFF333pk7z9oOjxYntQPFUiz10Q6UKCHGBl/4JX6o+MOfJnygiRINkn7RREUMGgxqFBLEEBJHiYrRgkUkJWlGTAqGEJDaUlpaaDudcabzuA/3npnb3jsP2g/9YyVrzjl773PX2efscwZ38F9DyLfzAccyxXyr56nl23lhPoIcY7tweE3rPTWuZx12cbUoCj5S0FRV749PK91dvePfbu64OEZxanbGbTCXoHR6/6qmYGNFp9spPc3jnNkKTdMnJqKZD7bvG9h74Puxf8hUNuOSH8jDdv7wfRtbG10hh11/iBZPW8kJFFMQVJfbifbH27xBX4V0oqs3liBHSdFygtKJDwOPtDU5v5FEtQpQyDQ37TZt+QMN8oPdv8ePDY0paTIWodSWCk+sdS069q7/lFMWmvK2GUzGtKnhm+qYQxbkuhqbX7bDnnfNoH84vbP+ucH3qJvKWWZRSlA+/2X11uZ6eU9+nEUipSf2fZ04+vYnkZPpjD5JJlvzcntg//YFm9fdb1+bi8pBUfXx1z+KtO09Gv+bhlzFZcELqJrqWhjWexbrBpUzi5U3XnLvIl+QWE2sIFYSA3ab8FT4C1+POZ4ZPlD1GvllogV8p8wQNj4s1Xhd6WYgScMcLw0mwru/SoRocJF4ixgjRolDGUU/t/PT2MeKmsyY51T7Muuo4yBaUCgoPtqKgCAmaWWzky9fS53VdQzSYJpobBFXIZfp5E+9yh+TseQ18xyXnK6jDgtajq0oQ1VVHdAz0E2URIXPjMVKlbqqaYhS3LR5jqZnuJhsuZBZFAri3CVEFZVeEcrD4L21aCBX2UfisVa4vW7UmufQTYyQq2iBhYJ66BRGI3GMqhRqsLYGz+zYggD5S91b+f1teF6SUGmec3U4e950rlYUCtIrhWjfXzhtXq0owvfqCzj4+Y5sprxNPE/0uuAMH8SLDXV4yxyfVqAc6cKvFMMHSvKzKNwmHnvag9hwZBcOOWV4c+Yc6Kwi8SRCyTQu0CI8Hgc2OB1YTy7Lwvuu4Jf1L2MrFdoVGvIzNINSW6T1jyBZ74dnVT3W8PpoYpYEp2xDi9uBJ10y2mkbl5JdMPzMqTgmXnkHHYM30EfxXGgWlBLkT6eO92A4uBJLAndjBRkENlpIP4V9KpSpjs/Q+d1v+JmG40TaYCvKPd58v+KhblxeWAl9RR1WUjZ2cyYsYO4PjODqtj3opDnHaXidWFQwjLKlTuBz4TNcRoKr39yCTS2NaFlwFxbRtrK4nkhhemgUAz+eRffuQ/iBCuZPir9B5H8KXkcRbifIYD+/Fj5irSTCv9SPJRVueEhQu34TE7ciGCHfEJGF+MmzFEkh5hI0wNnyy+Ek8gL4anAGnAmXPrcsVDIrM+YraMCI59b4+Jwid/A/AvgX42fWG3X7PQYAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAEWSURBVEhL7ZWxaoUwFIajUlyEWyl1klKxdHF2cPRJ+mx9EkeHO7uUgh2cLK2Liwqm/2+4Q0vbyZPJHz4SPMLnMZo4SimvKIr7dV2vMBeL67pLXddvFF6XZfniOM6tKclEa/1eVdWji/lpnmcPKGE8uiikzFmWRUlCB10Uissu0EVrmmXZGWsY8opUsIZD0zQ5O/z1aSRgtg6TJLHSYdu2+SaM4/iMUVSIDF3XGWEURVY67PveCMMw/CZEEZ8TS//nct/P8Y/agBhhEARWXuk4jkbo+74V4TRNRoiN1YoQB0TOSQo+gRaGjnT78W3mEO6eQ7h7DuHuoZDbjq1obt534BlEQKrjFfTgicITeAA3QFL4oZR6/QIK46tcDTxcogAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAGgSURBVEhL7ZbNTsJAFIWnJdUlGtMmVmIg/mxYs+gSX8QH8G14A5/DBUsWrNmoCS4qiTWmS6Wt1HOmFKtOLSQd3fAlh05npvf0MjMXDCFEw/O89mKxsNDWhmma8Wg0eqDhXr/fvzUMw86G9JCm6fNwODw30W5GUdSAhGY16EVDmhlxHAudoge9aKjdLBe96HrS7XbHWMN99ugCaxhOJpMeM1S+jQ4RmWGn01FmiLeKMPEOzfespxLTsqwzxNpd3q9ghtPptCcNW63WGNcfhjibT7PZ7ArNEEplZznyiLmuO8CZO8q6vhD6vp8ZOo5TluFjEAQXaPq8lZ3lMJZr2/YNDNtZ1yfMELHUa8hzs2zTZA69Qa8V4px5kiRpMUYhFobxnfMjH8hVnLgpxWdVsSp36aaoYuQi/2OI3ViqTVHFyEWk4V+yNaydKkP+aDrQ4ZriXD5TiixtkLKWAlYa7ueqspbDePxvxOt3WI+z0vYLfHAHYvVfR5yrMlux3TS1Q8N1N0QdpFzgY+ga4pbWlTELaQBd0rAJnUIHkE7DFyHE/Qci1Gde4aZgKwAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAALhSURBVEhLtZZLaxNRGIYzE821rbU0JAFJLRGELIIiIkURwYquKgURF+4Ff4I/wK0bdScuXVhExBuCFulGFyqI9UY1qWhbEhJjNDZpm8TnTTOtienFNvPCkzPzZTLv+b5zyTEc65OeM8EZi8W6PB5Ph2EYjmKxWBgfH/9BvAwVqMKqWsvQDAQC3mg0OuhyuYZN0xzAKEzcDfptsVqtzlQqlWfz8/O3k8nko+np6d/EZd5SKxkaGLjj8fhpt9t9AZPd9fiqwnyiVCpdJOsbs7OzJYUWv1lWK0Ozr68vTGZXnE7nEPdrVaFZ1XK5fD+TyZxPJBJfuW/ItvllZiQS6e/p6blF+eL12IZEmd/ncrlhyvxRt4vRRkOzt7c3FAwG71HCPfXYpkSJ36bT6ROpVOobtzVTpz6QjL3hcPgy7TF6px62gwBzIZLNZu/y3gXLSNqC2ZDX673JtaZ/O1Vh+ZydmprSuxdkaDBeXaFQ6IGmfe2RNovSvmC5DJLxDxk6Ozs7D/l8vlGu/x7TdqrKMjmez+dHNYZudo5ztAet2jOtm8eiJdZzzW2LmEGWWdboqDLq9vv9I8zMo+qKXcJwrFAonJRhiN1kjHZX7Rv7NEmGAzKMMFme04ZqYfuUobT7dLETtDC179lJCvq15rQD5MBuyaMiwzlIKmKzJmFOhkV4pYjNkkfRMtSiV2uXVMUnUDOch0Q9YJeewgTIq7addcEp+AmtZthmKMAZ2AaG9fekQ5DOIlvhALRrT5XhNRiBNDT8EftgP9yB5l5ulIegBPzwTxIKdMNhkKmybvWS9aBMZHYEtoPmSk1WSS1pNumcqXOISqzTmgf+R/r9dbgKb+r3S6VsNlTvZPodPsFrUO+CsJaxXvwYLoEq9AHysGQmrTQ5FHeByrEDorAXYqBNvgMkzcAZeAcv4TN8AXVYHVcCDVrJ0JKyk7EGXeOrqS0znbwlvfQXaJ9UhrpWrCGrZTkcfwBl+ax4MQYs/gAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAPqSURBVEhLrZZLaFNZHMaTG5tHm9RaWpLAmFKriF3UB4iIIgPjMF0pogwu3A/MyrW4diuIulVXRQQpalUE6daFD5CpHYeZtoq20toaY9OmaR7+vtt7Y3JzmnaqH/ySe//3nPOdx/+ce/2+9UnlLAj09va2hsPhqN/v9+VyuezIyMhn4kUoQRkaai1Dq7OzM9LT03M0GAyesCzrIEZJ4iFQ3Vy5XP5QKpWeLC8vD05MTDyamppaIC5zo1Yz9GMQ6uvr+z0UCp3DZKcTbyjM/11aWrrAqAcWFxeXFFp58k0mQ6urqyvJyK4EAoFj3K81C16Vi8Xi/dnZ2T/Hx8ffcV8zWm9jViqV6m5vb7/N9PU5sQ2Jaf47nU6fYJr/0e1KtNbQ6ujoSMTj8SGmcI8T+y4xxa9mZmb6p6en33Nrmwb0g2QcSSaTl/n/ld6phz+CTnIhNTc3d492C66RtAmzY5FI5BbXSn+jaOBTPp8fJSM/6L6pqSlOg7uY/na7gFklts+ZyclJtV2QoZ8KrYlE4oHS3i5SrwJZd5c1GSQh3nD/ZSXsi1Fna1tb2/Hm5ubj3DethGvF1D5juxylw59lGIjFYoepMMx19Zq6Kmaz2cvz8/M3uR6DDNjTgzZBDLpbWlpORaPRs07MqzId/i2TyQxrDUOcHH/wf8ide0ZRWQf21RBml3j+CnSqLIMSQMh4EdJM8ySjjXO9q7oN59/PKOdoa1jrFSa4j7XxuVDZvc4tLCxco8x/kIWaPeVIMT0bo+wN6mSr23D/C4XCPsqEbUNuuvTACwVf0xmNbB4anZN6lqXsKHWUVHVt4ZGijG0YJBD1FhAU0v5xD+e1pDIZ6r33tuMQ5XlQhhZzLFXWrQqtsZsg61GBtQoY2hGaekuGukirtEE9YEz1VaQMVR2T5FGSYR4mFDGoG7TY7onUSCqzG3bYd/XS/s3LMAcvFDFIjZyHNjDtUVd61goqa9qHkjzk5QvDL6D9pGwzMQA6vtRBrxRTh66Dqa7Qu7EfImCPYhsMgamwi3p4ErZA0EHXOtKegqmOyyPYDvbo3ek4BTojTRWq+QgyFzNOrBE6FE7DZqgsi5w1yougrDVV3Ahq6yooc2vWVs7NsB/ugKnyRngIB6AF6pJOAS3+EZCpTg5TI+tBI5PZz6B1riSbd39pT+oo03eIPvf0taYs/j9SfR34msq/nHt1wJbXUL2T6SfQG+IlqHd67axlrIYfg/JAM/Qa9O6smEl18+pIcTftfwIt+l7ohQToIJaUgfrcGIXnoBf0W1CH1XENoEarGbrS6GSsRdf6KrVlpi9vSY3q1aVzUiPUtWI1o/omn+8r0Y2F5agQF8UAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAE7SURBVEhL7ZUxToRAFIZnlziEBOkMFyB2WiyVR7CisvNcHsHCzhPQcQu7jQ12ZBUWFP9HBkLmjdFlxo4v+TLMTng/b3dmESuu2ahxzlZpWjuFHn6qcUIvuk3TdBdF0aOa29DkeX6D8QCnUD3wLEmS2ziOn9V8MX3fH4uiuMTlHlKnA/TVzdk0TSPruha2og7V84eqM/RA0XUdhQ432EihJkyB7GmXSKEmWGDbtuzG8YnH63Fucr5mQt80MgzDLAiCJzW34ViW5RXGFzhtGhbo+34mpXQSWFXV74Ge52XQSSBggToS3kE6qLbSrqFz6MEJtmn+mzXQOWugc0yBdIZcwWqxFzC8hvfwHOrrf+ULvsEH+Ap//GujjkN4AdnL8wSos3dYwg81HzB1QJ9R8NLuRiiEOnX5E63oCPENU3wn+Q4mJtcAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAG7SURBVEhL7ZU7TsNAFEVtrASEjJPGikJFEdFBQSqWQJWKjhWwAzZCSQkSHR1UoYDULCB0Fo0BQQGJf5h7rbFlZibKFwmJXOloPL93/V5mYmOpRcsUbVkrAt3cNEpBItpCctCVdru95zjOuejPo6Db7e6j/QCFqWxYabVaB41G40r0Z1aapmGv19vGoweYaSaWriwzCILqcDg05gVxGG81i1qSbGjEcUzTbMM80FQnuaRV13U7tVrtUvRzxSyReNbKNM01NOUEwn6/v4P2ERQlVQzr9XrHtu3CEIH4tve+75+hm9VJEmOsN5vNE8uytrgeL8fx0PM8xVBXUqU0GHvB1C24Adca7sIwHOTr8706KYZRFGWbyiBYhKk3QONXDe8wSOR9Oo3NkMCQU/ldYqsg7yE6KYZJkmQGZZj1OHGNvE8nxfC39acNefx1MAbbiSQvrIIOkC/+A7gAA8BDUhZjOOAYbHJAiD+icg9l0fAQKKdwBnhM+edtgUL/89CwHIuSEks+NBWwC47ABpj49En6As/gFDyBkV8LZmwDFygfzynEzD6BD36cbF0GHJvqbo0QTZjpIn+ipWQZxjfkhWQmuTYEKwAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAJjSURBVEhL7ZW9ixNBGMaz2VzIxxk5laBFUEQvpBUDdoqlcNjben+LxWklaG8jeDaCYnHdYSN+g0JQziAqGBSjURPzefH3JJuY3Z0km5x298CPzLw7O8+8O+9MQrv617Kc3yDSWBF2frsO285vIAUx1JhIPp8/EYvFzofD4bxlWfuIbaO3nU5ns1wu3ykUCp+JdfTCJE0ztHO53HIqlbpk2/YKRrYTd6nb7X5tNpuXi8XiNcyrCvWf+DXJMJLNZs8mk8kbGB10YhNFtndLpdIqfKFrNB1naGcymZNktoFZyokFEqb3yPRCo9H4RddnavpEFnu1hNZ5+XC73Q7NAvu6HI/Hy5VK5Qlz+fbUlOFCOp1ejUaj19Uhw16QfRq2JfVN0hieldjLU7Va7QMhVfFQ3gw14yIZrrHSDBkOVz7aHvRNOM8WMd6q1+svmM+VpTfDMNV4NJFIvKQd64fmEwter1arF2lqL4fyGkYwPAMbtL3PZhKf9VGr1TpHs6xuL2jQAqzA4PbYCc9Bx8m1cF1TXungujZ6Tv0EGbvkNdSAEnzr9XamLWj3m3/lNVRmP+Bhrze/NM8DqIMrS1OGMrwFTQXm1DN4DIHmUOFk4TZoAbNSAx2H/RCo0jVoD5yGp2CadBzK6AocBy3cJ+PfDdJmq1pfwyE4AtNWq6q8CjfhHRg/5zhDrbYBOrSv4CMcgCXwvvMdNmEN7kMRfoPm8GnaqlVUCdABVpbHHPaC7shP8AZk8h60QGVmNJOCbKrGKCvdrUmHKKj0Vfa6K1UoMpp6YQQxHJXGjx6lQbGMzWhX/1mh0B8HpzQqRuDPHwAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAMDSURBVEhL7ZVNaxNRFIbz3cTUSFWKYkO70IaCKzUguhAEBRFxL7oQC/4PFy6qLhR0K25cVASh6kJX3bixfoESlDa0tmBQjPloYpImxueNM3VmMklnobu+8DCZM+fec8895974NvWv5TeeXiRfETCebYNfxtOTvASUTyidTh+IRqNnA4FA2u/3b8f2Cy20Wq3ZfD7/KJPJfMXW0oB+2ihgcGJiYjyRSFwNBoNnCBQ07Da12+3vjUbjWjabvU3wikx/vnSrX8BQKpU6Ho/H7xFol2HrK7KdyeVyk/CNV9egvQIGk8nkITJ7RrCEYfMkgj4m03P1en2V166gblvkp1ZDaJrBo81m02eFrSvWarXltbW1VWoYxxa0fsc2HovF8sVicY65umrqlmF4eHh4MhKJ3NELGXaM1KlWqVSmC4XCc37/wBTGZ5SFXQiHwwc7Tkj+fM9Ry8PVanUZk7p4Xc4MNfsgGU6x0iQZmitvlcvlm6VS6S7fX8MCLPF9kUk/0FDjBNlj+vMcJPA8O/EWP1uWzoABBo/Q+lcYGDKCaRvfkN0U3zNQgjo0QHUqEKDI8zS+AXMMtlW2/Ynhty4dYqv0PkbBB8Bn4QX2JfgJ5hapIZqQZ+I5slmxjmGRY3wbAFvZnAH9rCyGswasw4rV5lWw1cOQtqyoJrKO4T2CPdzxsMgZUNLBdU6cNJ69pImdZ7UMXcfCGVAOOVAXWnUKdoDbAkNwEnZ23v5qHrTlfaUJR2AGFNzKQzCDqi5CmR0F82Yx0TZfhDj0lSbRzXIe1InWScQ7uAxH4ATcAHWo0+8l7IeuGrpJTil4AM6JvKDmugTaDVuH9pKctsIxeAVuk/ZCZ+467APX7Fz/bpCKrW79CLtBZ2qj1aorb8F9WATbgTfVK6BWqxrm4T2sgLpwCJxjCjALuomeQhZ0QWiOLm20anXkFtAZU5Z7DbaBOvELfAIF+QxaoDJzDSZ5Kap8lFUU1OZCt4guhxroPlWjKJDbTWSTl4BWyd96+M1m6ZnRpv6zfL7fj0yeKktj3pgAAAAASUVORK5CYII="],t.Cell=e=>{let t=e.highlight?"highlight":"";return 0==e.index?a.default.createElement("div",{className:t}," "):a.default.createElement("img",{src:c.data[e.index-1],className:t})};class h extends a.default.Component{constructor(e){super(e),this.winnerID=0,this.winners=[]}componentDidMount(){this.timerID=setInterval(()=>{this.onTimer()},500)}componentWillUnmount(){clearInterval(this.timerID)}onTimer(){this.winnerID++,this.winnerID>=r.winCells.length&&(this.winnerID=0),this.winners=r.winCells[this.winnerID],this.forceUpdate()}render(){return a.default.createElement(s,{pieces:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],highlightLocation:this.winners})}}t.BoardExplainWinStates=h;class o extends a.default.Component{constructor(e){super(e),this.isBusy=!1,this.state={gameLogic:new n,boardLogic:new r([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),player1wins:0,player2wins:0,draws:0}}reset(){this.state.gameLogic.reset(),this.state.boardLogic.reset()}nextMove(){this.state.gameLogic.DoMove(this.state.boardLogic),this.setState({boardLogic:this.state.boardLogic})}playSingle(){if(this.isBusy)return;for(this.isBusy=!0,-1!=this.state.boardLogic.winCellIndex&&this.reset();-1==this.state.boardLogic.winCellIndex;)this.state.gameLogic.DoMove(this.state.boardLogic);let e=this.state.player1wins,t=this.state.player2wins,A=this.state.draws;-2==this.state.boardLogic.winCellIndex&&A++,this.state.boardLogic.winCellIndex>=0&&(1==this.state.gameLogic.currentPlayer?t++:e++),this.setState({boardLogic:this.state.boardLogic,player1wins:e,player2wins:t,draws:A}),this.isBusy=!1}componentWillUnmount(){clearTimeout(this.timeOutID)}startLoop(){clearTimeout(this.timeOutID),this.timeOutID=setTimeout(()=>{this.playSingle(),this.startLoop()},10)}stopLoop(){clearTimeout(this.timeOutID)}render(){let e=[];return this.state.boardLogic.winCellIndex>=0&&(e=r.winCells[this.state.boardLogic.winCellIndex]),-2==this.state.boardLogic.winCellIndex&&(e=[0,3,12,15]),a.default.createElement("div",null,a.default.createElement("span",null," Current player is : ",this.state.gameLogic.currentPlayer," "),a.default.createElement("span",null," Stats p1-p2-draw : ",this.state.player1wins," - ",this.state.player2wins," - ",this.state.draws," "),a.default.createElement(s,{pieces:this.state.boardLogic.pieces,highlightLocation:e,nextPiece:this.state.boardLogic.nextPiece}),a.default.createElement("button",{className:"btn",onClick:()=>{this.nextMove()}},"Next Move"),a.default.createElement("button",{className:"btn",onClick:()=>{this.playSingle()}},"Single game"),a.default.createElement("button",{className:"btn",onClick:()=>{this.startLoop()}},"Start Loop"),a.default.createElement("button",{className:"btn",onClick:()=>{this.stopLoop()}},"Stop Loop"))}}t.BoardWithGame=o;class s extends a.default.Component{constructor(e){super(e)}getOtherPieces(e){let t=Array.from(Array(16)).map((e,t)=>t+1);return e.forEach((e,A)=>{0!=e&&(t[e-1]=0)}),t}render(){let e=this.props.pieces,A=this.getOtherPieces(e),l=this.props.nextPiece,i=this.props.highlightLocation||[];return a.default.createElement("div",null,a.default.createElement("table",{className:"free"},a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[0],highlight:0==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[1],highlight:1==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[2],highlight:2==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[3],highlight:3==l}))),a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[4],highlight:4==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[5],highlight:5==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[6],highlight:6==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[7],highlight:7==l}))),a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[8],highlight:8==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[9],highlight:9==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[10],highlight:10==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[11],highlight:11==l}))),a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[12],highlight:12==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[13],highlight:13==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[14],highlight:14==l})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:A[15],highlight:15==l})))),a.default.createElement("table",{className:"board"},a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[0],highlight:i.includes(0)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[1],highlight:i.includes(1)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[2],highlight:i.includes(2)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[3],highlight:i.includes(3)}))),a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[4],highlight:i.includes(4)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[5],highlight:i.includes(5)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[6],highlight:i.includes(6)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[7],highlight:i.includes(7)}))),a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[8],highlight:i.includes(8)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[9],highlight:i.includes(9)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[10],highlight:i.includes(10)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[11],highlight:i.includes(11)}))),a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[12],highlight:i.includes(12)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[13],highlight:i.includes(13)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[14],highlight:i.includes(14)})),a.default.createElement("td",null,a.default.createElement(t.Cell,{index:e[15],highlight:i.includes(15)})))))}}t.Board=s;class d extends a.default.Component{constructor(e){super(e),this.state={liked:!1}}render(){return this.state.liked?"You liked this.":a.default.createElement("button",{onClick:()=>this.setState({liked:!0})},"Like")}}t.LikeButton=d}]);

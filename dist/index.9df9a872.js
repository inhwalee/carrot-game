const e={name:"farm",item:{good:"carrot",bad:"bug"},timeLimit:1e4,mission:6},t=new Audio("./assets/sound/bgm.mp3"),n=(new Audio("./assets/sound/pull_bad.mp3"),new Audio("./assets/sound/pull_good.mp3"),new Audio("./assets/sound/game_lose.mp3"));new Audio("./assets/sound/game_win.mp3");function s(){t.pause()}class o{constructor(e,t){this.name=e[t],this.type=t}getName(){return this.name}getImg(){return console.log(this.name),`./assets/img/${this.name}.png`}getSound(){return`./assets/sound/pull_${this.type}.mp3`}}const i=e.mission;function m(e,t){let n=[];const s=u(t,"good",i),o=u(t,"bad",i);n=[...n,...a(s),...a(o)],e.innerHTML=n.join("")}function u(e,t,n){let s=[];for(let i=0;i<n;i++)s.push(new o(e,t));return s}function a(e){return e.map((e=>`<img src='${e.getImg()}' alt=${e.getName()}>`))}const d=document.getElementById("container"),c=document.getElementById("play"),l=document.getElementById("pause"),r=()=>setTimeout(g,e.timeLimit);function g(){s(),n.play()}c&&c.addEventListener("click",(function(){d&&m(d,e.item);t.play(),r()})),l&&l.addEventListener("click",(function(){s(),clearTimeout(r())}));
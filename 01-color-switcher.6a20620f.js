const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),i=document.body,r={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((()=>{i.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))},stop(){clearInterval(this.intervalId),this.isActive=!1}};t.addEventListener("click",(()=>{r.start()})),e.addEventListener("click",(()=>{r.stop()}));
//# sourceMappingURL=01-color-switcher.6a20620f.js.map

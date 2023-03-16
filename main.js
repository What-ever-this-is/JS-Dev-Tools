(()=>{
var devTools=document.createElement("div");
var navBar=document.createElement("div");
var navBarTabTemplate = document.createElement("div");
var navBarTabs=["Elements","Console","Storage","About"];
var currentTab="Elements";
var devToolsID=`JSDEVTOOLS-${Math.floor(Math.random()*1000)}-${Math.floor(Math.random()*1000)}-WHATEVERTHISIS`;
devTools.id=devToolsID;
devTools.style.width="30%";
devTools.style.height="100%";
devTools.style.position="fixed";
devTools.style.top="0px";
devTools.style.right="0px";
devTools.style.backgroundColor="white";
devTools.style.fontFamily="sans-serif";
devTools.style.borderLeft="solid 1px gray";
navBar.style.position="absolute";
navBar.style.top="0px";
navBar.style.left="0px";
navBar.style.backgroundColor = "black";
navBar.style.width='100%';
navBar.style.height="1.3em";
navBar.style.color="white";
navBarTabTemplate.style.display="inline-block";
navBarTabTemplate.style.backgroundColor="rgba(255,255,255,0)";
navBarTabTemplate.style.padding="0 5px 0 5px";
navBarTabTemplate.style.cursor="pointer";
devTools.appendChild(navBar);
for(var i=0; i<navBarTabs.length;i++){
var newNavbarTab=navBarTabTemplate.cloneNode(true);
newNavbarTab.innerText=navBarTabs[i];
newNavbarTab.onmouseover=function(){this.style.backgroundColor="rgba(255,255,255,0.5)"};
newNavbarTab.onmouseout=function(){this.style.backgroundColor="rgba(255,255,255,0)"};
newNavbarTab.onclick=function(){currentTab=this.innerText;};
navBar.appendChild(newNavbarTab);
}
document.documentElement.appendChild(devTools);
})();
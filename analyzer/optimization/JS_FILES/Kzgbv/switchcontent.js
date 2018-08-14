function switchcontent(className,filtertag){this.className=className;this.collapsePrev=false;this.persistType="none";this.filter_content_tag=typeof filtertag!="undefined"?filtertag.toLowerCase():""}switchcontent.prototype.setStatus=function(openHTML,closeHTML){this.statusOpen=openHTML;this.statusClosed=closeHTML};switchcontent.prototype.setColor=function(openColor,closeColor){this.colorOpen=openColor;this.colorClosed=closeColor};
switchcontent.prototype.setPersist=function(bool,days){if(bool==true)if(typeof days=="undefined")this.persistType="session";else{this.persistType="days";this.persistDays=parseInt(days)}else this.persistType="none"};switchcontent.prototype.collapsePrevious=function(bool){this.collapsePrev=bool};
switchcontent.prototype.sweepToggle=function(setting){if(typeof this.headers!="undefined"&&this.headers.length>0)for(var i=0;i<this.headers.length;i++)if(setting=="expand")this.expandcontent(this.headers[i]);else if(setting=="contract")this.contractcontent(this.headers[i])};
switchcontent.prototype.defaultExpanded=function(){var expandedindices=[];for(var i=0;!this.collapsePrev&&i<arguments.length||this.collapsePrev&&i==0;i++)expandedindices[expandedindices.length]=arguments[i];this.expandedindices=expandedindices.join(",")};switchcontent.prototype.togglecolor=function(header,status){if(typeof this.colorOpen!="undefined")header.style.color=status};
switchcontent.prototype.togglestatus=function(header,status){if(typeof this.statusOpen!="undefined")header.firstChild.innerHTML=status};switchcontent.prototype.contractcontent=function(header){var innercontent=document.getElementById(header.id.replace("-title",""));innercontent.style.display="none";this.togglestatus(header,this.statusClosed);this.togglecolor(header,this.colorClosed)};
switchcontent.prototype.expandcontent=function(header){var innercontent=document.getElementById(header.id.replace("-title",""));innercontent.style.display="block";this.togglestatus(header,this.statusOpen);this.togglecolor(header,this.colorOpen)};
switchcontent.prototype.toggledisplay=function(header){var innercontent=document.getElementById(header.id.replace("-title",""));if(innercontent.style.display=="block")this.contractcontent(header);else{this.expandcontent(header);if(this.collapsePrev&&(typeof this.prevHeader!="undefined"&&this.prevHeader.id!=header.id))this.contractcontent(this.prevHeader)}if(this.collapsePrev)this.prevHeader=header};
switchcontent.prototype.collectElementbyClass=function(classname){var classnameRE=new RegExp("(^|\\s+)"+classname+"($|\\s+)","i");this.headers=[],this.innercontents=[];if(this.filter_content_tag!="")var allelements=document.getElementsByTagName(this.filter_content_tag);else var allelements=document.all?document.all:document.getElementsByTagName("*");for(var i=0;i<allelements.length;i++)if(typeof allelements[i].className=="string"&&allelements[i].className.search(classnameRE)!=-1)if(document.getElementById(allelements[i].id+
"-title")!=null){this.headers[this.headers.length]=document.getElementById(allelements[i].id+"-title");this.innercontents[this.innercontents.length]=allelements[i]}};
switchcontent.prototype.init=function(){var instanceOf=this;this.collectElementbyClass(this.className);if(this.headers.length==0)return;if(this.persistType=="days"&&parseInt(switchcontent.getCookie(this.className+"_dtrack"))!=this.persistDays)switchcontent.setCookie(this.className+"_d","",-1);var opencontents_ids=this.persistType=="session"&&switchcontent.getCookie(this.className)!=""?","+switchcontent.getCookie(this.className)+",":this.persistType=="days"&&switchcontent.getCookie(this.className+
"_d")!=""?","+switchcontent.getCookie(this.className+"_d")+",":this.expandedindices?","+this.expandedindices+",":"";for(var i=0;i<this.headers.length;i++){if(typeof this.statusOpen!="undefined")this.headers[i].innerHTML='<span class="status"></span>'+this.headers[i].innerHTML;if(opencontents_ids.indexOf(","+i+",")!=-1){this.expandcontent(this.headers[i]);if(this.collapsePrev)this.prevHeader=this.headers[i]}else this.contractcontent(this.headers[i]);this.headers[i].onclick=function(){instanceOf.toggledisplay(this)}}switchcontent.dotask(window,
function(){instanceOf.rememberpluscleanup()},"unload")};
switchcontent.prototype.rememberpluscleanup=function(){var opencontents=new Array("none");for(var i=0;i<this.innercontents.length;i++){if(this.persistType!="none"&&(this.innercontents[i].style.display=="block"&&(!this.collapsePrev||this.collapsePrev&&opencontents.length<2)))opencontents[opencontents.length]=i;this.headers[i].onclick=null}if(opencontents.length>1)opencontents.shift();if(typeof this.statusOpen!="undefined")this.statusOpen=this.statusClosed=null;if(this.persistType=="session")switchcontent.setCookie(this.className,
opencontents.join(","));else if(this.persistType=="days"&&typeof this.persistDays=="number"){switchcontent.setCookie(this.className+"_d",opencontents.join(","),this.persistDays);switchcontent.setCookie(this.className+"_dtrack",this.persistDays,this.persistDays)}};
switchcontent.dotask=function(target,functionref,tasktype){var tasktype=window.addEventListener?tasktype:"on"+tasktype;if(target.addEventListener)target.addEventListener(tasktype,functionref,false);else if(target.attachEvent)target.attachEvent(tasktype,functionref)};switchcontent.getCookie=function(Name){var re=new RegExp(Name+"=[^;]+","i");if(document.cookie.match(re))return document.cookie.match(re)[0].split("=")[1];return""};
switchcontent.setCookie=function(name,value,days){if(typeof days!="undefined"){var expireDate=new Date;var expstring=expireDate.setDate(expireDate.getDate()+days);document.cookie=name+"="+value+"; expires="+expireDate.toGMTString()}else document.cookie=name+"="+value};

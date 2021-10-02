class cubeJs{

	startup(){		
    var d = "<div id=\"myModal\" class=\"modal\"><div class=\"modal-content\"><span class=\"close\">&times;</span><p>Some text in the Modal..</p></div></div>";

		var e = "<style src=\"\"></script>";


		document.write(d);

		document.write(e);

		var modal = document.getElementById("myModal");

		var span = document.getElementsByClassName("close")[0];

		span.onclick = function() {

			modal.style.display = "none";

		}

		window.onclick = function(event) {

		  if (event.target == modal) {

		    modal.style.display = "none";

		  }

		}

		modal.style.display = "block";

	}

	

	class html{

		class htmlRoot{

			class colors{

				tableViewBg = "#7E8A8D",

				tableViewText = "#000000", 

				listViewBg = "#7E8A8D", 

				listViewText = "#000000",

				titleViewBg = "#FF7A00", 

				titleViewText = "#ffffff",

			}

		}

	}

	

	class dialogWindow{

		information = {

			

		}

		

		create(name,title,message,type,button1,function1,button2,function2,button3,function3,showCloseButton){

			var 

		}

	}

	

	class dynamicVariables{

		declare(name,content){

			if(typeof(content) === "number"){

				var y = content;

			}

			

			var x = "<script language=\"javascript\">";

			var x = x + "var " + name;

			

			if(y === content) {

				var x = x + " = " + content;

			}else{

				var x = x + " = \"" + content;

				var x = x + "\""

			}

			

			var x = x + ";</script>";

			document.write(x);

		}

	}

	

	class documentUtitly{

		class list{

			lineContents = [];

			showLines = false;

			titleVisibility = false;

			titleText = [];

			titleColor = false;

			noteVisibility = false;

			note = [];

			

			writeLine(text){

				var len = lineContents.lenght;

				var this.lineContents[len] = text;

			}

			

			setTitle(visible,text,color){

				var this.titleVisibility = visible;

				var this.titleText[0] = text;

				var this.titleColor = color;

			}

			

			setNote(visible,text){

				var this.noteVisibility = visible;

				var this.note[0] = text;

			}

			

			showLineNumbers(visibility){

				var this.showLines = visibility;

			}

			

			formListToHtml(){

				if (this.showLines === true){

					for (var cur = 0;;;){

						var x = cur + 1;

						var lineView = "<font height=\"50px\">#" + String(x);

						var lineView = lineView + "</font> <font>";

						var lineView = lineView + lineContents[x - 1] + "</font><br>";

						var form = form + lineView;

						

						if (cur === this.lineContents.lenght()){

							break;

						}

					}

					var form = "<div id=\"listView\">" + form;

					var paragraph = "<p margin-top=20px><font color\"#FF002B\">"

					try {

						var paragraph = paragraph + this.note[0];

					}

					var paragraph = paragraph + "</font></p>";

					if ()

				}

			}

		}

	}

	

	class dynamicFunction{

		

		execute(name,scriptString){

			var this.list.temponary = "<script language=\"javascript\">";

			var this.list.temponary = this.list.temponary + scriptString;

			var this.list.temponary = this.list.temponary + "</script>";

			var this.list.lastlyExecuted = this.list.temponary;

			

			document.write(this.list.temponary

		}

		

		create(name,scriptString){

			var x = lenght.this.list.functionNames[];

			var this.list.functionNames[x - 1] = name;

			

			var y = "<script language=\"javascript\">";

			var y = y + scriptString;

			var y = y + "</script>";

			

			var this.list.functionScripts[x - 1] = y;

		}

		

		call(name){

			for(var x = 0;;x++){

				if (this.list.functionNames[x] === name

					document.write(this.list.functionScripts[x]);

					var this.list.lastlyExecuted = this.list.functionScripts[x];

					break;

				}

			}

		}

		

		getScript(name){

			for(var x = 0;;x++){

				if (this.list.functionNames[x] === name

					return(this.list.functionScripts[x]);

					break;

				}

			}

		}

	}

	

	class logics{

		coverBy(strin,arg){

			var x = arg + strin + arg;

			return x;

		}

		

		removeChar(strin,char){

			var strin = strin.replace(char,"");

		}

		

		simulateGate(gate,x,y){

			if (gate === "AND"){

				if (x === true && y === true){return true;}else{

					return false;

				}

			}

			

			if (gate === "OR"){

				if (x === true || y === true){return true;}else{

					return false;

				}

			}

			

			if (gate === "NOT"){

				if (y === undefined){

					if (x === false){return true;}else{

						return false;

					}

				}else(){

					if (x === false && y ==+ false){return true;}else{

						return false;

					}

				}

			}

		}

		

		randomString(format,charCount){

			if (format === 0){

				var x = undefined;

				var z = charCount

				for (;;;){

					var x = Math.random()*0;

					var x = Math.round(x);

					var y = y + x;

					if (x.lenght === z){

						return x;

						break;

					}

				}

			}

		}

		

		double(num){

			return num * 2;

		}

	}

}

cubeJs.startup();

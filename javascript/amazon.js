var imageContainer = document.getElementById("imageContainer");
var xmlhttp = new XMLHttpRequest();
var url = "data/gallery.txt";

xmlhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200){
		var linkList = JSON.parse(this.responseText);
        //width of imageContainer
        document.getElementById("imageContainer").style.width = linkList.length * 975 + "px";

		function generateImage(){
			console.log(linkList[0].src);
			for(var i = 0; i < linkList.length; i++){
			imageContainer.innerHTML += "<li><img src=" + linkList[i].src + "></li>";
		    }
		}
		generateImage();

		var y = 0;

        upDateImage(y);

		function NextIndexNo(){
		    
		    upDateImage(y = y - 975);
        }
        function priviousIndexNo(){
		    
		    upDateImage(y = y + 975);
        }
		//setInterval(indexNo, 2000);

		function upDateImage(i){
			console.log(i);
		    if(i <= (linkList.length - 1) * -975){
		    	document.getElementById("nextButton").style.display = "none";
		    }else{
		    	document.getElementById("nextButton").style.display = "block";
		    }
		    if(i >= 0){
		    	document.getElementById("priviousButton").style.display = "none";
		    }else{
                document.getElementById("priviousButton").style.display = "block";
		    }
		
		    document.getElementById("imageContainer").style.transform = "translateX(" + i + "px)"

		}
		//addEventListener to 
		document.getElementById("nextButton").addEventListener("click", function(){
		    NextIndexNo();
		});
		document.getElementById("priviousButton").addEventListener("click", function(){
		    priviousIndexNo();
		});
	}   

}
xmlhttp.open("GET", url, true);
xmlhttp.send();

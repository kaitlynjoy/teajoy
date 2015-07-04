$(document).ready(function(){

//perfectCup object stores user's choices

var perfectCup = {

	teatype: "",
	mixIns: [],
	flavors: [],
	mugColor: ""
};

$(".multi button").click(function(){
	if($(this).hasClass("active")){
		$(this).removeClass("active");
	}
	else {
		$(this).addClass("active");
	}
});

$(".single button").click(function(){
	if($(this).hasClass("active")){
		$(this).removeClass("active");
	}
	else {
		var section = $(this).parent();
		var sectionId = section[0].id;
		$("#" + sectionId + " button").removeClass("active");
		$(this).addClass("active");
	}
});

$("button#submit").click(function(){
	buildResults();
	$("div#perfectCupResults").toggle();
});

function buildResults(){
// Check Type & Store
	perfectCup.teatype = $("#teatype button.active").attr("id");
	if(!perfectCup.teatype){
		perfectCup.teatype = "No tea type selected.";
	}
	$("#teaTypeResults").append(perfectCup.teatype);

// Check Mix-Ins & Store
	$.each($("#mixin button.active"), function () {
		perfectCup.mixIns.push(this.id);

	});
	if(perfectCup.mixIns.length === 0){
		perfectCup.mixIns[0] = "No mix-ins.";
	}

	$("#mixInsResults").append(perfectCup.mixIns.join(", "));

// Check Flavors & Store
	$.each($("#flavor button.active"), function () {
		perfectCup.flavors.push(this.id);
	});
	if(perfectCup.flavors.length === 0){
		perfectCup.flavors[0] = "No flavors.";
	}

	$("#flavorsResults").append(perfectCup.flavors.join(", "));

// Check Mug Color & Store
	perfectCup.mugColor = $("#mugcolor button.active").attr("id");
	if(!perfectCup.mugColor){
		perfectCup.mugColor = "brown";
	}

	$("img#perfectCupImg").attr("src", "img/mugs/" + perfectCup.mugColor + ".jpg");
}

$("div#x").click(function(){
	// closes pop-up and clears all responses
	$("div#perfectCupResults").toggle();
	$("button.active").removeClass("active");
	perfectCup.teatype = "";
	perfectCup.mixIns = [];
	perfectCup.flavors = [];
	perfectCup.mugColor = "";
	$("#teaTypeResults").empty();
	$("#mixInsResults").empty();
	$("#flavorsResults").empty();
	$("img#perfectCupImg").attr("src", "brown");
	console.log(perfectCup);

});



});



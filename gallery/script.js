// Add your code here
$(".filter-button").on('click', function(){
	var animal = this.id;
	$("." + this.id).toggle();
	$("#" + this.id).toggleClass("active");

    console.log("the value of this is ...", this.id); 
})



















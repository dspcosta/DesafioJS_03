(function(){

console.log('carregado');

 var flickerApi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

$.getJSON(flickerApi, {
		tags:"nature",
		tagmode: "any",
		format: "json"
}).done(function(data){
	console.log(data);
	for (var i = 0; i <= 5; i++) {
		
		$("<img>").attr('src', data.items[i].media.m).appendTo('.flickr');
	}


	//outra forma para pegar todas as imagens e apresentar:

	// $.each(data.items, function(index, valor){
	// 	console.log(valor);
	// 	console.log(valor.media.m);
	// 	$("<img>").attr("src", valor.media.m).appendTo("#flickr");
	// });
}).fail(function(){
	alert('Conexão falhou!');
});


})();












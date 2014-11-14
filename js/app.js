var url = "";

var publicacao = {

	criar : function(){

	},

	listar : function(){

	},

	deletar : function(){

	}

};


var usuario = {

	token : '', _id : '',

	criar : function(){

	},

	listar : function(){

	},


	deletar : function(){

	},

	logar : function(){
		if($("#email").val() != "" && $("#senha").val() != ""){
				$.ajax({
					url : url + "/token/new.json",
					type : "POST",
					data : "username=" + $("#email").val() + "&password=" + $("#senha").val(),
					success : function(data){
						usuario.token = data['token'];
						usuario._id = data['user_id'];
						config();
					},
					error : function(data){
						alert("Erro ao logar!");
					}
				});
		}
	}
};

var turma = {

	criar : function(id){

	},

	listar : function(id){

	},

	deletar : function(id){

	}

};

function config(){
		$.ajaxSetup({
			  headers: {
			    'Authorization': "Basic " + btoa(usuario._id+":"+usuario.token)
			  }
		});
}

var init = {
	bind : function(){
		$("#entrar").click(usuario.logar);
	}
};


$(document).ready(function(){
		init.bind();
});
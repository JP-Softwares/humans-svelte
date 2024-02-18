<script>
	function enviarMensagem() {
		let mensagem = jQuery(".input-chat").val();

		if(mensagem != "") {
			jQuery(".input-chat").val(""); //Limpa o campo

			//console.log(mensagem);
		}
	}
</script>

<svelte:head>
	<title>Humans</title>
	<meta name="description" content="" />
</svelte:head>

<div class="chat-content">
	<div>
		<form on:submit={enviarMensagem}>
			<div>
				<div class="chat-box">
					<input class="input input-chat" type="text">

					<input class="button button-icon material-icons" type="submit" value="&#xe163;"/>
				</div>
			</div>
		</form>
	</div>
</div>

<style>
	.chat-content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column-reverse;
		flex: 1;
	}

	.chat-box {
		display: flex;
		flex-direction: row-reverse;
	}

	.button-icon {
		position: absolute;
		border: none;
		background-color: #00000000;
		color: #000;
	}

	.button-icon:hover {
		color: #413434;
	}
</style>
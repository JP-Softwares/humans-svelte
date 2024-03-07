<script>
	
	import { enhance } from '$app/forms';

	export let data;

	let input_chat_message = "";

	let mensagens = Array();

	/**
	 * @param {any} result
	 */
	function mensagemEnviada(result) {
		console.log(result.data);
	}

	function limparCampo() {
		jQuery('input[name="chat_message"]').val("");
		input_chat_message = "";
	}

	function validateForm() {
		return input_chat_message == "";
	}
	
	//$: input_chat_message != "" ? jQuery('form').attr('use:enhance') : jQuery('form').is('[use:enhance]') ? jQuery('form').removeAttr('use:enhance') : null;
</script>

<svelte:head>
	<title>Humans</title>
	<meta name="description" content="" />
</svelte:head>

<div id="root">
	<div class="chat-content">
		{#each mensagens as mensagem}
			<div>
	
			</div>
		{/each}
	
		<form method="POST" action="?/enviarMensagem" use:enhance={({ formElement, formData, action, cancel, submitter }) => {
			// `formElement` is this `<form>` element
			// `formData` is its `FormData` object that's about to be submitted
			// `action` is the URL to which the form is posted
			// calling `cancel()` will prevent the submission
			// `submitter` is the `HTMLElement` that caused the form to be submitted
	
			if(validateForm()) cancel();
	
			limparCampo();
	
			return async ({ result, update }) => {
	
			mensagemEnviada(result);
			// `result` is an `ActionResult` object
			// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
			};
			}}>
			<div>
				<div class="chat-box">
					<input bind:value={input_chat_message} name="chat_message" class="input input-chat" type="text" autocomplete="off" aria-invalid="false">
	
					<input class="button-icon material-icons" type="submit" value="&#xe163;"/>
				</div>
			</div>
		</form>
	</div>
</div>

<style>
	#root {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		flex: 1;
	}

	.chat-content {
		width: 100%;
		max-width: 64em;
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
    	align-items: center;
		border-radius: 4px;
		box-shadow: none;
		display: inline-flex;
		font-size: 1rem;
		height: 2.5em;
		position: absolute;
		border: none;
		background-color: #00000000;
		color: #000;
		cursor: pointer;
		justify-content: center;
		padding-bottom: calc(0.5em - 1px);
		padding-left: 1em;
		padding-right: 1em;
		padding-top: calc(0.5em - 1px);
		text-align: center;
		white-space: nowrap;
    	vertical-align: top;
		line-height: 1.5;
	}

	.button-icon:active {
		border: none;
		background-color: #00000000;
	}

	.button-icon:hover {
		color: #413434;
	}
</style>
<script>
	import { browser } from '$app/environment';

	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { children } from 'svelte/internal';

	import * as animaisJSON from '$lib/animais.json';

	export let data;

	const animais = animaisJSON.default;

	let input_chat_message = "";

	let nome_usuario = animais[Math.floor(Math.random() * animais.length)] + "" + Math.floor(Math.random() * 10000);

	let mensagens = getMensagensLoad();

	onMount(() => {

		scrollToEnd();
	})

	function scrollToEnd() {
		let divMensagens = jQuery(".div_mensagens");
		divMensagens.scrollTop(divMensagens.prop("scrollHeight"));
	}

	/**
	 * @param {any} result
	 */
	function mensagemEnviada(result) {
		console.log(result.data);

		atualizarMensagens();
	}

	function limparCampo() {
		jQuery('input[name="chat_message"]').val("");
		input_chat_message = "";
	}

	function validateForm() {
		return input_chat_message == "";
	}
	

	function getMensagensLoad() {
		let response = Object();

		response = data.mensagens;

		return response;
	}

	async function atualizarMensagens() {
		let response = await (await fetch(`${data.url_localhost}/api/_/groups/${data.groupid}/messages`)).json();

		mensagens = response;

		scrollToEnd();
	}

	function removeScroll() {
		jQuery(".div_mensagens").toggleClass("scrollToEnd");
	}
	
	//$: input_chat_message != "" ? jQuery('form').attr('use:enhance') : jQuery('form').is('[use:enhance]') ? jQuery('form').removeAttr('use:enhance') : null;
</script>

<svelte:head>
	<title>Humans</title>
	<meta name="description" content="" />
</svelte:head>

<div id="root">
	<div class="chat-content">
		<div class="div_campo">
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
						<input type="hidden" name="nome_usuario" bind:value={nome_usuario}/>

						<input bind:value={input_chat_message} name="chat_message" class="input input-chat" type="text" autocomplete="off" aria-invalid="false">

						<input class="button-icon material-icons" type="submit" value="&#xe163;"/>
					</div>
				</div>
			</form>
		</div>

		<div class="div_mensagens">
			{#each mensagens as mensagem}
				<div class={"div_mensagem_linha" + (mensagem.nomeUsuario == nome_usuario ? " own_message" : "")}>
					<div class="card div_mensagem">
						<div class="div_mensagem_cabecalho">
							<div class="div_mensagem_cabecalho_title">
								<p class="text_mensagem_title">
									{mensagem.nomeUsuario}
								</p>
							</div>

							<div class="div_mensagem_cabecalho_Hora">

							</div>
						</div>

						<div class="div_mensagem_conteudo">
							<p class="text_mensagem_content">
								{mensagem.conteudo}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="flex">
			Seu nome é {nome_usuario}
		</div>
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
		gap: 1rem;
	}

	.div_mensagens {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		overflow-y: auto;
        overscroll-behavior-y: contain;
        scroll-snap-type: y mandatory;
		max-height: clamp(0rem, 65vh, 32rem);
		border: 1px solid #f0f0f0;
		border-radius: 1rem;
	}

	
    .div_mensagens.scrollToLast > div:last-child {
        scroll-snap-align: start;
    }

	.div_mensagem {
		display: flex;
		flex-direction: column;
		min-height: 4rem;
		min-width: 15rem;
		max-width: 50rem;
		padding: 0.7rem;
		border-radius: 1rem;
	}

	.text_mensagem_title {
		height: 1.5rem;
		font-weight: 700;
	}

	.div_mensagem_linha {
		display: flex;
		justify-content: baseline;
	}

	.div_mensagem_linha.own_message {
		justify-content: end;
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
		color: #00002c;
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
export async function onRequest(context) {
  // O objeto context.env contém as variáveis definidas no painel do Cloudflare Pages
  const config = {
    wpp: context.env.WPP_NUMBER || '5551999999999',
    wppMsg: context.env.WPP_MSG || 'Olá! Gostaria de solicitar uma cotação de frete.',
    web3formsKey: context.env.WEB3FORMS_KEY || 'SUA_CHAVE_WEB3FORMS_AQUI'
  };

  return new Response(JSON.stringify(config), {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Cache-Control': 'public, max-age=3600' // Otimização para economizar execuções da função
    }
  });
}

# Linkaí - Encurtador e Agregador de Links

O Linkaí permite criar uma página ao estilo linktree, além de encurtar links
arbitrários não públicos. A ferramenta possui um score de 100 em todas as
categorias do Google Lighthouse e pode ser customizada através de variáveis de
ambiente, além de ser facilmente instalável em ambientes serverless como vercel,
deno deploy, cloudflare workers e afins.

## Instalação

O passo a passo varia de acordo com a plataforma de deploy escolhida mas, em geral, segue a seguinte fórmula:

1. Adicionar o repositório como um novo projeto à plataforma de sua escolha
2. Definir as variáveis de ambiente conforme a seguir:

    - `NUXT_LINK_TREE_PAGE_TITLE`: Título da página, utilizado na tag `<title>` e no título exibido em redes sociais
    - `NUXT_AVATAR_URL`: URL da imagem exibida na landing page
    - `NUXT_TITLE`: Título exibido na landing page
    - `NUXT_SUBTITLE`: Subtítulo exibido na landing page
    - `NUXT_AUTH_GITHUB_SECRET`: App Secret para autenticação com o github
    - `NUXT_AUTH_GITHUB_ID`: App ID para autenticação com o github
    - `NUXT_AUTH_SECRET`: String aleatória utilizada como secret para gerar o JWT
    - `AUTH_ORIGIN`: URL onde a aplicação será deployada
    - `NUXT_ADMIN_EMAILS`: Emails autorizados a acessar o painel administrativo (separados por vírgula)
    - `NUXT_DB_URI`: URI do mongodb para armazenamento do link
    - `NUXT_HTML_LANG`: Idioma a ser utilizado no atributo `lang` da tag `<html>`

3. Acessar o caminho `/admin` na aplicação deployada
4. Cadastrar os links
5. Pronto :D

## Contribuindo

1. Clone o repositório
2. Utilize `npm i` para instalar as dependências do projeto
3. Realize as alterações
4. Teste manualmente
5. Realize um ou mais commits seguindo os padrões do conventional commits
6. Abra o PR

Siga todos os padrões que conseguir observar e garanta que o código está legível e fácil de manter.

## Licença

Código disponibilizado nos termos da GPL-3.0.

[DevSuperior](https://github.com/elderbr/assets/raw/main/DevSuperior/devSuperior_icon.png?raw=true)
# DESAFIO: DSFilter 

## Formação Desenvolvedor Moderno
### Módulo: Front end
### Capítulo: Eventos e estado global

O sistema deverá busca os produtos filtrando pelo o preço, opcionalmente, preço mínimo e preço máximo dos produtos mínimo e máximo.

## Design
Deverá entregar um projeto ReactJS conforme design Figma e caso de uso abaixo.
[Figma](https://www.figma.com/file/s21JDtjv3cRyUfetFYAzIJ/DSFilter)


Você deve usar o script abaixo para implementar a base de dados de produtos, bem como a função que busca
os produtos por preço:
[Base de dados](https://gist.github.com/acenelio/fa7d03cb660b35cd9986623f1f07aeb3)

## Caso de uso
1. [OUT] O sistema informa nome e preço de todos produtos, ordenados por preço.
2. [IN] O usuário informa, opcionalmente, preço mínimo e preço máximo dos produtos
3. [OUT] O sistema informa nome e preço dos produtos, ordenados por preço, conforme critérios
Informações complementares:
- Não precisa fazer validação de formulário (assuma que o usuário vai digitar valores válidos).
- Não precisa implementar rotas (pode montar a tela toda no App)
- Se o valor do preço mínimo não for informado, usar por padrão o valor 0 (zero).
- Se o valor do preço máximo não for informado, usar por padrão o valor Number.MAX_VALUE


# 💕 Carta Romântica Interativa - Dia dos Namorados

Um projeto Next.js que cria uma experiência romântica e interativa para o Dia dos Namorados, com carta animada, música "Meu Novo Mundo" do Charlie Brown Jr. e surpresas especiais.

## ✨ Funcionalidades

- **Efeito de digitação**: Carta aparece com efeito de máquina de escrever
- **Animações de fundo**: Corações flutuando e partículas brilhantes
- **Player de música**: "Meu Novo Mundo" do CBJ com controles de play/pause
- **Surpresas interativas**: Múltiplas surpresas reveladas progressivamente
- **Design responsivo**: Funciona perfeitamente em desktop e mobile
- **Fontes elegantes**: Dancing Script para um toque romântico

## 🚀 Como executar

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### Instalação

1. Clone ou baixe o projeto
2. Instale as dependências:

\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

3. **IMPORTANTE**: Adicione o arquivo de música:
   - Baixe "Meu Novo Mundo" do Charlie Brown Jr.
   - Renomeie para \`meu-novo-mundo.mp3\`
   - Coloque na pasta \`public/\`

4. Execute o projeto:

\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🎵 Configurando a Música

### Para usar "Meu Novo Mundo" do CBJ:

1. **Obtenha o arquivo de áudio** (de forma legal):
   - Compre no iTunes, Spotify, Amazon Music, etc.
   - Use um conversor legal se você já possui o CD
   - Baixe de plataformas que oferecem downloads gratuitos legais

2. **Formatos suportados**:
   - \`.mp3\` (recomendado)
   - \`.m4a\`
   - \`.ogg\`

3. **Nomeação do arquivo**:
   - \`meu-novo-mundo.mp3\`
   - \`meu-novo-mundo.m4a\`
   - \`meu-novo-mundo.ogg\`

4. **Localização**: Pasta \`public/\` na raiz do projeto

### Exemplo de estrutura:
\`\`\`
projeto/
├── public/
│   └── meu-novo-mundo.mp3
├── app/
├── components/
└── ...
\`\`\`

## 🎨 Personalização

### Modificar a carta
Edite o texto da carta no arquivo \`components/letter.tsx\` na variável \`letterText\`.

### Alterar as surpresas
Modifique o array \`surprises\` no arquivo \`components/surprise.tsx\`.

### Trocar a música
Substitua o arquivo na pasta \`public/\` e atualize o nome no componente \`MusicPlayer\`.

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta a:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Google Fonts** - Dancing Script
- **shadcn/ui** - Componentes UI

## 🎵 Sobre a Música

"Meu Novo Mundo" é uma das músicas mais românticas do Charlie Brown Jr., perfeita para expressar sentimentos profundos e verdadeiros. A letra fala sobre encontrar um novo mundo no amor de alguém especial.

## ⚖️ Direitos Autorais

- A música "Meu Novo Mundo" é de propriedade do Charlie Brown Jr. e suas gravadoras
- Este projeto é apenas para uso pessoal e educacional
- Certifique-se de ter os direitos legais para usar a música
- Não distribua o projeto com arquivos de música protegidos por direitos autorais

## 💡 Dicas de Uso

1. **Teste a música**: Certifique-se de que o arquivo funciona antes de compartilhar
2. **Volume adequado**: O player está configurado para 40% do volume
3. **Personalize o conteúdo**: Adapte a carta para sua situação específica
4. **Teste em dispositivos móveis**: Verifique a experiência em diferentes telas
5. **Compartilhe com amor**: Envie o link para sua pessoa especial! 💕

## 🎁 Ideias de Extensão

- Adicionar mais músicas do CBJ em uma playlist
- Criar visualizador de música com ondas sonoras
- Implementar galeria de fotos do casal
- Adicionar cronômetro de relacionamento
- Criar modo escuro romântico

## 📄 Licença

Este projeto é livre para uso pessoal. Respeite os direitos autorais da música. Espalhe o amor! ❤️

---

Feito com 💕 para o Dia dos Namorados
"Meu novo mundo é você!" 🎵
\`\`\`

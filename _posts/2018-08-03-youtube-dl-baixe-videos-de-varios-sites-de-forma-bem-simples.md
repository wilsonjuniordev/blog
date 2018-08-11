---
layout: post
date: '2018-08-03 20:58:51'
title: "Youtube-dl: Baixe vídeos de vários sites de forma bem simples"
image: /assets/img/thumbnails/youtube-dl-baixe-videos-de-varios-sites-de-forma-bem-simples.png
main-class: 'linux'
color: '#816c9e'
tags: [linux, youtube-dl]
quote: >-
    "O bom profissional não é aquele que sabe de tudo, mas aquele que se vira para descobrir o que não sabe e resolver o problema." - Autor Desconhecido
description: >-
    Baixe vídeos da internet usando apenas o terminal de um jeito bem prático, rápido e simples.
twitter_text: >-
    Baixe vídeos da internet usando apenas o terminal de um jeito bem prático, rápido e simples.
introduction: >-
    Baixe vídeos da internet usando apenas o terminal de um jeito bem prático, rápido e simples.
---
## Introdução

Conheça o Youtube-dl, um aplicativo de linha de comando que permite fazer download de vídeos em vários sites de um jeito simples e rápido. Também é possível baixar uma Playlist inteira, extrair somente o áudio do vídeo, baixar legendas e diversas outras funcionalidades. Funciona em **Windows**, **Mac OS** e **Linux**. Ele é liberado para o domínio público, o que significa que você pode modificá-lo, redistribuí-lo ou usá-lo da maneira que quiser.

## Sites suportados

Apesar do nome, ele não é restrito ao YouTube, muitos outros sites são suportados pelo Youtube-dl. Como **Vídeos do Google** (incluindo pesquisas), **Facebook**, **Dailymotion**, **Vimeo**, **Yahoo**, **Instagram**, **DepositFiles**, **Google Plus**, **Gamespot**, **CollegeHumor**, **Soundcloud**, **MTV** e muitos outros. A lista completa encontra-se aqui [aqui](http://rg3.github.io/youtube-dl/supportedsites.html).

## Como usar o Youtube-dl

![Imagem do Youtube-dl baixando um vídeo](/assets/img/posts/youtube-dl.gif)

Para baixar um vídeo é muito simples, basta apenas usar o seguinte comando no terminal:

```bash
# [OPTIONS] Especifica as diversas funcionalidades do Youtube-dl
# [VIDEO_URL] Endereço do vídeo que você deseja baixar
youtube-dl OPTIONS VIDEO_URL

# Contém o manual do Youtube-dl com todas as opções
man youtube-dl
# ou
youtube-dl -h
```

Caso queira ver todas as opções disponíveis no próprio repositório do Youtube-dl, clique [aqui](https://github.com/rg3/youtube-dl/blob/master/README.md#options).

### Para escolher o formato do vídeo

Por padrão os vídeos são salvos no formado mp4 com extensão .mkv, mas é possível escolher qual formato e resolução baixar. O comando **-F** lista os formatos disponíveis para um video e suas respectivas resoluções e o comando **-f** serve para selecionar o formato escolhido para ser baixado.

```bash
youtube-dl -F VIDEO_URL
# ou
youtube-dl --list-formats VIDEO_URL

# Código - Extensão - Resolução
# 17     - 3gp      - 176x144
# 18     - mp4      - 640x360
# 22     - mp4      - 1280x720
# 37     - mp4      - 1920x1080
# ...

# Baixa um vídeo no formato mp4 e com resolução de 1280x720 
youtube-dl -f22 VIDEO_URL
```

### Para baixar uma Playlist
 
Uma das opções que mais gosto é baixar playlists do Youtube, tudo de forma automática. Ótimo, mas e nos casos de precisar baixar apenas alguns vídeos da playlist? Simples, você pode especificar quais vídeos deseja baixar daquela playlist, seja pelo índice ou por intervalo, segue abaixo os comandos.

```bash
# Baixa a Playlist inteira
#
# -c - Continua o download de onde parou, caso a internet tenha caído
# -i - Ignora os erros caso tenha vídeos indisponíveis em uma playlist
# -t - Usa o título do nome do vídeo
youtube-dl -cit VIDEO_PLAYLIST_URL
# Baixa do vídeo 3 até o 7
#
# --playlist-start [NÚMERO] - Vídeo inicial da playlist (o padrão é 1)
# --playlist-end [NÚMERO] - Vídeo fim da playlist
youtube-dl -cit --playlist-start 3 --playlist-end 7 VIDEO_PLAYLIST_URL

# Especifica os vídeos por índice ou intervalo
#
# --playlist-items [ITEM_ESPECIFICAÇÃO]
# 2-5 - Baixa os vídeos de 2 a 5
# 7,9 - Baixa os vídeos 7 e 9
youtube-dl -cit --playlist-itens 2-5,7,9 VIDEO_PLAYLIST_URL
```

### Para baixar uma lista de vídeos

Já sabemos como baixar playlist de vídeos. Mas, e quando você quiser baixar vários vídeos de canais diferentes, ou seja, vídeos que não estão associados a uma playlist? Pois bem, apenas crie um arquivo **.txt** contendo o link dos vídeos desejados e rode o comando abaixo no terminal. Lembrando que o comando precisa ser executado dentro do diretório onde se encontra o arquivo **TXT**.

```bash
# arquivo TXT que contém o link de cada vídeo
#
# -a [ARQUIVO] - Arquivo contendo as URLs para download. 
youtube-dl -cit -a lista.txt

# Exemplo ao baixar vários vídeos sobre Linux:
#
# Crio o diretório "linux" em Downloads
mkdir Downloads/linux
# Acesso o diretório "linux" com o comando cd
cd Downloads/linux
# Crio o arquivo "lista.txt" com o editor nano para a inclusão das URLs
nano lista.txt
# Por fim, baixo todos os vídeos da lista com um comando
youtube-dl -cit -a lista.txt
```

Também uso muito essa opção. Viu como é fácil e bem rápido? No exemplo acima, eu utilizei o **nano** que é um editor de texto via linha de comando, mas poderia usar qualquer outro, como o **vim** ou até memo o **gedit** por exemplo que possui interface grafica, nesse caso, bastaria apenas trocar o nome **nano** por **gedit** no terminal.

### Para baixar somente o áudio dos vídeos

Você pode baixar somente o áudio de um vídeo ou todos os áudios de uma playlist ou até mesmo os áudios de uma lista de vídeos. Só vai precisar ter instalado os codecs **ffmpeg** e **ffprobe**. O reprodutor de vídeo **VLC** já possui todos esses codecs.

```bash
# -extract-audio - Converta arquivos de vídeo em áudio somente
# --audio-format - Especifica o formato: "best", "aac", "mp3", "wav" etc.
youtube-dl --extract-audio --audio-format mp3 VIDEO_URL

# extrai somente o áudio de uma playlist
youtube-dl --extract-audio --audio-format mp3 VIDEO_PLAYLIST_URL

# extrai somente o áudio de uma lista de um arquivo txt
youtube-dl --extract-audio --audio-format mp3 -a list.txt
```

### Para baixar a legenda dos vídeos

Fazer download da legenda dos vídeos também é muito simples. Tem como baixar somente a legenda sem baixar o vídeo em si, e até mesmo baixar as legendas geradas automaticamente pelo Youtube. Segue os comandos;

```bash
# verifica se existe legendas disponíveis.
youtube-dl --list-subs VIDEO_URL

# Baixa todas as legendas disponíveis do vídeo
# --skip-download - Pula o vídeo e só baixa a legenda
youtube-dl --all-subs --skip-download VIDEO_URL

# Se disponível, baixa somente a legenda em português do Brasil
youtube-dl --sub-lang pt-BR --skip-download VIDEO_URL

# Baixa somente a legenda gerada automaticamente em português do Brasil
youtube-dl --write-auto-sub --sub-lang pt-BR --skip-download VIDEO_URL
```

### Criando alias específicos para o Youtube-dl

No Linux você também pode criar **alias** para facilitar ainda mais o uso do Youtube-dl, isto é, criar apelidos para os comandos mais usados. Para criá-los, é preciso modificar o arquivo **.bashrc** que se encontra em **/home/ [Nome_Do_Usuário] /.bashrc** (se o arquivo não existir, crie-o) e adicionar cada apelido no final do arquivo.

Exemplo de alias:

```bash
# chama o youtube-dl
alias ydl='youtube-dl'

# verifica se existe legendas disponíveis
alias ydlsub='youtube-dl --list-subs'

# baixa todos as legendas, menos o vídeo
alias ydlsubsall='youtube-dl --all-subs --skip-download'

# download de uma playlist inteira
alias ydlplaylist='youtube-dl -cit'

# extrai o áudio do vídeo
alias ydlaudio='youtube-dl --extract-audio --audio-format mp3'
```

Basta abrir o arquivo e inserir esses **Alias** (citados acima) no final do arquivo, e por fim gravar definitivamente.

```bash
# Arquivo bashrc para edição
sudo nano ~/.bashrc
## ou
sudo gedit ~/.bashrc

# Grava definitivamente os alias
source .bashrc
```

Feito isso, basta só usar o **alias** e a **URL** do vído.

### Configurando o Youtube-dl

Também é possível configurar o Youtube-dl para sempre baixar vídeos com as opções que você quiser definir como padrão. Por exemplo, vamos configurar o aplicativo para baixar vídeos diretamente no diretório Downloads contendo o título, formato do vídeo e com as opções **-c** e **-i** para evitar erros durante o download. 

```bash
# Cria uma pasta para o arquivo de config.
mkdir ~/.config/youtube-dl

# Cria o arquivo config
nano config
```

Ainda no Terminal, vamos criar o arquivo e escrever uma configuração básica dentro dele com a seguinte linha:

```bash
# Linhas iniciadas com # são comentários

# Continua o download de onde parou, caso a internet tenha caído
--continue    

# Ignora os erros caso tenha vídeos indisponíveis em uma playlist
--ignore-errors

# Salva todos os vídeoss no diretório Downloads de sua Home
-o ~/Downloads/%(title)s.%(ext)s
```

Pronto! Esta configuração se tornou o padrão. Você pode modificar as opções e a pasta de destino de acordo com o seu gosto.

Para baixar vídeos ignorando a configuração que criamos, não precisamos modificar ou apagar este arquivo novamente. Basta fazer o download com **–ignore-config** ao final da linha, assim:

```bash
youtube-dl VIDEO_URL --ignore-config
```

## Instalação

### Como instalar o Youtube-dl no Linux

Para instalar no Linux Mint, Debian, Ubuntu e derivados e receber automaticamente as futuras atualizações dele, sigua com os comandos abaixo no terminal, ou você pode pegar o DEB do programa nesse [link](https://launchpad.net/~nilarimogard/+archive/ubuntu/webupd8/+packages?field.name_filter=youtube-dl&field.status_filter=published&field.series_filter=) e instalá-lo manualmente (clicando duas vezes nele), porém não receberá automaticamente as futuras atualizações.

```bash
# Adiciona o repositório do programa com este comando. Caso não o tenha
sudo add-apt-repository ppa:nilarimogard/webupd8
# Atualiza o Apt
sudo apt update
# Por fim, instala o programa
sudo apt-get install youtube-dl
```

### Como instalar o Youtube-dl no Windows

Baixe o executável nesse [link](https://yt-dl.org/downloads/2018.07.29/youtube-dl.exe) e depois clique duas vezes.

## Quer um Youtube-dl com interface gráfica?

Gostou do Youtube-dl, mas tem uma certa resistência em usar linha de comando? Experimente então o **Youtube-DLG** ou também chamado de **Youtube-DLGUI**. Uma interface gráfica para o youtube-dl.

Obs: Infelizmente, o Youtube-DLG  não oferece acesso a todos os recursos existentes no youtube-dl (há tantos, que é praticamente impossível incluí-los todos em uma única interface de usuário). Mas, ainda assim, o programa dá acesso à maioria dos recursos necessários que devem ser suficientes para a maioria dos usuários.

### Como instalar o Youtube-DLG no Linux

Da mesma forma que antes para instalar no Linux Mint, Debian, Ubuntu e derivados e receber automaticamente as futuras atualizações dele, sigua com os comandos logo abaixo, ou baixe o arquivo DEB nesse [link](http://ppa.launchpad.net/nilarimogard/webupd8/ubuntu/pool/main/y/youtube-dlg/).

```bash
# Adiciona o repositório do programa com este comando. Caso não o tenha
sudo add-apt-repository ppa:nilarimogard/webupd8
# Atualiza o Apt
sudo apt update
# Por fim, instala o programa
sudo apt install youtube-dlg
```

### Como instalar o Youtube-DLG no Windows

Baixe o executável nesse [link](https://github.com/MrS0m30n3/youtube-dl-gui/releases/download/0.4/youtube-dl-gui-0.4-win-setup.zip) extraie o arquivo ZIP e então carregue o arquivo setup.exe. 

## Desinstalando o Youtube-dl no Ubuntu e derivados

Para desinstalar o Youtube-dl no Linux Mint, Debian, Ubuntu e derivados, faça o seguinte:

```bash
# Para desinstalar o Youtube-dl
sudo apt-get remove youtube-dl --auto-remove
sudo apt-get autoremove

# Para desinstalar o Youtube-dlg
sudo apt-get remove youtube-dlg --auto-remove
sudo apt-get autoremove
```

## Conclusão
O Youtube-dl é uma ferramenta de linha de comando incrível que tem suporte a vários sites e permite baixar vídeos, áudios, legendas, playlists, listas de arquivos e afins. É bem simples e rápido de usar, não precisa utilizar software pesados para esse propósito, pois o Youtube-dl é bem completo e extramamente leve. Os comandos são simples e fáceis de memorizar, e também conforme mostrado no artigo, existe a possibilidade de configurar o aplicativo ao seu gosto ou utilizar alias para os comandos mais usados.
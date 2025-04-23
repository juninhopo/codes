tmux
Abrir tmux

tmux ls
Listar sessões

tmux a -t 
Entrar na sessão

tmux new -s 
Criar nova sessão

tmux new -s  -d
Criar nova sessão sem entrar nela (detached)

tmux kill-session -t 
Desligar a sessão com o nome

tmux kill-server
Desligar todas as sessões

→ Atalhos

Ctrl + B = ^b

^b + t = Relógio

^b + d = Desconectar da sessão, mantendo-a ativa
^b + s = Listar sessões

^b + w = Modo interativo: visualização em janelas

^b + c = Criar janelas

^b + Direcionais = (pressionar) Redimensionar painéis
                (tocar) Navegar entre painéis
^b + z = Foco no painel atual

^b + % = Dividir vertical
^b + " = Dividir horizontal

^b + $ = Renomear sessão
^b + , = Renomear janela
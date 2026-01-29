<template>
  <section
    id="terminal"
    class="flex flex-col items-center bg-dark gap-4 py-20"
  >
    <div class="flex flex-col w-[80%] max-w-[1200px] border border-white/30 rounded-lg overflow-hidden">
      <div class="flex flex-col gap-2 p-4 pb-2">
        <div class="flex gap-2 w-full items-center">
          <span class="bg-red-500 rounded-full size-2" />
          <span class="bg-amber-500 rounded-full size-2" />
          <span class="bg-green-500 rounded-full size-2" />
          <p class="text-white">
            user@glyria-cloud:~/projects
          </p>
        </div>
        <USeparator />
      </div>
      <div
        id="terminal_ex"
        class="h-114 w-full p-2"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Terminal } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import '@xterm/xterm/css/xterm.css'

onMounted(() => {
  const terminal = document.getElementById('terminal_ex')
  if (!terminal) return

  terminal.innerHTML = ''

  const term = new Terminal({
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    fontSize: 14,
    theme: {
      background: '#000000',
      foreground: '#ffffff'
    },
    cursorBlink: true,
    cursorStyle: 'block',
    scrollback: 1000,
    rows: 24
  })

  const fitAddon = new FitAddon()
  term.loadAddon(fitAddon)
  term.open(terminal)

  setTimeout(() => fitAddon.fit(), 0)

  window.addEventListener('resize', () => fitAddon.fit())

  term.writeln('')
  term.writeln('\x1b[36m╔═══════════════════════════════════════════════════════════════╗\x1b[0m')
  term.writeln('\x1b[36m║\x1b[0m                                                               \x1b[36m║\x1b[0m')
  term.writeln('\x1b[36m║\x1b[0m     \x1b[1;33m██████╗  ██╗  ██╗   ██╗██████╗ ██╗ █████╗\x1b[0m                 \x1b[36m║\x1b[0m')
  term.writeln('\x1b[36m║\x1b[0m     \x1b[1;33m██╔════╝ ██║  ╚██╗ ██╔╝██╔══██╗██║██╔══██╗\x1b[0m                \x1b[36m║\x1b[0m')
  term.writeln('\x1b[36m║\x1b[0m     \x1b[1;33m██║  ███╗██║   ╚████╔╝ ██████╔╝██║███████║\x1b[0m                \x1b[36m║\x1b[0m')
  term.writeln('\x1b[36m║\x1b[0m     \x1b[1;33m██║   ██║██║    ╚██╔╝  ██╔══██╗██║██╔══██║\x1b[0m                \x1b[36m║\x1b[0m')
  term.writeln('\x1b[36m║\x1b[0m     \x1b[1;33m╚██████╔╝███████╗██║   ██║  ██║██║██║  ██║\x1b[0m                \x1b[36m║\x1b[0m')
  term.writeln('\x1b[36m║\x1b[0m      \x1b[1;33m╚═════╝ ╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝\x1b[0m                \x1b[36m║\x1b[0m')
  term.writeln('\x1b[36m║\x1b[0m                    \x1b[1;37mC L O U D\x1b[0m                                  \x1b[36m║\x1b[0m')
  term.writeln('\x1b[36m║\x1b[0m                                                               \x1b[36m║\x1b[0m')
  term.writeln('\x1b[36m╚═══════════════════════════════════════════════════════════════╝\x1b[0m')
  term.writeln('')
  term.writeln('\x1b[32m  Bienvenue sur Glyria Cloud - Plateforme de formation Linux\x1b[0m')
  term.writeln('')
  term.writeln('\x1b[90m  Tapez \x1b[1;37mhelp\x1b[0m\x1b[90m pour voir les commandes disponibles\x1b[0m')
  term.writeln('\x1b[90m  Tapez \x1b[1;37mclear\x1b[0m\x1b[90m pour effacer le terminal\x1b[0m')
  term.writeln('')
  let commandBuffer = ''
  const user = 'glyria'
  const machine = 'cloud'

  function writePrompt() {
    term.write(`\x1b[32m${user}@${machine}\x1b[0m:\x1b[34m~\x1b[0m$ `)
  }

  writePrompt()

  term.onData((data) => {
    if (data === '\r') {
      term.writeln('')
      handleCommand(commandBuffer)
      commandBuffer = ''
      writePrompt()
    } else if (data === '\u007F') {
      if (commandBuffer.length > 0) {
        commandBuffer = commandBuffer.slice(0, -1)
        term.write('\b \b')
      }
    } else {
      commandBuffer += data
      term.write(data)
    }
  })

  function handleCommand(cmd: string) {
    cmd = cmd.trim()
    if (!cmd) return

    switch (cmd) {
      case 'hello':
        term.writeln('Salut ! 👋')
        break
      case 'date':
        term.writeln(new Date().toString())
        break
      case 'clear':
        term.clear()
        break
      default:
        term.writeln(`Commande inconnue : ${cmd}`)
    }
  }
})
</script>

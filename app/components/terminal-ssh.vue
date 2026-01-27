<template>
  <div class="p-4 h-130 w-180">
    <div
      id="terminal"
      class="h-full w-full"
    />
  </div>
</template>

<script setup lang="ts">
import { Terminal } from '@xterm/xterm'
import { AttachAddon } from '@xterm/addon-attach'
import { FitAddon } from '@xterm/addon-fit'

onMounted(() => {
  const terminal = document.getElementById('terminal')

  if (terminal) {
    const WS = new WebSocket('ws://localhost:3100')

    const term = new Terminal()
    const attachAddon = new AttachAddon(WS)
    const fitAddon = new FitAddon()

    term.loadAddon(attachAddon)
    term.loadAddon(fitAddon)
    term.open(terminal)
    fitAddon.fit()
    term.write('Hello from xterm.js!\r\n')
  }
})
</script>

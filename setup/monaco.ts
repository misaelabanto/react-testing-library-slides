import { defineMonacoSetup } from '@slidev/types';

export default defineMonacoSetup((monaco) => {
  monaco.editor.onDidCreateEditor(editor => {
    editor.updateOptions({
      scrollbar: {
        vertical: 'visible'
      }
    })
  })
  return {}
})
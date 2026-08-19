import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
export default function RTE() {
  return (
    <Editor
        initialValue="<p>This is the initial content of the editor.</p>"
        init={
            branding: false
        }
    />
  )
}

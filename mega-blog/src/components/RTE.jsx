import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
export default function RTE() {
  return (
    <Editor
        initialValue="<p>This is the initial content of the editor.</p>"
        init={
            {
                branding: false,
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                ],
                toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }
        }
    />
  )
}

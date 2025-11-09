'use client'

import { useState } from 'react'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { EditorState } from 'lexical'
import { uploadToCloudinary } from '@/lib/cloudinary'
import { Button } from '@/components/ui/button'

interface LexicalEditorProps {
  initialContent?: string
  onChange: (content: string) => void
  onImageUpload?: (url: string) => void
}

export default function LexicalEditor({ initialContent, onChange, onImageUpload }: LexicalEditorProps) {
  const [isUploading, setIsUploading] = useState(false)

  // Only pass an editorState when we actually have valid JSON; otherwise let Lexical use defaults
  const safeEditorState = initialContent && initialContent.trim().length > 0 ? initialContent : undefined

  const initialConfig = {
    namespace: 'BlogEditor',
    theme: {
      paragraph: 'mb-2',
      text: {
        bold: 'font-bold',
        italic: 'italic',
        underline: 'underline',
      },
    },
    onError: (error: Error) => {
      console.error(error)
    },
    editorState: safeEditorState,
  }

  const handleEditorChange = (editorState: EditorState) => {
    const json = JSON.stringify(editorState.toJSON())
    onChange(json)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    try {
      const url = await uploadToCloudinary(file)
      onImageUpload?.(url)
      alert('Image uploaded successfully!')
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <LexicalComposer initialConfig={initialConfig}>
        <div className="relative">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="min-h-[400px] p-4 outline-none prose max-w-none" />
            }
            placeholder={
              <div className="absolute top-4 left-4 text-gray-400 pointer-events-none">
                Start writing your blog post...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <OnChangePlugin onChange={handleEditorChange} />
        </div>
      </LexicalComposer>
      
      {onImageUpload && (
        <div className="border-t p-4 bg-gray-50">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              disabled={isUploading}
            />
            <Button type="button" disabled={isUploading} asChild>
              <span>{isUploading ? 'Uploading...' : 'Upload Image'}</span>
            </Button>
          </label>
        </div>
      )}
    </div>
  )
}

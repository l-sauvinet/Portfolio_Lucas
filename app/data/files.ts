export type FileId = 'about' | 'skills' | 'projects' | 'education' | 'contact'

export interface FileEntry {
  id: FileId
  name: string
  lang: 'md' | 'json' | 'ts' | 'folder'
}

export const files: FileEntry[] = [
  { id: 'about', name: 'about.md', lang: 'md' },
  { id: 'skills', name: 'skills.json', lang: 'json' },
  { id: 'projects', name: 'projects', lang: 'folder' },
  { id: 'education', name: 'education.md', lang: 'md' },
  { id: 'contact', name: 'contact.ts', lang: 'ts' },
]

export const projectFiles = [
  { id: 'obsidkey', name: 'obsidkey.ts' },
  { id: 'axiora', name: 'axiora.ts' },
  { id: 'orvis', name: 'orvis.ts' },
]

export const langColor: Record<FileEntry['lang'], string> = {
  md: 'text-sky-400',
  json: 'text-amber-400',
  ts: 'text-blue-400',
  folder: 'text-accent',
}

export const langIcon: Record<FileEntry['lang'], string> = {
  md: 'lucide:file-text',
  json: 'lucide:braces',
  ts: 'lucide:file-code-2',
  folder: 'lucide:folder',
}

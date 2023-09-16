import { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { api } from '@/lib/axios'

interface Prompts {
  id: string
  title: string
  template: string
}

export function PromptSelect() {
  const [prompts, setPrompts] = useState<Prompts[] | null>(null)

  useEffect(() => {
    api.get('/prompts').then((response) => {
      setPrompts(response.data)
    })
  }, [])
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..."></SelectValue>
      </SelectTrigger>
      <SelectContent>
        {prompts?.map((prompt) => {
          return (
            <SelectItem value={prompt.id} key={prompt.id}>
              {prompt.title}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

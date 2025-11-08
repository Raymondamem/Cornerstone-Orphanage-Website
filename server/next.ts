import express, { type Express } from 'express'
import next from 'next'
import path from 'path'
import { type Server } from 'http'

export function log(message: string, source = 'express') {
  const formattedTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })

  console.log(`${formattedTime} [${source}] ${message}`)
}

export async function setupNext(app: Express, server: Server) {
  const dev = process.env.NODE_ENV !== 'production'
  const hostname = 'localhost'
  const port = parseInt(process.env.PORT || '5000', 10)

  const nextApp = next({ dev, hostname, port, dir: '.' })
  const handle = nextApp.getRequestHandler()

  await nextApp.prepare()

  app.all('*', async (req, res) => {
    return handle(req, res)
  })

  log('Next.js initialized', 'next')
}

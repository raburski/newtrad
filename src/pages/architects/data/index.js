import fs from 'fs'
import * as path from 'path'

export async function getAllArchitects() {
    const fullPath = path.resolve(process.cwd(), 'src/pages/architects/data')
    const fileNames = fs
        .readdirSync(fullPath)
        .filter(n => n.includes('.md'))
        .map(n => n.split('.')[0])

    return fileNames
}
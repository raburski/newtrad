import fs from 'fs'
import matter from 'gray-matter'
import * as path from 'path'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export async function getAllArchitects() {
    const fullPath = path.resolve(process.cwd(), 'src/data/architects')
    return fs
        .readdirSync(fullPath)
        .filter(n => n.includes('.md'))
        .map(fileName => {
            const filePath = path.resolve(process.cwd(), 'src/data/architects', fileName)
            const fileContents = fs.readFileSync(filePath, 'utf8')
            const result = matter(fileContents)

            return {
                slug: fileName.split('.')[0],
                ...result.data,
            }
        })
}

export async function getArchitect(slug) {
    const fullPath = path.resolve(process.cwd(), 'src/data/architects', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const content = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(matterResult.content)
    
    return {
        ...matterResult.data,
        content: String(content),
    }
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const postsDir = path.join(process.cwd(), "posts");

export interface Post {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags?: string[];
    content?: string;
}

// Gets all the posts sorted by date
export function getSortedPosts() {
    const fileNames = fs.readdirSync(postsDir);
    const allPosts = fileNames
        .filter((fileName) => {
            const isMarkdown = fileName.endsWith(".md");
            return isMarkdown;
        })
        .map((fileName) => {
            // remove the .md extenstion
            const slug = fileName.replace(/\.md$/, "");
            
            const fullPath = path.join(postsDir, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            
            // parse the file contents
            const matterResult = matter(fileContents);

            return {
                slug,
                title: matterResult.data.title,
                date: matterResult.data.date,
                description: matterResult.data.description,
                tags: matterResult.data.tags || [],
            };
        });

    const sorted = allPosts.sort((a, b) => {
        if (a.date < b.date) return 1;
        else return -1;
    });

    return sorted;
}

// Get a single post by slug with full content
export async function getPostBySlug(slug: string): Promise<Post> {
    const fullPath = path.join(postsDir, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // parse the metadata
    const matterResult = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark()
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        description: matterResult.data.description,
        tags: matterResult.data.tags || [],
        content: contentHtml
    };
}

// Get all post slugs
export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDir);
    const slugs = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => ({
            slug: fileName.replace(/\.md$/, "")
        }));

    return slugs;
}

const writingsDir = path.join(process.cwd(), "writings");

export function getSortedWritings() {
    const fileNames = fs.readdirSync(writingsDir);
    const allWritings = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(writingsDir, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);
            return {
                slug,
                title: matterResult.data.title,
                date: matterResult.data.date,
                description: matterResult.data.description,
                tags: matterResult.data.tags || [],
            };
        });
    return allWritings.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getWritingBySlug(slug: string): Promise<Post> {
    const fullPath = path.join(writingsDir, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(matterResult.content);
    return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        description: matterResult.data.description,
        tags: matterResult.data.tags || [],
        content: processedContent.toString(),
    };
}

export function getAllWritingSlugs() {
    const fileNames = fs.readdirSync(writingsDir);
    return fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => ({ slug: fileName.replace(/\.md$/, "") }));
}
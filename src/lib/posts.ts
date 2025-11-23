import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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
        .use(html)
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
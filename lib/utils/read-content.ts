import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

export type Content<T> = {
    slug: string;
    content: string;
    data: T;
};

export function readContent<T = { [key: string]: unknown }>(directory: string): Content<T>[] {
    const directoryPath = path.join(process.cwd(), `content/${directory}`);
    const fileNames = fs.readdirSync(directoryPath);

    // @ts-expect-error gray-matter returns any
    return fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(directoryPath, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return { slug, ...matterResult };
    });
}

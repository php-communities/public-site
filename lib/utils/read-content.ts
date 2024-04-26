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

export function readContentSubFolders<T = { [key: string]: unknown }>(
    directory: string
): Record<string, Record<string, Content<T>>> {
    const directoryPath = path.join(process.cwd(), `content/${directory}`);
    const folderNames = fs.readdirSync(directoryPath);

    const currentData = {} as Record<string, Record<string, Content<T>>>;

    folderNames.forEach(folderName => {
        const directoryPathFile = path.join(process.cwd(), `content/${directory}/${folderName}`);
        const fileNames = fs.readdirSync(directoryPathFile);

        const target = {} as Record<string, Content<T>>;

        fileNames.forEach(fileName => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(directoryPathFile, fileName);

            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);

            // @ts-expect-error gray-matter returns any
            target[slug] = {
                slug,
                ...matterResult,
            };
        });

        currentData[folderName] = target;
    });

    return currentData;
}

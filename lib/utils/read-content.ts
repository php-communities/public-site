import fs from 'node:fs';
import path from 'node:path';

import { glob } from 'glob';
import matter from 'gray-matter';

import { basePath } from '~/lib/consts/base-path.mjs';

export type Content<T> = {
    slug: string;
    content: string;
    data: T;
};

export function readContent<T = { [key: string]: unknown }>(directory: string): Content<T>[] {
    const directoryPath = path.join(process.cwd(), `content/${directory}`);
    const fileNames = glob.sync(directoryPath);

    // @ts-expect-error gray-matter returns any
    return fileNames.map(fileName => {
        const slug = fileName.split('/').at(-1)?.replace(/\.md$/, '');
        const fileContents = fs
            .readFileSync(fileName, 'utf8')
            .replaceAll(/\${basepath}/gi, basePath);

        const matterResult = matter(fileContents);
        const { data, content } = matterResult;
        return { slug, data, content };
    });
}

import CommunityCard from '@/(home)/_components/communities/card';
import { CityItem } from '@/(home)/_components/places';
import { sortByAlphabet } from '~/lib/utils/helpers';
import { readContent } from '~/lib/utils/read-content';

export function Communities() {
    const belarus = readContent<CityItem>(`communities/belarus/*`).sort(sortByAlphabet);
    const russia = readContent<CityItem>(`communities/russia/*`).sort(sortByAlphabet);
    const ukraine = readContent<CityItem>(`communities/ukraine/*`).sort(sortByAlphabet);

    return (
        <div className="w-full">
            {belarus.map(city => (
                <CommunityCard
                    key={city.slug}
                    slug={city.slug}
                    data={city.data}
                    content={city.content}
                />
            ))}

            {russia.map(city => (
                <CommunityCard
                    key={city.slug}
                    slug={city.slug}
                    data={city.data}
                    content={city.content}
                />
            ))}

            {ukraine.map(city => (
                <CommunityCard
                    key={city.slug}
                    slug={city.slug}
                    data={city.data}
                    content={city.content}
                />
            ))}
        </div>
    );
}

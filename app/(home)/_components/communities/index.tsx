import CommunityCard from '@/(home)/_components/communities/card';
import { CityItem } from '@/(home)/_components/places';
import { sortByName } from '~/lib/utils/helpers';
import { readContent } from '~/lib/utils/read-content';

export function Communities() {
    const belarus = readContent<CityItem>(`communities/belarus/*`).sort(sortByName);
    const bulgaria = readContent<CityItem>(`communities/bulgaria/*`).sort(sortByName);
    const russia = readContent<CityItem>(`communities/russia/*`).sort(sortByName);
    const ukraine = readContent<CityItem>(`communities/ukraine/*`).sort(sortByName);
    const georgia = readContent<CityItem>(`communities/georgia/*`).sort(sortByName);

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

            {bulgaria.map(city => (
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

            {georgia.map(city => (
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

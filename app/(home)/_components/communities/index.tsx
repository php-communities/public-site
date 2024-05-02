import { Content, readContent } from '~/lib/utils/read-content';
import { CityItem } from '@/(home)/_components/places';
import CommunityCard from '@/(home)/_components/communities/card';

const byAlphabet = (a: Content<CityItem>, b: Content<CityItem>) => {
    if (a.data.name.toLowerCase() < b.data.name.toLowerCase()) {
        return -1;
    }
    if (a.data.name.toLowerCase() > b.data.name.toLowerCase()) {
        return 1;
    }
    return 0;
};

export function Communities() {
    const belarus = readContent<CityItem>(`communities/belarus`).sort(byAlphabet);
    const russia = readContent<CityItem>(`communities/russia`).sort(byAlphabet);
    const ukraine = readContent<CityItem>(`communities/ukraine`).sort(byAlphabet);

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

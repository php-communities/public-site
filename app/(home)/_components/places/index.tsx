import { Content, readContent } from '~/lib/utils/read-content';
import Country from '@/(home)/_components/places/country';

export type CityItem = {
    name: string;
    title: string;
    imgSrc: string;
};

export type CountryProps = {
    name: string;
    cities: Content<CityItem>[];
};

const byAlphabet = (a: Content<CityItem>, b: Content<CityItem>) => {
    if (a.data.name.toLowerCase() < b.data.name.toLowerCase()) {
        return -1;
    }
    if (a.data.name.toLowerCase() > b.data.name.toLowerCase()) {
        return 1;
    }
    return 0;
};

export function Places() {
    const belarus = readContent<CityItem>(`communities/belarus`).sort(byAlphabet);
    const russia = readContent<CityItem>(`communities/russia`).sort(byAlphabet);
    const ukraine = readContent<CityItem>(`communities/ukraine`).sort(byAlphabet);

    return (
        <div className="w-full lg:scroll-mt-[68px]" id="city">
            <div className="container relative top-[-35px] mx-auto space-y-10 bg-white px-8 py-16 md:pl-14 lg:top-[-55px] lg:pl-28">
                <Country name="Беларусь" cities={belarus} />
                <Country name="Россия" cities={russia} />
                <Country name="Украина" cities={ukraine} />
            </div>
        </div>
    );
}

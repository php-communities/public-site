import Country from '@/(home)/_components/places/country';
import { sortByAlphabet } from '~/lib/utils/helpers';
import { Content, readContent } from '~/lib/utils/read-content';

export type CityItem = {
    name: string;
    title: string;
    imgSrc: string;
};

export type CountryProps = {
    name: string;
    cities: Content<CityItem>[];
};

export function Places() {
    const belarus = readContent<CityItem>(`communities/belarus`).sort(sortByAlphabet);
    const russia = readContent<CityItem>(`communities/russia`).sort(sortByAlphabet);
    const ukraine = readContent<CityItem>(`communities/ukraine`).sort(sortByAlphabet);

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

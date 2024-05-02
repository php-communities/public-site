import { Footer } from '@/_components/shared/footer';
import { Header } from '@/_components/shared/header';
import { Channels } from '@/(home)/_components/channels';
import { Communities } from '@/(home)/_components/communities';
import { Events } from '@/(home)/_components/events';
import { Main } from '@/(home)/_components/main';
import { Places } from '@/(home)/_components/places';
import { UsefulLinks } from '@/(home)/_components/useful-links';
import { YourCity } from '@/(home)/_components/your-city';

function HomeComponent() {
    return (
        <>
            <Header />
            <Main />
            <Places />
            <UsefulLinks />
            <Events />
            <Communities />
            <YourCity />
            <Channels />
            <Footer />
        </>
    );
}

export default HomeComponent;

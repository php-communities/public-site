import { Footer } from '@/_components/shared/footer';
import { Header } from '@/_components/shared/header';
import { About } from '@/(home)/_components/about';
import { Channels } from '@/(home)/_components/channels';
import { Cities } from '@/(home)/_components/cities';
import { Communities } from '@/(home)/_components/communities';
import { Events } from '@/(home)/_components/events';
import { Main } from '@/(home)/_components/main';
import { YourCity } from '@/(home)/_components/your-city';

function HomeComponent() {
    return (
        <>
            <Header />
            <Main />
            <Cities />
            <About />
            <Events />
            <Communities />
            <YourCity />
            <Channels />
            <Footer />
        </>
    );
}

export default HomeComponent;

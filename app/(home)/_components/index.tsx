import { Header } from '@/_components/shared/header';
import { About } from '@/(home)/_components/about';
import { Cities } from '@/(home)/_components/cities';
import { Events } from '@/(home)/_components/events';
import { Main } from '@/(home)/_components/main';

function HomeComponent() {
    return (
        <>
            <Header />
            <Main />
            <Cities />
            <About />
            <Events />
        </>
    );
}

export default HomeComponent;

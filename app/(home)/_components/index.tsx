import { Header } from '@/_components/shared/header';
import { Cities } from '@/(home)/_components/cities';
import { Main } from '@/(home)/_components/main';

function HomeComponent() {
    return (
        <>
            <Header />
            <Main />
            <Cities />
        </>
    );
}

export default HomeComponent;

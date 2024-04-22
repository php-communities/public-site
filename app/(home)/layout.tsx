import React, { ReactNode } from 'react';

import { cn } from '~/lib/utils/cn';

function HomeLayout({ children }: { children: ReactNode }) {
    return <div className={cn('flex items-center')}>{children}</div>;
}

export default HomeLayout;

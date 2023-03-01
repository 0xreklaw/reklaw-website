import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';

// If directed to page, then set all reklaw content and push to main path
const ReklawPage = () => {

    const { pathname, push } = useRouter();

    useEffect(() => {
        push("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return null;
}

export default ReklawPage;

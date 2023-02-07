import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

const Breadcrumbs = () => {
    const { pathname } = useRouter();
    const pathSegments = pathname.split('/').filter(Boolean);

    interface BreadcrumbItem {
        path: string;
        displayName: string;
      }
      
      const breadcrumbMap: BreadcrumbItem[] = [
        { path: '/', displayName: 'Home' },
        { path: '/about', displayName: 'О нас' },
        { path: '/contacts', displayName: 'Контакты' },
      ];

      const breadcrumbs = pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const breadcrumbItem = breadcrumbMap.find(item => item.path === path);
        return breadcrumbItem ? breadcrumbItem : { path, displayName: segment };
      });
      
    return (
        <nav>
            <React.Fragment>
                <Link href={`/`}> Главная </Link>
                {pathSegments.length > 0 && <span>&gt;</span>}

            </React.Fragment>
            {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={breadcrumb.path}>
                    <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                        {breadcrumb.displayName}
                    </Link>
                    {index !== pathSegments.length - 1 && <span>&gt;</span>}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumbs;

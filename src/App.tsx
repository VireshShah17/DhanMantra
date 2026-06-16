import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { ROUTES } from '@/constants/routes';

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage })),
);
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
);
const ServicesPage = lazy(() =>
  import('@/pages/ServicesPage').then((m) => ({ default: m.ServicesPage })),
);
const ProductsPage = lazy(() =>
  import('@/pages/ProductsPage').then((m) => ({ default: m.ProductsPage })),
);
// const EducationPage = lazy(() =>
//   import('@/pages/EducationPage').then((m) => ({ default: m.EducationPage })),
// );
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
);

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Loading page">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-primary border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path={ROUTES.HOME}
            element={
              <Suspense fallback={<PageLoader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.ABOUT}
            element={
              <Suspense fallback={<PageLoader />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.SERVICES}
            element={
              <Suspense fallback={<PageLoader />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.PRODUCTS}
            element={
              <Suspense fallback={<PageLoader />}>
                <ProductsPage />
              </Suspense>
            }
          />
          <Route
            // path={ROUTES.EDUCATION}
            element={
              <Suspense fallback={<PageLoader />}>
                {/* <EducationPage /> */}
              </Suspense>
            }
          />
          <Route
            path={ROUTES.CONTACT}
            element={
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

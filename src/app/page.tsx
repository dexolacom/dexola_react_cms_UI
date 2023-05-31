import MainPage from '../../components/MainPage/MainPage';
import RootLayout from './layout';

// export default function Home() {
export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      {children ? children : <MainPage />}
      {/* <MainPage /> */}
    </RootLayout>
  );
}

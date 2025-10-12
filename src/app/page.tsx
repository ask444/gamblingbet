import PageHeader from '@/components/PageHeader';
import PageFooter from './components/PageFooter';
import CreateAccount from './components/CreateAccount';
export default function Page() {
  return (
    <main className="mainContainer">
      <PageHeader />
      <CreateAccount />
      <PageFooter />
    </main>
  );
}
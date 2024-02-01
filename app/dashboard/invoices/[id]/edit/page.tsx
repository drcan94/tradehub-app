import { NextPage } from 'next';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchSellers } from '@/app/lib/data';
import EditInvoiceForm from '@/app/ui/invoices/edit-form';

type EditPageProps = {
  params: {
    id: string;
  };
};

const Page: NextPage<EditPageProps> = async ({ params }) => {
  const id = params.id;
  const [invoice, sellers] = await Promise.all([
    fetchInvoiceById(id),
    fetchSellers(),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditInvoiceForm invoice={invoice} sellers={sellers} />
    </main>
  );
};

export default Page;

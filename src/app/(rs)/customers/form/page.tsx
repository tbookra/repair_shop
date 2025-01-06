import { getCustomer } from "@/lib/queries/getCustomers";
import { BackButton } from "@/components/BackButton";
import CustomerForm from "@/app/(rs)/customers/form/CustomerForm";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2 ">
              Customer Id #{customerId} not found
            </h2>
            <BackButton title="Go Back" />
          </>
        );
      }
      console.log(customer);
      
      // put customer form component
      return <CustomerForm customer={customer} />
    } else {
      // put new customer form component
      return <CustomerForm  />
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
}

import { getCustomer } from "@/lib/queries/getCustomers";
import { getTicket } from "@/lib/queries/getTickets";
import { BackButton } from "@/components/BackButton";
import TicketsForm from "@/app/(rs)/tickets/form/TicketsForm";

export default async function TicketsFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;
    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2 ">
            Ticket ID or Customer ID required to load ticket form
          </h2>
          <BackButton title="Go Back" />
        </>
      );
    }
    // new ticket form
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
      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2 ">
              Customer Id #{customerId} not active
            </h2>
            <BackButton title="Go Back" />
          </>
        );
      }
      console.log(customer);
      // return ticket form
      return <TicketsForm customer={customer}  />
    }
    // edit ticket form
    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));
      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2 ">Ticket Id #{ticketId} not found</h2>
            <BackButton title="Go Back" />
          </>
        );
      }
      const customer = await getCustomer(ticket.customerId)
      // return ticket form
      console.log("ticket: ", ticket);
      console.log("customer: ", customer);
      return <TicketsForm customer={customer} ticket={ticket} />
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
}

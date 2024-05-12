import { CONSTANTS } from "@/app/constants";
import { Contacts, Footer, Header } from "@/widgets";
import { ReactElement } from "react";

export const ContactsPage = (): ReactElement => {
  return (
    <>
      <Header />
      <Contacts contacts={CONSTANTS.contacts} />
      <Footer />
    </>
  );
};

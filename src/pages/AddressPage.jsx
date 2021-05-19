import { css } from "@emotion/css";

import AddressForm from "../components/AddressForm";

const styles = {
  page: css`
    width: 45rem;
    margin-left: 6.25rem;
  `,
};

const AddressPage = () => (
  <div className={styles.page}>
    <h1 className={styles.heading}>Addess Form</h1>
    <AddressForm />
  </div>
);

export default AddressPage;

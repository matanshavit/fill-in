import { useContext } from "react";
import { css } from "@emotion/css";

import AddressContext from "../contexts/AddressContext";
import colors from "../colors";

const styles = {
  form: css`
    font-size: 1.25rem;
  `,
  inputRow: css`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0.625rem;
  `,
  label: css`
    width: 6.25rem;
    text-align: right;
    margin-right: 0.75rem;
  `,
  input: css`
    width: 20rem;
    background-color: ${colors.lightToupe};
    border: none;
    border-radius: 0.25rem;
    padding: 0.375rem 0.5rem;
    font-size: 1.125rem;
  `,
  submit: css`
    background-color: ${colors.blue};
    color: ${colors.lightToupe};
    border: none;
    cursor: pointer;
    margin: 1rem;
    margin-left: 3.5rem;
    padding: 0.375rem 1.625rem;
    border-radius: 0.5rem;

    &:hover {
      background-color: ${colors.lighterBlue};
    }

    &:active {
      background-color: ${colors.darkerBlue};
    }
  `,
};

const AddressForm = () => {
  const { address } = useContext(AddressContext);

  return (
    <form className={styles.form}>
      <div className={styles.inputRow}>
        <span className={styles.label}>Street</span>
        <input
          name="street"
          className={styles.input}
          defaultValue={address.street}
        />
      </div>
      <div className={styles.inputRow}>
        <span className={styles.label}>City</span>
        <input
          name="city"
          className={styles.input}
          defaultValue={address.city}
        />
      </div>
      <div className={styles.inputRow}>
        <span className={styles.label}>State</span>
        <input
          name="state"
          className={styles.input}
          defaultValue={address.state}
        />
      </div>
      <div className={styles.inputRow}>
        <span className={styles.label}>Zip Code</span>
        <input
          name="zipCode"
          className={styles.input}
          defaultValue={address.zipCode}
        />
      </div>
      <div className={styles.submitRow}>
        <input type="submit" value="Submit" className={styles.submit} />
      </div>
    </form>
  );
};

export default AddressForm;

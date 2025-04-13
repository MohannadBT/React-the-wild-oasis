import { useState } from "react";

import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setSsOpenModal] = useState();

  return (
    <div>
      <Button onClick={() => setSsOpenModal(!isOpenModal)}>
        Add new Cabin
      </Button>

      {/* {isOpenModal && <CreateCabinForm />} */}
      {isOpenModal && (
        <Modal onClose={() => setSsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setSsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;

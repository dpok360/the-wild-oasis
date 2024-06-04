import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenMoadl, setIsopenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsopenModal((show) => !show)}>
//         Add new cabin
//       </Button>

//       {isOpenMoadl && (
//         <Modal onClose={() => setIsopenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsopenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;

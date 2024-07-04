import { Modal } from "flowbite-react"
import carModal from "../../assets/images/carModal.png"
interface DeleteModalProps {
  onConfirm: () => void
  onCancel: () => void
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <>
      <Modal show={true} size="sm" position="center" popup={true}>
        <Modal.Body>
          <div className="flex flex-col space-y-5 mt-5 justify-center items-center">
            <img src={carModal} alt="" className="w-[153px] h-[121px]" />
            <div className="text-center">
              <p className="font-bold text-base">Menghapus Data Mobil</p>
              <p className="font-light text-sm">Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
            </div>
            <div className="flex justify-center gap-4">
              <button type="button" onClick={onConfirm} className="items-center justify-center md:w-[144px] md:h-[48px] w-[80px] h-[40px] border bg-[#0D28A6] rounded-sm">
                <p className="text-white font-bold">Ya</p>
              </button>
              <button type="button" onClick={onCancel} className="items-center justify-center md:w-[144px] md:h-[48px] w-[80px] h-[40px] border border-[#0D28A6] rounded-sm">
                <p className="text-[#0D28A6] font-bold">Tidak</p>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DeleteModal

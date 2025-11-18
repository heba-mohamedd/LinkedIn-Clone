import React from "react";
import { Button, Modal } from "antd";
export function ModalComponent({
  modalOpen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
}) {
  // console.log(status);
  return (
    <div>
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            disabled={status.trim().length === 0}
            onClick={sendStatus}
          >
            Post
          </Button>,
        ]}
      >
        <textarea
          placeholder="what do you want to talk about?"
          rows={8}
          onChange={(event) => setStatus(event.target.value)}
          value={status}
          className="w-[100%]  resize-none text-black outline-none bg-white border-none text-xl"
        />
      </Modal>
    </div>
  );
}

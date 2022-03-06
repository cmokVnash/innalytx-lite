import React from "react";
import { Modal } from "antd";

const ProductModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  showModal,
  products,
}) => {
  return (
    <>
      {showModal && (
        <Modal
          title={products[1]}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <img
          style={{
            width: 400,
            margin: '20px',
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 1px 3px",
          }}
            src="https://images.unsplash.com/photo-1561758033-f8ff74d6494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <p>Product Price: {"$ " + products[2]} </p>
          <p>{products[4]}</p>
          <p>{products[3]}</p>
        </Modal>
      )}
    </>
  );
};

export default ProductModal;

import React from 'react'
import { Modal } from 'antd'

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
                            boxShadow: ' rgba(0, 0, 0, 0.35) 0px 1px 3px',
                        }}
                        src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                        alt=""
                    />
                    <p>Product Price: {'$ ' + products[2]} </p>
                    <p>{products[4]}</p>
                    <p>{products[3]}</p>
                </Modal>
            )}
        </>
    )
}

export default ProductModal

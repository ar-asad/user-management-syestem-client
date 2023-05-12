import React from 'react';

const DeleteuserModal = ({ setDeleteUser, handleUserDelete, modalData }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="userDelete-modal" className="modal-toggle" />
            <div className="modal my-auto">
                <div className="modal-box text-center">
                    <p className="py-4">Do you really delete this User <strong>{modalData.name}?</strong></p>
                    <div className=" text-center">
                        <label onClick={() => handleUserDelete(modalData)} htmlFor="userDelete-modal" className="btn btn-success btn-sm">delete</label>
                        <button onClick={() => setDeleteUser(null)} className='btn btn-outline btn-sm ms-4'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteuserModal;
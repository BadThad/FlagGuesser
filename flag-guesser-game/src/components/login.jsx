import { useState } from "react"
function login(){
    return(
        <>
        <div className="logincontainer">
            <button type="button" className="btn-P" data-bs-toggle="modal" data-bs-target="exModal">
                login
            </button>
            <div className="modal fade" id="exModal" tabindex="-1" aria-labelledby="exModalLable" aria-hiddel="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <div className="modal-body">

                        </div>
                        <div className="modal-footer">
                            <button type="button"  className="btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
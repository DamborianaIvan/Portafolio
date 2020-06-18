import React from 'react';




const Project = (props) =>(
            <div className="col-lg-3 col-md-4 mb-4" >
                <div className="card h-100">
                    <img className="card-img-top" src="http://placehold.it/700x400" alt=""></img>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a>Nombre proyecto</a> 
                        </h4>
                        <p className="card-text">Descripcion proyecto</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                    <button  onClick="" type="button" class="btn btn-add text-center"> Ver </button>                   
                </div>
            </div>
        )
    
export default Project;
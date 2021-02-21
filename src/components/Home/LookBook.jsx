import './LookBook.scss';

const LookBook = () => {
    return(
        <div className="mb-5 container lookbook">
            <div className="row mb-5">
                <h2 className="col-12 text-center"><span>Lookbook</span></h2>
            </div>
            <div className="row">
                <div className="card-columns">
                    <div className="card">
                        <img className="card-img-top" src="/images/LV2A0327.jpg" alt="Lookbook 1" />
                    </div>
                    <div className="card crop">
                        <img className="card-img-top" src="/images/LV2A0631.jpg" alt="Lookbook 2" />
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="/images/LV2A0788.jpg" alt="Lookbook 3" />
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="/images/LV2A0907.jpg" alt="Lookbook 4" />
                    </div>
                    <div className="card crop">
                        <img className="card-img-top" src="/images/LV2A1043.jpg" alt="Lookbook 5" />
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="/images/LV2A1233.jpg" alt="Lookbook 6" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LookBook;

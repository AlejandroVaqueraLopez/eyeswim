import Tag from "../components/Tag";

const DetailsSection = ({data}) => {
    const { id, name, premiered, ended, summary, language, genres, rating, image, url } = data;
    return (
        <div className="card max-card my-5 p-5 br bs" >
            <div className="row d-flex justify-content-sm-center justify-content-md-start justify-content-start ">

                <div className="col-12 col-sm-8 col-md-4 col-lg-3 col-xl-3 col-xxl-3 p-0">
                    <img src={image} className="card-img-top br" alt="" />
                </div>

                <div className="col-12 py-4 px-0  py-md-0 col-sm-12 col-md-8 col-lg-8 col-xl-7 col-xxl-7 ">
                    <div className="card-body text-white border border-white py-0 px-0 px-md-4">
                        <h5 className="card-title line-clamp">{name} ({premiered} - {ended})</h5>
                        <p className="card-text summary-paragraph">{summary}</p>

                        <div className="row">
                            <div className="col-12 d-flex">
                            <Tag data={language} background="#816797" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 d-flex flex-wrap">
                            {
                                genres.map(genre => (
                                <Tag key={genre} data={genre} background="#51557E" />
                                ))
                            }
                            </div>
                        </div>

                        <p className="card-text">{}</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default DetailsSection;
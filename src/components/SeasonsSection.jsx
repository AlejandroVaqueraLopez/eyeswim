import Tag from "../components/Tag";

const SeasonsSection = ({data}) => {
    const { id, name, premiered, ended, summary, language, genres, rating, image, url } = data;
    return (
        <div className="card max-card my-5 p-5 br bs" >
            <div className="row d-flex justify-content-start">

                <div className="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <img src={image} className="card-img-top br" alt="" />
                </div>

                <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-7 col-xxl-7 border border-white">
                    <div className="card-body text-white">
                    <h5 className="card-title line-clamp">{name} ({premiered} - {ended})</h5>
                    <p className="card-text">{summary}</p>

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

export default SeasonsSection;
//components
import Tag from "../Tag";

const AccordionItem = ({data}) => {
    console.log(data)
    const {id, name, number, summary, image, rating, runtime, airdate} = data;
    console.log(name)
    return(
        <div className="accordion-item">

            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#element${id}`}>
                    {name} 
                </button>
            </h2>

            <div id={`element${id}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <img className="br" src={image.original} style={{width:"100%", minHeight: "230px", objectFit: "cover"}}  alt="" />
                        </div>
                        <div className="col-12 col-md-7 py-0 d-flex flex-column align-items-start">
                            <p>{summary}</p>
                            <div className="d-flex">
                                <Tag data={airdate} background="#51557E"/>
                                <Tag data={runtime} background="#816797"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default AccordionItem;
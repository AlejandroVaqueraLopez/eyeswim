//hooks
import { useEffect, useState, useRef } from "react";
import useFetcher from "./useFetcher";

//components
import Tag from "../components/Tag";
import Option from "./elements/Option";
import AccordionItem from "./elements/AccordionItem";

//native utils
import { getEpisodes } from "../utils/getSeries";

const SeasonsSection = ({data}) => {

    const select = useRef(null);
    const [seasonNumber, setSeasonNumber] = useState(data[0].id);
    const [seasonId, setSeasonId] = useState(data[0].id);
    const [episodes, setEpisodes] = useState([]);

    const { response, loading } = useFetcher("https://api.tvmaze.com/seasons", seasonId, getEpisodes);

    const handleSelect = (e) => {
        e.preventDefault();
        const selected = select.current.value;
        setSeasonNumber(selected);//useState change here, so re-render every time
        setSeasonId(selected);//useState change here, so re-render every time
    }

    useEffect(() => {
        setEpisodes(response);
    }, [seasonNumber]);

    return (
        <div className="card max-card my-5 p-5 br bs" >
            <div className="row d-flex justify-content-start">

                <div className="col-12 col-md-3 p-0">
                    <select ref={select} className="form-select br" aria-label="Default select example" onChange={handleSelect}>
                        {
                            data.map(season => (
                                <Option key={season.id} text={`Season ${season.number}`} seasonId={season.id} />
                            ))
                        }
                    </select>
                </div>

            </div>

            <div className="row my-4">
                <div className="col-12 p-0">
                    <div className="accordion" id="accordionExample">
                        <AccordionItem data={episodes} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SeasonsSection;
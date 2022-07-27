const styles = {
    height:"130px",
    width: "140px"
}
const NoResults = () => {
    return (
        <div className="row ">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                <h3>No results found</h3>
                <img style={styles} src="./src/assets/no-results.gif" alt="no results" />
            </div>
        </div>
    );
}

export default NoResults;
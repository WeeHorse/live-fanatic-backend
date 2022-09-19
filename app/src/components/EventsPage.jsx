import useFetch from "../hooks/useFetch";
import Card from "./Card";

function EventsPage() {
    const {
        error,
        isPending,
        data: concerts,
    } = useFetch("/data/concert_details");

    console.log(concerts);

    return (
        <>
            <div className="container">
                <div className="card-container">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading...</div>}
                    {concerts &&
                        concerts.map((concert) => <Card key={concert} props={concert}/>)}
                </div>
            </div>
        </>
    );
}

export default EventsPage;

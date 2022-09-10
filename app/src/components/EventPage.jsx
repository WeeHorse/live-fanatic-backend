import Card from "./Card";

function EventPage() {
  const data = {
    title: "Baby",
    venue: "Plan B",
    date: "2022-10-09",
    artist: "Justin Bieber",
    image:
      "https://th.bing.com/th/id/OIP.wfg6sIM0YAd9wYn9Vj8QtwHaJf?pid=ImgDet&rs=1",
  };
  return (
    <>
      <div className="container d-lg-flex">
        <Card data={data} />
      </div>
    </>
  );
}
export default EventPage;

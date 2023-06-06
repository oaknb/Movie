import CardContainer from "../components/CardContainer";
import Header from "../components/Header";

function Upcoming() {
  return (
    <>
      <Header />
      <CardContainer
        title={"Upcoming Movie"}
        url={
          "https://api.themoviedb.org/3/movie/upcoming?api_key=4286748ee9e08d68fe665317987ff74c&language=en-US"
        }
      />
    </>
  );
}

export default Upcoming;

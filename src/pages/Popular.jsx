import Header from "../components/Header";
import CardContainer from "../components/CardContainer";

function Popular() {
  return (
    <>
      <Header />
      <CardContainer
        title={"Popular Now"}
        url={
          "https://api.themoviedb.org/3/movie/popular?api_key=4286748ee9e08d68fe665317987ff74c&language=en-US"
        }
      />
    </>
  );
}

export default Popular;

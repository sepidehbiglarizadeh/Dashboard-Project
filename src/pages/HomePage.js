import Categories from "../components/Categories/Categories";
import Information from "../components/Information/Information";

const HomePage = () => {
  return (
    <section className="px-2 py-4 md:p-6 w-full md:flex gap-x-6">
      <Information/>
      <Categories/>
    </section>
  );
};

export default HomePage;

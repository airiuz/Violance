import CardStats from "./cardStats";
import Header from "./header";

function Layout({ children }) {
  return (
    <>
      <div>
        <Header />
        <div className="max-w-6xl mx-auto my-10">
          <p className="text-2xl uppercase">Qoida Buzarlik turlari</p>
          <CardStats />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;

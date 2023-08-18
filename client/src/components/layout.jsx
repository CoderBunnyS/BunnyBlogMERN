/* eslint-disable react/prop-types */

function Layout(props) {
  return (
    <div>
      <div className="bg-gray-800 text-white p-5">
        <h1 className="text-4xl font-bold cursor-pointer">Bunny Blog MERN</h1>
      </div>
      <div className="p-5">{props.children}</div>
    </div>
  );
}

export default Layout;

import React from "react";

const TableProduct = () => {
  return (
    <section className="container-fluid px-2">
      <div className="table-responsive mb-2 pb-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product name</th>
              <th scope="col">Product category</th>
              <th scope="col">Product image</th>
              <th scope="col">Product freshness</th>
              <th scope="col">Product description</th>
              <th scope="col">Product price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="items"></tbody>
        </table>
      </div>
    </section>
  );
};

export default TableProduct;

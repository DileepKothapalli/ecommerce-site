import React from 'react';

const ProductCreate = () => {

  const cards = useMemo(
    () => [
    { name: "Create", icon: "", route: "/admin/products/create" },
    { name: "Bulk", icon: "", route: "/admin/products/bulkCreate" }
  ]);
  return (
    <Grid container spacing={2} padding={2}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <ApplicationCard data={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCreate;

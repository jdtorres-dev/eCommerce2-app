import React from 'react'
import ProductForm from '../components/ProductForm';
import { useParams } from 'react-router-dom';

const EditProduct = ({products, onEdit}) => {
    const params = useParams();
    const { id, ...product } = products.find(
      (product) => product.id === +params.id
    );
    console.log("product", product)
  return (
    <ProductForm initialValue={product} onSubmit={(form) => onEdit(id, form)}/>
  )
}

export default EditProduct
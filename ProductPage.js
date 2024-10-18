import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams(); 
  return (
    <div>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductPage;

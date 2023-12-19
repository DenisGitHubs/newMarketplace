import { useGetAllAdsQuery } from '../../Store/RTKQuery/getAds';
import { useState, useEffect } from 'react';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { Search } from '../../Components/Search/Search';
import * as S from './main.styled';
import { useDispatch } from 'react-redux';
import { saveProducts } from '../../Store/Slices/dataProductsSlice';
import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { NewProduct } from '../../Components/NewProductAdd/newProduct';

export const Main = ({ products }) => {
  // заглушка на залогиненного юзера
  const userLoggedIn = true;

  const dispatch = useDispatch();
  const { data = [], isSuccess } = useGetAllAdsQuery();
  if (isSuccess) {
    dispatch(saveProducts({ data }));
    console.log(data);
  }

  const [searchAdv, setSearchAdv] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(searchAdv.toLowerCase()),
    );
    setFilteredData(filtered);

    if (filtered.length === 0) {
      setError('Объявление с указанным заголовком не найдено');
    } else {
      setError(null);
    }
  }, [data, searchAdv]);

  return (
    <S.Wrapper>
      <S.Container>
        {userLoggedIn ? <HeaderSecond /> : <Header />}
        <S.Main>
          <Search setSearchAdv={setSearchAdv} />
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            {error ? (
              <S.Error>{error}</S.Error>
            ) : (
              <S.MainContent>
                {filteredData.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </S.MainContent>
            )}
          </S.MainContainer>
        </S.Main>
        {/* {newProductModal ? 
             <NewProduct setNewProductModal={setNewProductModal} /> : null} */}
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};

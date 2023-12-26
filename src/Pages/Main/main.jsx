
import { useState, useEffect } from 'react';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { Search } from '../../Components/Search/Search';
import * as S from './main.styled';
import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { getAccessTokenLocal } from '../../helpers/token';
import { useGetAllAdsQuery } from '../../Store/RTKQuery/getMyAds';
import { Loader } from '../../Components/Loader/Loader';
import { CardLoader } from '../../Components/Loader/CardLoader';

export const Main = () => {
  const userLoggedIn = getAccessTokenLocal();
  const { data = [], isSuccess, isLoading } = useGetAllAdsQuery();
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
  }, [isSuccess, searchAdv]);
  
  return (
    <S.Wrapper>
      <S.Container>
        {(userLoggedIn && (userLoggedIn !== 'undefined')) ? <HeaderSecond /> : <Header />}
        <S.Main>
          <Search setSearchAdv={setSearchAdv} />
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            {isLoading ? <CardLoader /> : error ? <S.Error>{error}</S.Error> : <S.MainContent>
            {filteredData.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </S.MainContent>}
             
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
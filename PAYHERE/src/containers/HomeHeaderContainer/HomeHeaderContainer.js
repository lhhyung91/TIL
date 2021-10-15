import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getapidata } from '../../api/getapidata';
import { search } from '../../modules/data';
import { Link } from 'react-router-dom';

const StyledHeaderContainer = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  position: relative;
  border-bottom: 2px solid black;
`;

const StyledHeaderButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-size: 1rem;
  background-color: #c0c0c0;
  :hover {
    background-color: #d0d0d0;
  }
  :active {
    background-color: #a6a6a6;
  }
`;

const StyledHeaderButtonGroup = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 3%;
  flex-wrap: nowrap;
`;
export default function HomeHeaderContainer() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const searchrepos = async searchValue => {
    dispatch(search(await getapidata(searchValue)));
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  const onSearchInputValue = () => {
    searchrepos(searchValue);
    setSearchValue('');
  };

  const onSearchInputChange = e => {
    setSearchValue(e.target.value);
    if ((e.target.value = '')) return;
  };

  return (
    <StyledHeaderContainer>
      <SearchForm
        onSubmit={onSubmit}
        onSearchInputChange={onSearchInputChange}
        onSearchInputValue={onSearchInputValue}
        value={searchValue}
        searchValue={searchValue}
        label='text'
        id='text'
        name='Github ID'
        type='text'
        placeholder='Repo명을 입력해주세요. '
      ></SearchForm>
      <StyledHeaderButtonGroup>
        <StyledHeaderButton>
          <Link to='/'>HOME</Link>
        </StyledHeaderButton>
        <StyledHeaderButton>
          <Link to='/bookmark'>BOOKMARKS</Link>
        </StyledHeaderButton>
      </StyledHeaderButtonGroup>
    </StyledHeaderContainer>
  );
}

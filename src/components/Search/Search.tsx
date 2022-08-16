import React, { ChangeEvent, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import Icon from '../Icon/icon';
import styles from './Search.module.scss';
import { setSearchValue } from '../../store/filter/slice';

function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    [],
  );

  function handleChangeSearchValue(evt: ChangeEvent<HTMLInputElement>) {
    setValue(evt.target.value);
    updateSearchValue(evt.target.value);
  }

  function onClickClear() {
    dispatch(setSearchValue(''));
    setValue('');
  }

  return (
    <label className={styles.search} htmlFor="searchPizza">
      <Icon type="searchIcon" className={styles.search__icon} />
      <input
        className={styles.search__input}
        type="text"
        id="searchPizza"
        placeholder="Поиск..."
        value={value}
        onChange={handleChangeSearchValue}
      />
      {
        value && (
          <Icon type="clearIcon" className={styles.search__clear} onClick={() => onClickClear()} />
        )
      }
    </label>
  );
}

export default Search;

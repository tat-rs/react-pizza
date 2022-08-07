import React, { ChangeEvent, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
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
      <svg
        className={styles.search__icon}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z" />
      </svg>
      <input
        className={styles.search__input}
        id="searchPizza"
        placeholder="Поиск..."
        value={value}
        onChange={handleChangeSearchValue}
      />
      {
        value && (
          <svg
            className={styles.search__clear}
            onClick={onClickClear}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        )
      }
    </label>
  );
}

export default Search;

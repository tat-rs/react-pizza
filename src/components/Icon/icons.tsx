import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';
import { ReactComponent as ArrowBackIcon } from '../../assets/arrow-back-icon.svg';
import { ReactComponent as MinusIcon } from '../../assets/minus-icon.svg';
import { ReactComponent as PlusInCircleIcon } from '../../assets/plus-in-circle-icon.svg';
import { ReactComponent as ClearInCircleIcon } from '../../assets/clear-in-circle-icon.svg';
import { ReactComponent as PlusIcon } from '../../assets/plus-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as ClearIcon } from '../../assets/clear-icon.svg';
import { ReactComponent as SortIcon } from '../../assets/sort-icon.svg';

const defaultAttributes = {
  width: '100%',
  preserveAspectRatio: 'xMidYMid meet',
  style: {
    maxWidth: 'inherit', maxHeight: 'inherit', height: 'inherit', strokeWidth: '2px',
  },
  fill: 'none',
};

const icons = {
  cartIcon: <CartIcon {...defaultAttributes} />,
  deleteIcon: <DeleteIcon {...defaultAttributes} />,
  arrowBackIcon: <ArrowBackIcon {...defaultAttributes} />,
  minusIcon: <MinusIcon {...defaultAttributes} />,
  plusInCircleIcon: <PlusInCircleIcon {...defaultAttributes} />,
  clearInCircleIcon: <ClearInCircleIcon {...defaultAttributes} />,
  plusIcon: <PlusIcon {...defaultAttributes} />,
  searchIcon: <SearchIcon {...defaultAttributes} />,
  clearIcon: <ClearIcon {...defaultAttributes} />,
  sortIcon: <SortIcon {...defaultAttributes} />,
};

export default icons;

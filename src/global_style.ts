import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,body{
  background: #5b056e;
}
input[type=number]::-webkit-inner-spin-button {
  opacity: 0;
}
input[type=number]:hover::-webkit-inner-spin-button,
input[type=number]:focus::-webkit-inner-spin-button {
  opacity: 0.25;
}
/* width */
::-webkit-scrollbar {
  width: 15px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #7c1794;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #e18af4;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e18af4;
}
.ant-slider-track, .ant-slider:hover .ant-slider-track {
  background-color: #D102FF;
  opacity: 0.75;
}
.ant-slider-track,
.ant-slider ant-slider-track:hover {
  background-color: #D102FF;
  opacity: 0.75;
}
.ant-slider-dot-active,
.ant-slider-handle,
.ant-slider-handle-click-focused,
.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)  {
  border: 2px solid #D102FF; 
}
.ant-table-tbody > tr.ant-table-row:hover > td {
  background: #bf41db !important;
}
.ant-table-tbody > tr > td {
  border-bottom: 8px solid #41034E;
}
.ant-table-container table > thead > tr:first-child th {
  border-bottom: none;
}
.ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {
  border-top: 1px solid #ff8e44 !important;
}
.ant-layout {
    background: #5b056e
  }
  .ant-table {
    background: #8a1ca3;
  }
  .ant-table-thead > tr > th {
    background: #41034E;
  }
.ant-select-item-option-content {
  img {
    margin-right: 4px;
  }
}
.ant-modal-content {
  background-color: #8a1ca3;
}

@-webkit-keyframes highlight {
  from { background-color: #D102FF;}
  to {background-color: #41034E;}
}
@-moz-keyframes highlight {
  from { background-color: #D102FF;}
  to {background-color: #41034E;}
}
@-keyframes highlight {
  from { background-color: #D102FF;}
  to {background-color: #41034E;}
}
.flash {
  -moz-animation: highlight 0.5s ease 0s 1 alternate ;
  -webkit-animation: highlight 0.5s ease 0s 1 alternate;
  animation: highlight 0.5s ease 0s 1 alternate;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled),th.ant-table-column-sort{
	background-color:#30043A !important;
}
.ant-table-tbody>tr.ant-table-placeholder:hover>td,.ant-table-thead th.ant-table-column-has-sorters:hover{
	background-color:#bf41db !important;
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled){
	background-color:#bf41db !important;
}`;

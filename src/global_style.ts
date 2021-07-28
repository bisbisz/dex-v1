import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,body{
  background: #D55FEF;
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
  background: #D102FF;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #D55FEF;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #D55FEF;
}
.ant-slider-track, .ant-slider:hover .ant-slider-track {
  background-color: #860EA1;
  opacity: 0.75;
}
.ant-slider-track,
.ant-slider ant-slider-track:hover {
  background-color: #860EA1;
  opacity: 0.75;
}
.ant-slider-dot-active,
.ant-slider-handle,
.ant-slider-handle-click-focused,
.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)  {
  border: 2px solid #860EA1; 
}
.ant-table-tbody > tr.ant-table-row:hover > td {
  background: #D55FEF !important;
}
.ant-table-tbody > tr > td {
  border-bottom: 8px solid #41034E;
}
.ant-table-container table > thead > tr:first-child th {
  border-bottom: none;
}
.ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {
  border-top: 1px solid #E495F5 !important;
}
.ant-layout {
    background: #41034E
  }
  .ant-table {
    background: #D102FF;
  }
  .ant-table-thead > tr > th {
    background: #860EA1;
  }
.ant-select-item-option-content {
  img {
    margin-right: 4px;
  }
}
.ant-modal-content {
  background-color: #D102FF;
}

@-webkit-keyframes highlight {
  from { background-color: #D55FEF;}
  to {background-color: #41034E;}
}
@-moz-keyframes highlight {
  from { background-color: #D55FEF;}
  to {background-color: #41034E;}
}
@-keyframes highlight {
  from { background-color: #D55FEF;}
  to {background-color: #41034E;}
}
.flash {
  -moz-animation: highlight 0.5s ease 0s 1 alternate ;
  -webkit-animation: highlight 0.5s ease 0s 1 alternate;
  animation: highlight 0.5s ease 0s 1 alternate;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled),th.ant-table-column-sort{
	background-color:#401681 !important;
}
.ant-table-tbody>tr.ant-table-placeholder:hover>td,.ant-table-thead th.ant-table-column-has-sorters:hover{
	background-color:#3b1477 !important;
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled){
	background-color:#3b1477 !important;
}`;
